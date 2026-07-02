import { useState } from "react";

function Contact() {
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

  const handleSubmit = (e) => {
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

    console.log(formData);

    setSubmitted(true);
    setFormData(initialForm);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-24 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#0B6E4F]">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            We'd love to hear from students, researchers and visitors.
          </p>
        </div>

        {submitted && (
          <div className="mb-8 bg-green-100 border border-green-300 text-green-800 rounded-xl p-4 text-center font-semibold">
            ✅ Message sent successfully!
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-white rounded-2xl shadow-lg p-10">

            <h3 className="text-2xl font-bold text-[#0B6E4F] mb-8">
              Centre Information
            </h3>

            <div className="space-y-6 text-lg">

              <div>
                <h4 className="font-semibold">Address</h4>
                <p>Menon College Campus</p>
                <p>Mumbai, Maharashtra</p>
              </div>

              <div>
                <h4 className="font-semibold">Email</h4>
                <p>cgsa@menoncollege.edu</p>
              </div>

              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+91 XXXXX XXXXX</p>
              </div>

              <div>
                <h4 className="font-semibold">Office Hours</h4>
                <p>Monday – Friday</p>
                <p>9:00 AM – 5:00 PM</p>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-10">

            <h3 className="text-2xl font-bold text-[#0B6E4F] mb-8">
              Send us a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border rounded-lg p-3"
              />

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border rounded-lg p-3"
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