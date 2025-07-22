export default function PlotDetails() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800"> Project Layout</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Explore detailed information about plot sizes, layout, infrastructure, and investment opportunities.
          </p>
        </div>

        {/* Content Flex */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          
          {/* Left: Brochure Preview Card */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-gradient-to-br from-green-100 to-white p-8 rounded-2xl shadow-lg w-full max-w-sm flex flex-col justify-between ">
              <div className="text-center">
                <img
                  src="/bg1.jpg"
                  alt="Brochure"
                  className="rounded-lg mb-6 shadow-md "
                />
                <h3 className="text-xl font-semibold text-green-700 ">Future city mango garden</h3>
                <p className="text-sm text-gray-600">Premium Open Farm Lands </p>
              </div>
            </div>
          </div>

          {/* Right: Details + Buttons */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Download Complete Project Details
            </h3>
            <p className="text-gray-600 mb-6">
              Get access to plot layout, pricing, infrastructure plan, approvals, and all the information about the venture.
            </p>

            {/* Info Tags */}
            <div className="grid grid-cols-2 gap-4 mb-8 text-sm font-medium">
              <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg">📐 Plot Sizes: 242 Sq.Yards</div>
              <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg">💰 Pricing: 7,499/- Per Sq.Yard</div>
              <div className="bg-purple-100 text-purple-800 px-4 py-3 rounded-lg">🛠️ Infrastructure: 30ft roads, utilities</div>
              <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded-lg">✅ Limits: HMDA</div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/bg1.jpg"
                download
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow text-center font-semibold"
              >
                📥 Download Layout
              </a>

              
              {/* <a
                href="#"
                className="border-2 border-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow text-center font-semibold hover:bg-gray-100"
              >
                👁️ Preview Online
              </a> */}
            </div>

            
          </div>

          
        </div>

        
      </div>
    </section>
  );
}
