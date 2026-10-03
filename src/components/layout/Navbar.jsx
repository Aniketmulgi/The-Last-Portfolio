import { Radio, Menu, X } from "lucide-react";

// Top navigation bar with status time and section links
function Navbar({ profile, formattedTime, menuOpen, setMenuOpen, onNavigate }) {
  return (
    <header className="nav">
      <button className="brand" onClick={() => onNavigate("home")}>
        <span className="brand-mark">
          <Radio size={15} />
        </span>
        <span>
          <b>LAST//ARCHIVE</b>
          <small>{profile.callsign}</small>
        </span>
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <button onClick={() => onNavigate("archive")}>01 / IDENTITY</button>
        <button onClick={() => onNavigate("arsenal")}>02 / ARSENAL</button>
        <button onClick={() => onNavigate("archives")}>03 / ARCHIVES</button>
        <button onClick={() => onNavigate("transmission")}>04 / TRANSMISSION</button>
      </nav>

      <div className="nav-status">
        <span className="live-dot" />
        <span>{formattedTime}</span>
      </div>

      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export default Navbar;
