import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function EventRegistration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    event: "Research Seminar",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const filtered = value.replace(/[^a-zA-Z\s]/g, "");
      setForm({ ...form, [name]: filtered });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.department
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    setMessage("✅ Registration Successful!");

    setForm({
      name: "",
      email: "",
      department: "",
      event: "Research Seminar",
    });
  };

  return (
    <>
      <Navbar />

      <section className="py-24 bg-[#F8F5EF] min-h-screen">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10">

          <h1 className="text-5xl font-bold text-center text-[#0B6E4F]">
            Event Registration
          </h1>

          <p className="text-center text-gray-600 mt-4 mb-10">
            Register for upcoming seminars and workshops.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              name="department"
              value={form.department}
              onChange={handleChange}
              placeholder="College / Department"
              className="w-full border rounded-lg p-3"
            />

            <select
              name="event"
              value={form.event}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
              <option>Research Seminar</option>
              <option>Gandhian Peace Workshop</option>
              <option>Youth Leadership Camp</option>
            </select>

            <button
              type="submit"
              className="w-full bg-[#0B6E4F] text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Register
            </button>

          </form>

          {message && (
            <div className="mt-6 text-center font-semibold text-[#0B6E4F]">
              {message}
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}

export default EventRegistration;