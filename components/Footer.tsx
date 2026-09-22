import Link from 'next/link'
import { Bus, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer>
      <div className="footer-main-grid">
        {/* Column 1: Brand & Headquarters */}
        <div>
          <Link href="/" className="navbar-logo" style={{ marginBottom: '16px', display: 'inline-flex' }}>
            <div className="navbar-logo-icon">
              <Bus className="icon-ui" style={{ width: '20px', height: '20px' }} />
            </div>
            <span>Route</span>X
          </Link>

          <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6, maxWidth: '320px', marginBottom: '24px' }}>
            Smart corporate transport platform for Abuja's business districts. Book seat-guaranteed, AC minibuses with real-time GPS tracking.
          </p>

          {/* Abuja Headquarters Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#94A3B8', borderTop: '1px solid #262C33', paddingTop: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin className="icon-ui" style={{ width: '18px', height: '18px', color: '#C9A84C' }} />
              <span>26 Glover Road, Life Camp, Abuja, FCT</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone className="icon-ui" style={{ width: '18px', height: '18px', color: '#C9A84C' }} />
              <a href="tel:08079379009" style={{ color: '#94A3B8' }}>
                08079379009
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail className="icon-ui" style={{ width: '18px', height: '18px', color: '#C9A84C' }} />
              <a href="mailto:admin@routexgo.co" style={{ color: '#94A3B8' }}>
                admin@routexgo.co
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Platform Links */}
        <div className="footer-link-group">
          <div className="footer-col-header">Platform</div>
          <a href="#why-routex">Why RouteX</a>
          <a href="#routes">Abuja Routes</a>
          <a href="#solutions">Solutions</a>
          <a href="#how-it-works">How It Works</a>
        </div>

        {/* Column 3: Solutions */}
        <div className="footer-link-group">
          <div className="footer-col-header">Solutions</div>
          <a href="#solutions">RouteX for Business</a>
          <a href="#solutions">Estates &amp; Communities</a>
          <a href="#solutions">Commuter Pass</a>
          <a href="#solutions">Private Charters</a>
        </div>

        {/* Column 4: Legal & Support (Retained Routes) */}
        <div className="footer-link-group">
          <div className="footer-col-header">Legal &amp; Support</div>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/support">Support &amp; Help</Link>
          <Link href="/delete-account" style={{ color: '#C9A84C', fontWeight: 700 }}>
            Account Deletion
          </Link>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="footer-bottom-bar">
        <div>
          © {new Date().getFullYear()} RouteX Technologies Ltd. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link href="/privacy" style={{ color: '#94A3B8' }}>Privacy</Link>
          <Link href="/terms" style={{ color: '#94A3B8' }}>Terms</Link>
          <Link href="/support" style={{ color: '#94A3B8' }}>Support</Link>
          <Link href="/delete-account" style={{ color: '#94A3B8' }}>Account Deletion</Link>
        </div>
      </div>
    </footer>
  )
}
