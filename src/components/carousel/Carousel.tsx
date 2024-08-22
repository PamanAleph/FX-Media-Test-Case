"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Script from "next/script";

const Carousel = () => {
  useEffect(() => {
    // Ensures videos pause when not active
    const carouselItems = document.querySelectorAll(".carousel-item");
    carouselItems.forEach((item: Element) => {
      item.addEventListener("slide.bs.carousel", () => {
        const videos = item.querySelectorAll("video");
        videos.forEach((video) => {
          video.pause();
        });
      });
      item.addEventListener("slid.bs.carousel", () => {
        const activeItem = document.querySelector(".carousel-item.active");
        if (activeItem) {
          const videos = activeItem.querySelectorAll("video");
          videos.forEach((video) => {
            video.play();
          });
        }
      });
    });
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />

      <div
        id="carouselExampleIndicators"
        className="carousel slide mt-0"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>

        <div
          className="carousel-inner h-[100%] max-h-[600px] object-cover"
          style={{ height: "600px" }}
        >
          <div className="carousel-item active h-[100%]">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item h-[100%]">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item h-[100%]">
            <Image
              src="/home-1.png"
              alt="Image 1"
              width={1920}
              height={1080}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="carousel-item h-[100%]">
            <Image
              src="/home-2.png"
              alt="Image 2"
              width={1920}
              height={1080}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
