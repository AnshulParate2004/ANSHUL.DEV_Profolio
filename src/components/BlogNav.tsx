import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { SearchDialog } from "./SearchDialog";

const BlogNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-playfair font-bold text-foreground">ap</Link>
          <div className="flex gap-6 items-center">
            <Link to="/" className="text-sm font-inter text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/blogs" className="text-sm font-inter text-foreground">Blogs</Link>
            <SearchDialog />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BlogNav;
