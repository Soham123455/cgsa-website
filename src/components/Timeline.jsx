import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Timeline() {
  const { theme } = useTheme();

  const timeline = [
    {
      year: "1869",
      title: "Birth of Mahatma Gandhi",
      desc: "Born at Porbandar, Gujarat.",
      back: "Gandhi was born on 2 October 1869 at Porbandar. His father Karamchand Gandhi served as Diwan while his mother Putlibai deeply influenced his spiritual upbringing.",
    },
    {
      year: "1893",
      title: "South Africa",
      desc: "Began the struggle against racial discrimination.",
    },
    {
      year: "1915",
      title: "Return to India",
      desc: "Returned to India and started public service.",
    },
    {
      year: "1917",
      title: "Champaran Satyagraha",
      desc: "Led India's first successful Satyagraha.",
    },
    {
      year: "1930",
      title: "Dandi March",
      desc: "Historic Salt March against British rule.",
    },
    {
      year: "1942",
      title: "Quit India Movement",
      desc: "Called for complete independence.",
    },
    {
      year: "1948",
      title: "Legacy Lives On",
      desc: "His ideas continue inspiring the world.",
    },
  ];

  return (
    <section
      className={`py-24 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#111827]"
          : "bg-gradient-to-br from-[#FFF9F0] via-[#F7F4EE] to-[#EEF8F3]"
      }`}
    >
      <div className="absolute top-32 left-20 w-72 h-72 rounded-full bg-green-300/20 blur-[130px]"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-orange-300/20 blur-[150px]"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-orange-600 font-semibold">
            Journey Through History
          </p>

          <h2
            className={`text-5xl font-bold mt-3 transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-[#0B6E4F]"
            }`}
          >
            Timeline of Mahatma Gandhi
          </h2>
        </div>

        <div className="relative">
          {/* Center Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-0 w-[5px] bg-gradient-to-b from-[#0B6E4F] via-[#2BB673] to-[#D97706] rounded-full -translate-x-1/2"
          ></motion.div>

          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between mb-16"
            >
              {/* LEFT SIDE */}
              <div className="w-[42%]">
                {index % 2 === 0 && (
                  <div className="group perspective-[1500px]">
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -80,
                        scale: 0.92,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.08,
                      }}
                      className="flip-card w-full min-h-[260px]"
                    >
                      {/* FRONT SIDE */}
                      <div
                        className={`absolute inset-0 backface-hidden rounded-3xl shadow-xl p-8 transition-colors duration-500 ${
                          theme === "dark" ? "bg-[#1E293B]" : "bg-white"
                        }`}
                      >
                        <span className="inline-flex items-center justify-center min-w-[90px] h-12 bg-[#0B6E4F] text-white rounded-full font-bold text-lg px-4">
                          {item.year}
                        </span>

                        <h3
                          className={`text-2xl font-bold mt-5 transition-colors duration-500 ${
                            theme === "dark" ? "text-white" : "text-[#0B6E4F]"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={`mt-3 leading-8 transition-colors duration-500 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>

                      {/* BACK SIDE */}
                      <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-3xl bg-gradient-to-br from-[#0B6E4F] to-[#1B8F68] text-white p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold">Did You Know?</h3>
                        <p className="mt-5 leading-8">{item.back}</p>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* CENTER DOT */}
              <div className="absolute left-1/2 -translate-x-1/2 z-20">
                <motion.div
                  animate={{
                    scale: [1, 1.35, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className={`w-7 h-7 rounded-full bg-[#0B6E4F] border-[6px] shadow-[0_0_25px_rgba(11,110,79,0.5)] transition-colors duration-500 ${
                    theme === "dark" ? "border-[#111827]" : "border-[#F8F5EF]"
                  }`}
                />
              </div>

              {/* RIGHT SIDE */}
              <div className="w-[42%]">
                {index % 2 !== 0 && (
                  <div className="group perspective-[1500px]">
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 80,
                        scale: 0.92,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.08,
                      }}
                      className="flip-card w-full min-h-[260px]"
                    >
                      {/* FRONT SIDE */}
                      <div
                        className={`absolute inset-0 backface-hidden rounded-3xl shadow-xl p-8 transition-colors duration-500 ${
                          theme === "dark" ? "bg-[#1E293B]" : "bg-white"
                        }`}
                      >
                        <span className="inline-flex items-center justify-center min-w-[90px] h-12 bg-gradient-to-r from-[#0B6E4F] to-[#1BA784] text-white rounded-full font-bold text-lg px-4">
                          {item.year}
                        </span>

                        <h3
                          className={`text-2xl font-bold mt-5 transition-colors duration-500 ${
                            theme === "dark" ? "text-white" : "text-[#0B6E4F]"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={`mt-3 leading-8 transition-colors duration-500 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>

                      {/* BACK SIDE */}
                      <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-3xl bg-gradient-to-br from-[#0B6E4F] to-[#1B8F68] text-white p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold">Did You Know?</h3>
                        <p className="mt-5 leading-8">{item.back}</p>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;