import Carousel from "@/components/carousel/Carousel";
import NewsSection from "@/components/news/NewsSection";
import UpcomingNews from "@/components/news/UpcomingNews";
import TabSection from "@/components/tab/TabSection";

export default function Home() {
  return (
    <section className="space-y-6 z-10">
      <Carousel />
      <TabSection />
      <UpcomingNews/>
      <NewsSection />
    </section>
  );
}
