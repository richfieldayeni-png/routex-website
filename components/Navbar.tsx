export default function Navbar() {
  return (
    <nav>
      <a href="/" className="logo">
        <div className="logo-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 16c0 1.1.9 2 2 2h1c0 1.1.9 2 2 2s2-.9 2-2h2c0 1.1.9 2 2 2s2-.9 2-2h1c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H6C4.9 4 4 4.9 4 6v10zm2-8h12v6H6V8zm2 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
          </svg>
        </div>
        Route<span>X</span>
      </a>
      <div className="nav-links">
        <a href="/#how-it-works">How it works</a>
        <a href="/#features">Features</a>
        <a href="/#for-business">For business</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </div>
      <a href="/#for-business" className="nav-cta">Get started</a>
    </nav>
  )
}
