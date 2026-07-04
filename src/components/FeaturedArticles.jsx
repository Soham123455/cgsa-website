import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import articles from "../data/articles";

import SwipeDeck from "./SwipeDeck";

function FeaturedArticles() {
  const { theme } = useTheme();

  return (
    <section
      id="articles"
      className={`py-24 transition-colors duration-500 ${
        theme === "dark" ? "bg-[#0F172A]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D97706] uppercase tracking-[5px] font-semibold">
            Knowledge • Research • Reflection
          </p>

          <h2
            className={`text-5xl font-bold mt-4 transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-[#0B6E4F]"
            }`}
          >
            Featured Articles
          </h2>

          <p
            className={`mt-6 text-lg max-w-3xl mx-auto transition-colors duration-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore insightful writings on Gandhian philosophy, peace studies,
            sustainable development, social harmony and community service.
          </p>
        </div>

        <div className="flex justify-center mt-16">
          <SwipeDeck articles={articles} />
        </div>

        <div className="text-center mt-16">
          <Link
            to="/articles"
            className="bg-[#0B6E4F] text-white px-10 py-4 rounded-xl hover:bg-green-700 transition shadow-lg"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticles;