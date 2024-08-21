import React from "react";

interface NewsCardProps {
  title: string;
  date: string;
  description: string;
}

// Function to process the description
const processDescription = (description: string) => {
    const parts = description.split(/(\*[^*]+\*)/g);
    
    return parts.map((part, index) => 
      part.startsWith('*') && part.endsWith('*') 
        ? <strong key={index}>{part.slice(1, -1)}</strong> 
        : <React.Fragment key={index}>{part}</React.Fragment>
    );
  };

export default function NewsCard({ title, date, description }: NewsCardProps) {
  return (
    <section className="border-l-cyan-700 border-l-4 max-w-md text-justify text-black">
      <div className="p-4">
        <p className="text-gray-500 text-md">{date}</p>
        <h1 className="font-semibold text-lg uppercase py-2">{title}</h1>
        <p className="text-[#5E5A51] whitespace-pre-wrap">
          {processDescription(description)}
        </p>
      </div>
    </section>
  );
}
