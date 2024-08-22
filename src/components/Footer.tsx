import React from "react";
import LOGO from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

// Type definition for FooterLinks props
interface FooterLinksProps {
  links: string[];
}

// Utility function to convert label to URL format
const convertToHref = (label: string): string => {
  return (
    "/" +
    label
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^a-z0-9-]/g, "")
  );
};

// Component to render a list of links
const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link}>
          <Link href={convertToHref(link)} className="text-black">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Footer: React.FC = () => {
  return (
    <section className="bg-[#FCD44D]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto sm:py-4 p-4">
        <div className="space-y-2">
          <div className="flex flex-rows gap-4 items-center">
            <Image
              src={LOGO}
              width={300}
              height={300}
              alt="Logo"
              className="h-36 w-28"
            />
            <div>
              <p>45 Tanjong Rhu Road Singapore 436899</p>
              <p className="pt-2">
                Tel : (65) 6342 3600
                <br />
                Fax : (65) 6344 4476
              </p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7956612674834!2d103.87925657453086!3d1.2972861617434681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da185aea670045%3A0x592f2a9de95da38e!2sSingapore%20Swimming%20Club!5e0!3m2!1sid!2sid!4v1724322798481!5m2!1sid!2sid"
            className="w-full"
            loading="lazy"
          ></iframe>
          <div className="space-y-2 pt-2">
            <h5>Email Newsletter</h5>
            <p>Subscribe to receive news in your inbox</p>
            <input
              type="email"
              id="UserEmail"
              placeholder="Email Address"
              className="w-full p-2 rounded-sm"
            />
            <button className="bg-[#0071BA] text-white w-full p-2 rounded-sm">
                Subscribe
            </button>
          </div>
        </div>

        <div>
          <FooterLinks
            links={[
              "Home",
              "About Us",
              "Brief History",
              "Club Milestone",
              "Swimming Milestones",
              "Management Comittee & Club Management",
              "Club Directory",
              "Club Buzz",
              "Facilities",
              "Sport",
              "General",
            ]}
          />
        </div>

        <div>
          <FooterLinks
            links={[
              "Membership",
              "Membership Schemes",
              "Repiprocal Schemes",
              "Golfing Membership",
              "Transfer Procdures & FAQ",
              "Find Out More",
              "Banquet",
              "Photo Gallery",
              "Sport",
              "Swimming",
              "Social",
            ]}
          />
        </div>

        <div>
          <FooterLinks
            links={[
              "wine And Dine",
              "Jackson Miller",
              "The Palms",
              "Jade Phoenix",
              "Cabana",
              "Le Petit Tressor",
              "The Delicatesen",
              "Fountain Bar",
              "D'Tanjong",
              "D'Sports",
              "D'Galaxy",
              "Straits of Malacca",
              "What's New",
              "Sports",
              "Swimming",
              "Social",
            ]}
          />
        </div>
      </div>

      {/* Copy Right */}
      <div className="bg-[#141826] sm:py-4 p-4">
        <p className="text-[#F0F0F0] text-center">
          &copy; Copyright 2015. Singapore Swimming Club. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
