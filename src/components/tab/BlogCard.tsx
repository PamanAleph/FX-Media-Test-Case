import Image from "next/image";
import React from "react";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
}

export default function BlogCard({ image, title, description }: BlogCardProps) {
  return (
    <section className="max-w-sm">
      <Image src={image} alt="Image" height={1920} width={1920} className="h-48"/>
      <div className="divide-y-2 divide-yellow-400 text-black text-justify">
        <h1 className="uppercase text-xl font-medium p-2">{title}</h1>
        <p className="text-md font-normal p-2">{description}</p>
      </div>
    </section>
  );
}
