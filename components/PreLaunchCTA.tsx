import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function PreLaunchCTA() {
  return (
    <section className="cta-banner-forest">
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(250, 250, 247, 0.12)', border: '1px solid rgba(201, 168, 76, 0.4)', color: '#C9A84C', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '24px' }}>
          <ShieldCheck style={{ width: '16px', height: '16px', color: '#C9A84C' }} />
          Abuja Corporate Commute Platform
        </div>

        <h2 style={{ fontFamily: 'var(--display)', fontSize: '46px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '20px' }}>
          Your commute. Safe. Scheduled. Sorted.
        </h2>

        <p style={{ fontSize: '18px', color: '#EAF3EE', opacity: 0.92, lineHeight: 1.65, marginBottom: '36px' }}>
          Join thousands of professionals and forward-thinking Abuja employers enjoying seat-guaranteed corporate shuttle transit.
        </p>

        <a href="#routes" className="btn-gold-pill" style={{ padding: '16px 36px', fontSize: '16px' }}>
          Book a Ride
          <ArrowRight className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
        </a>
      </div>
    </section>
  )
}
