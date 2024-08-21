import Navbar from "@/components/Navbar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="scroll-smooth">
      <Navbar/>
      <div className=" bg-[#FBFBFB]">{children}</div>
    </div>
  );
}
