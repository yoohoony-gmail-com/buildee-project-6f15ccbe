import { Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';

function Header() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm transition-colors ${
      isActive
        ? 'text-white font-semibold border-b-2 border-accent-blue'
        : 'text-warm-400 hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-warm-950/90 backdrop-blur-md border-b border-warm-800/50">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="gradient-text font-bold text-lg">Site</Link>
        <div className="flex items-center gap-1">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
          <NavLink to="/settings" className={navLinkClass}>Settings</NavLink>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-warm-800/50 py-16 px-6 bg-warm-950">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <Link to="/" className="gradient-text font-bold text-lg">Site</Link>
          <p className="text-warm-500 text-sm leading-relaxed mt-3 max-w-sm">Building the future, one pixel at a time.</p>
        </div>
        <div>
          <h4 className="font-semibold text-warm-300 mb-4">Pages</h4>
          <ul className="space-y-2 text-sm text-warm-500">
            <li><Link to="/" className="hover:text-accent-blue transition-colors">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-accent-blue transition-colors">Dashboard</Link></li>
            <li><Link to="/settings" className="hover:text-accent-blue transition-colors">Settings</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-warm-300 mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-warm-500">
            <li><a href="#" className="hover:text-accent-blue transition-colors">About</a></li>
            <li><a href="#" className="hover:text-accent-blue transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-accent-blue transition-colors">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-warm-800/50 text-center text-warm-600 text-sm">
        © 2026 Site. All rights reserved.
      </div>
    </footer>
  );
}

function Layout() {
  return (
    <div className="min-h-screen bg-warm-950 text-white font-sans">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
