import { useState } from 'react';
import { UtensilsCrossed, MessageSquare, QrCode, LayoutGrid, TrendingUp, CheckCircle, Clock, Heart, ArrowRight, Sparkles, Smartphone, Users, Star } from 'lucide-react';

export default function TrustEats() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#0043CE]/20">
        <nav className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0043CE] blur-xl opacity-50" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-[#0043CE] to-[#0056FF] rounded-xl flex items-center justify-center">
                  <UtensilsCrossed size={22} className="text-white" />
                </div>
              </div>
              <span className="text-xl text-white tracking-tight">Trust Eats</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#funcionalidades" className="text-gray-400 hover:text-[#0043CE] transition-colors">
                Funcionalidades
              </a>
              <a href="#como-funciona" className="text-gray-400 hover:text-[#0043CE] transition-colors">
                Como funciona
              </a>
              <a href="#para-restaurantes" className="text-gray-400 hover:text-[#0043CE] transition-colors">
                Para restaurantes
              </a>
              <a href="#contato" className="text-gray-400 hover:text-[#0043CE] transition-colors">
                Contato
              </a>
              <a
                href="/login"
                className="px-6 py-2.5 bg-gradient-to-r from-[#0043CE] to-[#0056FF] text-white rounded-full hover:shadow-lg hover:shadow-[#0043CE]/50 transition-all"
              >
                Login
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-white"></span>
                <span className="w-full h-0.5 bg-white"></span>
                <span className="w-full h-0.5 bg-white"></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-4 flex flex-col space-y-4 border-t border-[#0043CE]/20 pt-4">
              <a href="#funcionalidades" className="text-gray-400 hover:text-[#0043CE] transition-colors">
                Funcionalidades
              </a>
              <a href="#como-funciona" className="text-gray-400 hover:text-[#0043CE] transition-colors">
                Como funciona
              </a>
              <a href="#para-restaurantes" className="text-gray-400 hover:text-[#0043CE] transition-colors">
                Para restaurantes
              </a>
              <a href="#contato" className="text-gray-400 hover:text-[#0043CE] transition-colors">
                Contato
              </a>
              <a
                href="/login"
                className="px-6 py-2.5 bg-gradient-to-r from-[#0043CE] to-[#0056FF] text-white rounded-full text-center"
              >
                Login
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - Dynamic */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#0043CE]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0056FF]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0043CE]/10 border border-[#0043CE]/30 rounded-full mb-8">
              <Sparkles className="text-[#0043CE]" size={16} />
              <span className="text-[#0043CE] text-sm">Food Tech Innovation</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl mb-8 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              Pedidos e atendimento inteligentes para restaurantes.
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Cardápio digital, pedidos e mesas integrados com IA. Transforme a experiência do seu cliente e aumente suas vendas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="group px-8 py-4 bg-gradient-to-r from-[#0043CE] to-[#0056FF] text-white rounded-full hover:shadow-lg hover:shadow-[#0043CE]/50 transition-all inline-flex items-center justify-center gap-2"
              >
                Ver demonstração
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contato"
                className="px-8 py-4 bg-white/5 text-white rounded-full border border-white/10 hover:bg-white/10 transition-all inline-flex items-center justify-center"
              >
                Falar com um especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Section - Feature Grid */}
      <section id="funcionalidades" className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Funcionalidades Completas
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tudo que seu restaurante precisa em uma única plataforma inteligente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Atendimento automático */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-[#0043CE]/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0043CE]/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:bg-[#0043CE]/10 transition-all" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-[#0043CE]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0043CE]/20 transition-colors">
                  <MessageSquare className="text-[#0043CE]" size={28} />
                </div>
                <h3 className="text-2xl text-white mb-4">Atendimento automático</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  WhatsApp, Instagram e Facebook integrados com IA conversacional para atender seus clientes 24/7.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#0043CE]/10 border border-[#0043CE]/30 rounded-full text-xs text-[#0043CE]">WhatsApp</span>
                  <span className="px-3 py-1 bg-[#0043CE]/10 border border-[#0043CE]/30 rounded-full text-xs text-[#0043CE]">Instagram</span>
                  <span className="px-3 py-1 bg-[#0043CE]/10 border border-[#0043CE]/30 rounded-full text-xs text-[#0043CE]">Facebook</span>
                </div>
                <div className="flex items-center gap-2 text-[#0043CE] text-sm">
                  <span>Saiba mais</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Cardápio digital */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-[#0043CE]/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0043CE]/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:bg-[#0043CE]/10 transition-all" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-[#0043CE]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0043CE]/20 transition-colors">
                  <QrCode className="text-[#0043CE]" size={28} />
                </div>
                <h3 className="text-2xl text-white mb-4">Cardápio digital inteligente</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  QR Code na mesa, catálogo online interativo e sugestões personalizadas com inteligência artificial.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#0043CE]/10 border border-[#0043CE]/30 rounded-full text-xs text-[#0043CE]">QR Code</span>
                  <span className="px-3 py-1 bg-[#0043CE]/10 border border-[#0043CE]/30 rounded-full text-xs text-[#0043CE]">Personalização</span>
                  <span className="px-3 py-1 bg-[#0043CE]/10 border border-[#0043CE]/30 rounded-full text-xs text-[#0043CE]">Fotos HD</span>
                </div>
                <div className="flex items-center gap-2 text-[#0043CE] text-sm">
                  <span>Saiba mais</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Pedidos automáticos */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-[#0043CE]/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0043CE]/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:bg-[#0043CE]/10 transition-all" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-[#0043CE]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0043CE]/20 transition-colors">
                  <UtensilsCrossed className="text-[#0043CE]" size={28} />
                </div>
                <h3 className="text-2xl text-white mb-4">Pedidos automáticos</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Receba pedidos de múltiplos canais, integre direto com a cozinha e reduza tempo de espera.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#0043CE]/10 border border-[#0043CE]/30 rounded-full text-xs text-[#0043CE]">Delivery</span>
                  <span className="px-3 py-1 bg-[#0043CE]/10 border border-[#0043CE]/30 rounded-full text-xs text-[#0043CE]">Retirada</span>
                  <span className="px-3 py-1 bg-[#0043CE]/10 border border-[#0043CE]/30 rounded-full text-xs text-[#0043CE]">Mesa</span>
                </div>
                <div className="flex items-center gap-2 text-[#0043CE] text-sm">
                  <span>Saiba mais</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Gestão de mesas */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-[#0043CE]/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0043CE]/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:bg-[#0043CE]/10 transition-all" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-[#0043CE]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0043CE]/20 transition-colors">
                  <LayoutGrid className="text-[#0043CE]" size={28} />
                </div>
                <h3 className="text-2xl text-white mb-4">Gestão de mesas</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Controle de ocupação, comanda digital automática e fechamento de conta simplificado.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#0043CE]/10 border border-[#0043CE]/30 rounded-full text-xs text-[#0043CE]">Ocupação</span>
                  <span className="px-3 py-1 bg-[#0043CE]/10 border border-[#0043CE]/30 rounded-full text-xs text-[#0043CE]">Comanda</span>
                  <span className="px-3 py-1 bg-[#0043CE]/10 border border-[#0043CE]/30 rounded-full text-xs text-[#0043CE]">Pagamento</span>
                </div>
                <div className="flex items-center gap-2 text-[#0043CE] text-sm">
                  <span>Saiba mais</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section - Impact Cards */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0043CE] to-[#0056FF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-white" size={36} />
              </div>
              <h3 className="text-2xl text-white mb-3">+150% Pedidos</h3>
              <p className="text-gray-400">
                Mais vendas com atendimento disponível 24 horas por dia
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0043CE] to-[#0056FF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="text-white" size={36} />
              </div>
              <h3 className="text-2xl text-white mb-3">-90% Erros</h3>
              <p className="text-gray-400">
                Elimine erros de anotação com pedidos digitais
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0043CE] to-[#0056FF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="text-white" size={36} />
              </div>
              <h3 className="text-2xl text-white mb-3">24/7 Online</h3>
              <p className="text-gray-400">
                Aceite pedidos mesmo fora do horário comercial
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0043CE] to-[#0056FF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star className="text-white" size={36} />
              </div>
              <h3 className="text-2xl text-white mb-3">5★ Experiência</h3>
              <p className="text-gray-400">
                Clientes mais satisfeitos e engajados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0043CE] via-[#0056FF] to-[#0036A3]" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl text-white mb-8">
            Leve seu restaurante para o futuro
          </h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto">
            Acesse a plataforma Trust Eats e transforme a experiência dos seus clientes.
          </p>
          <a
            href="/login"
            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-[#0043CE] rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
          >
            <span className="text-lg">Login na plataforma</span>
            <ArrowRight size={24} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0043CE] to-[#0056FF] rounded-xl flex items-center justify-center">
                <UtensilsCrossed size={20} className="text-white" />
              </div>
              <span className="text-white">Trust Eats</span>
            </div>
            <p className="text-gray-500 text-sm">
              Parte do ecossistema Trust AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
