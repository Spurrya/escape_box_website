import testimonials from '../../public/testimonials.json'; // Adjust the path as necessary

import React from 'react';


const StarRating = ({ rating }) => (
  <div className="flex gap-0.5 text-xs text-yellow-400">
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'opacity-100' : 'opacity-30'}>
        ★
      </span>
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-12">
          What People Are Saying
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="break-inside-avoid rounded-xl border border-white/10 bg-white/5 shadow-md backdrop-blur-sm overflow-hidden flex flex-col"
            >
              {/* Top Image */}
              {/*testimonial.images?.[0] && (
                <img
                  src={testimonial.images[0]}
                  alt="Review visual"
                  className="object-cover w-full h-48 sm:h-40 lg:h-36"
                />
              )*/}

              <div className="p-4 flex flex-col gap-3">
                {/* Reviewer Header */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.user.thumbnail}
                    alt={testimonial.user.name}
                    className="w-10 h-10 rounded-full border border-primary/30"
                  />
                  <div className="text-sm">
                    <div className="font-semibold text-foreground leading-tight">
                      {testimonial.user.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.date}
                      {testimonial.user.local_guide && (
                        <span className="ml-1 text-green-500">· Local Guide</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Star Rating */}
                <StarRating rating={testimonial.rating} />

                {/* Snippet */}
                <p className="text-sm text-foreground/90 leading-snug">
                  “{testimonial.extracted_snippet?.original?.slice(0, 250)}…”
                </p>

                {/* Google link */}
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  Read full review →
                </a>

                {/* Response */}
                {testimonial.response?.snippet && (
                  <div className="mt-2 px-3 py-2 bg-white/10 rounded-md border border-white/10">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Team Response:</p>
                    <p className="text-xs italic text-white/90">
                      “{testimonial.response.snippet}”
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

