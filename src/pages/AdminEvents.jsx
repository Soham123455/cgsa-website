import { useState } from "react";
import AdminLayout from "../components/admin/layout/AdminLayout";

function AdminEvents() {
  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    venue: "",
    description: "",
  });

  const handleAddEvent = () => {
    setShowModal(true);
  };

  const handleView = () => {
    alert(`
Title :
Gandhi Jayanti Seminar

Date :
02 October 2026

Venue :
Menon College Auditorium

Time :
10:00 AM

Speaker :
Guest Faculty

Description :
Discussion on Gandhian Philosophy.
`);
  };

  const handleEdit = () => {
    alert("Edit Event feature coming soon.");
  };

  const handleDelete = () => {
    if (window.confirm("Delete this event?")) {
      alert("Event Deleted");
    }
  };

  const saveEvent = () => {
    console.log(eventData);
    alert("Event Saved Successfully!");
    console.table(eventData);
    setShowModal(false);
    setEventData({
      title: "",
      date: "",
      venue: "",
      description: "",
    });
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-[#0B6E4F]">
            Events
          </h1>

          <p className="mt-2 text-gray-600">
            Manage upcoming events, workshops and seminars.
          </p>
        </div>

        <button
          onClick={handleAddEvent}
          className="
            bg-[#0B6E4F]
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-green-700
            transition
          "
        >
          + Add Event
        </button>
      </div>

      <div className="mt-8 bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Venue</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-4 font-semibold">
                Gandhi Jayanti Seminar
              </td>

              <td className="p-4">
                02 Oct 2026
              </td>

              <td className="p-4">
                Menon College Auditorium
              </td>

              <td className="p-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  Upcoming
                </span>
              </td>

              <td className="p-4">
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={handleView}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    View
                  </button>

                  <button
                    onClick={handleEdit}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add New Event Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[600px] p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-[#0B6E4F] mb-6">
              Add New Event
            </h2>

            <input
              type="text"
              placeholder="Event Title"
              value={eventData.title}
              onChange={(e) =>
                setEventData({ ...eventData, title: e.target.value })
              }
              className="w-full border rounded-lg p-3 mb-4"
            />

            <input
              type="date"
              value={eventData.date}
              onChange={(e) =>
                setEventData({ ...eventData, date: e.target.value })
              }
              className="w-full border rounded-lg p-3 mb-4"
            />

            <input
              type="text"
              placeholder="Venue"
              value={eventData.venue}
              onChange={(e) =>
                setEventData({ ...eventData, venue: e.target.value })
              }
              className="w-full border rounded-lg p-3 mb-4"
            />

            <textarea
              rows="4"
              placeholder="Description"
              value={eventData.description}
              onChange={(e) =>
                setEventData({ ...eventData, description: e.target.value })
              }
              className="w-full border rounded-lg p-3"
            />

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 rounded-lg border hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={saveEvent}
                className="px-6 py-2 bg-[#0B6E4F] text-white rounded-lg hover:bg-green-700 transition"
              >
                Save Event
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default AdminEvents;