import heroBanner from "@/assets/Banner.png";

const HeroSection = () => {
  return (
    <section className="w-full h-[60vh] relative overflow-hidden mt-16">
      <img 
        src={heroBanner} 
        alt="Banner Passoia" 
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroSection;
