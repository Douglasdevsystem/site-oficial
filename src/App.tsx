import { useState, useEffect } from 'react';
import { Bot, Workflow, Zap, MessageSquare, UtensilsCrossed, ShoppingCart, Sparkles, ArrowRight } from 'lucide-react';
import TrustServices from './pages/TrustServices';
import TrustEats from './pages/TrustEats';

type Page = 'home' | 'trust-services' | 'trust-eats';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<'services' | 'eats' | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Renderiza a página apropriada
  if (currentPage === 'trust-services') {
    return <TrustServices onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'trust-eats') {
    return <TrustEats onNavigate={setCurrentPage} />;
  }

  // Home Page
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Gradient */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 214, 106, 0.15), transparent 40%)`
        }}
      />
      
      {/* Floating Header */}
      <header className="absolute top-0 left-0 right-0 z-50 pt-12 pb-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <Sparkles className="text-white" size={20} />
            <span className="text-white tracking-[0.25em] text-sm">SOMOS TRUST AI</span>
            <Sparkles className="text-white" size={20} />
          </div>
        </div>
      </header>

      {/* Main Split Container */}
      <div className="flex h-screen items-center justify-center gap-8 px-8">
        
        {/* Trust Services Card */}
        <div
          onMouseEnter={() => setActiveSection('services')}
          onMouseLeave={() => setActiveSection(null)}
          className={`relative h-[85vh] flex-1 rounded-3xl overflow-hidden transition-all duration-700 cursor-pointer group ${
            activeSection === 'services' ? 'flex-[1.4] shadow-2xl shadow-green-500/20' : 
            activeSection === 'eats' ? 'flex-[0.8] opacity-70' : ''
          }`}
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00D66A] via-[#00B557] to-[#008F45]" />
          
          {/* Animated Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-12 text-white">
            <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/30 rotate-6 group-hover:rotate-12 transition-transform">
                <Bot size={48} className="text-white" />
              </div>
            </div>

            <h2 className="text-5xl mb-6 text-center group-hover:scale-105 transition-transform">
              TRUST SERVICES
            </h2>

            <div className="w-20 h-1 bg-white/40 rounded-full mb-8" />

            <p className="text-white/90 text-center max-w-md mb-8 leading-relaxed">
              Automação inteligente, integrações poderosas e IA conversacional para empresas que querem escalar
            </p>

            {/* Icon Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center gap-2">
                <Workflow size={16} />
                <span className="text-sm">Automação</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center gap-2">
                <Zap size={16} />
                <span className="text-sm">APIs</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center gap-2">
                <MessageSquare size={16} />
                <span className="text-sm">Chatbots</span>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('trust-services')}
              className="group/btn px-8 py-4 bg-white text-[#00D66A] rounded-full hover:bg-white/90 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Explorar soluções</span>
              <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
        </div>

        {/* Trust Eats Card */}
        <div
          onMouseEnter={() => setActiveSection('eats')}
          onMouseLeave={() => setActiveSection(null)}
          className={`relative h-[85vh] flex-1 rounded-3xl overflow-hidden transition-all duration-700 cursor-pointer group ${
            activeSection === 'eats' ? 'flex-[1.4] shadow-2xl shadow-blue-500/20' : 
            activeSection === 'services' ? 'flex-[0.8] opacity-70' : ''
          }`}
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0043CE] via-[#0056FF] to-[#0036A3]" />
          
          {/* Animated Dots Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}
          />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-12 text-white">
            <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/30 -rotate-6 group-hover:-rotate-12 transition-transform">
                <UtensilsCrossed size={48} className="text-white" />
              </div>
            </div>

            <h2 className="text-5xl mb-6 text-center group-hover:scale-105 transition-transform">
              TRUST EATS
            </h2>

            <div className="w-20 h-1 bg-white/40 rounded-full mb-8" />

            <p className="text-white/90 text-center max-w-md mb-8 leading-relaxed">
              Revolução digital para restaurantes com cardápio inteligente, pedidos automáticos e gestão completa
            </p>

            {/* Icon Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center gap-2">
                <UtensilsCrossed size={16} />
                <span className="text-sm">Cardápio</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center gap-2">
                <ShoppingCart size={16} />
                <span className="text-sm">Pedidos</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center gap-2">
                <MessageSquare size={16} />
                <span className="text-sm">Atendimento IA</span>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('trust-eats')}
              className="group/btn px-8 py-4 bg-white text-[#0043CE] rounded-full hover:bg-white/90 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Conhecer plataforma</span>
              <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Corner Accent */}
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-32 translate-y-32" />
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-white/40 text-sm tracking-wider">
          Duas plataformas. Um ecossistema. Infinitas possibilidades.
        </p>
      </div>
    </div>
  );
}
