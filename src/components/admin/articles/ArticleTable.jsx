import StatusBadge from "./StatusBadge";
import API_BASE_URL from "../../../config/api";

import {
  Eye,
  CheckCircle,
  XCircle,
  Trash2,
} from "lucide-react";

function ArticleTable({
  articles,
  approveArticle,
  rejectArticle,
  deleteArticle,
  viewArticle,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      <table className="w-full">

        <thead className="bg-[#0B6E4F] text-white">

          <tr>

  <th className="p-4 text-left">Status</th>

  

  <th className="p-4 text-left">Title</th>

  <th className="p-4 text-left">Author</th>

  <th className="p-4 text-left">Email</th>

  <th className="p-4 text-left">Submitted</th>

  <th className="p-4 text-left">Actions</th>

</tr>

        </thead>

        <tbody>

          {articles.map((article) => (

            <tr
              key={article._id}
              className="border-b hover:bg-gray-50 transition"
            >

              <td className="p-4">
    <StatusBadge status={article.status} />
  </td>

  

  <td className="p-4 font-semibold">

    {article.title}

  </td>

  <td className="p-4">

    {article.fullName}

  </td>

  <td className="p-4 text-gray-600">

    {article.email}

  </td>

  <td className="p-4 text-gray-600">

    {new Date(article.createdAt).toLocaleDateString()}

  </td>

  <td className="p-4">

    <div className="flex items-center gap-4">

      <button
        onClick={() => viewArticle(article)}
        title="View"
        className="text-blue-600 hover:text-blue-800"
      >
        <Eye size={20} />
      </button>

      <button
        onClick={() => approveArticle(article._id)}
        title="Approve"
        className="text-green-600 hover:text-green-800"
      >
        <CheckCircle size={20} />
      </button>

      <button
        onClick={() => rejectArticle(article._id)}
        title="Reject"
        className="text-yellow-500 hover:text-yellow-700"
      >
        <XCircle size={20} />
      </button>

      <button
        onClick={() => deleteArticle(article._id)}
        title="Delete"
        className="text-red-600 hover:text-red-800"
      >
        <Trash2 size={20} />
      </button>

    </div>

  </td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ArticleTable;