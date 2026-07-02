import { useEffect, useState } from "react";

import AdminLayout from "../components/admin/layout/AdminLayout";
import SearchBar from "../components/admin/dashboard/SearchBar";
import ArticleTable from "../components/admin/articles/ArticleTable";
import ArticleModal from "../components/admin/articles/ArticleModal";

import {
  getArticles,
  approveArticle,
  rejectArticle,
  deleteArticle,
} from "../services/articleService";

function AdminArticles() {

  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchArticles = async () => {
    try {
      const data = await getArticles();
      setArticles(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleApprove = async (id) => {
    await approveArticle(id);
    fetchArticles();
  };

  const handleReject = async (id) => {
    await rejectArticle(id);
    fetchArticles();
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this article permanently?"
    );

    if (!confirmDelete) return;

    await deleteArticle(id);

    fetchArticles();
  };
  const handleView = (article) => {
  setSelectedArticle(article);
  setModalOpen(true);
};

  const filteredArticles = articles.filter((article) => {

    const matchesSearch =
      article.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      article.fullName
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All"
        ? true
        : article.status === filter;

    return matchesSearch && matchesFilter;

  });

  return (

    <AdminLayout>

      <h1 className="text-4xl font-bold text-[#0B6E4F] mb-2">
        Articles
      </h1>

      <p className="text-gray-600 mb-8">
        Manage submitted articles.
      </p>

      <SearchBar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      {loading ? (

  <p>Loading...</p>

) : (

  <>

    <ArticleTable
      articles={filteredArticles}
      approveArticle={handleApprove}
      rejectArticle={handleReject}
      deleteArticle={handleDelete}
      viewArticle={handleView}
    />

    <ArticleModal
      article={selectedArticle}
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      approveArticle={handleApprove}
      rejectArticle={handleReject}
      deleteArticle={handleDelete}
    />

  </>

)}

    </AdminLayout>

  );

}

export default AdminArticles;