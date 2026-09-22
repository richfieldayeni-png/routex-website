import { MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react'

export default function RoutesPreview() {
  const routes = [
    {
      name: 'Lugbe Express Shuttle Line',
      pickup: 'Lugbe Berger Junction / Total Hub',
      dropoff: 'Central Business District & Fed Sec',
      times: '07:15 AM & 07:45 AM | Evening: 05:30 PM & 06:15 PM',
      status: 'ACTIVE LINE',
      price: '₦500 / trip',
    },
    {
      name: 'Kubwa FastTrack Line',
      pickup: 'Kubwa Building Materials / Arab Rd',
      dropoff: 'Maitama & Wuse Zone 4',
      times: '07:15 AM & 07:45 AM | Evening: 05:45 PM & 06:30 PM',
      status: 'ACTIVE LINE',
      price: '₦500 / trip',
    },
    {
      name: 'Gwarinpa Corporate Loop',
      pickup: '1st Avenue / 3rd Avenue Gate',
      dropoff: 'Wuse II & Banex Hub',
      times: '07:20 AM & 07:50 AM | Evening: 05:30 PM & 06:00 PM',
      status: 'ACTIVE LINE',
      price: '₦500 / trip',
    },
    {
      name: 'Karu & Nyanya Express',
      pickup: 'Karu Flyover / Nyanya Terminal',
      dropoff: 'Federal Secretariat & Area 11',
      times: '07:10 AM & 07:40 AM | Evening: 05:45 PM & 06:20 PM',
      status: 'ACTIVE LINE',
      price: '₦500 / trip',
    },
  ]

  return (
    <section id="routes" className="routes-section-light">
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
        <span className="section-tag">Abuja Route Network</span>
        <h2 className="section-title">
          Scheduled <em>Abuja Shuttle Lines</em>
        </h2>
        <p style={{ fontSize: '16px', color: '#6B7280' }}>
          Direct, seat-guaranteed routes connecting key Abuja residential districts to major corporate hubs for flat ₦500 / trip.
        </p>
      </div>

      <div className="routes-grid-canvas max-w-6xl mx-auto">
        {routes.map((route, idx) => (
          <div key={idx} className="route-card-canvas">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 800, color: '#121517' }}>{route.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ background: '#EAF3EE', color: '#1A5632', fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '12px' }}>
                    {route.status}
                  </span>
                  <span style={{ background: '#1A5632', color: '#C9A84C', fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '12px' }}>
                    {route.price}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#6B7280', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <MapPin className="icon-ui" style={{ width: '18px', height: '18px', color: '#1A5632', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#121517', display: 'block' }}>Pickup &amp; Destination</strong>
                    {route.pickup} &rarr; {route.dropoff}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Clock className="icon-ui" style={{ width: '18px', height: '18px', color: '#C9A84C', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#121517', display: 'block' }}>Departure Times</strong>
                    {route.times}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ paddingTop: '16px', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '12px', color: '#1A5632', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck style={{ width: '14px', height: '14px' }} /> Seat Guaranteed
              </span>

              <a
                href="#routes"
                className="btn-gold-pill"
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                Book Seat — ₦500
                <ArrowRight style={{ width: '14px', height: '14px' }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
