import AdminLayout from "../components/admin/layout/AdminLayout";

function AdminGallery() {
  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold text-[#0B6E4F]">
        Gallery
      </h1>

      <p className="mt-3 text-gray-600">
        Upload and manage gallery images.
      </p>

    </AdminLayout>
  );
}

export default AdminGallery;