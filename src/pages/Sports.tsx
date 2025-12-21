import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";

const Sports = () => {
  const sportsNews = [
    {
      title: "Championship Finals: Underdog Team Stuns Favorites",
      description: "Historic comeback victory sends fans into celebration frenzy.",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
      time: "1 hour ago",
    },
    {
      title: "Record-Breaking Performance at Olympics Qualifier",
      description: "Athlete shatters long-standing world record in dramatic fashion.",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=600&fit=crop",
      time: "2 hours ago",
    },
    {
      title: "Major League Signs Groundbreaking Broadcasting Deal",
      description: "Multi-billion dollar agreement reshapes sports media landscape.",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&h=600&fit=crop",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Sports</h1>
          <p className="text-muted-foreground">Scores, highlights, and analysis from around the sporting world</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportsNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sports;
