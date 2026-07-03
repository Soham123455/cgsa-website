import { useState } from "react";
import {
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

import SwipeCard from "./SwipeCard";

function SwipeDeck({ articles }) {
  const [current, setCurrent] = useState(0);

  const x = useMotionValue(0);

  const rotate = useTransform(
    x,
    [-250, 250],
    [-18, 18]
  );

  const opacity = useTransform(
    x,
    [-250, -120, 0, 120, 250],
    [0.2, 1, 1, 1, 0.2]
  );

  const nextArticle = () => {
    setCurrent((prev) => (prev + 1) % articles.length);
    x.set(0);
  };

  const visibleCards = [];

  for (let i = 0; i < 3; i++) {
    visibleCards.push(
      articles[(current + i) % articles.length]
    );
  }

  return (
    <div
      className="
      relative
      mx-auto
      w-[420px]
      h-[720px]
      "
    >
      <AnimatePresence mode="popLayout">
        {visibleCards
          .slice()
          .reverse()
          .map((article, reverseIndex) => {
            const index = 2 - reverseIndex;

            return (
              <SwipeCard
                key={`${article.id}-${current}`}
                article={article}
                index={index}
                isTop={index === 0}
                x={x}
                rotate={rotate}
                opacity={opacity}
                onDragEnd={(event, info) => {
                  if (Math.abs(info.offset.x) > 140) {
                    nextArticle();
                  } else {
                    x.set(0);
                  }
                }}
              />
            );
          })}
      </AnimatePresence>
    </div>
  );
}

export default SwipeDeck;