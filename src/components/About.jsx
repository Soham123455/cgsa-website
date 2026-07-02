import { Target, Eye, BookOpenCheck } from "lucide-react";
function About() {
  return (
    <section
  id="about"
  className="py-24 bg-white"
>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0B6E4F]">
            About the Centre
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            The Centre of Gandhian Studies and Action is dedicated to
            preserving, promoting, and applying Mahatma Gandhi's philosophy
            through education, research, publications, and community
            engagement. It inspires individuals to embrace truth,
            non-violence, peace, sustainability, and selfless service in
            everyday life.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Mission Card */}
          <div className="bg-[#F8F5EF] rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">

            <Target
  size={46}
  strokeWidth={2.2}
  className="text-[#0B6E4F]"
/>

            <h3 className="text-2xl font-bold text-[#0B6E4F] mb-4">
              Mission
            </h3>

            <p className="text-gray-700 leading-8">
              To promote Gandhian values through education, research,
              dialogue, publications, and community engagement while
              inspiring responsible citizenship.
            </p>

          </div>

          {/* Vision Card */}
          <div className="bg-[#F8F5EF] rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">

            <Eye
  size={46}
  strokeWidth={2.2}
  className="text-[#0B6E4F]"
/>

            <h3 className="text-2xl font-bold text-[#0B6E4F] mb-4">
              Vision
            </h3>

            <p className="text-gray-700 leading-8">
              To build a society rooted in truth, non-violence,
              peace, sustainability, ethical leadership,
              and social responsibility inspired by Gandhian philosophy.
            </p>

          </div>

          {/* Objectives Card */}
          <div className="bg-[#F8F5EF] rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">

            <BookOpenCheck
  size={46}
  strokeWidth={2.2}
  className="text-[#0B6E4F]"
/>

            <h3 className="text-2xl font-bold text-[#0B6E4F] mb-4">
              Objectives
            </h3>

            <ul className="space-y-3 text-gray-700">

              <li>✓ Promote Gandhian Research</li>

              <li>✓ Encourage Student Engagement</li>

              <li>✓ Publish Articles & Journals</li>

              <li>✓ Organize Workshops & Seminars</li>

              <li>✓ Community Outreach Programs</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;