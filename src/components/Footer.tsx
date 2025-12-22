import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

export const Footer = () => {
  const sections = [
    {
      title: "News Categories",
      links: [
        { name: "World News", path: "/world" },
        { name: "Politics", path: "/politics" },
        { name: "Business", path: "/business" },
        { name: "Technology", path: "/technology" },
        { name: "Sports", path: "/sports" },
        { name: "Entertainment", path: "/entertainment" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { name: "suninternational.tv@gmail.com", path: "" },
        { name: "+92 315 0229859", path: "" },
        // { name: "Careers", path: "/careers" },
        // { name: "Contact Us", path: "/contact" },
      ],
    },
    // {
    //   title: "Resources",
    //   links: [
    //     { name: "Privacy Policy", path: "/privacy" },
    //     { name: "Terms of Service", path: "/terms" },
    //     { name: "Cookie Policy", path: "/cookies" },
    //     { name: "Sitemap", path: "/sitemap" },
    //   ],
    // },
  ];

  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-primary-foreground/20">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="h-8 w-8 mx-auto mb-4 text-accent" />
            <h3 className="text-2xl font-bold mb-2">Stay Informed</h3>
            <p className="text-primary-foreground/80 mb-6">
              Get the latest breaking news delivered to your inbox
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo2.png" alt="Sun International Tv" className="h-10 w-auto" />
              <div>
                <h2 className="text-xl font-bold">Sun International Tv</h2>
                <p className="text-xs text-primary-foreground/70">Breaking News 24/7</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Your trusted source for breaking news, analysis, and in-depth reporting from around Pakistan.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61584132834560"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/sun_international.tv/"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@suninternational.tvdigital"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Sun International Tv. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
