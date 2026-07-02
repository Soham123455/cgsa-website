import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F8F5EF]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Top Navigation */}
        <Topbar />

        {/* Page Content */}
        <main className="p-8 flex-1">
          {children}
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;