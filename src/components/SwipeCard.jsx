import { motion } from "framer-motion";

function SwipeCard({
  article,
  isTop,
  index,
  x,
  rotate,
  opacity,
  onDragEnd,
}) {
  return (
    <motion.div
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.25}
      onDragEnd={isTop ? onDragEnd : undefined}
      style={
        isTop
          ? {
              x,
              rotate,
              opacity,
            }
          : {}
      }
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1 - index * 0.04,
        y: index * 20,
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 24,
      }}
      className="
      absolute
      w-full
      bg-white
      rounded-[32px]
      overflow-hidden
      shadow-2xl
      cursor-grab
      "
      style={{
        zIndex: 30 - index,
      }}
    >
      {/* LIKE */}

      <motion.div
        style={{
          opacity: isTop ? opacity : 0,
        }}
        className="
        absolute
        top-6
        right-6
        bg-green-600
        text-white
        px-5
        py-2
        rounded-full
        font-bold
        z-20
        "
      >
        ❤️ LIKE
      </motion.div>

      <img
        src={article.image}
        alt={article.title}
        className="w-full h-[320px] object-cover"
      />

      <div className="p-7">

        <div className="flex justify-between">

          <span className="bg-[#F5EFE4] text-[#0B6E4F] px-3 py-1 rounded-full text-sm">

            {article.category}

          </span>

          <span className="text-gray-500">

            ⏱ {article.readTime}

          </span>

        </div>

        <h2 className="mt-5 text-3xl font-bold text-[#0B6E4F]">

          {article.title}

        </h2>

        <p className="mt-5 text-gray-600">

          {article.summary}

        </p>

        <div className="flex justify-between mt-6">

          <div>

            <p className="font-semibold">

              {article.author}

            </p>

            <p className="text-orange-600">

              {article.date}

            </p>

          </div>

          <div className="text-right">

            <p>❤️ {article.likes}</p>

            <p>👁 {article.views}</p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default SwipeCard;