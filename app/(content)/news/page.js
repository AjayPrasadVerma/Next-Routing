import React from "react";

import NewsList from "@/components/news-list";

const NewsPage = async () => {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const newsData = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={newsData} />
    </>
  );
};

export default NewsPage;
