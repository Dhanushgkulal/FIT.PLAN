/**
 * Features Section Component
 * 
 * Displays key features of the application
 * Requirements: 3.1-3.3
 */

export function Features() {
  const features = [
    {
      icon: '💪',
      title: 'Workout Plans',
      description: 'Customized weekly workout routines based on your goals, experience, and available equipment',
    },
    {
      icon: '🥗',
      title: 'Diet Targets',
      description: 'Scientifically calculated daily calorie and macronutrient targets using proven formulas',
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Your results are saved automatically so you can track your fitness journey over time',
    },
    {
      icon: '🔔',
      title: 'Reminders',
      description: 'Stay consistent with your fitness goals through regular check-ins and plan updates',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Features</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
