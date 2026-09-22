import { ArrowRight, ShieldCheck, MapPin, Clock, CheckCircle2, Navigation, Radio, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero-section-3d">
      <div className="hero-grid">
        {/* Left Column: Hero Text & CTAs */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(250, 250, 247, 0.12)', border: '1px solid rgba(201, 168, 76, 0.4)', color: '#C9A84C', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '24px' }}>
            <span style={{ width: '8px', height: '8px', background: '#C9A84C', borderRadius: '50%', boxShadow: '0 0 10px #C9A84C' }}></span>
            Abuja Corporate Commute Platform
          </div>

          <h1 className="hero-headline">
            Predictable Corporate Commutes for <em>Abuja's Workforce</em>
          </h1>

          <p className="hero-body-sub">
            Say goodbye to roadside stress, rain inflation, and unpredictable cabs. RouteX delivers seat-guaranteed, AC minibus transit tailored for working professionals.
          </p>

          <div className="hero-cta-row">
            <a href="#routes" className="btn-gold-pill">
              Book a Ride
              <ArrowRight className="w-5 h-5 ml-1" style={{ width: '18px', height: '18px' }} />
            </a>

            <a href="#how-it-works" className="btn-glass-outline">
              <Play className="w-4 h-4 text-[#C9A84C]" style={{ width: '16px', height: '16px', fill: '#C9A84C' }} />
              Get Started
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', fontSize: '13px', color: '#EAF3EE', opacity: 0.88, paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.14)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck style={{ width: '16px', height: '16px', color: '#C9A84C' }} /> Certified Drivers
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 style={{ width: '16px', height: '16px', color: '#C9A84C' }} /> Guaranteed Seats
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Navigation style={{ width: '16px', height: '16px', color: '#C9A84C' }} /> Real-Time GPS Tracking
            </span>
          </div>
        </div>

        {/* Right Column: 3D Perspective Smartphone Mockup & Floating Micro-Chips */}
        <div className="phone-perspective-stage">
          {/* Top-Left Floating Telemetry Chip */}
          <div className="telemetry-chip-top">
            <Radio style={{ width: '16px', height: '16px', color: '#22C55E' }} />
            <span>● Live GPS Tracking · 2 mins away</span>
          </div>

          {/* 3D Perspective Smartphone Chassis */}
          <div className="hero-phone-3d">
            <div className="phone-dynamic-notch"></div>

            <div className="phone-screen-content p-4">
              {/* Card Header inside phone */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ background: '#EAF3EE', color: '#1A5632', fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '12px' }}>
                  RouteX Live
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1A5632' }}>
                  <span style={{ width: '8px', height: '8px', background: '#22C55E', borderRadius: '50%', boxShadow: '0 0 8px #22C55E' }}></span>
                  BUS EN ROUTE
                </div>
              </div>

              {/* Commute Details */}
              <div style={{ background: '#1A5632', color: '#FFFFFF', padding: '16px', borderRadius: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '10px', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                  ACTIVE RESERVATION
                </div>
                <div style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 800, marginBottom: '8px' }}>
                  Lugbe Hub &rarr; CBD
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', opacity: 0.9 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock style={{ width: '14px', height: '14px' }} /> 07:15 AM
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C9A84C', fontWeight: 700 }}>
                    <CheckCircle2 style={{ width: '14px', height: '14px' }} /> Seat 04 Reserved
                  </span>
                </div>
              </div>

              {/* Fare & Status Badge */}
              <div style={{ background: '#F8FAF9', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: '#6B7280', fontWeight: 600 }}>Standard Fare</span>
                <span style={{ background: '#1A5632', color: '#C9A84C', fontWeight: 800, padding: '3px 10px', borderRadius: '8px' }}>
                  ₦500 Paid
                </span>
              </div>
            </div>
          </div>

          {/* Bottom-Right Floating Telemetry Chip */}
          <div className="telemetry-chip-bottom">
            <ShieldCheck style={{ width: '16px', height: '16px', color: '#C9A84C' }} />
            <span>Verified Driver Onboard · AC Active</span>
          </div>
        </div>
      </div>
    </section>
  )
}
