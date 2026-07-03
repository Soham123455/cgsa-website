import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gandhi from "../assets/gandhi.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FFF9F0] via-[#F5EFE4] to-[#E9F7F1]"
    >
      {/* Background Blur */}
      <motion.div
className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full bg-green-300/30 blur-[140px]"
animate={{
x:[0,40,0],
y:[0,-30,0]
}}
transition={{
duration:12,
repeat:Infinity,
ease:"easeInOut"
}}
/>

<motion.div
className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-300/30 blur-[150px]"
animate={{
x:[0,-40,0],
y:[0,40,0]
}}
transition={{
duration:14,
repeat:Infinity,
ease:"easeInOut"
}}
/>

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
className="
mt-6
text-7xl
md:text-[8rem]
leading-[0.72]
tracking-[-3px]
font-semibold
"
style={{
fontFamily:"'Cormorant Garamond', serif"
}}
>
           <span className="text-[#0B6E4F]">
<motion.span
initial={{
opacity:0,
y:70,
scale:0.92
}}
animate={{
opacity:1,
y:0,
scale:1
}}
transition={{
duration:.8,
delay:.15
}}
className="block text-[#0B6E4F]"
>
Learn.
</motion.span>
</span>



<span className="text-[#0B6E4F]">
<motion.span
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.45,
    ease: "easeOut",
  }}
  className="block text-[#0B6E4F]"
>
  Reflect.
</motion.span>
</span>



<span className="bg-gradient-to-r from-[#0B6E4F] to-[#1BA784] bg-clip-text text-transparent">
<motion.span
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.7,
    ease: "easeOut",
  }}
  className="block text-[#0B6E4F]"
>
  Serve.
</motion.span>
</span>
          </h1>

          <p className="mt-8 text-gray-600 text-xl leading-10 max-w-xl">
            A digital knowledge platform dedicated to preserving,
            promoting and publishing Gandhian philosophy through
            articles, research, events, publications and community
            engagement.
          </p>
          <div className="flex gap-3 mt-10 mb-8">

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
            <Link
              to="/articles"
              className="px-8 py-4 rounded-full bg-[#0B6E4F] text-white font-semibold transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl active:scale-95"
            >
              Explore Articles
            </Link>

            <Link
              to="/contribute"
              className="px-8 py-4 rounded-full border-2 border-[#0B6E4F] text-[#0B6E4F] font-semibold hover:bg-[#0B6E4F] hover:text-white transition-all duration-300 shadow-[0_15px_40px_rgba(11,110,79,.22)] hover:scale-105 hover:-translate-y-1 hover:shadow-2xl active:scale-95 bg-white/30"
            >
              Publish Article
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-8 mt-16">
            {[
              ["150+", "Articles"],
              ["40+", "Events"],
              ["500+", "Contributors"],
              ["20+", "Publications"],
            ].map(([num, text]) => (
              <motion.div
              whileHover={{
y:-10,
scale:1.05
}}
                key={text}
                className="
text-center
p-6
rounded-3xl
bg-white/60
backdrop-blur-xl
border
border-white/40
shadow-xl
hover:-translate-y-3
hover:rotate-1
hover:shadow-2xl
transition-all
duration-500
"
              >
                <h2 className="text-4xl font-bold text-[#0B6E4F]">
                  {num}
                </h2>
                <p className="text-gray-600 mt-2">{text}</p>
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
          
          <div
  className="
  absolute
  w-[700px]
  h-[700px]
  rounded-full
  bg-[#0B6E4F]/15
  blur-[120px]
  "
></div>
          
          <motion.img
            src={gandhi}
            alt="Mahatma Gandhi"
            animate={{
    y:[0,-20,0],
    rotate:[0,1,0,-1,0]
}}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
           className="
relative
z-10
w-[650px]
object-contain
drop-shadow-[0_80px_90px_rgba(0,0,0,.28)]
hover:scale-105
transition-all
duration-700
"
          />
        </motion.div>

      </div>
    <motion.div
  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
  animate={{ y: [0, 12, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
>
  <span className="text-xs tracking-[5px] text-gray-500 uppercase">
    Scroll
  </span>

  <div className="mt-3 w-[2px] h-10 bg-gradient-to-b from-[#0B6E4F] to-transparent"></div>
</motion.div>
    </section>
  );
}

export default Hero;