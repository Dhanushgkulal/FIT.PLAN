/**
 * Reviews Section Component
 * 
 * Displays user testimonials
 * Requirements: 22.1-22.3
 */

export function Reviews() {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Lost 15 lbs in 3 months',
      text: 'FitPlan made it so easy to understand my nutrition needs. The workout plans fit perfectly with my home setup.',
      rating: 5,
    },
    {
      name: 'Mike T.',
      role: 'Gained 10 lbs of muscle',
      text: 'The calculated macros were spot on for my bulking phase. Best free fitness tool I have used!',
      rating: 5,
    },
    {
      name: 'Jessica L.',
      role: 'Improved overall fitness',
      text: 'I love how the app adjusts everything based on my goals. The workout splits are exactly what I needed.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">What Our Users Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-cyan-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
