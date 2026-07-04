import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      id="footer"
      className={`transition-colors duration-500 ${
        theme === "dark" ? "bg-[#020617]" : "bg-[#F3EFE6]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">
        {/* Column 1: Brand */}
        <div>
          <h2
            className={`text-3xl font-bold transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-[#0B6E4F]"
            }`}
          >
            CGSA
          </h2>
          <p
            className={`mt-5 leading-8 transition-colors duration-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Centre of Gandhian Studies & Action
            <br />
            Menon College
          </p>
          <p
            className={`mt-6 font-medium transition-colors duration-500 ${
              theme === "dark" ? "text-gray-400" : "text-[#0B6E4F]"
            }`}
          >
            Truth • Service • Research • Action
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3
            className={`text-xl font-semibold mb-5 transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-[#0B6E4F]"
            }`}
          >
            Quick Links
          </h3>
          <ul
            className={`space-y-3 transition-colors duration-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <li>
              <a
                href="#home"
                className="hover:text-orange-400 hover:translate-x-2 transition inline-block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-orange-400 hover:translate-x-2 transition inline-block"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#articles"
                className="hover:text-orange-400 hover:translate-x-2 transition inline-block"
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="#contribute"
                className="hover:text-orange-400 hover:translate-x-2 transition inline-block"
              >
                Contribute
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-400 hover:translate-x-2 transition inline-block"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h3
            className={`text-xl font-semibold mb-5 transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-[#0B6E4F]"
            }`}
          >
            Newsletter
          </h3>
          <p
            className={`mb-5 transition-colors duration-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Stay updated with new research, events and publications.
          </p>
          <div
            className={`flex w-full max-w-md overflow-hidden rounded-full transition-colors duration-500 ${
              theme === "dark" ? "bg-[#1E293B]" : "bg-white"
            }`}
          >
            <input
              type="email"
              placeholder="Email Address"
              className={`w-full px-5 py-3 outline-none bg-transparent transition-colors duration-500 ${
                theme === "dark"
                  ? "text-white placeholder-gray-400"
                  : "text-black placeholder-gray-500"
              }`}
            />
            <button
              onClick={() => {
                alert("Newsletter feature coming soon!");
              }}
              className="bg-[#D97706] px-8 shrink-0 text-white font-semibold hover:bg-orange-600 transition"
            >
              Join
            </button>
          </div>
        </div>

        {/* Column 4: Connect */}
        <div>
          <h3
            className={`text-xl font-semibold mb-5 transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-[#0B6E4F]"
            }`}
          >
            Connect
          </h3>
          <div
            className={`space-y-4 transition-colors duration-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <a
              href="https://www.instagram.com/krishna.menon.college_?igsh=Y2xuYmR4c2kzMGc1"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-orange-400 transition"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/school/vkkmenon/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-orange-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://menoncollege.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-orange-400 transition"
            >
              College Website
            </a>
            <a
              href="mailto:info@menoncollege.edu.in"
              className="block hover:text-orange-400 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Back To Top Button */}
      <div className="text-center pb-10">
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className={`px-8 py-3 rounded-full font-semibold hover:scale-110 transition shadow-xl duration-500 ${
            theme === "dark"
              ? "bg-[#1E293B] text-white hover:bg-gray-700"
              : "bg-white text-[#0B6E4F]"
          }`}
        >
          ↑ Back to Top
        </button>
      </div>

      {/* Copyright */}
      <div
        className={`border-t py-6 text-center transition-colors duration-500 ${
          theme === "dark"
            ? "border-gray-800 text-gray-500"
            : "border-gray-300 text-gray-500"
        }`}
      >
        © 2026 Centre of Gandhian Studies & Action
        <span className="mx-3">•</span>
        Designed by Soham G More for Menon College
      </div>
    </footer>
  );
}

export default Footer;
