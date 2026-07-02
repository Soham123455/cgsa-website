import { Link } from "react-router-dom";
function Events() {
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
    <section className="py-24 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold text-[#0B6E4F]">
            Upcoming Events
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Participate in seminars, workshops and community initiatives.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {events.map((event, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition"
            >

              <p className="text-[#D97706] font-semibold">
                {event.date}
              </p>

              <h3 className="text-2xl font-bold mt-4 text-[#0B6E4F]">
                {event.title}
              </h3>

              <p className="text-gray-600 mt-4">
                📍 {event.venue}
              </p>

              <Link
    to="/register"
    className="text-[#0B6E4F] font-semibold hover:underline"
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