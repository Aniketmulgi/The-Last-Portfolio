import { Terminal, X } from "lucide-react";

// Interactive command-line modal for quick section navigation
function TerminalModal({ value, setValue, onKeyDown, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="terminal-modal" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-title">
          <span>
            <Terminal size={15} /> survivor-terminal
          </span>
          <button onClick={onClose}>
            <X size={16} />
          </button>
        </div>
        <div className="terminal-content">
          <p>Silicon Maze terminal // navigation interface</p>
          <p className="green">Available commands:</p>
          <p>about &nbsp; skills &nbsp; projects &nbsp; contact &nbsp; home</p>
          <br />
          <div className="terminal-input">
            <span>root@archive:~$</span>
            <input
              autoFocus
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="type a command..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerminalModal;
