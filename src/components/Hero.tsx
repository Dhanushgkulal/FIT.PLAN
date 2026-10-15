/**
 * Hero Section Component
 * 
 * Landing page hero with CTA button
 * Requirements: 2.1-2.4
 */

export function Hero() {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator');
    calculator?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
          Fit<span className="text-cyan-400">Plan</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Get personalized diet targets and workout plans tailored to your goals
        </p>
        <button
          onClick={scrollToCalculator}
          className="px-10 py-4 bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-bold rounded-lg transition-colors shadow-lg hover:shadow-cyan-500/50"
        >
          Get My Plan
        </button>
      </div>
    </section>
  );
}
