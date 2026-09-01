export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '16px' }}>
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16c0 1.1.9 2 2 2h1c0 1.1.9 2 2 2s2-.9 2-2h2c0 1.1.9 2 2 2s2-.9 2-2h1c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H6C4.9 4 4 4.9 4 6v10zm2-8h12v6H6V8zm2 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
              </div>
              Route<span style={{ color: '#2DA05C' }}>X</span>
            </div>
            <p>Smart corporate transport for Abuja&apos;s business district. Reliable, trackable, seat-based commutes for modern teams.</p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Product</div>
            <a href="/#how-it-works">How it works</a>
            <a href="/#features">Features</a>
            <a href="/#for-business">For business</a>
            <a href="#">Driver app</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Company</div>
            <a href="/faq">FAQ</a>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Legal</div>
            <a href="/privacy">Privacy policy</a>
            <a href="/terms">Terms of service</a>
            <a href="/support">Support</a>
            <a href="/policies/trip-cancellation">Cancellation policy</a>
            <a href="/delete-account">Delete account</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2025 RouteX Technologies. All rights reserved.</div>
          <div className="footer-legal">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/support">Support</a>
            <a href="/delete-account">Account Deletion</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
