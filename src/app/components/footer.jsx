export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Logo / Name */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold">© {new Date().getFullYear()} Saanvika Properties</h4>
          <p className="text-white/80 text-sm">All rights reserved.</p>
        </div>

        {/* Right: Links */}
        <div className="flex gap-6">
          <a
            href="#"
            className="text-white/80 hover:text-white text-sm transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white text-sm transition"
          >
            Terms of Service
          </a>
          <a
            href="#contact"
            className="text-white/80 hover:text-white text-sm transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
