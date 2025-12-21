import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";

const Business = () => {
  const businessNews = [
    {
      title: "Stock Markets Hit All-Time Highs Amid Tech Rally",
      description: "Major indices surge as investor confidence reaches peak levels.",
      category: "Business",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      time: "1 hour ago",
    },
    {
      title: "Startup Secures Record $500M Funding Round",
      description: "Innovative tech company attracts massive investment for global expansion.",
      category: "Business",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
      time: "2 hours ago",
    },
    {
      title: "Major Merger Reshapes Industry Landscape",
      description: "Two Fortune 500 companies announce strategic consolidation.",
      category: "Business",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Business</h1>
          <p className="text-muted-foreground">Financial markets, corporate news, and economic insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Business;
