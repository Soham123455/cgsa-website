import { useEffect, useState } from "react";
import AdminLayout from "../components/admin/layout/AdminLayout";

function AdminMessages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await fetch("https://cgsa-website.onrender.com/api/messages");
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    await fetch(`https://cgsa-website.onrender.com/api/messages/${id}`, {
      method: "DELETE",
    });

    fetchMessages();
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-5xl font-bold text-[#0B6E4F]">Messages</h1>
          <p className="text-gray-600 mt-3">
            View and manage contact form submissions.
          </p>
        </div>

        <button
          onClick={fetchMessages}
          className="bg-[#0B6E4F] text-white px-6 py-3 rounded-xl"
        >
          Refresh
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-5">Name</th>
              <th className="text-left p-5">Email</th>
              <th className="text-left p-5">Message</th>
              <th className="text-left p-5">Date</th>
              <th className="text-left p-5">Actions</th>

            </tr>

          </thead>

          <tbody>

            {messages.map((msg) => (

              <tr key={msg._id} className="border-t">

                <td className="p-5">{msg.name}</td>

                <td className="p-5">{msg.email}</td>

                <td className="p-5 max-w-sm truncate">
                  {msg.message}
                </td>

                <td className="p-5">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </td>

                <td className="p-5">

                  <button
                    onClick={() => alert(msg.message)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-3"
                  >
                    View
                  </button>

                  <button
                    onClick={() => deleteMessage(msg._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

            {messages.length === 0 && (

              <tr>

                <td
                  colSpan="5"
                  className="text-center p-8 text-gray-500"
                >
                  No messages yet.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>
    </AdminLayout>
  );
}

export default AdminMessages;
