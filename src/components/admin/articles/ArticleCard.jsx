import {
  User,
  Mail,
  Building2,
  Calendar,
  FileText,
  Image,
  CheckCircle,
  XCircle,
  Trash2,
} from "lucide-react";

function ArticleCard({
  article,
  approveArticle,
  rejectArticle,
  deleteArticle,
}) {

  return (
    <div className="bg-white rounded-2xl shadow-md p-7 mb-6">

      <h2 className="text-2xl font-bold text-[#0B6E4F] mb-5">
        {article.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-4 text-gray-700 mb-6">

        <p className="flex items-center gap-2">
          <User size={18} />
          {article.fullName}
        </p>

        <p className="flex items-center gap-2">
          <Mail size={18} />
          {article.email}
        </p>

        <p className="flex items-center gap-2">
          <Building2 size={18} />
          {article.department}
        </p>

        <p className="flex items-center gap-2">
          <Calendar size={18} />
          {new Date(article.createdAt).toLocaleDateString()}
        </p>

      </div>

      <div className="flex gap-4 mb-6">

        {article.coverImage && (
          <a
            href={`http://localhost:5000/uploads/${article.coverImage}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-green-700 hover:underline"
          >
            <Image size={18} />
            View Cover
          </a>
        )}

        {article.pdfFile && (
          <a
            href={`http://localhost:5000/uploads/${article.pdfFile}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:underline"
          >
            <FileText size={18} />
            View PDF
          </a>
        )}

      </div>

      <div className="flex gap-3 flex-wrap">

        <button
          onClick={() => approveArticle(article._id)}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
        >
          <CheckCircle size={18} />
          Approve
        </button>

        <button
          onClick={() => rejectArticle(article._id)}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
        >
          <XCircle size={18} />
          Reject
        </button>

        <button
          onClick={() => deleteArticle(article._id)}
          className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg"
        >
          <Trash2 size={18} />
          Delete
        </button>

      </div>

    </div>
  );
}

export default ArticleCard;