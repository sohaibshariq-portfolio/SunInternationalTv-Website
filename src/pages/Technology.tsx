import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";

const Technology = () => {
  const techNews = [
    {
      title: "AI Breakthrough: New Model Achieves Human-Level Reasoning",
      description: "Researchers unveil advanced artificial intelligence with unprecedented capabilities.",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      time: "1 hour ago",
    },
    {
      title: "Quantum Computing Reaches Commercial Viability",
      description: "Tech giants announce first practical applications for quantum processors.",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
      time: "2 hours ago",
    },
    {
      title: "Next-Generation Smartphones Feature Revolutionary Display",
      description: "Foldable screens and extended battery life headline latest device releases.",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Technology</h1>
          <p className="text-muted-foreground">Latest innovations, gadgets, and tech industry news</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Technology;
