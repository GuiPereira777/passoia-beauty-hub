import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import labiosImg from "@/assets/labios.png";
import olhosImg from "@/assets/olhos.png";
import rostoImg from "@/assets/rosto.png";
import tendenciaImg from "@/assets/tendencia.png";

interface ProductInfo {
  title: string;
  description: string;
  price: string;
}

const products: Record<string, ProductInfo> = {
  labios: {
    title: "Lábios",
    description: "Batons e gloss para lábios perfeitos e radiantes. Fórmula de longa duração com cores intensas.",
    price: "R$ 49,90"
  },
  olhos: {
    title: "Olhos",
    description: "Sombras e delineadores para um olhar marcante. Pigmentação intensa e fácil aplicação.",
    price: "R$ 59,90"
  },
  rosto: {
    title: "Rosto",
    description: "Bases e corretivos para uma pele impecável. Cobertura natural e acabamento aveludado.",
    price: "R$ 79,90"
  },
  tendencia: {
    title: "Tendência",
    description: "Os produtos mais procurados da temporada. Cores vibrantes e looks modernos.",
    price: "R$ 69,90"
  }
};

const LooksSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductInfo | null>(null);

  const handleImageClick = (productKey: string) => {
    setSelectedProduct(products[productKey]);
  };

  return (
    <section id="looks" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          LOOKS E DICAS DE MAQUIAGEM
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <button
            onClick={() => handleImageClick("labios")}
            className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg overflow-hidden"
          >
            <img src={labiosImg} alt="Lábios" className="w-full h-full object-cover" />
          </button>
          <button
            onClick={() => handleImageClick("olhos")}
            className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg overflow-hidden"
          >
            <img src={olhosImg} alt="Olhos" className="w-full h-full object-cover" />
          </button>
          <button
            onClick={() => handleImageClick("rosto")}
            className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg overflow-hidden"
          >
            <img src={rostoImg} alt="Rosto" className="w-full h-full object-cover" />
          </button>
          <button
            onClick={() => handleImageClick("tendencia")}
            className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg overflow-hidden"
          >
            <img src={tendenciaImg} alt="Tendência" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedProduct?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">{selectedProduct?.description}</p>
            <p className="text-2xl font-bold text-primary">{selectedProduct?.price}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LooksSection;
