export default function ProjectHighlights() {
  return (
    <section className="w-full bg-white py-5 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Project Highlights</h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Discover why Future City Mango Garden is the perfect choice for your dream plot or investment.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
          <div>
            <h3 className="text-3xl font-bold text-green-600">35+</h3>
            <p className="text-gray-700 mt-1">Open Plots</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-600">6</h3>
            <p className="text-gray-700 mt-1">Total Acres</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-600">15+</h3>
            <p className="text-gray-700 mt-1">Amenities</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-600">30</h3>
            <p className="text-gray-700 mt-1">Road Width (ft)</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: '🏛️',
              title: 'HMDA Limits',
              desc: 'Government approved layout with clear titles and proper documentation',
            },
            {
              icon: '🛣️',
              title: 'Wide Roads & Connectivity',
              desc: '30ft main roads with excellent connectivity to major highways',
            },
            {
              icon: '🌳',
              title: 'Green Spaces',
              desc: '30% area dedicated to parks, gardens and recreational spaces',
            },
            {
              icon: '🚪',
              title: 'Gated Community',
              desc: 'Secure gated layout with 24/7 security and boundary walls',
            },
            {
              icon: '💡',
              title: 'Ready Infrastructure',
              desc: 'Underground electricity, water supply and drainage systems',
            },
            {
              icon: '📈',
              title: 'Investment Ready',
              desc: 'High appreciation potential with excellent ROI prospects',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                <span className="mr-2">{item.icon}</span>{item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
