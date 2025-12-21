import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";

const Politics = () => {
  const politicsNews = [
    {
      title: "Senate Passes Major Infrastructure Bill",
      description: "Bipartisan legislation aims to modernize transportation and broadband networks.",
      category: "Politics",
      image: "https://images.unsplash.com/photo-1555848962-6e79363ec10f?w=800&h=600&fit=crop",
      time: "1 hour ago",
    },
    {
      title: "Presidential Debates Focus on Economic Policy",
      description: "Candidates present contrasting visions for national fiscal strategy.",
      category: "Politics",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=600&fit=crop",
      time: "2 hours ago",
    },
    {
      title: "Supreme Court Hears Landmark Constitutional Case",
      description: "Justices deliberate on issues with far-reaching legal implications.",
      category: "Politics",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Politics</h1>
          <p className="text-muted-foreground">Coverage of political developments and policy decisions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {politicsNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Politics;
