import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar />
      <div className=" bg-[#FBFBFB]">{children}</div>
      <Footer />
    </div>
  );
}
