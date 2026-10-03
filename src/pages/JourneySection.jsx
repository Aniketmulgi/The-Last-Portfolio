import SectionHeading from "../components/common/SectionHeading";
import { timeline } from "../data/portfolioData";

// Chronological survival history log section
function JourneySection() {
  return (
    <section className="section-pad section journey">
      <SectionHeading number="04" kicker="PERSONAL HISTORY" title="SURVIVAL LOG" />

      <div className="timeline">
        {timeline.map(([year, title, description]) => (
          <div className="timeline-row" key={year}>
            <div className="timeline-year">{year}</div>
            <div className="timeline-node" />
            <div className="timeline-entry">
              <span>LOG_{year}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JourneySection;
