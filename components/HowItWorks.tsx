import { Smartphone, MapPin, Ticket, Bus } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      icon: Smartphone,
      title: 'Download App',
      desc: 'Get RouteX on iOS or Android and set up your profile in under 2 minutes.',
    },
    {
      step: '02',
      icon: MapPin,
      title: 'Select Route',
      desc: 'Choose your pickup point and destination across Abuja business hubs.',
    },
    {
      step: '03',
      icon: Ticket,
      title: 'Book Seat',
      desc: 'Reserve your guaranteed seat for ₦500 single trips or automated weekly passes.',
    },
    {
      step: '04',
      icon: Bus,
      title: 'Enjoy Ride',
      desc: 'Track vehicle arrival live, board comfortably, and arrive refreshed.',
    },
  ]

  return (
    <section id="how-it-works" className="section" style={{ background: '#F8FAF9' }}>
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
        <span className="section-tag">Seamless Journey</span>
        <h2 className="section-title">
          How <em>RouteX</em> Works
        </h2>
        <p style={{ fontSize: '16px', color: '#6B7280' }}>
          Experience effortless corporate commuting across Abuja in four simple steps.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
        {steps.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={idx}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '28px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Top Row: Step Number & Icon grouped together */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{ fontFamily: 'var(--display)', fontSize: '32px', fontWeight: 800, color: '#C9A84C' }}>
                    {item.step}
                  </span>
                  <div style={{ width: '40px', height: '40px', background: '#164E2D', color: '#FFFFFF', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon className="icon-ui" style={{ width: '20px', height: '20px' }} />
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 700, color: '#121517', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
