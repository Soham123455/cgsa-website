import { motion } from "framer-motion";
import logo from "../assets/cgsa-logo.png";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Articles", link: "#articles" },
    { name: "Contribute", link: "#contribute" },
    { name: "Contact", link: "#footer" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-2xl backdrop-blur-xl border border-white/30 shadow-2xl transition-colors duration-500 ${
        theme === "dark" ? "bg-[#1E293B]/80" : "bg-white/60"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <img src={logo} className="w-14" alt="CGSA" />

          <div>
            <h2
              className={`font-bold text-xl transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-[#0B6E4F]"
              }`}
            >
              CGSA
            </h2>

            <p className="text-xs text-gray-500">Gandhian Studies</p>
          </div>
        </motion.div>

        {/* Navigation */}
        <ul
          className={`hidden md:flex gap-10 font-medium transition-colors duration-500 ${
            theme === "dark" ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {navItems.map((item) => (
            <motion.li key={item.name} whileHover={{ y: -3 }}>
              <a href={item.link} className="relative group">
                {item.name}
                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    w-0
                    bg-[#D97706]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="
              flex
              items-center
              justify-center
              w-12
              h-12
              rounded-full
              bg-[#F8F5EF]
              text-[#0B6E4F]
              shadow-md
              hover:scale-110
              transition-all
              duration-300
            "
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <motion.a
            href="#contribute"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-6
              py-3
              rounded-full
              bg-[#0B6E4F]
              text-white
              font-semibold
              shadow-lg
              hover:bg-green-700
              transition
            "
          >
            Publish →
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;