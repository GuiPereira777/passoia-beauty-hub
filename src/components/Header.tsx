import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoPassoia from "@/assets/passoia.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img src={logoPassoia} alt="Passoia" className="h-8 md:h-10" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("looks")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Look
          </button>
          <button
            onClick={() => scrollToSection("lancamentos")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Lançamentos
          </button>
          <button
            onClick={() => scrollToSection("novidades")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Novidades
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("looks")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
            >
              Look
            </button>
            <button
              onClick={() => scrollToSection("lancamentos")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
            >
              Lançamentos
            </button>
            <button
              onClick={() => scrollToSection("novidades")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
            >
              Novidades
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
