import { GraduationCap, MapPin, ShieldCheck, Activity } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";

// Small key-value metric component with icon
function Fact({ icon, label, value }) {
  return (
    <div className="fact">
      <div>{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

// Personal background, philosophy, and metrics section
function IdentitySection({ profile }) {
  return (
    <section className="section-pad section" id="archive">
      <SectionHeading number="01" kicker="IDENTITY RECORD" title="SURVIVOR ARCHIVE" />

      <div className="identity-layout">
        <div className="identity-panel">
          <div className="portrait">
            <div className="portrait-scan" />
            <div className="portrait-ring" />
            <div className="portrait-initials">AM</div>
            <span className="portrait-label">VISUAL RECORD // PLACEHOLDER</span>
          </div>
          <div className="identity-meta">
            <span>ID: {profile.callsign}</span>
            <span>STATUS: ACTIVE</span>
          </div>
        </div>

        <div className="story-panel">
          <div className="terminal-line">&gt; decrypting personal record...</div>
          <h2>
            BUILDING THINGS
            <span> WORTH REMEMBERING.</span>
          </h2>
          <p>
            I am a Mechanical Engineering student at NITK Surathkal who likes
            solving problems with both physical systems and software.
          </p>
          <p>
            My interests span full-stack development, Android, CAD, simulation,
            vehicle dynamics, open-source development and technical design.
          </p>

          <div className="fact-grid">
            <Fact
              icon={<GraduationCap />}
              label="EDUCATION"
              value="B.Tech Mechanical Engineering"
            />
            <Fact icon={<MapPin />} label="BASE" value="NITK Surathkal" />
            <Fact
              icon={<ShieldCheck />}
              label="FOCUS"
              value="Software + Engineering"
            />
            <Fact
              icon={<Activity />}
              label="MISSION"
              value="Learn → Build → Test"
            />
          </div>
        </div>
      </div>

      <div className="achievement-strip">
        <div>
          <strong>8.88</strong>
          <span>CURRENT CGPA</span>
        </div>
        <div>
          <strong>2029</strong>
          <span>EXPECTED GRADUATION</span>
        </div>
        <div>
          <strong>10+</strong>
          <span>TECHNOLOGIES</span>
        </div>
        <div>
          <strong>∞</strong>
          <span>IDEAS REMAINING</span>
        </div>
      </div>
    </section>
  );
}

export default IdentitySection;
