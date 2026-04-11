function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12">
      <polyline points="2,6 5,9 10,3" stroke="white" strokeWidth={2} fill="none" strokeLinecap="round" />
    </svg>
  )
}

export default function Features() {
  return (
    <section id="features" style={{ padding: '96px 5%', background: 'var(--gray5)', borderTop: '1px solid #E8EEF2' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-tag">Platform features</div>
        <div className="section-title">
          Everything your team<br />needs to <em>commute better</em>
        </div>
        <p className="section-sub">
          Built for corporate environments — reliability, visibility, and control in one platform.
        </p>
        <div className="features-grid">
          <div className="feature-card featured">
            <div>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="feature-title">Live GPS Tracking</div>
              <div className="feature-desc">
                Every bus is tracked in real-time. Employees know exactly where their bus is and when it will arrive — no more uncertainty, no more missed rides.
              </div>
              <ul className="feature-list">
                <li><div className="check-circle"><CheckIcon /></div>60-second GPS refresh intervals</li>
                <li><div className="check-circle"><CheckIcon /></div>Push notifications for delays and arrivals</li>
                <li><div className="check-circle"><CheckIcon /></div>Driver manifest and passenger tracking</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="mini-stat">
                <div className="mini-stat-val">98.4%</div>
                <div className="mini-stat-lbl">On-time departure rate</div>
              </div>
              <div className="mini-stat">
                <div className="mini-stat-val">60s</div>
                <div className="mini-stat-lbl">GPS update frequency</div>
              </div>
              <div className="mini-stat">
                <div className="mini-stat-val">Live</div>
                <div className="mini-stat-lbl">Passenger manifest visibility</div>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
              </svg>
            </div>
            <div className="feature-title">Flexible Payments</div>
            <div className="feature-desc">
              Card, bank transfer, and wallet top-up. Full payment reconciliation and downloadable receipts for expense reporting.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
              </svg>
            </div>
            <div className="feature-title">Seat Reservations</div>
            <div className="feature-desc">
              Employees reserve specific seats on specific routes. No overbooking, no standing room — guaranteed comfort every ride.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
              </svg>
            </div>
            <div className="feature-title">Operations Dashboard</div>
            <div className="feature-desc">
              Real-time revenue tracking, occupancy rates, driver management, and route analytics — all in one admin dashboard.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
