// Reusable numbered section title with divider rule
function SectionHeading({ number, kicker, title }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p>{kicker}</p>
        <h2>{title}</h2>
      </div>
      <div className="heading-rule" />
    </div>
  );
}

export default SectionHeading;
