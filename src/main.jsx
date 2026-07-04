import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Articles from "./pages/Articles";
import ArticlePage from "./pages/ArticlePage";
import ContributePage from "./pages/Contribute";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import AdminArticles from "./pages/AdminArticles";
import AdminEvents from "./pages/AdminEvents";
import AdminGallery from "./pages/AdminGallery";
import AdminMessages from "./pages/AdminMessages";
import AdminSettings from "./pages/AdminSettings";
import EventRegistration from "./pages/EventRegistration";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <ThemeProvider>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/articles" element={<AdminArticles />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/admin/gallery" element={<AdminGallery />} />
          <Route path="/admin/messages" element={<AdminMessages />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/register" element={<EventRegistration />} />
        </Routes>

      </BrowserRouter>

    </ThemeProvider>

  </React.StrictMode>
);