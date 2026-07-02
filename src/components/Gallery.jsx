import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

function Gallery() {
const gallery = [
  {
    image: gallery1,
    title: "Paying Tribute to Mahatma Gandhi",
  },
  {
    image: gallery2,
    title: "The Charkha – Symbol of Swadeshi",
  },
  {
    image: gallery3,
    title: "Khadi and Rural Self-Reliance",
  },
  {
    image: gallery4,
    title: "Educational Visit by Students",
  },
  {
    image: gallery5,
    title: "Community Cleanliness Drive",
  },
  {
    image: gallery6,
    title: "Journey of India's Freedom Movement",
  },
];

  return (
    <section id="gallery" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-[#0B6E4F]">
            Gallery
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Capturing moments that celebrate Gandhian values, education,
            research and community engagement.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {gallery.map((item, index) => (

            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="bg-white p-6">

                <h3 className="text-xl font-semibold text-[#0B6E4F]">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;