import { ShieldCheck, Armchair, Wind, DollarSign, Radio, Building2, CheckCircle2 } from 'lucide-react'

export default function WhyRouteX() {
  const cards = [
    {
      icon: Armchair,
      title: 'Fixed Seat Guarantee',
      desc: 'Never fight for bus seats or stand in queues again. Every booking reserves your personal seat.',
    },
    {
      icon: Wind,
      title: 'Air-Conditioned Comfort',
      desc: 'Travel in clean, executive minibuses equipped with active climate control and phone charging ports.',
    },
    {
      icon: DollarSign,
      title: 'Transparent ₦500 Fare',
      desc: 'Flat, predictable commuter fares with zero surge pricing during heavy rain or peak traffic hours.',
    },
    {
      icon: Radio,
      title: 'Live GPS Location Sharing',
      desc: 'Share real-time trip status and location links with family or security teams for peace of mind.',
    },
    {
      icon: Building2,
      title: 'Corporate Expense Integration',
      desc: 'Seamlessly link company transport allowances and receive monthly consolidated tax invoices.',
    },
  ]

  return (
    <section id="why-routex" className="why-section-dark">
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
        <span style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '16px' }}>
          Superior Commute Experience
        </span>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-1px', marginBottom: '16px' }}>
          Why Abuja Professionals Choose <span style={{ color: '#C9A84C' }}>RouteX</span>
        </h2>
        <p style={{ fontSize: '16px', color: '#94A3B8' }}>
          Built specifically to eliminate corporate transport hassle across the Federal Capital Territory.
        </p>
      </div>

      {/* "You Will Get Home" Core Guarantee Container with Glowing Emerald Border */}
      <div className="guarantee-container-emerald">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(42, 122, 74, 0.25)', color: '#C9A84C', border: '1px solid rgba(201, 168, 76, 0.4)', padding: '6px 14px', borderRadius: '16px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '20px' }}>
              <ShieldCheck className="icon-ui" style={{ width: '20px', height: '20px' }} /> Core Guarantee
            </div>

            <h3 style={{ fontFamily: 'var(--display)', fontSize: '36px', fontWeight: 900, color: '#FFFFFF', marginBottom: '12px' }}>
              "You Will Get Home"
            </h3>

            <div style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 700, color: '#C9A84C', marginBottom: '20px', lineHeight: 1.4 }}>
              Non-Negotiable Reliability Promise for Abuja Working Professionals
            </div>

            <p style={{ color: '#E2E8F0', fontSize: '15px', lineHeight: 1.65, marginBottom: '28px' }}>
              Our relentless commitment: whether it's sudden Abuja downpours, peak traffic congestion, or late-night corporate overtimes, RouteX guarantees a safe, reliable ride home.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Guaranteed backup vehicles on standby across FCT corridors',
                'Dedicated 24/7 Abuja support hotline & dispatch center',
                'Vetted professional drivers with defensive driving training',
                'Instant digital ride coverage & trip status tracking',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#E2E8F0', fontWeight: 500 }}>
                  <CheckCircle2 style={{ width: '20px', height: '20px', color: '#C9A84C', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(12px)', padding: '32px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div style={{ textAlign: 'center', paddingBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: '42px', fontWeight: 900, color: '#C9A84C' }}>100%</div>
              <div style={{ fontSize: '12px', color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginTop: '4px' }}>
                Commuter Reliability Commitment
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', paddingTop: '20px', textAlign: 'center' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 800, color: '#FFFFFF' }}>0</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>Stranded Riders</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 800, color: '#FFFFFF' }}>24/7</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>Active Dispatch</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid with Glowing Charcoal Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {cards.map((card, idx) => {
          const Icon = card.icon
          return (
            <div
              key={idx}
              style={{
                background: '#181C20',
                border: '1px solid rgba(42, 122, 74, 0.35)',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
              }}
            >
              <div>
                <div style={{ width: '42px', height: '42px', background: 'rgba(42, 122, 74, 0.25)', color: '#C9A84C', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Icon className="icon-ui" style={{ width: '20px', height: '20px' }} />
                </div>
                <h4 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                  {card.title}
                </h4>
                <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
