import AdminLayout from "../components/admin/layout/AdminLayout";

function AdminSettings() {
  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold text-[#0B6E4F]">
        Settings
      </h1>

      <p className="mt-3 text-gray-600">
        Configure website and administrator settings.
      </p>

    </AdminLayout>
  );
}

export default AdminSettings;