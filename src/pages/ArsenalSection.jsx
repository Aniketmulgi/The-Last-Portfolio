import { Terminal } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import { skillGroups } from "../data/portfolioData";

// Technical skills showcase and terminal launch trigger
function ArsenalSection({ onOpenTerminal }) {
  return (
    <section className="section-pad section arsenal" id="arsenal">
      <SectionHeading number="02" kicker="TECHNICAL CAPABILITIES" title="THE ARSENAL" />

      <div className="arsenal-intro">
        <div>
          <div className="terminal-line">&gt; system.scan --capabilities</div>
          <p>
            Every tool in this archive is something I have worked with,
            practiced or used to build a real project.
          </p>
        </div>
        <button className="terminal-launch" onClick={onOpenTerminal}>
          <Terminal size={15} /> OPEN TERMINAL
        </button>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-head">
                <Icon size={19} />
                <span>{group.title}</span>
                <small>OK</small>
              </div>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ArsenalSection;
