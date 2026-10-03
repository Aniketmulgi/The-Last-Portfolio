import { Activity, ChevronRight, ArrowDown } from "lucide-react";

// Landing hero section with survivor HUD and quick calls-to-action
function HeroSection({ profile, onNavigate }) {
  return (
    <section className="hero section-pad" id="home">
      <div className="hero-grid" />
      <div className="hero-orbit orbit-a" />
      <div className="hero-orbit orbit-b" />

      <div className="hero-copy">
        <div className="alert-pill">
          <Activity size={13} />
          GLOBAL NETWORK // CRITICAL
        </div>

        <p className="eyebrow">RECOVERED DIGITAL IDENTITY // FILE 001</p>

        <h1>
          ANIKET
          <span>MULGI.</span>
        </h1>

        <div className="hero-role">
          <span className="prompt">&gt;</span>
          {profile.role}
          <span className="blink">_</span>
        </div>

        <p className="hero-intro">{profile.intro}</p>

        <div className="hero-actions">
          <button className="btn primary" onClick={() => onNavigate("archive")}>
            OPEN SURVIVOR FILE <ChevronRight size={15} />
          </button>
          <button className="btn ghost" onClick={() => onNavigate("archives")}>
            VIEW MISSION LOG <ArrowDown size={15} />
          </button>
        </div>
      </div>

      <div className="hero-hud hud-left">
        <span>IDENTITY</span>
        <b>VERIFIED</b>
      </div>
      <div className="hero-hud hud-right">
        <span>MEMORY INTEGRITY</span>
        <b>97.42%</b>
      </div>

      <div className="hero-coordinate">
        <span>13° 00′ N</span>
        <span>74° 47′ E</span>
        <span>NITK // SURATHKAL</span>
      </div>

      <div className="scroll-cue">
        <ArrowDown size={14} />
        SCROLL TO RECOVER ARCHIVE
      </div>
    </section>
  );
}

export default HeroSection;
