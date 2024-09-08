import { notFound } from "next/navigation";
import React from "react";

import { DUMMY_NEWS } from "@/dummy-news";

const ImagePage = ({ params }) => {
  const newItemSlug = params.slug;

  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePage;
