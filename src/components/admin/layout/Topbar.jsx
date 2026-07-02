import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../common/LogoutModal";
import {
  Bell,
  Search,
  UserCircle,
  ChevronDown,
  User,
  KeyRound,
  LogOut,
} from "lucide-react";

function Topbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const [logoutOpen, setLogoutOpen] = useState(false);
  const navigate = useNavigate();
  function handleLogout() {
  localStorage.removeItem("adminToken");

  navigate("/admin");
}

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm px-10 py-5 flex justify-between items-center">

      <div>
        <h1 className="text-3xl font-bold text-[#0B6E4F]">
          Dashboard
        </h1>

        <p className="text-gray-500">
  {new Date().getHours() < 12
    ? "Good Morning"
    : new Date().getHours() < 17
    ? "Good Afternoon"
    : "Good Evening"}
  , Administrator 👋
</p>
<p className="text-sm text-gray-400 mt-1">
  {new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
</p>
      </div>

      <div className="flex items-center gap-6">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search articles, events..."
            className="pl-10 pr-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-green-600"
          />

        </div>

        {/* Notifications */}

        <div className="relative" ref={notificationRef}>

          <button
            onClick={() =>
              setNotificationOpen(!notificationOpen)
            }
          >

            <Bell
              size={24}
              className="text-gray-600 hover:text-green-700"
            />

          </button>

          {notificationOpen && (

            <div className="absolute right-0 mt-4 w-72 bg-white rounded-xl shadow-xl border z-50">

              <div className="p-4 border-b font-semibold">

                Notifications

              </div>

              <div className="p-6 text-gray-500 text-center">

                <Bell
    size={40}
    className="mx-auto text-gray-300 mb-3"
  />

  <p className="font-medium text-gray-600">
    You're all caught up!
  </p>

  <p className="text-sm text-gray-400 mt-1">
    No new notifications.
  </p>

              </div>

            </div>

          )}

        </div>

        {/* Profile */}

        <div
          className="relative"
          ref={profileRef}
        >

          <button
            onClick={() =>
              setProfileOpen(!profileOpen)
            }
            className="flex items-center gap-2"
          >

            <UserCircle
              size={36}
              className="text-[#0B6E4F]"
            />

            <ChevronDown size={18} />

          </button>

          {profileOpen && (

            <div className="absolute right-0 mt-4 w-60 bg-white rounded-xl shadow-xl border z-50">

              <div className="p-4 border-b">

                <div className="flex items-center gap-3">

  <UserCircle
    size={45}
    className="text-[#0B6E4F]"
  />

  <div>

    <p className="font-semibold">
      Administrator
    </p>

    <p className="text-sm text-gray-500">
      admin@cgsa.in
    </p>

  </div>

</div>

              </div>

              <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-100">

                <User size={18} />

                Profile

              </button>

              <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-100">

                <KeyRound size={18} />

                Change Password

              </button>

              <button
  onClick={() => {
    setProfileOpen(false);
    setLogoutOpen(true);
  }}
  className="w-full flex items-center gap-3 px-5 py-3 hover:bg-red-50 text-red-600"
>

                <LogOut size={18} />

                Logout

              </button>

            </div>

          )}

        </div>

      </div>
    <LogoutModal
  open={logoutOpen}
  onCancel={() => setLogoutOpen(false)}
  onConfirm={handleLogout}
/>
    </header>
  );
}

export default Topbar;