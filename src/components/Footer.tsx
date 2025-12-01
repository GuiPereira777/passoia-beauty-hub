import mastercardImg from "@/assets/mastercard.png";
import visaImg from "@/assets/visa.png";
import pixImg from "@/assets/pix.png";
import boletoImg from "@/assets/boleto.png";
import instagramImg from "@/assets/instagram.png";
import facebookImg from "@/assets/facebook-passoia.png";
import youtubeImg from "@/assets/youtube.png";
import twitterImg from "@/assets/twitter-passoia.png";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1ª Divisão - Atendimentos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Atendimentos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Meus Pedidos
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Nossas Lojas
                </a>
              </li>
            </ul>
          </div>

          {/* 2ª Divisão - Formas de Pagamento */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">FORMAS DE PAGAMENTO</h3>
            <div className="flex flex-wrap gap-4">
              <img src={mastercardImg} alt="Mastercard" className="h-8" />
              <img src={visaImg} alt="Visa" className="h-8" />
              <img src={pixImg} alt="Pix" className="h-8" />
              <img src={boletoImg} alt="Boleto" className="h-8" />
            </div>
          </div>

          {/* 3ª Divisão - Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">SIGA-NOS NAS REDES SOCIAIS</h3>
            <div className="flex gap-4">
              <a href="#" className="transition-transform hover:scale-110">
                <img src={instagramImg} alt="Instagram" className="w-10 h-10" />
              </a>
              <a href="#" className="transition-transform hover:scale-110">
                <img src={facebookImg} alt="Facebook" className="w-10 h-10" />
              </a>
              <a href="#" className="transition-transform hover:scale-110">
                <img src={youtubeImg} alt="YouTube" className="w-10 h-10" />
              </a>
              <a href="#" className="transition-transform hover:scale-110">
                <img src={twitterImg} alt="Twitter" className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
