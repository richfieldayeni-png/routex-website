import { Armchair, Clock, DollarSign, ShieldCheck } from 'lucide-react'

export default function LaunchStandards() {
  const standards = [
    {
      num: '01',
      icon: Armchair,
      title: '100% Reserved AC Seating',
      desc: 'No standing, overcrowding, or terminal scuffles. Every ticket reserves your guaranteed seat on a climate-controlled minibus.',
    },
    {
      num: '02',
      icon: Clock,
      title: 'Fixed Monitored Routes',
      desc: 'Punctual, scheduled departures synced with corporate office hours across Wuse, Maitama, and Central Business District.',
    },
    {
      num: '03',
      icon: DollarSign,
      title: 'Zero Surge Pricing',
      desc: 'Transparent, flat commuter fares that remain constant — even during heavy Abuja downpours or peak traffic hours.',
    },
    {
      num: '04',
      icon: ShieldCheck,
      title: 'Certified Professional Drivers',
      desc: 'Thoroughly screened, background-checked operators trained in defensive driving and passenger safety standards.',
    },
  ]

  return (
    <section id="standards" className="launch-standards-bar">
      <div className="standards-container">
        <div className="standards-header">
          <span className="section-tag">Operational Excellence</span>
          <h2 className="section-title">
            The RouteX <em>Launch Standards</em>
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7280' }}>
            Four non-negotiable operational commitments designed to elevate your daily commute in Abuja.
          </p>
        </div>

        <div className="standards-grid">
          {standards.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="standard-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span className="standard-num">{item.num}</span>
                  <div style={{ width: '40px', height: '40px', background: '#EAF3EE', color: '#164E2D', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon className="icon-ui" style={{ width: '20px', height: '20px' }} />
                  </div>
                </div>
                <div className="standard-title">{item.title}</div>
                <div className="standard-desc">{item.desc}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
