import { useState } from "react";
import AdminLayout from "../components/admin/layout/AdminLayout";

function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-[#0B6E4F]">
            Website Settings
          </h1>

          <p className="text-gray-500 mt-2">
            Configure your CGSA website from one place.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* LEFT MENU */}
          <div className="col-span-3">
            <div className="bg-white rounded-2xl shadow-md p-3">
              <button
                onClick={() => setActiveTab("general")}
                className={`w-full text-left px-5 py-4 rounded-xl transition ${
                  activeTab === "general"
                    ? "bg-[#0B6E4F] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                General
              </button>

              <button
                onClick={() => setActiveTab("homepage")}
                className={`w-full text-left px-5 py-4 rounded-xl transition ${
                  activeTab === "homepage"
                    ? "bg-[#0B6E4F] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                Homepage
              </button>

              <button
                onClick={() => setActiveTab("social")}
                className={`w-full text-left px-5 py-4 rounded-xl transition ${
                  activeTab === "social"
                    ? "bg-[#0B6E4F] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                Social Links
              </button>

              <button
                onClick={() => setActiveTab("admin")}
                className={`w-full text-left px-5 py-4 rounded-xl transition ${
                  activeTab === "admin"
                    ? "bg-[#0B6E4F] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                Administrator
              </button>

              <button
                onClick={() => setActiveTab("preferences")}
                className={`w-full text-left px-5 py-4 rounded-xl transition ${
                  activeTab === "preferences"
                    ? "bg-[#0B6E4F] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                Preferences
              </button>

              <button
                onClick={() => setActiveTab("security")}
                className={`w-full text-left px-5 py-4 rounded-xl transition ${
                  activeTab === "security"
                    ? "bg-[#0B6E4F] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                Security
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="col-span-9">
            <div className="bg-white rounded-3xl shadow-md p-10">
              
              {activeTab === "general" && (
                <>
                  <h2 className="text-2xl font-bold text-[#0B6E4F] mb-8">
                    General Website Information
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-semibold">Website Name</label>
                      <input
                        className="mt-2 w-full border rounded-xl p-3"
                        defaultValue="Centre of Gandhian Studies & Action"
                      />
                    </div>

                    <div>
                      <label className="font-semibold">College Name</label>
                      <input
                        className="mt-2 w-full border rounded-xl p-3"
                        defaultValue="Menon College"
                      />
                    </div>

                    <div>
                      <label className="font-semibold">Contact Email</label>
                      <input
                        className="mt-2 w-full border rounded-xl p-3"
                        defaultValue="cgsa@menoncollege.edu"
                      />
                    </div>

                    <div>
                      <label className="font-semibold">Phone</label>
                      <input
                        className="mt-2 w-full border rounded-xl p-3"
                        defaultValue="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="font-semibold">Website Tagline</label>
                      <textarea
                        rows="3"
                        className="mt-2 w-full border rounded-xl p-3"
                        defaultValue="Truth • Service • Research • Action"
                      />
                    </div>
                  </div>

                  <button
                    className="
                      mt-10
                      bg-[#0B6E4F]
                      text-white
                      px-8
                      py-3
                      rounded-xl
                      hover:bg-green-700
                      transition
                    "
                  >
                    Save Changes
                  </button>
                </>
              )}

              {activeTab === "homepage" && (

<div>

<h2 className="text-2xl font-bold text-[#0B6E4F] mb-8">
Homepage Content
</h2>

<div className="grid md:grid-cols-2 gap-6">

<div>
<label className="font-semibold">
Hero Title
</label>

<input
className="mt-2 w-full border rounded-xl p-3"
defaultValue="Learn. Reflect. Serve."
/>
</div>

<div>
<label className="font-semibold">
Hero Quote
</label>

<input
className="mt-2 w-full border rounded-xl p-3"
defaultValue="The future depends on what we do today."
/>
</div>

<div className="md:col-span-2">

<label className="font-semibold">
Hero Description
</label>

<textarea
rows="4"
className="mt-2 w-full border rounded-xl p-3"
defaultValue="A digital knowledge platform dedicated to preserving, promoting and publishing Gandhian philosophy."
/>

</div>

<div className="md:col-span-2">

<label className="font-semibold">
About Section
</label>

<textarea
rows="5"
className="mt-2 w-full border rounded-xl p-3"
defaultValue="The Centre of Gandhian Studies & Action promotes Gandhian philosophy through education, research and community service."
/>

</div>

</div>

<button
className="
mt-8
bg-[#0B6E4F]
text-white
px-8
py-3
rounded-xl
hover:bg-green-700
transition
"
>
Save Homepage
</button>

</div>

)}

              {activeTab === "social" && (

<div>

<h2 className="text-2xl font-bold text-[#0B6E4F] mb-8">
Social Links
</h2>

<div className="space-y-6">

<div>

<label className="font-semibold">
Instagram
</label>

<input
className="mt-2 w-full border rounded-xl p-3"
placeholder="https://instagram.com/..."
/>

</div>

<div>

<label className="font-semibold">
LinkedIn
</label>

<input
className="mt-2 w-full border rounded-xl p-3"
placeholder="https://linkedin.com/..."
/>

</div>

<div>

<label className="font-semibold">
YouTube
</label>

<input
className="mt-2 w-full border rounded-xl p-3"
placeholder="https://youtube.com/..."
/>

</div>

<div>

<label className="font-semibold">
Official Email
</label>

<input
className="mt-2 w-full border rounded-xl p-3"
placeholder="cgsa@college.edu"
/>

</div>

</div>

<button
className="
mt-8
bg-[#0B6E4F]
text-white
px-8
py-3
rounded-xl
hover:bg-green-700
transition
"
>
Save Social Links
</button>

</div>

)}

              {activeTab==="admin" && (

<div>

<h2 className="text-2xl font-bold text-[#0B6E4F] mb-8">
Administrator Account
</h2>

<div className="grid md:grid-cols-2 gap-6">

<input
className="border rounded-xl p-3"
placeholder="Administrator Name"
/>

<input
className="border rounded-xl p-3"
placeholder="Email"
/>

<input
className="border rounded-xl p-3"
placeholder="New Password"
/>

<input
className="border rounded-xl p-3"
placeholder="Confirm Password"
/>

</div>

<button
className="
mt-8
bg-[#0B6E4F]
text-white
px-8
py-3
rounded-xl
hover:bg-green-700
"
>
Update Administrator
</button>

</div>

)}

              {activeTab==="preferences" && (

<div>

<h2 className="text-2xl font-bold text-[#0B6E4F] mb-8">
Website Preferences
</h2>

<div className="space-y-6">

<label className="flex justify-between items-center border rounded-xl p-5">

<span>Enable Visitor Contributions</span>

<input type="checkbox" defaultChecked />

</label>

<label className="flex justify-between items-center border rounded-xl p-5">

<span>Enable Gallery</span>

<input type="checkbox" defaultChecked />

</label>

<label className="flex justify-between items-center border rounded-xl p-5">

<span>Enable Events</span>

<input type="checkbox" defaultChecked />

</label>

<label className="flex justify-between items-center border rounded-xl p-5">

<span>Maintenance Mode</span>

<input type="checkbox" />

</label>

</div>

<button
className="
mt-8
bg-[#0B6E4F]
text-white
px-8
py-3
rounded-xl
"
>
Save Preferences
</button>

</div>

)}

              {activeTab==="security" && (

<div>

<h2 className="text-2xl font-bold text-[#0B6E4F] mb-8">
Security & Backup
</h2>

<div className="grid md:grid-cols-2 gap-6">

<button className="border rounded-xl p-5 hover:bg-gray-100">
📥 Export Articles
</button>

<button className="border rounded-xl p-5 hover:bg-gray-100">
💾 Backup Database
</button>

<button className="border rounded-xl p-5 hover:bg-gray-100">
🧹 Clear Cache
</button>

<button className="border rounded-xl p-5 hover:bg-red-100 text-red-600">
🚪 Logout All Devices
</button>

</div>

</div>

)}

            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminSettings;