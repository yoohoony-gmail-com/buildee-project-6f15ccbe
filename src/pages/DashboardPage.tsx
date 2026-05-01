export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-warm-950 text-warm-100 font-['Noto_Sans_KR']">
      {/* Background Orbs */}
      <div className="hero-orb bg-accent-blue w-80 h-80 -top-20 -left-20 animate-float" />
      <div className="hero-orb bg-accent-purple w-64 h-64 top-1/4 right-10 animate-float" style={{animationDelay:'2s'}} />
      <div className="hero-orb bg-accent-cyan w-56 h-56 bottom-1/4 left-1/4 animate-float" style={{animationDelay:'4s'}} />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay" />

      <main className="relative z-10 py-16 md:py-24 px-6 max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 md:mb-16">
          <div>
            <h1 className="gradient-text text-4xl md:text-5xl font-bold tracking-tight mb-2">
              대시보드
            </h1>
            <p className="text-warm-400 text-lg">
              사진과 작품을 관리하고 갤러리 성과를 확인하세요.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-6 py-3 rounded-xl font-semibold shadow-glow-blue">
              새 작품 업로드
            </button>
            <button className="glass-card px-6 py-3 rounded-xl text-warm-200 font-semibold">
              갤러리 미리보기
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="gradient-text text-4xl font-bold mb-1">128</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">총 작품 수</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="gradient-text text-4xl font-bold mb-1">1,234</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">총 조회수</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="gradient-text text-4xl font-bold mb-1">98</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">댓글</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="gradient-text text-4xl font-bold mb-1">4.8</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">평균 평점</div>
            </div>
          </div>
        </section>

        {/* Recent Works & Analytics */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-50 mb-6">최근 작품</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-4">
                <img data-search-keyword="photography studio interior" src="https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGludGVyaW9yfGVufDB8MHx8fDE3Nzc2MDY5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="최근 작품 1" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold text-warm-100 mb-1">빛과 그림자</h3>
                <p className="text-warm-400 text-sm">2024년 5월 10일 업로드</p>
              </div>
              <div className="glass-card p-4">
                <img data-search-keyword="photography studio detail" src="https://images.unsplash.com/photo-1770319778939-1a6378837803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGRldGFpbHxlbnwwfDB8fHwxNzc3NjA2OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="최근 작품 2" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold text-warm-100 mb-1">도시의 밤</h3>
                <p className="text-warm-400 text-sm">2024년 5월 8일 업로드</p>
              </div>
              <div className="glass-card p-4">
                <img data-search-keyword="photography studio equipment" src="https://images.unsplash.com/photo-1588420635201-3a9e2a2a0a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGVxdWlwbWVudHxlbnwwfDB8fHwxNzc3NjA3MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="최근 작품 3" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold text-warm-100 mb-1">자연의 색</h3>
                <p className="text-warm-400 text-sm">2024년 5월 5일 업로드</p>
              </div>
              <div className="glass-card p-4">
                <img data-search-keyword="photography studio setup" src="https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHNldHVwfGVufDB8MHx8fDE3Nzc2MDcwODl8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="최근 작품 4" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold text-warm-100 mb-1">인물 스냅</h3>
                <p className="text-warm-400 text-sm">2024년 5월 3일 업로드</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-warm-50 mb-6">갤러리 분석</h2>
            <div className="glass-card p-6 h-full flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-warm-100 mb-2">월별 조회수</h3>
                <img data-search-keyword="data analytics chart" src="https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwY2hhcnR8ZW58MHwwfHx8MTc3NzYwNzA5MHww&ixlib=rb-4.1.0&q=80&w=1080" alt="월별 조회수 차트" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-warm-100 mb-2">인기 작품</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center text-warm-300">
                    <span>1. 빛과 그림자</span>
                    <span className="font-medium text-warm-200">350회</span>
                  </li>
                  <li className="flex justify-between items-center text-warm-300">
                    <span>2. 도시의 밤</span>
                    <span className="font-medium text-warm-200">280회</span>
                  </li>
                  <li className="flex justify-between items-center text-warm-300">
                    <span>3. 자연의 색</span>
                    <span className="font-medium text-warm-200">210회</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-warm-50 mb-6">빠른 작업</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 hover:shadow-glow-blue transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-warm-100 mb-2">새 컬렉션 생성</h3>
              <p className="text-warm-400 leading-relaxed">새로운 작품들을 위한 컬렉션을 만드세요.</p>
            </div>
            <div className="glass-card p-6 hover:shadow-glow-purple transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
                  <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-warm-100 mb-2">작품 정보 편집</h3>
              <p className="text-warm-400 leading-relaxed">기존 작품의 제목, 설명 등을 수정합니다.</p>
            </div>
            <div className="glass-card p-6 hover:shadow-glow-cyan transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-emerald flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-warm-100 mb-2">프로필 업데이트</h3>
              <p className="text-warm-400 leading-relaxed">내 프로필 정보를 최신 상태로 유지하세요.</p>
            </div>
          </div>
        </section>

        {/* User Profile */}
        <section className="glass-card p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img data-search-keyword="photography studio team" src="https://images.unsplash.com/photo-1758613654311-32525f489a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHRlYW18ZW58MHwwfHx8MTc3NzYwNjk4NXww&ixlib=rb-4.1.0&q=80&w=1080" alt="사용자 아바타" className="w-24 h-24 rounded-full object-cover border-4 border-warm-700 shadow-premium-md" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-2xl font-bold text-warm-50 mb-2">김작가 님, 안녕하세요!</h3>
            <p className="text-warm-400 text-lg mb-4">
              당신의 갤러리 활동을 확인하고 새로운 작품을 추가해보세요.
            </p>
            <button className="btn-premium bg-gradient-to-r from-accent-rose to-accent-amber text-white px-8 py-3 rounded-xl font-semibold shadow-glow-rose">
              프로필 설정
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}