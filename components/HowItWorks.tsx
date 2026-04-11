export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '96px 5%', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
          <div className="section-tag">How it works</div>
          <div className="section-title">
            From registration to<br /><em>daily commute</em>
          </div>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Four simple steps — your team gets to work, stress-free.
          </p>
        </div>
        <div className="how-grid">
          <div className="how-step">
            <div className="step-num">01</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1A5632" strokeWidth={2} strokeLinecap="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div>
            <div className="step-title">Company registers</div>
            <div className="step-desc">Your HR or admin team creates a RouteX business account and adds employees.</div>
          </div>
          <div className="how-step">
            <div className="step-num">02</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1A5632" strokeWidth={2} strokeLinecap="round">
                <circle cx={11} cy={11} r={8} />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <div className="step-title">Employees discover routes</div>
            <div className="step-desc">Staff browse available corporate routes and schedules that fit their commute.</div>
          </div>
          <div className="how-step">
            <div className="step-num">03</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1A5632" strokeWidth={2} strokeLinecap="round">
                <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                <line x1={1} y1={10} x2={23} y2={10} />
              </svg>
            </div>
            <div className="step-title">Book and pay</div>
            <div className="step-desc">Reserve a seat in seconds. Pay via card or bank transfer, get instant confirmation.</div>
          </div>
          <div className="how-step">
            <div className="step-num">04</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1A5632" strokeWidth={2} strokeLinecap="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div className="step-title">Track live</div>
            <div className="step-desc">Real-time GPS tracking keeps employees informed of bus location and arrival time.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
