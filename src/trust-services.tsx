import { useState } from 'react';
import { Bot, Workflow, MessageSquare, Zap, TrendingUp, DollarSign, BarChart3, Shield, ArrowRight, Sparkles, Cpu, Network, Code2, CheckCircle2 } from 'lucide-react';

export default function TrustServices() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Blur Effect */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#00D66A]/20">
        <nav className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-[#00D66A] blur-xl opacity-50" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-[#00D66A] to-[#00B557] rounded-xl flex items-center justify-center">
                  <Bot size={22} className="text-white" />
                </div>
              </div>
              <span className="text-xl text-white tracking-tight">Trust Services</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solucoes" className="text-gray-400 hover:text-[#00D66A] transition-colors">
                Soluções
              </a>
              <a href="#como-funciona" className="text-gray-400 hover:text-[#00D66A] transition-colors">
                Como funciona
              </a>
              <a href="#segmentos" className="text-gray-400 hover:text-[#00D66A] transition-colors">
                Segmentos
              </a>
              <a href="#contato" className="text-gray-400 hover:text-[#00D66A] transition-colors">
                Contato
              </a>
              <a
                href="/login"
                className="px-6 py-2.5 bg-gradient-to-r from-[#00D66A] to-[#00B557] text-white rounded-full hover:shadow-lg hover:shadow-[#00D66A]/50 transition-all"
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
            <div className="md:hidden mt-6 pb-4 flex flex-col space-y-4 border-t border-[#00D66A]/20 pt-4">
              <a href="#solucoes" className="text-gray-400 hover:text-[#00D66A] transition-colors">
                Soluções
              </a>
              <a href="#como-funciona" className="text-gray-400 hover:text-[#00D66A] transition-colors">
                Como funciona
              </a>
              <a href="#segmentos" className="text-gray-400 hover:text-[#00D66A] transition-colors">
                Segmentos
              </a>
              <a href="#contato" className="text-gray-400 hover:text-[#00D66A] transition-colors">
                Contato
              </a>
              <a
                href="/login"
                className="px-6 py-2.5 bg-gradient-to-r from-[#00D66A] to-[#00B557] text-white rounded-full text-center"
              >
                Login
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - Futuristic */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#00D66A]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00B557]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D66A]/10 border border-[#00D66A]/30 rounded-full mb-8">
              <Sparkles className="text-[#00D66A]" size={16} />
              <span className="text-[#00D66A] text-sm">Powered by AI</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Automação e IA para empresas que querem escalar.
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Integramos sistemas, dados e canais em um único fluxo inteligente. Automatize processos complexos e libere seu time para o que realmente importa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contato"
                className="group px-8 py-4 bg-gradient-to-r from-[#00D66A] to-[#00B557] text-white rounded-full hover:shadow-lg hover:shadow-[#00D66A]/50 transition-all inline-flex items-center justify-center gap-2"
              >
                Falar com um especialista
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#solucoes"
                className="px-8 py-4 bg-white/5 text-white rounded-full border border-white/10 hover:bg-white/10 transition-all inline-flex items-center justify-center"
              >
                Ver soluções
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções Section - Modern Cards */}
      <section id="solucoes" className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Soluções Inteligentes
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ferramentas poderosas que transformam a forma como sua empresa opera
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Automação de processos */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-[#00D66A]/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D66A]/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:bg-[#00D66A]/10 transition-all" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-[#00D66A]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00D66A]/20 transition-colors">
                  <Zap className="text-[#00D66A]" size={28} />
                </div>
                <h3 className="text-2xl text-white mb-4">Automação de processos</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Elimine tarefas repetitivas e ganhe eficiência operacional com fluxos automatizados inteligentes.
                </p>
                <div className="flex items-center gap-2 text-[#00D66A] text-sm">
                  <span>Saiba mais</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Integrações via API */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-[#00D66A]/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D66A]/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:bg-[#00D66A]/10 transition-all" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-[#00D66A]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00D66A]/20 transition-colors">
                  <Network className="text-[#00D66A]" size={28} />
                </div>
                <h3 className="text-2xl text-white mb-4">Integrações via API</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Conecte todos os seus sistemas e ferramentas em uma única plataforma integrada e sincronizada.
                </p>
                <div className="flex items-center gap-2 text-[#00D66A] text-sm">
                  <span>Saiba mais</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* n8n e workflows */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-[#00D66A]/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D66A]/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:bg-[#00D66A]/10 transition-all" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-[#00D66A]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00D66A]/20 transition-colors">
                  <Workflow className="text-[#00D66A]" size={28} />
                </div>
                <h3 className="text-2xl text-white mb-4">n8n e workflows</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Crie workflows personalizados sem código e otimize processos complexos de forma visual.
                </p>
                <div className="flex items-center gap-2 text-[#00D66A] text-sm">
                  <span>Saiba mais</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Chatbots e IA */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-[#00D66A]/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D66A]/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:bg-[#00D66A]/10 transition-all" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-[#00D66A]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00D66A]/20 transition-colors">
                  <MessageSquare className="text-[#00D66A]" size={28} />
                </div>
                <h3 className="text-2xl text-white mb-4">Chatbots e IA conversacional</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Atendimento inteligente 24/7 com chatbots alimentados por IA de última geração.
                </p>
                <div className="flex items-center gap-2 text-[#00D66A] text-sm">
                  <span>Saiba mais</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section - Stats Style */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00D66A] to-[#00B557] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={36} />
              </div>
              <h3 className="text-2xl text-white mb-3">Eficiência +300%</h3>
              <p className="text-gray-400">
                Aumente drasticamente a produtividade com automação inteligente
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00D66A] to-[#00B557] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-white" size={36} />
              </div>
              <h3 className="text-2xl text-white mb-3">Escalabilidade</h3>
              <p className="text-gray-400">
                Infraestrutura que cresce junto com seu negócio
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00D66A] to-[#00B557] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <DollarSign className="text-white" size={36} />
              </div>
              <h3 className="text-2xl text-white mb-3">Redução -60%</h3>
              <p className="text-gray-400">
                Diminua custos operacionais significativamente
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00D66A] to-[#00B557] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-white" size={36} />
              </div>
              <h3 className="text-2xl text-white mb-3">Controle Total</h3>
              <p className="text-gray-400">
                Visão 360° de todos processos em tempo real
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section - Bold */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D66A] via-[#00B557] to-[#008F45]" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl text-white mb-8">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto">
            Acesse a plataforma Trust Services e comece a automatizar seus processos hoje mesmo.
          </p>
          <a
            href="/login"
            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-[#00D66A] rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
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
              <div className="w-8 h-8 bg-gradient-to-br from-[#00D66A] to-[#00B557] rounded-xl flex items-center justify-center">
                <Bot size={20} className="text-white" />
              </div>
              <span className="text-white">Trust Services</span>
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
