function LogoutModal({ open, onCancel, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[999]">

      <div className="bg-white rounded-2xl shadow-xl w-[420px] p-8">

        <h2 className="text-2xl font-bold text-[#0B6E4F] mb-4">
          Logout
        </h2>

        <p className="text-gray-600 mb-8">
          Are you sure you want to logout?
        </p>

        <div className="flex justify-end gap-4">

          <button
            onClick={onCancel}
            className="px-5 py-2 rounded-lg border"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default LogoutModal;