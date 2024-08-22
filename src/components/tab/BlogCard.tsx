import Image from "next/image";
import React from "react";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  position?: string
}

export default function BlogCard({ image, title, description, position = "justify" }: BlogCardProps) {
  return (
    <section className="max-w-md">
      <Image
        src={image}
        alt={`${title}'s Image`}
        height={1920}
        width={1920}
        className="h-48 w-full"
        priority
      />
      <div className="divide-y-2 divide-yellow-400 text-black">
        <h1 className="uppercase text-lg font-medium p-2">{title}</h1>
        <p className={`text-md font-normal p-2 text-${position} whitespace-pre-wrap`}>{description}</p>
      </div>
    </section>
  );
}
