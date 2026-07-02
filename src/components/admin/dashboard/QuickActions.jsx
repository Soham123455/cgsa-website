import { FileText, CalendarDays, Image, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Review Articles",
      subtitle: "Manage submissions",
      icon: <FileText size={32} />,
      route: "/admin/articles",
    },
    {
      title: "Manage Events",
      subtitle: "Upcoming events",
      icon: <CalendarDays size={32} />,
      route: "/admin/events",
    },
    {
      title: "Gallery",
      subtitle: "Upload photos",
      icon: <Image size={32} />,
      route: "/admin/gallery",
    },
    {
      title: "Settings",
      subtitle: "Website configuration",
      icon: <Settings size={32} />,
      route: "/admin/settings",
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {actions.map((action) => (

          <button
            key={action.title}
            onClick={() => navigate(action.route)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-left"
          >
            <div className="text-[#0B6E4F] mb-4">
              {action.icon}
            </div>

            <h3 className="font-bold text-lg">
              {action.title}
            </h3>

            <p className="text-gray-500 mt-2">
              {action.subtitle}
            </p>

          </button>

        ))}

      </div>
    </div>
  );
}

export default QuickActions;