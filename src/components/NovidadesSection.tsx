import novidadesImg from "@/assets/novidades.png";

const NovidadesSection = () => {
  return (
    <section id="novidades" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          NOVIDADES PARA VOCÊ
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <img 
            src={novidadesImg} 
            alt="Novidades" 
            className="w-full h-[30vh] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default NovidadesSection;
