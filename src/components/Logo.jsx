function Logo() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span className="logo-piece logo-piece-left">
        <span className="logo-letter">T</span>
      </span>
      <span className="logo-piece logo-piece-right">
        <span className="logo-letter">J</span>
      </span>
      <svg className="logo-hexagon" viewBox="0 0 64 56" focusable="false">
        <polygon points="20,2 44,2 62,28 44,54 20,54 2,28" />
      </svg>
      <span className="logo-monogram">TJ</span>
    </span>
  );
}

export default Logo;
