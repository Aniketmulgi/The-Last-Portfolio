import { bootLines } from "../../data/portfolioData";

// Initial system diagnostic boot screen
function BootScreen() {
  return (
    <div className="boot">
      <div className="boot-inner">
        <div className="boot-brand">
          <span className="live-dot" />
          SILICON MAZE // DOOMSDAY PROTOCOL
        </div>
        <h1>
          LAST
          <br />
          <span>PORTFOLIO</span>
        </h1>
        <div className="boot-lines">
          {bootLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="boot-bar">
          <span />
        </div>
        <small>RECOVERING DIGITAL SURVIVOR ARCHIVE...</small>
      </div>
    </div>
  );
}

export default BootScreen;
