import { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config/api";

function Contribute() {
  const initialForm = {
    name: "",
    email: "",
    department: "",
    category: "Research Paper",
    title: "",
    abstract: "",
    content: "",
    agree: false,
  };

  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const [coverImage, setCoverImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.department ||
      !formData.title ||
      !formData.abstract ||
      !formData.content
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (!formData.agree) {
      alert("Please certify your article before submitting.");
      return;
    }

    const data = new FormData();

    data.append("fullName", formData.name);
    data.append("email", formData.email);
    data.append("department", formData.department);
    data.append("category", formData.category);
    data.append("title", formData.title);
    data.append("abstract", formData.abstract);
    data.append("content", formData.content);

    if (coverImage) {
      data.append("coverImage", coverImage);
    }

    if (pdfFile) {
      data.append("pdfFile", pdfFile);
    }

    try {
const response = await axios.post(
  `${API_BASE_URL}/api/articles`,
  data
);

      if (response.data.success) {
        setSubmitted(true);

        setFormData(initialForm);

        setCoverImage(null);
        setPdfFile(null);

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to submit article."
      );
    }
  };

  return (
    <section id="contribute" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#0B6E4F]">
            Publish an Article
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Students, researchers and faculty members are invited to contribute
            original articles inspired by Gandhian philosophy, peace,
            sustainability and social development.
          </p>
        </div>

        {submitted && (
          <div className="mb-8 bg-green-100 border border-green-300 text-green-800 rounded-xl p-4 text-center font-semibold">
            ✅ Article submitted successfully! It is now pending review.
          </div>
        )}

        <div className="bg-[#F8F5EF] rounded-3xl shadow-xl p-10">

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-8"
          >

            <div>
              <label className="font-semibold">Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-2 w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="font-semibold">Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-2 w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="font-semibold">Department</label>

              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Computer Science"
                className="mt-2 w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="font-semibold">Article Category</label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-2 w-full border rounded-lg p-3"
              >
                <option>Research Paper</option>
                <option>Essay</option>
                <option>Case Study</option>
                <option>Book Review</option>
                <option>Opinion</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="font-semibold">Article Title</label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter article title"
                className="mt-2 w-full border rounded-lg p-3"
              />
            </div>

            <div className="md:col-span-2">
              <label className="font-semibold">Abstract</label>

              <textarea
                rows="4"
                name="abstract"
                value={formData.abstract}
                onChange={handleChange}
                placeholder="Brief summary..."
                className="mt-2 w-full border rounded-lg p-3"
              />
            </div>

            <div className="md:col-span-2">
              <label className="font-semibold">Article Content</label>

              <textarea
                rows="8"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your article..."
                className="mt-2 w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="font-semibold">Upload Cover Image</label>

              <input
                type="file"
                accept="image/*"
                className="mt-2 w-full"
                onChange={(e) => setCoverImage(e.target.files[0])}
              />
            </div>

            <div>
              <label className="font-semibold">Upload PDF</label>

              <input
                type="file"
                accept=".pdf"
                className="mt-2 w-full"
                onChange={(e) => setPdfFile(e.target.files[0])}
              />
            </div>

            <div className="md:col-span-2">

              <label className="flex gap-3 items-start">

                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />

                <span>
                  I certify that this article is my original work and may be
                  reviewed before publication.
                </span>

              </label>

            </div>

            <div className="md:col-span-2 text-center">

              <button
                type="submit"
                className="bg-[#0B6E4F] text-white px-10 py-4 rounded-xl text-lg hover:bg-green-700 transition"
              >
                Submit for Review
              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contribute;