"use client";
import React, { useState } from "react";
import { newsData } from "@/lib/data";
import NewsCard from "./NewsCard";

export default function NewsSection() {
  const [showAll, setShowAll] = useState(false);
  const handleReadMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="px-4 py-8">
      <h1 className="text-[#0171BB] text-4xl font-bold mb-8 max-w-5xl mx-auto">
        News
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto max-w-5xl">
        {newsData.slice(0, showAll ? newsData.length : 2).map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            date={news.date}
            description={news.description}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleReadMoreClick}
          className={`px-6 py-3 text-white font-semibold rounded-lg transition-colors ${
            showAll ? 'bg-blue-700 hover:bg-blue-800' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {showAll ? "Show Less" : "Read More +"}
        </button>
      </div>
    </div>
  );
}
