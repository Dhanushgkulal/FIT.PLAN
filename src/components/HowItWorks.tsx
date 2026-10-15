/**
 * How It Works Section Component
 * 
 * Explains the three-step process
 * Requirements: 4.1-4.4
 */

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Enter Your Details',
      description: 'Provide your age, weight, height, activity level, fitness goals, and training preferences',
    },
    {
      number: '2',
      title: 'Get Diet Targets',
      description: 'Receive your personalized daily calorie and macronutrient targets calculated using scientific formulas',
    },
    {
      number: '3',
      title: 'Follow Your Workout Plan',
      description: 'Get a complete weekly workout schedule with exercises tailored to your experience and location',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-cyan-500 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
