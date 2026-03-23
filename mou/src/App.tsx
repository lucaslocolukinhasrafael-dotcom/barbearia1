import React from 'react';
import { Calendar, MapPin, Scissors, ShoppingBag, Mic2, Instagram, Music2, MessageCircle } from 'lucide-react';

// Reusable Tape Component for the "sticked" look
const Tape = ({ className = "" }) => (
  <div className={`absolute w-16 h-5 bg-white/40 backdrop-blur-sm border border-white/20 shadow-sm z-20 ${className}`} style={{ mixBlendMode: 'screen' }} />
);

export default function App() {
  return (
    <div className="min-h-screen bg-mou-black text-white font-body relative overflow-hidden flex justify-center bg-grunge">
      
      {/* Background ambient glow */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-mou-red/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Container - Constrained width for Linktree feel, but slightly wider for "portal" vibe */}
      <div className="w-full max-w-xl bg-mou-dark min-h-screen shadow-2xl relative z-10 flex flex-col">
        
        {/* Global Stickers (Accessories) */}
        <div className="absolute top-10 -left-6 md:-left-12 rotate-[-15deg] z-30 opacity-80 hover:opacity-100 transition-opacity">
          <Tape className="-top-2 left-4 rotate-6" />
          <div className="bg-zinc-800 p-2 border-2 border-zinc-700 shadow-xl">
            <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=150&h=150&fit=crop" alt="Sneaker Sticker" className="w-20 h-20 object-cover grayscale contrast-150" />
          </div>
        </div>

        <div className="absolute top-1/2 -right-6 md:-right-12 rotate-[10deg] z-30 opacity-80 hover:opacity-100 transition-opacity">
          <Tape className="-top-2 right-4 -rotate-6" />
          <div className="bg-zinc-800 p-2 border-2 border-zinc-700 shadow-xl">
            <img src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=150&h=150&fit=crop" alt="Speaker Sticker" className="w-20 h-20 object-cover grayscale contrast-150" />
          </div>
        </div>

        {/* 1. Cabeçalho da Marca */}
        <header className="relative pt-16 pb-12 px-6 flex flex-col items-center text-center clip-torn-bottom bg-zinc-900">
          {/* Background Texture for Header */}
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          
          <div className="relative z-10">
            {/* Logo */}
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-mou-gold bg-black flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.3)] mb-6 overflow-hidden">
               <img 
                 src="https://i.imgur.com/XbXrC1M.jpeg" 
                 alt="Barbearia do Mou Logo" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
                 onError={(e) => {
                   // Fallback visual caso a imagem não tenha sido upada ainda
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.parentElement!.innerHTML = '<div class="text-mou-gold font-display text-4xl tracking-tighter leading-none flex flex-col items-center"><span>MOU</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scissors mt-1"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.48" y2="20"/><line x1="8.12" x2="12" y1="8.12" y2="12"/></svg></div>';
                 }}
               />
            </div>

            <h1 className="font-display text-6xl md:text-7xl uppercase tracking-tight text-white drop-shadow-lg mb-2" style={{ textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
              Barbearia Mou
            </h1>
            <p className="font-body font-bold text-mou-concrete tracking-widest uppercase text-sm md:text-base">
              Urbano. Autêntico. Sem Frescura.
            </p>
          </div>
        </header>

        {/* 2. Seção de Ação Rápida */}
        <div className="px-6 -mt-4 relative z-20">
          <div className="grid grid-cols-2 gap-4">
            <button className="group relative bg-black border-2 border-zinc-800 p-4 flex flex-col items-center justify-center gap-2 hover:border-mou-gold transition-colors overflow-hidden">
              <div className="absolute inset-0 bg-mou-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <Calendar className="text-white group-hover:text-mou-gold transition-colors relative z-10" size={28} />
              <span className="font-display text-xl uppercase tracking-wider text-white relative z-10">Agendar Agora</span>
            </button>
            
            <button className="group relative bg-mou-concrete border-2 border-mou-concrete p-4 flex flex-col items-center justify-center gap-2 hover:bg-white transition-colors overflow-hidden">
              <MapPin className="text-black" size={28} />
              <span className="font-display text-xl uppercase tracking-wider text-black">Como Chegar</span>
              {/* Graffiti accent */}
              <div className="absolute -bottom-2 -right-2 text-mou-red opacity-20 font-display text-4xl rotate-[-20deg] pointer-events-none">MOU</div>
            </button>
          </div>
        </div>

        {/* 3. Vitrine de Cortes */}
        <section className="px-6 py-12">
          <h2 className="font-display text-3xl uppercase tracking-wide mb-6 flex items-center gap-4">
            <span className="w-8 h-1 bg-mou-red"></span>
            Nossa Arte
          </h2>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Photo 1 */}
            <div className="relative aspect-[4/5] group">
              <Tape className="-top-2 -left-4 -rotate-12" />
              <Tape className="-bottom-2 -right-4 rotate-6" />
              <div className="w-full h-full border-2 border-zinc-800 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=500&h=600&fit=crop" alt="Mid Fade" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
            {/* Photo 2 */}
            <div className="relative aspect-[4/5] group mt-8">
              <Tape className="-top-3 right-4 rotate-12" />
              <div className="w-full h-full border-2 border-zinc-800 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&h=600&fit=crop" alt="Design Haircut" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
            {/* Photo 3 */}
            <div className="relative aspect-[4/5] group -mt-4">
              <Tape className="top-1/2 -left-6 -rotate-90" />
              <div className="w-full h-full border-2 border-zinc-800 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&h=600&fit=crop" alt="Platinum Haircut" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
            {/* Photo 4 */}
            <div className="relative aspect-[4/5] group mt-4">
              <Tape className="-bottom-2 left-4 -rotate-6" />
              <div className="w-full h-full border-2 border-zinc-800 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&h=600&fit=crop" alt="Classic Fade" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Área de Autoridade */}
        <section className="bg-mou-red relative py-12 px-6 my-6 transform -skew-y-2">
          <div className="transform skew-y-2 relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 border-4 border-black overflow-hidden bg-zinc-900">
               {/* Placeholder for Mou's photo */}
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" alt="Mou" className="w-full h-full object-cover contrast-125" />
            </div>
            <div className="text-black">
              <h3 className="font-display text-4xl uppercase leading-none mb-3">Mou: O Mestre das Lâminas</h3>
              <p className="font-body font-bold text-sm md:text-base leading-snug mb-6 opacity-90">
                "Aqui a gente não faz corte, a gente assina a sua identidade."
              </p>
              <button className="bg-black text-white font-display uppercase tracking-wider px-6 py-3 text-sm hover:bg-white hover:text-black transition-colors border-2 border-black">
                Conheça a História
              </button>
            </div>
          </div>
          {/* Grunge texture overlay */}
          <div className="absolute inset-0 bg-grunge opacity-20 pointer-events-none"></div>
        </section>

        {/* 5. Área de Links Secundários */}
        <section className="px-6 py-8 flex-grow">
          <div className="space-y-4">
            <a href="#" className="group flex items-center p-4 bg-zinc-900 border border-zinc-800 hover:border-mou-concrete transition-all duration-300 hover:translate-x-2">
              <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0 border border-zinc-800 group-hover:border-mou-concrete transition-colors">
                <Scissors className="text-white" size={20} />
              </div>
              <span className="ml-4 font-display text-xl uppercase tracking-wide text-mou-concrete group-hover:text-white transition-colors">
                Tabela de Preços <span className="text-sm text-zinc-500 tracking-normal ml-2">(Sem Surpresa)</span>
              </span>
            </a>

            <a href="#" className="group flex items-center p-4 bg-zinc-900 border border-zinc-800 hover:border-mou-concrete transition-all duration-300 hover:translate-x-2">
              <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0 border border-zinc-800 group-hover:border-mou-concrete transition-colors">
                <ShoppingBag className="text-white" size={20} />
              </div>
              <span className="ml-4 font-display text-xl uppercase tracking-wide text-mou-concrete group-hover:text-white transition-colors">
                Nossa Loja <span className="text-sm text-zinc-500 tracking-normal ml-2">(Merch)</span>
              </span>
            </a>

            <a href="#" className="group flex items-center p-4 bg-zinc-900 border border-zinc-800 hover:border-mou-concrete transition-all duration-300 hover:translate-x-2">
              <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0 border border-zinc-800 group-hover:border-mou-concrete transition-colors">
                <Mic2 className="text-white" size={20} />
              </div>
              <span className="ml-4 font-display text-xl uppercase tracking-wide text-mou-concrete group-hover:text-white transition-colors">
                Playlist da Barbearia <span className="text-sm text-zinc-500 tracking-normal ml-2">(Trap & Drill)</span>
              </span>
            </a>
          </div>
        </section>

        {/* 6. Rodapé Social Integrado */}
        <footer className="mt-auto border-t border-zinc-800 py-8 px-6 bg-black">
          <div className="flex justify-center gap-8">
            <a href="#" className="text-mou-concrete hover:text-pink-500 transition-colors transform hover:scale-110">
              <Instagram size={32} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-mou-concrete hover:text-white transition-colors transform hover:scale-110">
              <Music2 size={32} strokeWidth={1.5} /> {/* TikTok proxy icon */}
            </a>
            <a href="#" className="text-mou-concrete hover:text-green-500 transition-colors transform hover:scale-110">
              <MessageCircle size={32} strokeWidth={1.5} /> {/* WhatsApp proxy icon */}
            </a>
          </div>
          <p className="text-center text-zinc-600 text-xs mt-6 font-body uppercase tracking-widest">
            © {new Date().getFullYear()} Barbearia Mou. Original.
          </p>
        </footer>

      </div>
    </div>
  );
}
