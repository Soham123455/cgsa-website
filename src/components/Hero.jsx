import { Link } from "react-router-dom";
import gandhi from "../assets/gandhi.png";

function Hero() {
  return (
    <section
      id="home"
      className="bg-[#F8F5EF] min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <p className="uppercase tracking-[5px] text-[#D97706] font-semibold">
            Centre of Gandhian Studies & Action
          </p>

          <h1 className="text-6xl font-bold text-[#0B6E4F] mt-6 leading-tight">

            Learn.
            <br />
            Reflect.
            <br />
            Serve.

          </h1>

          <p className="mt-8 text-gray-700 text-lg leading-9 max-w-xl">

            A digital knowledge platform dedicated to preserving,
            promoting and publishing Gandhian philosophy through
            articles, research, events, publications and
            community engagement.

          </p>

          <div className="flex gap-5 mt-10">
<Link
  to="/articles"
  className="bg-[#0B6E4F] text-white px-8 py-4 rounded-xl hover:bg-green-700 transition duration-300 inline-block"
>
  Explore Articles
</Link>

<Link
  to="/contribute"
  className="border border-[#0B6E4F] text-[#0B6E4F] px-8 py-4 rounded-xl hover:bg-[#0B6E4F] hover:text-white transition duration-300 inline-block"
>
  Publish Article
</Link>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-4 gap-6 mt-16">

            <div>

              <h2 className="text-4xl font-bold text-[#0B6E4F]">
                150+
              </h2>

              <p className="text-gray-600 mt-2">
                Articles
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-[#0B6E4F]">
                40+
              </h2>

              <p className="text-gray-600 mt-2">
                Events
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-[#0B6E4F]">
                500+
              </h2>

              <p className="text-gray-600 mt-2">
                Contributors
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-[#0B6E4F]">
                20+
              </h2>

              <p className="text-gray-600 mt-2">
                Publications
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <img
            src={gandhi}
            alt="Mahatma Gandhi"
            className="max-h-[700px] object-contain hover:scale-105 transition duration-700"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;