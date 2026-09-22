import { Building2, Home, CreditCard, Bus, ArrowUpRight } from 'lucide-react'

export default function Solutions() {
  const solutions = [
    {
      icon: Building2,
      badge: 'FOR ENTERPRISES',
      title: 'RouteX for Business',
      desc: 'Custom corporate shuttle routes tailored for office employees. Provide seamless transportation stipends with centralized HR billing and consolidated monthly reporting.',
      action: 'Inquire for Corporate Fleet',
    },
    {
      icon: Home,
      badge: 'FOR RESIDENTIAL ESTATES',
      title: 'Estates & Communities',
      desc: 'Dedicated peak-hour shuttle connections between gated residential estates in Lokogama, Lugbe, or Kubwa to Central Business District.',
      action: 'Partner With Your Estate Board',
    },
    {
      icon: CreditCard,
      badge: 'FOR DAILY COMMUTERS',
      title: 'Commuter Subscription Pass',
      desc: 'Save up to 25% with automated weekly or monthly subscription passes. Guaranteed seat reservation on your preferred morning & evening slots for flat ₦500 / trip.',
      action: 'Explore Commuter Passes',
    },
    {
      icon: Bus,
      badge: 'GROUP TRANSPORTATION',
      title: 'Private Charters & Events',
      desc: 'Rent executive, climate-controlled minibuses for company retreats, conferences, weddings, or team outings across the Federal Capital Territory.',
      action: 'Book Group Charter',
    },
  ]

  return (
    <section id="solutions" className="solutions-section-slate">
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
        <span style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '16px' }}>
          EXECUTIVE MOBILITY SOLUTIONS
        </span>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-1px', marginBottom: '16px' }}>
          Designed for Every <span style={{ color: '#C9A84C' }}>Transport Need</span>
        </h2>
        <p style={{ fontSize: '16px', color: '#94A3B8' }}>
          Whether you are a corporation, estate association, or daily commuter, RouteX provides structured transit solutions across Abuja.
        </p>
      </div>

      <div className="solutions-dual-grid max-w-6xl mx-auto">
        {solutions.map((item, idx) => {
          const Icon = item.icon
          return (
            <div key={idx} className="solution-executive-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1px', color: '#C9A84C', background: 'rgba(201,168,76,0.15)', padding: '4px 12px', borderRadius: '14px', textTransform: 'uppercase' }}>
                    {item.badge}
                  </span>
                  <div style={{ width: '44px', height: '44px', background: '#1A5632', color: '#C9A84C', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon className="icon-ui" style={{ width: '20px', height: '20px' }} />
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--display)', fontSize: '24px', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6, marginBottom: '28px' }}>{item.desc}</p>
              </div>

              <a
                href="#routes"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#C9A84C', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}
              >
                {item.action}
                <ArrowUpRight style={{ width: '16px', height: '16px' }} />
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
