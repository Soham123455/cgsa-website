import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import gandhi from "../assets/gandhi.png";

// Step 5: Floating Leaves Component
function Leaf({ top, left, size }) {
  return (
    <motion.div
      className="absolute z-0 pointer-events-none"
      style={{ top, left, fontSize: size }}
      animate={{
        y: [0, -25, 0],
        rotate: [0, 20, -20, 0],
        x: [0, 10, -10, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      🍃
    </motion.div>
  );
}

function Hero() {
  const { theme } = useTheme();
  
  // Step 2: Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [6, -6]);
  const rotateY = useTransform(mouseX, [-300, 300], [-6, 6]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className={`relative min-h-screen flex items-center overflow-hidden perspective-[1000px] transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#0F172A]"
          : "bg-gradient-to-br from-[#FFF9F0] via-[#F5EFE4] to-[#E9F7F1]"
      }`}
    >
      {/* Step 8: Slow Background Movement */}
      <motion.div
        animate={{ scale: [1, 1.015, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Background Blur Elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full bg-green-300/30 blur-[140px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-[650px] h-[650px] rounded-full bg-orange-300/30 blur-[150px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-20 grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-[#D97706]"></div>
            <p className="uppercase tracking-[8px] text-[#D97706] text-sm font-medium">
              Centre of Gandhian Studies & Action
            </p>
          </div>

          <h1
            className="mt-6 text-7xl md:text-[8rem] leading-[0.72] tracking-[-3px] font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span
              className={theme === "dark" ? "text-white" : "text-[#0B6E4F]"}
            >
              <motion.span
                initial={{ opacity: 0, y: 70, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className={`block ${
                  theme === "dark" ? "text-white" : "text-[#0B6E4F]"
                }`}
              >
                Learn.
              </motion.span>
            </span>

            <span
              className={theme === "dark" ? "text-white" : "text-[#0B6E4F]"}
            >
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                className={`block ${
                  theme === "dark" ? "text-white" : "text-[#0B6E4F]"
                }`}
              >
                Reflect.
              </motion.span>
            </span>

            <span className="bg-gradient-to-r from-[#0B6E4F] to-[#1BA784] bg-clip-text text-transparent">
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className={`block ${
                  theme === "dark" ? "text-white" : "text-[#0B6E4F]"
                }`}
              >
                Serve.
              </motion.span>
            </span>
          </h1>

          {/* Step 3: Animated Quote */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className={`mt-8 text-3xl font-medium italic ${
              theme === "dark" ? "text-white" : "text-[#0B6E4F]"
            }`}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "The future depends on what we do today."
          </motion.h2>

          <p
            className={`mt-4 text-xl leading-10 max-w-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A digital knowledge platform dedicated to preserving, promoting and
            publishing Gandhian philosophy through articles, research, events,
            publications and community engagement.
          </p>

          <div className="flex gap-3 mt-8 mb-8 text-black">
            <div className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md shadow">
              📚 Research
            </div>
            <div className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md shadow">
              🕊 Gandhian Philosophy
            </div>
            <div className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md shadow">
              🌿 Sustainability
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            {/* Step 4: Premium Buttons */}
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/articles"
                className="px-8 py-4 rounded-full bg-[#0B6E4F] text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-green-500/30 flex items-center justify-center h-full"
              >
                Explore Articles
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/contribute"
                className={`px-8 py-4 rounded-full border-2 border-[#0B6E4F] font-semibold hover:bg-[#0B6E4F] hover:text-white transition-all duration-300 shadow-[0_20px_45px_rgba(11,110,79,.25)] hover:shadow-green-500/30 flex items-center justify-center h-full ${
                  theme === "dark"
                    ? "bg-transparent text-white"
                    : "bg-white/30 text-[#0B6E4F]"
                }`}
              >
                Publish Article
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-4 gap-8 mt-16">
            {[
              ["150+", "Articles"],
              ["40+", "Events"],
              ["500+", "Contributors"],
              ["20+", "Publications"],
            ].map(([num, text]) => (
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                key={text}
                className="text-center p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl transition-all duration-500"
              >
                <h2
                  className={`text-4xl font-bold ${
                    theme === "dark" ? "text-white" : "text-[#0B6E4F]"
                  }`}
                >
                  {num}
                </h2>
                <p
                  className={`mt-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Step 7: Soft Background Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#0B6E4F]/10 blur-[120px]"></div>

          {/* Step 5: Leaves */}
          <Leaf top="10%" left="20%" size={22} />
          <Leaf top="70%" left="10%" size={18} />
          <Leaf top="30%" left="85%" size={24} />

          {/* Step 1 & 2: Premium Float + Mouse Parallax Image */}
          <motion.img
            src={gandhi}
            alt="Mahatma Gandhi"
            style={{ rotateX, rotateY }}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-[650px] object-contain drop-shadow-[0_80px_90px_rgba(0,0,0,.28)] hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>

      {/* Step 6: Refined Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
      >
        <span
          className={`text-lg font-light mb-1 ${
            theme === "dark" ? "text-gray-300" : "text-gray-500"
          }`}
        >
          ↓
        </span>
        <span
          className={`text-xs tracking-[5px] uppercase ${
            theme === "dark" ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

export default Hero;