import axios from "axios";
import API_BASE_URL from "../config/api";

const API = `${API_BASE_URL}/api/articles`;

// Get all articles
export const getArticles = async () => {
  const response = await axios.get(API);
  return response.data.articles;
};

// Approve article
export const approveArticle = async (id) => {
  await axios.put(`${API}/${id}/approve`);
};

// Reject article
export const rejectArticle = async (id) => {
  await axios.put(`${API}/${id}/reject`);
};

// Delete article
export const deleteArticle = async (id) => {
  await axios.delete(`${API}/${id}`);
};