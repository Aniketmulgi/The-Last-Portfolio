import { X, ExternalLink } from "lucide-react";

// Modal dialog for detailed project specifications
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X />
        </button>
        <div className="terminal-line">&gt; opening mission file {project.id}...</div>
        <span className="modal-class">{project.classification}</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="modal-stack">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <a className="btn primary" href={project.link} target="_blank" rel="noreferrer">
          OPEN EXTERNAL RECORD <ExternalLink size={15} />
        </a>
      </div>
    </div>
  );
}

export default ProjectModal;
