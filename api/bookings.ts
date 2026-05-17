import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { experienceId, experienceTitle, date, timeSlot, participants, name, email, phone } =
    req.body ?? {};

  if (!experienceId || !date || !timeSlot || !participants || !name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  );

  // Check the slot is still open (race condition guard)
  const { data: existing } = await supabase
    .from('bookings')
    .select('id')
    .eq('date', date)
    .eq('time_slot', timeSlot)
    .maybeSingle();

  if (existing) {
    return res
      .status(409)
      .json({ error: 'This time slot was just booked. Please choose another.' });
  }

  const { data: booking, error } = await supabase
    .from('bookings')
    .insert({
      experience_id: Number(experienceId),
      experience_title: String(experienceTitle),
      date: String(date),
      time_slot: String(timeSlot),
      participants: Number(participants),
      name: String(name),
      email: String(email),
      phone: phone ? String(phone) : null,
    })
    .select()
    .single();

  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to save booking' });
  }

  const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString('en-CA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const resend = new Resend(process.env.RESEND_API_KEY!);
  const from = process.env.RESEND_FROM_EMAIL!;

  await Promise.allSettled([
    // Confirmation to customer
    resend.emails.send({
      from,
      to: String(email),
      subject: `Booking Confirmed – ${experienceTitle}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
          <h2>Your Escape Box Booking is Confirmed!</h2>
          <p>Hi ${name},</p>
          <p>We're excited to have you join us for <strong>${experienceTitle}</strong>.</p>
          <table style="width:100%;border-collapse:collapse;margin:20px 0;font-size:15px;">
            <tr><td style="padding:10px 8px;color:#666;width:140px;">Experience</td><td style="padding:10px 8px;font-weight:600;">${experienceTitle}</td></tr>
            <tr style="background:#f5f5f5;"><td style="padding:10px 8px;color:#666;">Date</td><td style="padding:10px 8px;font-weight:600;">${formattedDate}</td></tr>
            <tr><td style="padding:10px 8px;color:#666;">Time</td><td style="padding:10px 8px;font-weight:600;">${timeSlot}</td></tr>
            <tr style="background:#f5f5f5;"><td style="padding:10px 8px;color:#666;">Participants</td><td style="padding:10px 8px;font-weight:600;">${participants}</td></tr>
            <tr><td style="padding:10px 8px;color:#666;">Booking ID</td><td style="padding:10px 8px;font-family:monospace;font-size:13px;">${booking.id}</td></tr>
          </table>
          <p>Have questions? Reply to this email or reach us at <a href="mailto:escapebox.ca@gmail.com">escapebox.ca@gmail.com</a>.</p>
          <p style="margin-top:32px;">See you soon!<br/><strong>The Escape Box Team</strong></p>
        </div>
      `,
    }),
    // Notification to owner
    resend.emails.send({
      from,
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `New Booking: ${experienceTitle} – ${formattedDate} at ${timeSlot}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
          <h2>New Booking Received</h2>
          <table style="width:100%;border-collapse:collapse;font-size:15px;">
            <tr><td style="padding:10px 8px;color:#666;width:140px;">Experience</td><td style="padding:10px 8px;">${experienceTitle}</td></tr>
            <tr style="background:#f5f5f5;"><td style="padding:10px 8px;color:#666;">Date</td><td style="padding:10px 8px;">${formattedDate}</td></tr>
            <tr><td style="padding:10px 8px;color:#666;">Time</td><td style="padding:10px 8px;">${timeSlot}</td></tr>
            <tr style="background:#f5f5f5;"><td style="padding:10px 8px;color:#666;">Participants</td><td style="padding:10px 8px;">${participants}</td></tr>
            <tr><td style="padding:10px 8px;color:#666;">Name</td><td style="padding:10px 8px;">${name}</td></tr>
            <tr style="background:#f5f5f5;"><td style="padding:10px 8px;color:#666;">Email</td><td style="padding:10px 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:10px 8px;color:#666;">Phone</td><td style="padding:10px 8px;">${phone || 'Not provided'}</td></tr>
            <tr style="background:#f5f5f5;"><td style="padding:10px 8px;color:#666;">Booking ID</td><td style="padding:10px 8px;font-family:monospace;font-size:13px;">${booking.id}</td></tr>
          </table>
        </div>
      `,
    }),
  ]);

  return res.status(200).json({ success: true, bookingId: booking.id });
}
