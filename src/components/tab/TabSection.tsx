"use client";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { blogData } from "@/lib/data";

type Tab = {
  label: string;
  type: string;
};

const tabs: Tab[] = [
  {
    label: "Featured",
    type: "Featured",
  },
  {
    label: "Events",
    type: "Events",
  },
  {
    label: "Publications",
    type: "Publications",
  },
];

export default function TabSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const filteredBlogData = blogData.filter(
    (blog) => blog.type === tabs[activeTab].type
  );

  return (
    <section className="max-w-7xl mx-auto space-y-4 p-4">
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-3 py-2 sm:px-5 sm:py-2 rounded-md text-sm sm:text-base ${
              activeTab === index
                ? "text-white bg-blue-600"
                : "border-gray-300 bg-gray-100 border-b-2 text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBlogData.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image.src}
            title={blog.title}
            position={blog.position}
            description={blog.description}
          />
        ))}
      </div>
    </section>
  );
}
