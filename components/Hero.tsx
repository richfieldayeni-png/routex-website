export default function Hero() {
  return (
    <section style={{ padding: 0, background: 'white' }}>
      <div className="hero">
        <div>
          <div className="hero-tag">
            <div className="hero-tag-dot"></div>
            Now live — Abuja Pilot
          </div>
          <h1>
            Smart corporate<br />transport for <em>Abuja</em>
          </h1>
          <p className="hero-sub">
            RouteX connects businesses to reliable, trackable, seat-based commute services — reducing transport friction for corporate teams across Abuja&apos;s business district.
          </p>
          <div className="hero-actions">
            <a href="#for-business" className="btn-primary">Register your company</a>
            <a href="#how-it-works" className="btn-outline">See how it works</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-val">3</div>
              <div className="hero-stat-lbl">Active Routes</div>
            </div>
            <div>
              <div className="hero-stat-val">B2B</div>
              <div className="hero-stat-lbl">Corporate Focus</div>
            </div>
            <div>
              <div className="hero-stat-val">Abuja</div>
              <div className="hero-stat-lbl">Pilot City</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-frame">
            <div className="phone-header">
              <div className="phone-avatar">SA</div>
              <div>
                <div className="phone-greeting">Hi, Seun 👋</div>
                <div className="phone-location">Abuja, Nigeria</div>
              </div>
            </div>
            <div className="route-card">
              <div className="route-card-label">Next departure</div>
              <div className="route-card-name">Wuse Zone 2 → Maitama</div>
              <div className="route-card-meta">
                <span>07:30 AM</span>
                <span>14 seats left</span>
                <span>₦1,500</span>
              </div>
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#444D56', marginBottom: '10px' }}>
              Explore more routes
            </div>
            <div className="route-list-item">
              <div className="route-info">
                <div className="route-dot"></div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 500 }}>Garki → CBD</div>
                  <div style={{ fontSize: '11px', color: '#6A737D' }}>08:00 AM · 3 stops</div>
                </div>
              </div>
              <div className="route-badge">Available</div>
            </div>
            <div className="route-list-item">
              <div className="route-info">
                <div className="route-dot"></div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 500 }}>Kubwa → Wuse Zone 2</div>
                  <div style={{ fontSize: '11px', color: '#6A737D' }}>07:15 AM · 5 stops</div>
                </div>
              </div>
              <div className="route-badge">Available</div>
            </div>
            <div className="route-list-item" style={{ borderBottom: 'none' }}>
              <div className="route-info">
                <div className="route-dot" style={{ background: '#E8EEF2' }}></div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: '#BDC3C9' }}>Jabi → Area 11</div>
                  <div style={{ fontSize: '11px', color: '#BDC3C9' }}>Coming soon</div>
                </div>
              </div>
              <span style={{ fontSize: '11px', color: '#BDC3C9' }}>Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
