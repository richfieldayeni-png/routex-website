import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react'

export default function ProblemVsSolution() {
  const problems = [
    {
      title: 'Rain & Peak Surge Pricing',
      desc: 'Taxi fares double or triple unpredictable during sudden Abuja downpours or 5 PM rush hour.',
    },
    {
      title: 'Overcrowded & Standing Commutes',
      desc: 'Fighting for seats at terminals, standing in unventilated buses, and arriving at work exhausted.',
    },
    {
      title: 'Unpredictable Pickup Times',
      desc: 'No fixed schedules or tracking — leaving you stranded at roadside bus stops without arrival visibility.',
    },
    {
      title: 'Unvetted Drivers & Safety Risks',
      desc: 'Lack of driver verification, no trip tracking, and zero digital safety records for family peace of mind.',
    },
  ]

  const solutions = [
    {
      title: 'Fixed Transparent Pricing',
      desc: 'Flat commuter rates that remain constant regardless of weather, traffic congestion, or peak hours.',
    },
    {
      title: 'Guaranteed AC Seat Reservation',
      desc: '100% reserved seating on clean, climate-controlled minibuses. Zero standing, zero terminal fights.',
    },
    {
      title: 'Scheduled & Live Tracked Routes',
      desc: 'Exact departure timetables synced with corporate hours, plus real-time GPS vehicle location tracking.',
    },
    {
      title: 'Vetted Drivers & SOS Protection',
      desc: 'Thoroughly screened drivers, defensive driving certification, and instant location sharing with loved ones.',
    },
  ]

  return (
    <section id="matrix" className="matrix-section">
      <div className="matrix-container">
        <div className="matrix-header">
          <span style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '16px' }}>
            ABUJA COMMUTE REALITY
          </span>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-1px', marginBottom: '16px' }}>
            The Abuja Commute Problem <br />
            <span style={{ color: '#C9A84C' }}>vs. The RouteX Solution</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#94A3B8' }}>
            See how RouteX eliminates everyday transit friction across the Federal Capital Territory.
          </p>
        </div>

        <div className="matrix-grid">
          {/* Left: Traditional Stress */}
          <div className="matrix-column-problem">
            <div className="matrix-badge-problem flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" style={{ width: '16px', height: '16px' }} />
              Traditional Abuja Transit Stress
            </div>

            <div className="matrix-list">
              {problems.map((item, idx) => (
                <div key={idx} className="matrix-item">
                  <XCircle style={{ width: '20px', height: '20px', color: '#EF4444', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div className="matrix-item-title">{item.title}</div>
                    <div className="matrix-item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The RouteX Solution */}
          <div className="matrix-column-solution">
            <div className="matrix-badge-solution flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" style={{ width: '16px', height: '16px' }} />
              The RouteX Scheduled Standard
            </div>

            <div className="matrix-list">
              {solutions.map((item, idx) => (
                <div key={idx} className="matrix-item">
                  <CheckCircle2 style={{ width: '20px', height: '20px', color: '#C9A84C', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div className="matrix-item-title">{item.title}</div>
                    <div className="matrix-item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
