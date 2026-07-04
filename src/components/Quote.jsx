import { useTheme } from "../context/ThemeContext";

const quotes = [
  {
    text: "My life is my message.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "An eye for an eye only ends up making the whole world blind.",
    author: "Mahatma Gandhi",
  },
  {
    text: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Truth never damages a cause that is just.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    text: "In a gentle way, you can shake the world.",
    author: "Mahatma Gandhi",
  },
];

function Quote() {
  const { theme } = useTheme();

  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        theme === "dark" ? "bg-black" : "bg-[#0B6E4F]"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        {/* Left Quote Mark */}
        <div className="absolute left-0 top-0 text-[140px] text-white/10 font-serif leading-none select-none">
          “
        </div>

        {/* Right Quote Mark */}
        <div className="absolute right-0 bottom-10 text-[140px] text-white/10 font-serif leading-none select-none">
          ”
        </div>

        {/* Quote Text */}
        <h2 className="text-5xl italic text-white leading-relaxed animate-fadeIn">
          "{randomQuote.text}"
        </h2>

        {/* Author */}
        <p className="mt-8 text-2xl font-semibold text-orange-300 tracking-wide animate-fadeUp">
          — {randomQuote.author}
        </p>
      </div>
    </section>
  );
}

export default Quote;