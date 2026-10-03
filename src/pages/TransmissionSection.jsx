import { Radio, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

// Interactive contact link with external target handling
function ContactLink({ icon, label, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer"
    >
      {icon}
      <span>{label}</span>
      <ArrowUpRight size={15} />
    </a>
  );
}

// Transmission / Contact channel section
function TransmissionSection({ profile }) {
  return (
    <section className="transmission section-pad" id="transmission">
      <div className="transmission-grid" />
      <div className="transmission-inner">
        <div className="alert-pill danger">
          <Radio size={13} />
          FINAL TRANSMISSION CHANNEL
        </div>
        <p className="eyebrow">IF YOU RECEIVED THIS SIGNAL...</p>
        <h2>
          LET'S BUILD
          <span> THE NEXT SYSTEM.</span>
        </h2>
        <p className="transmission-copy">
          The archive can survive, but collaboration is what keeps the
          network alive. Find me through the channels below.
        </p>

        <div className="contact-links">
          <ContactLink icon={<Github />} label="GITHUB" href={profile.github} />
          <ContactLink icon={<Linkedin />} label="LINKEDIN" href={profile.linkedin} />
          <ContactLink icon={<Mail />} label="EMAIL" href={`mailto:${profile.email}`} />
        </div>
      </div>
    </section>
  );
}

export default TransmissionSection;
