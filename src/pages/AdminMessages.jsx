import AdminLayout from "../components/admin/layout/AdminLayout";

function AdminMessages() {
  const handleView = () => {
    alert(
`Name : Mahatma Gandhi

Email : gandhi@example.com

Subject : Research Collaboration

Message :

I would like to collaborate with the Centre of Gandhian Studies regarding a research publication.`
    );
  };

  const handleDelete = () => {
    if (window.confirm("Delete this message?")) {
      alert("Message Deleted");
    }
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[#0B6E4F]">
            Messages
          </h1>
          <p className="mt-2 text-gray-600">
            View and manage contact form submissions.
          </p>
        </div>

        <button className="bg-[#0B6E4F] text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
          Refresh
        </button>
      </div>

      <div className="mt-8 bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Subject</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Status</th>
              <th className="text-center p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-4 font-semibold">
                Mahatma Gandhi
              </td>
              <td className="p-4">
                gandhi@example.com
              </td>
              <td className="p-4">
                Research Collaboration
              </td>
              <td className="p-4">
                Today
              </td>
              <td className="p-4">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Unread
                </span>
              </td>
              <td className="p-4 flex gap-2 justify-center">
                <button
                  onClick={handleView}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  View
                </button>

                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default AdminMessages;