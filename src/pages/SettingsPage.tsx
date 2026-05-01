export default function SettingsPage() {
  return (
    <div className="relative min-h-screen flex bg-warm-950 font-['Noto_Sans_KR'] overflow-hidden text-white">
      {/* Background Orbs */}
      <div className="hero-orb bg-accent-purple w-96 h-96 -top-20 -left-20" />
      <div className="hero-orb bg-accent-cyan w-72 h-72 bottom-1/4 right-10 animate-float" style={{animationDelay:'2s'}} />

      {/* Grid texture */}
      <div className="absolute inset-0 grid-overlay z-0" />

      {/* Sidebar Navigation */}
      <aside className="relative z-10 hidden md:flex w-64 p-6 border-r border-warm-800/50 flex-col pt-24">
        <h2 className="text-2xl font-bold text-warm-50 mb-8">설정</h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-warm-100 bg-warm-800/50 glass-card shadow-premium-sm hover:shadow-glow-blue transition-all duration-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.832 2.849" /></svg>
            <span>프로필</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-warm-300 hover:bg-warm-800/30 hover:text-warm-50 glass hover:shadow-premium-sm transition-all duration-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 11v2l1 1l1 -1v-2l-1 -1z" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /><path d="M9 10h.01" /><path d="M15 10h.01" /><path d="M9 14h6" /></svg>
            <span>보안</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-warm-300 hover:bg-warm-800/30 hover:text-warm-50 glass hover:shadow-premium-sm transition-all duration-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
            <span>알림</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-warm-300 hover:bg-warm-800/30 hover:text-warm-50 glass hover:shadow-premium-sm transition-all duration-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10a2 2 0 0 0 2 -2v-1a2 2 0 1 0 -4 0v1a2 2 0 0 0 2 2z" /><path d="M12 14v4" /><path d="M12 17h1" /><path d="M12 17h-1" /></svg>
            <span>개인 정보</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-warm-300 hover:bg-warm-800/30 hover:text-warm-50 glass hover:shadow-premium-sm transition-all duration-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 8l4 4l-4 4" /><path d="M8 12h7" /></svg>
            <span>기타</span>
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 p-6 md:p-12 overflow-y-auto pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="gradient-text text-4xl md:text-5xl font-bold tracking-tight mb-4">
            계정 설정
          </h1>
          <p className="text-warm-400 text-lg mb-12">
            프로필, 보안 및 알림 설정을 관리하세요.
          </p>

          {/* Profile Settings Card */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold text-warm-50 mb-6">프로필 정보</h2>
            <div className="flex items-center gap-6 mb-6">
              <img data-search-keyword="photography studio team" src="https://images.unsplash.com/photo-1758613654311-32525f489a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHRlYW18ZW58MHwwfHx8MTc3NzYwNjk4NXww&ixlib=rb-4.1.0&q=80&w=1080" alt="사용자 아바타" className="w-20 h-20 rounded-full object-cover border-2 border-accent-blue/50 shadow-premium-sm" />
              <div>
                <p className="text-warm-100 text-xl font-medium">김민준</p>
                <p className="text-warm-400 text-sm">minjun.kim@example.com</p>
                <button className="text-accent-blue hover:underline text-sm mt-2">사진 변경</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-warm-400 text-sm font-medium mb-2">이름</label>
                <input type="text" id="name" defaultValue="김민준" className="w-full px-4 py-3 rounded-lg bg-warm-800/50 border border-warm-700/50 text-warm-100 focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all duration-200" />
              </div>
              <div>
                <label htmlFor="email" className="block text-warm-400 text-sm font-medium mb-2">이메일</label>
                <input type="email" id="email" defaultValue="minjun.kim@example.com" className="w-full px-4 py-3 rounded-lg bg-warm-800/50 border border-warm-700/50 text-warm-100 focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all duration-200" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="bio" className="block text-warm-400 text-sm font-medium mb-2">소개</label>
                <textarea id="bio" defaultValue="사진과 예술을 사랑하는 디지털 갤러리 운영자입니다. 저의 작품 세계에 오신 것을 환영합니다." rows={3} className="w-full px-4 py-3 rounded-lg bg-warm-800/50 border border-warm-700/50 text-warm-100 focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all duration-200"></textarea>
              </div>
            </div>
          </div>

          {/* Password Settings Card */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold text-warm-50 mb-6">비밀번호 변경</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="current-password" className="block text-warm-400 text-sm font-medium mb-2">현재 비밀번호</label>
                <input type="password" id="current-password" placeholder="현재 비밀번호를 입력하세요" className="w-full px-4 py-3 rounded-lg bg-warm-800/50 border border-warm-700/50 text-warm-100 focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all duration-200" />
              </div>
              <div>
                <label htmlFor="new-password" className="block text-warm-400 text-sm font-medium mb-2">새 비밀번호</label>
                <input type="password" id="new-password" placeholder="새 비밀번호를 입력하세요" className="w-full px-4 py-3 rounded-lg bg-warm-800/50 border border-warm-700/50 text-warm-100 focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all duration-200" />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-warm-400 text-sm font-medium mb-2">새 비밀번호 확인</label>
                <input type="password" id="confirm-password" placeholder="새 비밀번호를 다시 입력하세요" className="w-full px-4 py-3 rounded-lg bg-warm-800/50 border border-warm-700/50 text-warm-100 focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all duration-200" />
              </div>
            </div>
          </div>

          {/* Notification Settings Card */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold text-warm-50 mb-6">알림 설정</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <label htmlFor="email-notifications" className="text-warm-200 cursor-pointer">이메일 알림</label>
                <label htmlFor="email-notifications" className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" id="email-notifications" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-warm-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-warm-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-blue" />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="app-notifications" className="text-warm-200 cursor-pointer">앱 푸시 알림</label>
                <label htmlFor="app-notifications" className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" id="app-notifications" className="sr-only peer" />
                  <div className="w-11 h-6 bg-warm-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-warm-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-blue" />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="marketing-emails" className="text-warm-200 cursor-pointer">마케팅 및 프로모션 이메일</label>
                <label htmlFor="marketing-emails" className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" id="marketing-emails" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-warm-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-warm-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-blue" />
                </label>
              </div>
            </div>
          </div>

          {/* Privacy Settings Card */}
          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-semibold text-warm-50 mb-6">개인 정보 설정</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <label htmlFor="public-profile" className="text-warm-200 cursor-pointer">프로필 공개</label>
                <label htmlFor="public-profile" className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" id="public-profile" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-warm-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-warm-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-blue" />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="activity-status" className="text-warm-200 cursor-pointer">활동 상태 표시</label>
                <label htmlFor="activity-status" className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" id="activity-status" className="sr-only peer" />
                  <div className="w-11 h-6 bg-warm-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-warm-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-blue" />
                </label>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="text-right">
            <button className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-8 py-4 rounded-xl font-semibold shadow-glow-blue">
              변경 사항 저장
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}