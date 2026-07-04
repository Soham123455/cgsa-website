import galleryImages from "../data/galleryImages";
import { useTheme } from "../context/ThemeContext";

function Gallery() {
  const { theme } = useTheme();

  const gallery = galleryImages.map((img, index) => ({
  ...img,
  height: [
    "h-[260px]",
    "h-[380px]",
    "h-[300px]",
    "h-[450px]",
    "h-[280px]",
    "h-[360px]",
  ][index % 6],
}));

  return (
    <section
      id="gallery"
      className={`py-24 transition-colors duration-500 ${
        theme === "dark" ? "bg-[#0F172A]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-bold transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-[#0B6E4F]"
            }`}
          >
            Gallery
          </h2>

          <p
            className={`mt-5 text-lg transition-colors duration-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Capturing moments that celebrate Gandhian values, education,
            research and community engagement.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl break-inside-avoid cursor-pointer hover:-translate-y-2 transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full ${item.height} object-cover transition-all duration-700 group-hover:scale-110`}
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold">
                  {item.title}
                </h3>

                <button className="mt-4 w-fit px-5 py-2 rounded-full bg-white text-[#0B6E4F] font-semibold hover:scale-105 transition">
                  View →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;