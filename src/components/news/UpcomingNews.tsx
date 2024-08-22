import Link from "next/link";
import React from "react";

export default function UpcomingNews() {
  return (
    <section className="max-w-7xl mx-auto space-y-4 p-4 text-sm md:text-lg">
      <div className="flex items-center border-r-4 border-[#0071BA]">
        <div className="bg-[#0071BA] w-1/3 flex items-center px-4">
          <p className="text-white uppercase flex items-center pt-3">
            Upcoming News
          </p>
        </div>
        <div className="bg-white w-2/3 px-4 flex items-center">
          <p className="text-black uppercase flex items-center pt-3">
            Sale Ordinary Membership at the Club
          </p>
        </div>
      </div>
      <div className="text-justify space-y-2">
        <p>
            We are pleased to inform you that Members can now use their Credits Card to make purchase at the week-end Bazaar stalls. <span className="text-cyan-200 hover:underline"><Link href="#">Read More</Link></span>
        </p>
        <p>
            Come out and dance to a live band and have the time of your life. Gentlemen , this is a chance to wear your tuxedos, and ladies find your little black dress that you have always wanted to wear. <span className="text-cyan-200 hover:underline"><Link href="#">Read More</Link></span>
        </p>
      </div>
    </section>
  );
}
