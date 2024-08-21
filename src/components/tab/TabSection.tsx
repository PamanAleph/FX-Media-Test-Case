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

  const filteredBlogData = blogData.filter(blog => blog.type === tabs[activeTab].type);

  return (
    <section className="max-w-5xl mx-auto space-y-4">
      <div className="flex items-center space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-1  rounded-sm rounded${
              activeTab === index
                ? "text-white bg-blue-600"
                : "border-gray-300 border-b-2 text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto px-4 sm:p-0">
          {filteredBlogData.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image.src}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
