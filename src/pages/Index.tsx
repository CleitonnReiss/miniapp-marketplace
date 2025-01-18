import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { CategorySection } from "@/components/CategorySection";
import { FeaturedSection } from "@/components/FeaturedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1A1F2C]">
      <Navbar />
      <main className="pt-14">
        <SearchBar />
        <CategorySection />
        <FeaturedSection />
      </main>
    </div>
  );
};

export default Index;