import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  time: string;
  featured?: boolean;
}

export const NewsCard = ({
  title,
  description,
  category,
  image,
  time,
  featured = false,
}: NewsCardProps) => {
  return (
    <Card
      className={`group overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer ${
        featured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      <div className={`relative ${featured ? "h-96" : "h-48"} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-accent text-accent-foreground hover:bg-accent/90">
            {category}
          </Badge>
        </div>
        {featured && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        )}
      </div>
      <div className={`p-4 ${featured ? "lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:text-white lg:p-6" : ""}`}>
        <h3
          className={`font-bold mb-2 line-clamp-2 group-hover:text-accent transition-colors ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {title}
        </h3>
        <p className={`text-muted-foreground mb-3 line-clamp-2 ${featured ? "lg:text-white/90" : "text-sm"}`}>
          {description}
        </p>
        <div className={`flex items-center gap-2 text-xs ${featured ? "lg:text-white/80" : "text-muted-foreground"}`}>
          <Clock className="h-3 w-3" />
          <span>{time}</span>
        </div>
      </div>
    </Card>
  );
};
