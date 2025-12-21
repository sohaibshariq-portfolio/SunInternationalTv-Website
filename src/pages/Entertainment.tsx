import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";

const Entertainment = () => {
  const entertainmentNews = [
    {
      title: "Blockbuster Film Breaks Opening Weekend Records",
      description: "Highly anticipated movie exceeds box office expectations worldwide.",
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
      time: "1 hour ago",
    },
    {
      title: "Music Awards Ceremony Features Surprise Performances",
      description: "Industry's biggest night delivers memorable moments and unexpected winners.",
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
      time: "2 hours ago",
    },
    {
      title: "Streaming Platform Announces Slate of Original Series",
      description: "Major investment in content production promises diverse programming.",
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Entertainment</h1>
          <p className="text-muted-foreground">Movies, music, TV shows, and celebrity news</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entertainmentNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Entertainment;
