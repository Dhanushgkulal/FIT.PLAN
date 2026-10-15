/**
 * Pricing Section Component
 * 
 * Displays pricing tiers
 * Requirements: 21.1-21.4
 */

export function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Personalized diet calculator',
        'Weekly workout plans',
        'Basic exercise library',
        'Results saved locally',
      ],
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: 'per month',
      features: [
        'Everything in Free',
        'Advanced exercise variations',
        'Progress tracking charts',
        'Meal planning suggestions',
        'Priority support',
      ],
      highlighted: true,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Pricing</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                plan.highlighted
                  ? 'bg-cyan-500/10 border-2 border-cyan-500'
                  : 'bg-gray-800 border-2 border-gray-700'
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  plan.highlighted
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
              >
                {plan.highlighted ? 'Get Started' : 'Current Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
