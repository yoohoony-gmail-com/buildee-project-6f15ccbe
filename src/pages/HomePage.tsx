export default function HomePage() {
  return (
    <div className="min-h-screen bg-warm-950 text-white font-sans">
      <div className="min-h-screen bg-warm-950 font-['Noto_Sans_KR'] text-warm-100">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-950 py-24 md:py-32">
          {/* Background orbs */}
          <div className="hero-orb bg-accent-blue w-96 h-96 -top-20 -left-20" />
          <div className="hero-orb bg-accent-purple w-72 h-72 top-1/3 right-10" style={{ animationDelay: '2s' }} />
          <div className="hero-orb bg-accent-cyan w-80 h-80 bottom-10 left-1/4" style={{ animationDelay: '4s' }} />
          {/* Grid texture */}
          <div className="absolute inset-0 grid-overlay" />

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-warm-300 mb-8 shadow-premium-sm">
              ✨ 예술을 담다
            </span>
            <h1 className="gradient-text text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              당신의 순간을 영원히, <br />
              최고의 갤러리 경험
            </h1>
            <p className="text-warm-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              사진과 작품을 위한 완벽한 공간에서 당신의 이야기를 공유하세요.
              잊을 수 없는 시각적 경험을 선사합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-8 py-4 rounded-xl font-semibold shadow-glow-blue">
                지금 작품 전시하기
              </button>
              <button className="glass-card px-8 py-4 rounded-xl text-warm-200 font-semibold hover:shadow-glow-purple transition-all duration-300">
                갤러리 둘러보기
              </button>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="py-24 px-6 bg-warm-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-warm-50 tracking-tight leading-tight">Featured Galleries</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
