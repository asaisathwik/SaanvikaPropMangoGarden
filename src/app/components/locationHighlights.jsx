export default function LocationHighlights() {
  const locations = [
    { place: "Future City", time: "4 KM", icon: "📍" },
    { place: "Pharmacity", time: "5 KM", icon: "🏥" },
    { place: "Amazon Data Center", time: "7 KM", icon: "💻" },
    { place: "Skill University", time: "9 KM", icon: "🎓" },
    { place: "Ibrahimpatnam", time: "13 KM", icon: "🧭" },
    { place: "Outer Ring Road (ORR)", time: "22 KM", icon: "🛣️" },
    { place: "BN Reddy", time: "25 KM", icon: "🏙️" },
    { place: "Airport", time: "25 KM", icon: "✈️" },
    { place: "LB Nagar", time: "27 KM", icon: "📌" },
{ place: "AI City", time: "Near", icon: "🤖" },
{ place: "Sports Hub", time: "Near", icon: "🏟️" },
{ place: "Health Hub", time: "Near", icon: "🏥" },

  ];

  return (
    <section className="w-full bg-white py-5 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Location Highlights</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {locations.map((item, idx) => (
            <div
              key={idx}
              className="bg-green-50 p-6 rounded-xl shadow text-center"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-lg font-semibold text-green-800">{item.place}</h3>
              <p className="text-sm text-gray-600">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
