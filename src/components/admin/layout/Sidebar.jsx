import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  FileText,
  CalendarDays,
  Image,
  Mail,
  Settings,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <FileText size={20} />,
      title: "Articles",
      path: "/admin/articles",
    },
    {
      icon: <CalendarDays size={20} />,
      title: "Events",
      path: "/admin/events",
    },
    {
      icon: <Image size={20} />,
      title: "Gallery",
      path: "/admin/gallery",
    },
    {
      icon: <Mail size={20} />,
      title: "Messages",
      path: "/admin/messages",
    },
    {
      icon: <Settings size={20} />,
      title: "Settings",
      path: "/admin/settings",
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-[#0B6E4F] text-white flex flex-col shadow-xl">

      {/* Logo */}
      <div className="p-8 border-b border-green-700">
        <h1 className="text-3xl font-bold">
          CGSA CMS
        </h1>

        <p className="text-green-200 mt-2 text-sm">
          Admin Control Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">

        {menuItems.map((item, index) => (

          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `w-full flex items-center gap-4 px-8 py-4 transition duration-200 text-left ${
                isActive
                  ? "bg-green-800 border-r-4 border-yellow-400"
                  : "hover:bg-green-700"
              }`
            }
          >
            {item.icon}

            <span className="text-lg">
              {item.title}
            </span>

          </NavLink>
          

        ))}

      </nav>
<div className="mt-auto border-t border-green-700 p-6 text-center">

  <p className="text-xs uppercase tracking-[0.25em] text-green-300">
    Powered By
  </p>

  <p className="mt-3 text-sm font-semibold leading-6 text-white">
    Centre of Gandhian Studies
    <br />
    & Action
  </p>

  <p className="mt-4 text-xs text-green-200">
    Version 1.0
  </p>

</div>

      

    </aside>
  );
}

export default Sidebar;