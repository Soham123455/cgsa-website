import API_BASE_URL from "../../../config/api";
import { X } from "lucide-react";

function ArticleModal({
  article,
  open,
  onClose,
  approveArticle,
  rejectArticle,
  deleteArticle,
}) {
  if (!open || !article) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-5">

      <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-6">

          <div>

            <h2 className="text-3xl font-bold text-[#0B6E4F]">

              {article.title}

            </h2>

            <p className="text-gray-500 mt-1">

              Submitted by {article.fullName}

            </p>

          </div>

          <button onClick={onClose}>

            <X size={28} />

          </button>

        </div>

        {/* Body */}

        <div className="p-8 space-y-8">

          <div className="grid md:grid-cols-2 gap-5">

            <Info label="Email" value={article.email} />
            <Info label="Department" value={article.department} />
            <Info label="Category" value={article.category} />
            <Info
              label="Status"
              value={article.status}
            />

          </div>

          {/* Abstract */}

          <section>

            <h3 className="text-xl font-bold mb-3">

              Abstract

            </h3>

            <p className="text-gray-700 leading-8">

              {article.abstract}

            </p>

          </section>

          {/* Content */}

          <section>

            <h3 className="text-xl font-bold mb-3">

              Full Article

            </h3>

            <p className="text-gray-700 whitespace-pre-line leading-8">

              {article.content}

            </p>

          </section>

          {/* Cover */}

          {article.coverImage && (

            <section>

              <h3 className="text-xl font-bold mb-4">

                Cover Image

              </h3>

              <img
                src={`${API_BASE_URL}/uploads/${article.coverImage}`}
                alt="Cover"
                className="rounded-xl max-h-96"
              />

            </section>

          )}

          {/* PDF */}

          {article.pdfFile && (

            <section>

              <h3 className="text-xl font-bold mb-4">

                PDF

              </h3>

              <a
                href={`${API_BASE_URL}/uploads/${article.pdfFile}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                Open PDF
              </a>

            </section>

          )}

        </div>

        {/* Footer */}

        <div className="border-t p-6 flex justify-end gap-4">

          <button
            onClick={() => approveArticle(article._id)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Approve
          </button>

          <button
            onClick={() => rejectArticle(article._id)}
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg"
          >
            Reject
          </button>

          <button
            onClick={() => deleteArticle(article._id)}
            className="bg-red-600 text-white px-6 py-3 rounded-lg"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>

      <p className="text-sm text-gray-500">

        {label}

      </p>

      <p className="font-semibold">

        {value}

      </p>

    </div>
  );
}

export default ArticleModal;