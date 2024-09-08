"use client";

import React, { useEffect, useState } from "react";

import NewsList from "@/components/news-list";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:8080/news");
        const newsData = await response.json();
        setNews(newsData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>News Page</h1>
      {news && news.length > 0 && <NewsList news={news} />}
    </>
  );
};

export default NewsPage;
