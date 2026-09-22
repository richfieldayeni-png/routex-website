import { ShieldCheck, Navigation, CalendarCheck, CreditCard } from 'lucide-react'

export default function TrustBar() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Verified Drivers',
      desc: 'Screened professional operators.',
    },
    {
      icon: Navigation,
      title: 'Live Tracking',
      desc: 'Real-time vehicle position & ETA.',
    },
    {
      icon: CalendarCheck,
      title: 'Scheduled Routes',
      desc: 'Punctual corporate departures.',
    },
    {
      icon: CreditCard,
      title: 'Cashless Payments',
      desc: 'Seamless ₦500 in-app booking.',
    },
  ]

  return (
    <section className="trust-bar-wrapper">
      <div className="trust-pill-bar">
        {pillars.map((item, idx) => {
          const Icon = item.icon
          return (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div className="trust-item-node">
                <div style={{ width: '42px', height: '42px', background: '#EAF3EE', color: '#1A5632', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon className="icon-ui" style={{ width: '20px', height: '20px' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: '15px', fontWeight: 700, color: '#121517' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: '#6B7280' }}>{item.desc}</div>
                </div>
              </div>

              {idx < pillars.length - 1 && <div className="trust-divider"></div>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
