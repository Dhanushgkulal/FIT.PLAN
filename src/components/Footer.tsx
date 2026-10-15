/**
 * Footer Section Component
 * 
 * Displays contact info, social links, and policies
 * Requirements: 24.1-24.4
 */

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Fit<span className="text-cyan-400">Plan</span>
            </h3>
            <p className="text-gray-400">
              Personalized fitness made simple
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@fitplan.app</li>
              <li>Twitter: @fitplanapp</li>
              <li>Instagram: @fitplanapp</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl">
            𝕏
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl">
            📘
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl">
            📷
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl">
            🎵
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} FitPlan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
