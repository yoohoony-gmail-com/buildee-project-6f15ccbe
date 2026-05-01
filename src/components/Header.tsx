import { NavLink } from 'react-router-dom';

function getLinkClassName({ isActive }: { isActive: boolean }) {
  return isActive
    ? "text-white font-semibold border-b-2 border-accent-blue px-3 py-2 text-sm"
    : "text-warm-400 hover:text-white transition-colors px-3 py-2 text-sm";
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-warm-950/90 backdrop-blur-md border-b border-warm-800/50">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="gradient-text font-bold text-lg">Site</span>
        <div className="flex items-center gap-1">
          <NavLink to="/" className={getLinkClassName}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={getLinkClassName}>
            Dashboard
          </NavLink>
          <NavLink to="/settings" className={getLinkClassName}>
            Settings
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
