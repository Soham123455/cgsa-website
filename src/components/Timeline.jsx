function Timeline() {
  const timeline = [
    {
      year: "1869",
      title: "Birth of Mahatma Gandhi",
      desc: "Born at Porbandar, Gujarat.",
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
    <section className="py-24 bg-[#F8F5EF]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-orange-600 font-semibold">
            Journey Through History
          </p>

          <h2 className="text-5xl font-bold text-[#0B6E4F] mt-3">
            Timeline of Mahatma Gandhi
          </h2>
        </div>

        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#0B6E4F] -translate-x-1/2"></div>

          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between mb-16"
            >
              {/* LEFT SIDE */}
              <div className="w-[42%]">
                {index % 2 === 0 && (
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <span className="inline-flex items-center justify-center min-w-[90px] h-12 bg-[#0B6E4F] text-white rounded-full font-bold text-lg px-4">
                      {item.year}
                    </span>

                    <h3 className="text-2xl font-bold text-[#0B6E4F] mt-5">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-8">
                      {item.desc}
                    </p>
                  </div>
                )}
              </div>

              {/* CENTER DOT */}
              <div className="absolute left-1/2 -translate-x-1/2 z-20">
                <div className="w-6 h-6 bg-[#0B6E4F] rounded-full border-4 border-[#F8F5EF]"></div>
              </div>

              {/* RIGHT SIDE */}
              <div className="w-[42%]">
                {index % 2 !== 0 && (
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <span className="inline-flex items-center justify-center min-w-[90px] h-12 bg-[#0B6E4F] text-white rounded-full font-bold text-lg px-4">
                      {item.year}
                    </span>

                    <h3 className="text-2xl font-bold text-[#0B6E4F] mt-5">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-8">
                      {item.desc}
                    </p>
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