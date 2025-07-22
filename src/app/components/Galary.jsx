export default function ProjectGallery() {
  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Project Gallery</h2>
        <p className="text-gray-600 mt-2 text-lg">
          A glimpse of development and amenities at Future City Mango Garden
        </p>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden relative">
        <div className="flex w-max animate-scroll gap-6">
          {["/bg1.jpg", "/500metres.jpg", "/galary3.png", "/galary1.png", "/galary2.png"].map(
            (src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                className="h-60 w-80 sm:w-96 object-cover rounded-xl shadow-md"
              />
            )
          )}
          {/* {["/bg.jpg", "/bg1.jpg", "/bg.jpg", "/bg1.jpg", "/bg.jpg"].map(
            (src, index) => (
              <img
                key={`copy-${index}`}
                src={src}
                alt={`Gallery Duplicate ${index + 1}`}
                className="h-60 w-80 sm:w-96 object-cover rounded-xl shadow-md"
              />
            )
          )} */}
        </div>
      </div>

      {/* Video Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 px-4">
  <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
    <video
      src="/video1.mp4"
      controls
      className="w-full h-full object-contain"
    />
  </div>
  <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
    <video
      src="/video3.mp4"
      controls
      className="w-full h-full object-cover"
    />
  </div>
</div>


      {/* Call to Action */}
      <div className="bg-green-600 text-white rounded-2xl px-6 sm:px-12 py-10 mt-12 shadow-xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <h3 className="text-4xl font-bold">Want to see the actual site?</h3>
          <p className="text-white/90 max-w-xl">
            Schedule a site visit to explore the plots and infrastructure in person
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="/video2.mp4"
              className="bg-white text-green-700 px-8 py-3 font-semibold text-lg hover:bg-gray-100 transition rounded-full"
            >
              🎥 Watch Video Tour
            </a>
            <a
              href="#contact"
              className="bg-white text-green-700 px-8 py-3 font-semibold text-lg hover:bg-gray-100 transition rounded-full"
            >
              📍 Book Site Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
