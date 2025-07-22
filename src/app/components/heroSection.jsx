export default function HeroSection() {
  return (
    <section
      className="w-full bg-cover bg-center relative flex items-center justify-center px-4 text-white mt-[10vh] h-[90vh]"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="z-10 text-center max-w-2xl sm:max-w-4xl px-2">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-snug sm:leading-tight">
          Future City Mango Garden
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl text-green-300 font-semibold mb-4 sm:mb-6">
          Premium Farmlands – Where Nature Meets Opportunity
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6  leading-relaxed">
          Invest in land that brings peace today and profit tomorrow.<br className="hidden sm:block" /> Perfect for peaceful weekend getaways and a smart long-term investment.
          
          
        </p>

        {/* Location & Pricing */}
        <div className="text-gray-300 text-xs sm:text-sm md:text-base mb-6 flex flex-wrap justify-center items-center gap-2">
          <span>📍 Yacharam, Sagar Highway</span>
          <span>|</span>
          <span>₹7,499/- Per Sq.Yard (Fixed Price)</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex  sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <a
            href="https://wa.me/919966669863"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg transition text-sm sm:text-base"
          >
            Book Site Visit
          </a>
          <a
            href="/bg1.jpg"
            className="bg-white/10 hover:bg-white/20 text-white border border-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg transition text-sm sm:text-base"
          >
            View Plot Layout
          </a>
        </div>

        {/* Info Boxes */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            { title: "35", subtitle: "Plots Available" },
            { title: "HMDA", subtitle: "Limits" },
            { title: "500Meter", subtitle: "Sagar Highway" },
          ].map((info, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md px-2 py-4 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl sm:text-2xl font-bold">{info.title}</h3>
              <p className="text-xs sm:text-sm text-gray-200 mt-1">{info.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
