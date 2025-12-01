import { useState } from "react";
import abertoImg from "@/assets/aberto.png";
import fechadoImg from "@/assets/fechado.png";
import batomImg from "@/assets/batom.png";
import cinzaBocaImg from "@/assets/cinza-boca.png";
import bordoBocaImg from "@/assets/bordo-boca.png";
import nudeBocaImg from "@/assets/nude-boca.png";
import vermelhoBocaImg from "@/assets/vermelho-boca.png";
import cinzaColorImg from "@/assets/cinza-color.png";
import bordoColorImg from "@/assets/bordo-color.png";
import nudeColorImg from "@/assets/nude-color.png";
import vermelhoColorImg from "@/assets/vermelho-color.png";
import estrelasImg from "@/assets/estrelas.png";

const colorMap: Record<string, string> = {
  "cinza-color": cinzaBocaImg,
  "bordo-color": bordoBocaImg,
  "nude-color": nudeBocaImg,
  "vermelho-color": vermelhoBocaImg
};

const LancamentosSection = () => {
  const [selectedImage, setSelectedImage] = useState(cinzaBocaImg);

  const handleColorClick = (colorKey: string) => {
    setSelectedImage(colorMap[colorKey]);
  };

  return (
    <section id="lancamentos" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          APROVEITE OS LANÇAMENTOS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* 1ª Divisão - Imagens empilhadas (hidden em mobile) */}
          <div className="hidden md:flex flex-col gap-4">
            <img src={abertoImg} alt="Produto Aberto" className="w-full rounded-lg shadow-lg" />
            <img src={fechadoImg} alt="Produto Fechado" className="w-full rounded-lg shadow-lg" />
            <img src={batomImg} alt="Batom" className="w-full rounded-lg shadow-lg" />
          </div>

          {/* 2ª Divisão - Imagem principal do centro */}
          <div className="flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Modelo com batom" 
              className="w-full max-w-md rounded-lg shadow-xl transition-all duration-300"
            />
          </div>

          {/* 3ª Divisão - Cores e descrição */}
          <div className="space-y-6">
            <img src={estrelasImg} alt="Avaliação" className="h-6" />
            
            <h3 className="text-2xl font-bold text-foreground">Matte Premium</h3>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-foreground">Cores disponíveis</h4>
              <div className="flex gap-3">
                <button
                  onClick={() => handleColorClick("cinza-color")}
                  className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
                >
                  <img src={cinzaColorImg} alt="Cinza" className="w-12 h-12" />
                </button>
                <button
                  onClick={() => handleColorClick("vermelho-color")}
                  className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
                >
                  <img src={vermelhoColorImg} alt="Vermelho" className="w-12 h-12" />
                </button>
                <button
                  onClick={() => handleColorClick("bordo-color")}
                  className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
                >
                  <img src={bordoColorImg} alt="Bordô" className="w-12 h-12" />
                </button>
                <button
                  onClick={() => handleColorClick("nude-color")}
                  className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
                >
                  <img src={nudeColorImg} alt="Nude" className="w-12 h-12" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-foreground">Descrição</h4>
              <p className="text-muted-foreground leading-relaxed">
                O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LancamentosSection;
