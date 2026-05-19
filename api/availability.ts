import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const WEEKDAY_SLOTS = ['4:00 PM', '6:00 PM'];
const WEEKEND_SLOTS = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { date } = req.query;
  if (!date || typeof date !== 'string') {
    return res.status(400).json({ error: 'date query param required (YYYY-MM-DD)' });
  }

  let bookedSlots = new Set<string>();

  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY) {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );
    const { data, error } = await supabase
      .from('bookings')
      .select('time_slot')
      .eq('date', date);
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Database error' });
    }
    bookedSlots = new Set((data ?? []).map((b: { time_slot: string }) => b.time_slot));
  }

  // Parse at noon to avoid UTC/local timezone edge cases
  const d = new Date(`${date}T12:00:00`);
  const day = d.getDay(); // 0 = Sunday, 6 = Saturday
  const isWeekend = day === 0 || day === 6;
  const allSlots = isWeekend ? WEEKEND_SLOTS : WEEKDAY_SLOTS;

  const slots = allSlots.map(time => ({
    time,
    available: !bookedSlots.has(time),
  }));

  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({ slots });
}
