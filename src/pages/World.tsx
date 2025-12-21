import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";

const World = () => {
  const worldNews = [
    {
      title: "UN Assembly Addresses Global Security Challenges",
      description: "Representatives from 193 nations gather to discuss pressing international issues.",
      category: "World",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop",
      time: "1 hour ago",
    },
    {
      title: "Historic Peace Agreement Signed in Middle East",
      description: "Long-standing conflicts see breakthrough negotiations result in landmark treaty.",
      category: "World",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
      time: "2 hours ago",
    },
    {
      title: "European Union Announces Major Climate Initiative",
      description: "Brussels unveils comprehensive plan to achieve carbon neutrality by 2040.",
      category: "World",
      image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=600&fit=crop",
      time: "3 hours ago",
    },
    {
      title: "Asian Markets React to Trade Policy Changes",
      description: "Regional economies adjust strategies following new international agreements.",
      category: "World",
      image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&h=600&fit=crop",
      time: "4 hours ago",
    },
    {
      title: "International Space Station Expansion Announced",
      description: "Multiple nations commit to extending orbital laboratory capabilities.",
      category: "World",
      image: "https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?w=800&h=600&fit=crop",
      time: "5 hours ago",
    },
    {
      title: "Global Health Organization Reports Vaccination Progress",
      description: "Worldwide immunization campaign reaches significant milestone.",
      category: "World",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=600&fit=crop",
      time: "6 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">World News</h1>
          <p className="text-muted-foreground">Stay updated with global events and international affairs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {worldNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default World;
