import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Video } from "lucide-react";

const Index = () => {
  const featuredNews = {
    title: "Sun International Tv - Breaking News 24/7",
    description:
      "Spark Media Tv Productions Publication and Marketing Group INT",
    category: "World",
    image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=1200&h=800&fit=crop",
    time: "2 hours ago",
  };

  const topStories = [
    {
      title: "Tech Giants Face New Regulations as AI Ethics Debate Intensifies",
      description:
        "Lawmakers propose comprehensive framework for artificial intelligence governance amid growing concerns.",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      time: "3 hours ago",
    },
    {
      title: "Stock Markets Surge Following Federal Reserve Decision",
      description:
        "Major indices hit record highs as investors respond positively to monetary policy announcement.",
      category: "Business",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      time: "4 hours ago",
    },
    {
      title: "Championship Finals Set After Dramatic Playoff Victories",
      description:
        "Underdogs upset favorites in stunning turnaround that has sports fans buzzing.",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
      time: "5 hours ago",
    },
    {
      title: "Breakthrough Medical Research Offers Hope for Cancer Treatment",
      description:
        "Scientists announce promising results from clinical trials of innovative therapy approach.",
      category: "Health",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      time: "6 hours ago",
    },
  ];

  const videoNews = [
    {
      title: "Live Coverage: International Trade Summit",
      description: "Economic leaders discuss global commerce challenges",
      category: "Business",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
      time: "Live Now",
    },
    {
      title: "Breaking: Natural Disaster Response Updates",
      description: "Emergency teams coordinate massive relief efforts",
      category: "World",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop",
      time: "30 min ago",
    },
    {
      title: "Tech Expo Highlights: Future of Innovation",
      description: "Latest gadgets and breakthrough technologies unveiled",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      time: "1 hour ago",
    },
  ];

  const trendingTopics = [
    "Climate Change",
    "AI Regulation",
    "Stock Market",
    "Championship Finals",
    "Medical Breakthrough",
    "Trade Summit",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Breaking News Alert */}
        <div className="bg-news-live-bg border-b-2 border-accent">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-3">
              <Badge className="bg-accent text-accent-foreground animate-pulse">
                LIVE
              </Badge>
              <p className="text-sm font-medium">
                Breaking: Major developments in international diplomacy as peace talks resume
              </p>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <NewsCard {...featuredNews} featured />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Trending Now
              </h2>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic) => (
                  <Badge
                    key={topic}
                    variant="outline"
                    className="cursor-pointer hover:bg-secondary transition-colors"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
              <div className="bg-card border border-border rounded-lg p-4 mt-4">
                <h3 className="font-bold mb-3 text-sm uppercase text-muted-foreground">
                  Quick Updates
                </h3>
                <div className="space-y-3">
                  {topStories.slice(0, 3).map((story, index) => (
                    <div key={index} className="pb-3 border-b border-border last:border-0">
                      <p className="text-sm font-medium hover:text-accent cursor-pointer transition-colors line-clamp-2">
                        {story.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{story.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Stories */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Top Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topStories.map((story, index) => (
              <NewsCard key={index} {...story} />
            ))}
          </div>
        </section>

        {/* Video News */}
        <section className="bg-secondary py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Video className="h-6 w-6 text-accent" />
                Video News
              </h2>
              <Button variant="outline" className="hover:bg-background">
                View All Videos
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videoNews.map((video, index) => (
                <NewsCard key={index} {...video} />
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Grid */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...topStories, ...topStories].map((story, index) => (
              <NewsCard key={index} {...story} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Load More Stories
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
