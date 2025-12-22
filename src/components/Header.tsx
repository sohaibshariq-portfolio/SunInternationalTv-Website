import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLink } from "@/components/NavLink";
import logo2 from "@/assets/logo2.png";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const categories = [
    { name: "Home", path: "/" },
    { name: "World", path: "/world" },
    { name: "Politics", path: "/politics" },
    { name: "Business", path: "/business" },
    { name: "Technology", path: "/technology" },
    { name: "Sports", path: "/sports" },
    { name: "Entertainment", path: "/entertainment" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Live News Ticker */}
      <div className="bg-news-ticker text-news-ticker-foreground">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center gap-4">
            <span className="bg-accent px-3 py-1 text-xs font-bold uppercase rounded">
              Breaking
            </span>
            <div className="overflow-hidden flex-1">
              <p className="text-sm animate-marquee whitespace-nowrap inline-block">
                Global Markets Rally on Economic Data • Tech Giants Announce AI Partnership • Climate Summit Concludes with Historic Agreement
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo2} alt="Sun International Tv" className="h-10 w-auto" />
            <div>
              <h1 className="text-2xl font-bold text-primary">Sun International Tv</h1>
              <p className="text-xs text-muted-foreground">Breaking News 24/7</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {categories.map((category) => (
              <NavLink
                key={category.path}
                to={category.path}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors rounded"
                activeClassName="text-accent bg-secondary"
              >
                {category.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:bg-secondary"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search news..."
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {categories.map((category) => (
              <NavLink
                key={category.path}
                to={category.path}
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary rounded transition-colors"
                activeClassName="bg-secondary text-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
