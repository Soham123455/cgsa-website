import { useTheme } from "../context/ThemeContext";
import { Target, Eye, BookOpenCheck } from "lucide-react";

function About() {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-500 ${
        theme === "dark" ? "bg-[#111827]" : "bg-[#F8F5EF]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-bold transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-[#0B6E4F]"
            }`}
          >
            About the Centre
          </h2>

          <p
            className={`mt-6 text-lg max-w-3xl mx-auto leading-8 transition-colors duration-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
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
          <div
            className={`rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 ${
              theme === "dark" ? "bg-[#1E293B]" : "bg-white"
            }`}
          >
            <Target
              size={46}
              strokeWidth={2.2}
              className={`mb-4 transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-[#0B6E4F]"
              }`}
            />

            <h3
              className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-[#0B6E4F]"
              }`}
            >
              Mission
            </h3>

            <p
              className={`leading-8 transition-colors duration-500 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              To promote Gandhian values through education, research,
              dialogue, publications, and community engagement while
              inspiring responsible citizenship.
            </p>
          </div>

          {/* Vision Card */}
          <div
            className={`rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 ${
              theme === "dark" ? "bg-[#1E293B]" : "bg-white"
            }`}
          >
            <Eye
              size={46}
              strokeWidth={2.2}
              className={`mb-4 transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-[#0B6E4F]"
              }`}
            />

            <h3
              className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-[#0B6E4F]"
              }`}
            >
              Vision
            </h3>

            <p
              className={`leading-8 transition-colors duration-500 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              To build a society rooted in truth, non-violence,
              peace, sustainability, ethical leadership,
              and social responsibility inspired by Gandhian philosophy.
            </p>
          </div>

          {/* Objectives Card */}
          <div
            className={`rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 ${
              theme === "dark" ? "bg-[#1E293B]" : "bg-white"
            }`}
          >
            <BookOpenCheck
              size={46}
              strokeWidth={2.2}
              className={`mb-4 transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-[#0B6E4F]"
              }`}
            />

            <h3
              className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-[#0B6E4F]"
              }`}
            >
              Objectives
            </h3>

            <ul
              className={`space-y-3 transition-colors duration-500 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
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