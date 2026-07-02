import AdminLayout from "../components/admin/layout/AdminLayout";

function AdminMessages() {
  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold text-[#0B6E4F]">
        Messages
      </h1>

      <p className="mt-3 text-gray-600">
        View and manage contact form submissions.
      </p>

    </AdminLayout>
  );
}

export default AdminMessages;