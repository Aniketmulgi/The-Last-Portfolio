// Bottom footer component displaying survival system metadata
function Footer({ profile }) {
  return (
    <footer>
      <span>THE LAST PORTFOLIO // {profile.callsign}</span>
      <span>
        ARCHIVE STATUS: <b>STABLE</b>
      </span>
      <span>2026 // END OF TRANSMISSION</span>
    </footer>
  );
}

export default Footer;
