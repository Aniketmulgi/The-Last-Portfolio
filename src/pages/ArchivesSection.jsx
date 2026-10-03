import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import { projects } from "../data/portfolioData";

// Interactive project row displaying stack and preview details
function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-row" onClick={onOpen}>
      <div className="project-index">{project.id}</div>
      <div className="project-visual">
        <div className="project-grid-lines" />
        <span>{project.visual}</span>
        <div className="project-crosshair">+</div>
      </div>
      <div className="project-info">
        <div className="project-meta">
          <span>{project.classification}</span>
          <b>{project.tag}</b>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="stack-row">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
      <button className="project-arrow" aria-label={`Open ${project.title}`}>
        <ArrowUpRight />
      </button>
    </article>
  );
}

// Project archives section listing all completed engineering works
function ArchivesSection({ onSelectProject }) {
  return (
    <section className="section-pad section archives" id="archives">
      <SectionHeading number="03" kicker="RECOVERED PROJECT FILES" title="THE ARCHIVES" />

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => onSelectProject(project)}
          />
        ))}
      </div>
    </section>
  );
}

export default ArchivesSection;
