import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config/api";


import StatsCards from "../components/admin/dashboard/StatsCards";

import AdminLayout from "../components/admin/layout/AdminLayout";
import QuickActions from "../components/admin/dashboard/QuickActions";
import PendingArticles from "../components/admin/dashboard/PendingArticles";

function Dashboard() {
  const token = localStorage.getItem("adminToken");

if (!token) {
  return <Navigate to="/admin" replace />;
}
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Pending");

  const API = `${API_BASE_URL}/api/articles`;

  // Fetch Articles
  const fetchArticles = async () => {
    try {
      const res = await axios.get(API);

      setArticles(res.data.articles);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch articles.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Approve
  const approveArticle = async (id) => {
    try {
      await axios.put(`${API}/${id}/approve`);
      fetchArticles();
    } catch (err) {
      console.error(err);
      alert("Unable to approve article.");
    }
  };

  // Reject
  const rejectArticle = async (id) => {
    try {
      await axios.put(`${API}/${id}/reject`);
      fetchArticles();
    } catch (err) {
      console.error(err);
      alert("Unable to reject article.");
    }
  };

  // Delete
  const deleteArticle = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this article permanently?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API}/${id}`);

      fetchArticles();
    } catch (err) {
      console.error(err);
      alert("Unable to delete article.");
    }
  };

  // Statistics

  const totalArticles = articles.length;

  const pendingArticles = articles.filter(
    (a) => a.status === "Pending"
  );

  const approvedArticles = articles.filter(
    (a) => a.status === "Approved"
  );

  const rejectedArticles = articles.filter(
    (a) => a.status === "Rejected"
  );
  const filteredArticles = articles.filter((article) => {
  const matchesSearch =
    article.title.toLowerCase().includes(search.toLowerCase()) ||
    article.fullName.toLowerCase().includes(search.toLowerCase());

  const matchesFilter =
    filter === "All"
      ? true
      : article.status === filter;

  return matchesSearch && matchesFilter;
});

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading Dashboard...
      </div>
    );
  }

  return (

<AdminLayout>

  

  <div className="flex-1">

    

    <div className="p-8">

      <StatsCards
        total={totalArticles}
        pending={pendingArticles.length}
        approved={approvedArticles.length}
        rejected={rejectedArticles.length}
      />
      <div className="mb-10">
  <QuickActions />
</div>

      

      <PendingArticles articles={articles} />

      

    </div>

  </div>

</AdminLayout>

);

}

export default Dashboard;