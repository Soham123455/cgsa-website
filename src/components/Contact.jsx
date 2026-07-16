import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Contact() {
  const { theme } = useTheme();

  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Allow only letters and spaces in name
    if (name === "name") {
      value = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setFormData(initialForm);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

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
            Contact Us
          </h2>

          <p
            className={`mt-4 text-lg transition-colors duration-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We'd love to hear from students, researchers and visitors.
          </p>
        </div>

        {submitted && (
          <div className="mb-8 bg-green-100 border border-green-300 text-green-800 rounded-xl p-4 text-center font-semibold">
            ✅ Message sent successfully!
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12">

          {/* Information Card */}

          <div
            className={`rounded-2xl shadow-lg p-10 transition-colors duration-500 ${
              theme === "dark" ? "bg-[#1E293B]" : "bg-white"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-8 transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-[#0B6E4F]"
              }`}
            >
              Centre Information
            </h3>

            <div
              className={`space-y-6 text-lg transition-colors duration-500 ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              <div>
                <h4 className="font-semibold">Address</h4>

                <div className="mt-1">
                  <a
                    href="https://maps.google.com/?q=Opposite+Bhandup+Railway+Station,+Veer+Savarkar+Marg,+Bhandup+East,+Mumbai+400042"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    Opposite Bhandup Railway Station,
                    <br />
                    Veer Savarkar Marg,
                    <br />
                    Bhandup East,
                    <br />
                    Mumbai – 400042,
                    <br />
                    Maharashtra, India
                  </a>
                </div>

                <a
                  href="https://maps.google.com/?q=Opposite+Bhandup+Railway+Station,+Veer+Savarkar+Marg,+Bhandup+East,+Mumbai+400042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-[#0B6E4F] text-white px-5 py-2 rounded-lg hover:bg-green-700 transition shadow"
                >
                  📍 Get Directions
                </a>
              </div>

              <div>
                <h4 className="font-semibold">Email</h4>

                <p className="mt-1">
                  <a
                    href="mailto:info@menoncollege.edu.in"
                    className="hover:opacity-80 transition"
                  >
                    info@menoncollege.edu.in
                  </a>
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Phone</h4>

                <p>
                  <a
                    href="tel:+912225661897"
                    className="hover:opacity-80 transition"
                  >
                    022-2566-18-97
                  </a>
                </p>

                <p>
                  <a
                    href="tel:+912225668541"
                    className="hover:opacity-80 transition"
                  >
                    022-2566-85-41
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}

          <div
            className={`rounded-2xl shadow-lg p-10 transition-colors duration-500 ${
              theme === "dark" ? "bg-[#1E293B]" : "bg-white"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-8 transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-[#0B6E4F]"
              }`}
            >
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border rounded-lg p-3 ${
                  theme === "dark"
                    ? "bg-[#374151] text-white border-gray-600 placeholder-gray-400"
                    : "bg-white text-black placeholder-gray-500"
                }`}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-lg p-3 ${
                  theme === "dark"
                    ? "bg-[#374151] text-white border-gray-600 placeholder-gray-400"
                    : "bg-white text-black placeholder-gray-500"
                }`}
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border rounded-lg p-3 ${
                  theme === "dark"
                    ? "bg-[#374151] text-white border-gray-600 placeholder-gray-400"
                    : "bg-white text-black placeholder-gray-500"
                }`}
              />

              <button
                type="submit"
                className="bg-[#0B6E4F] text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;