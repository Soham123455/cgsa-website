import { Link } from "react-router-dom";
import { FileText, ArrowRight } from "lucide-react";

function PendingArticles({ articles }) {
  const pending = articles
    .filter((article) => article.status === "Pending")
    .slice(0, 3);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-10">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-[#0B6E4F]">
          Latest Pending Articles
        </h2>

        <Link
          to="/admin/articles"
          className="flex items-center gap-2 text-[#0B6E4F] hover:underline"
        >
          View All
          <ArrowRight size={18} />
        </Link>

      </div>

      {pending.length === 0 ? (

        <p className="text-gray-500">
          No pending articles 🎉
        </p>

      ) : (

        <div className="space-y-5">

          {pending.map((article) => (

            <div
              key={article._id}
              className="flex justify-between items-center border-b pb-4"
            >

              <div className="flex gap-4">

                <div className="text-[#0B6E4F] mt-1">
                  <FileText size={22} />
                </div>

                <div>

                  <h3 className="font-semibold">
                    {article.title}
                  </h3>

                  <p className="text-gray-500">
                    {article.fullName}
                  </p>

                </div>

              </div>

              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                Pending
              </span>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default PendingArticles;