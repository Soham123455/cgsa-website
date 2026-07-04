import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Events() {
  const { theme } = useTheme();

  const events = [
    {
      date: "12 Aug 2026",
      title: "Research Seminar",
      venue: "Menon College Auditorium",
    },
    {
      date: "25 Aug 2026",
      title: "Gandhian Peace Workshop",
      venue: "CGSA Conference Hall",
    },
    {
      date: "02 Sept 2026",
      title: "Youth Leadership Camp",
      venue: "Community Centre",
    },
  ];

  return (
    <section
      className={`py-24 transition-colors duration-500 ${
        theme === "dark" ? "bg-[#111827]" : "bg-[#F8F5EF]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2
            className={`text-5xl font-bold transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-[#0B6E4F]"
            }`}
          >
            Upcoming Events
          </h2>

          <p
            className={`mt-4 text-lg transition-colors duration-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Participate in seminars, workshops and community initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-500 ${
                theme === "dark" ? "bg-[#1E293B]" : "bg-white"
              }`}
            >
              <p className="text-[#D97706] font-semibold">{event.date}</p>

              <h3
                className={`text-2xl font-bold mt-4 transition-colors duration-500 ${
                  theme === "dark" ? "text-white" : "text-[#0B6E4F]"
                }`}
              >
                {event.title}
              </h3>

              <p
                className={`mt-4 mb-6 transition-colors duration-500 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                📍 {event.venue}
              </p>

              <Link
                to="/register"
                className={`font-semibold hover:underline transition-colors duration-500 ${
                  theme === "dark" ? "text-white" : "text-[#0B6E4F]"
                }`}
              >
                Register →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;