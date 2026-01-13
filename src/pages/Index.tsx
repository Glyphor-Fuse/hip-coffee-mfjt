import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/motion/Reveal';
import { SignatureInteraction } from '../components/effects/SignatureInteraction';

// --- Styles & Assets ---
// In a real app, these would be in index.css or tailwind config
const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,600;0,900;1,400&display=swap');
`;

const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-[#Eaeaea] overflow-x-hidden selection:bg-[#3355FF] selection:text-white">
      <style>{FONTS}</style>
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start z-50 mix-blend-difference text-[#Eaeaea]">
        <div className="font-['Playfair_Display'] font-black text-2xl tracking-tighter">
          L'OBSCUR
        </div>
        <div className="text-right flex flex-col gap-1 font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider">
          <span>48.8566° N</span>
          <span>2.3522° E</span>
          <span className="text-[#3355FF]">OPEN 18:00 — 02:00</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center pt-[10vh] overflow-hidden group">
        {/* Hero Image with Parallax & Hover Effect */}
        <SignatureInteraction 
          type="parallax" 
          className="w-[80vw] h-[40vh] md:w-[40vw] md:h-[60vh] z-10 opacity-60 grayscale contrast-125 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:contrast-110 group-hover:opacity-80"
        >
          <img 
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop" 
            alt="Noir coffee texture" 
            className="w-full h-full object-cover"
          />
        </SignatureInteraction>

        <h1 className="font-['Playfair_Display'] text-[clamp(4rem,12vw,12rem)] leading-[0.85] font-normal relative z-20 pointer-events-none">
          <div className="pl-8">
            <SignatureInteraction type="text-reveal">
              MIDNIGHT
            </SignatureInteraction>
          </div>
          <div className="text-right pr-8 italic text-[#3355FF]">
            <SignatureInteraction type="text-reveal">
              CINÉMATHÈQUE
            </SignatureInteraction>
          </div>
        </h1>

        <Reveal className="absolute bottom-8 left-8 max-w-[200px] font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider">
          <p>LE MARAIS, PARIS</p>
          <p className="mt-4">SCROLL FOR SHOWTIMES</p>
        </Reveal>
      </section>

      {/* MANIFESTO */}
      <section className="py-40 border-t border-[#3a3a40] grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-8">
        <div className="md:col-span-2 md:col-start-2 font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider text-[#3355FF] mb-8 md:mb-0">
          <Reveal>/ THE PHILOSOPHY</Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-4 font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.4]">
          <Reveal>
            <p>We believe coffee is not a morning necessity, but an evening ritual. In the silence of the night, the grain speaks louder.</p>
            <br />
            <p>Surrounded by zinc, concrete, and the ghosts of the New Wave, we serve darkness in a cup. No sugar. No wifi. Just the film of the city passing by.</p>
          </Reveal>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="py-20 bg-[#0a0a0a] border-t border-[#3a3a40] grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-8">
        <div className="md:col-span-3 mb-8 md:mb-0 md:sticky md:top-20 h-fit font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider">
          <Reveal>
            / SELECTION
            <br /><br />
            <span className="text-[#888888]">BATCH 042</span>
          </Reveal>
        </div>

        <ul className="md:col-span-7 md:col-start-5 list-none">
          {[ 
            { name: "Espresso Noir", price: "€ 4.00", desc: "Double shot. Heavy body. Smoke finish." },
            { name: "Cortado Zinc", price: "€ 5.00", desc: "Cut with raw milk. Served in glass." },
            { name: "Filter 1960", price: "€ 6.00", desc: "V60 Pour over. Ethiopian heirloom. Floral." },
            { name: "Negroni Brût", price: "€ 12.00", desc: "Cold brew infused gin. Campari. Vermouth." }
          ].map((item, i) => (
            <Reveal key={i} width="100%">
              <li className="group flex justify-between items-baseline py-6 border-b border-[#222] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-4 hover:border-[#3355FF]">
                <span className="font-['Playfair_Display'] text-2xl transition-colors duration-300 group-hover:text-[#3355FF]">
                  {item.name}
                </span>
                <div className="text-right font-['IBM_Plex_Mono']">
                  <span className="block mb-1 text-xs">{item.price}</span>
                  <span className="block text-[0.75rem] text-[#888888]">{item.desc}</span>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* COLLAGE SECTION */}
      <section className="py-40 relative">
        <div className="relative h-[80vh] md:h-[120vh]">
          {/* Image 1 */}
          <div className="absolute top-0 left-0 md:left-[10%] w-[70vw] md:w-[30vw] h-[40vh] z-0">
             <Reveal width="100%">
                <img 
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105 hover:z-10"
                  alt="Dark interior"
                />
             </Reveal>
             <div className="absolute top-[35vh] left-[10%] font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider text-[#3355FF] bg-transparent border-none p-2">
               INT. NIGHT
             </div>
          </div>

          {/* Image 2 */}
          <div className="absolute top-[45vh] md:top-[20%] right-0 md:right-[15%] w-[70vw] md:w-[25vw] h-[40vh] z-0">
            <Reveal width="100%">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105 hover:z-10"
                alt="Coffee pouring"
              />
            </Reveal>
          </div>

          {/* Image 3 */}
          <div className="absolute bottom-0 md:bottom-[10%] left-[15%] md:left-[30%] w-[70vw] md:w-[40vw] h-[40vh] md:h-[50vh] z-0">
            <Reveal width="100%">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105 hover:z-10"
                alt="Paris rain"
              />
            </Reveal>
            <div className="absolute bottom-[60vh] left-[30%] bg-[#121212] border border-[#3355FF] text-[#3355FF] p-2 font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider hidden md:block">
              RUE DE TURENNE
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-8 px-8 border-t border-[#3a3a40] flex flex-col gap-16">
        <div className="flex flex-wrap gap-16 justify-between">
          <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider">
            <h3 className="mb-4 text-[#3355FF]">LOCATION</h3>
            <p className="mb-2 text-[#888888]">12 Rue de Turenne</p>
            <p className="mb-2 text-[#888888]">75004 Paris, France</p>
          </div>
          <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider">
            <h3 className="mb-4 text-[#3355FF]">HOURS</h3>
            <p className="mb-2 text-[#888888]">Mon - Sun</p>
            <p className="mb-2 text-[#888888]">18:00 — 02:00</p>
          </div>
          <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider">
            <h3 className="mb-4 text-[#3355FF]">CONTACT</h3>
            <p className="mb-2 text-[#888888]">bonjour@lobscur.fr</p>
            <p className="mb-2 text-[#888888]">@lobscur_paris</p>
          </div>
        </div>
        <div className="font-['Playfair_Display'] text-[15vw] text-center leading-[0.8] opacity-10 pointer-events-none">
          FIN
        </div>
      </footer>
    </div>
  );
};

export default Index;
