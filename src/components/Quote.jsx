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
  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="py-24 bg-[#F8F5EF]">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl italic text-[#0B6E4F] leading-relaxed">
          "{randomQuote.text}"
        </h2>

        <p className="mt-6 text-2xl font-medium text-gray-700">
          — {randomQuote.author}
        </p>

      </div>
    </section>
  );
}

export default Quote;