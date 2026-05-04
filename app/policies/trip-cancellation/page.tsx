import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trip Cancellation Policy — RouteX',
  description: 'When and how trips can be cancelled on RouteX, and what happens next.',
}

const pStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--gray2)', marginBottom: '16px', lineHeight: 1.7 }
const ulStyle: React.CSSProperties = { margin: '0 0 16px 20px' }
const liStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--gray2)', marginBottom: '10px', lineHeight: 1.6 }

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h2 style={{ fontFamily: 'var(--display)', fontSize: '22px', fontWeight: 700, color: 'var(--black)', margin: '40px 0 14px', letterSpacing: '-0.5px' }}>{title}</h2>
      {children}
      <hr style={{ height: '1px', background: '#E8EEF2', border: 'none', margin: '40px 0' }} />
    </>
  )
}

export default function TripCancellationPolicy() {
  return (
    <>
      <Navbar />
      <div style={{ background: 'var(--green)', padding: '64px 5% 56px', textAlign: 'center' }}>
        <Link href="/policies" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', marginBottom: '20px' }}>
          ← Our Policies
        </Link>
        <h1 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: '12px' }}>Trip Cancellation Policy</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '480px', margin: '0 auto' }}>When and how trips can be cancelled, and what happens when they are</p>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <div style={{ display: 'inline-block', background: 'var(--green-lt)', color: 'var(--green)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500, marginBottom: '40px' }}>Last updated: May 2025</div>
        <p style={pStyle}>This policy explains when trips on RouteX may be cancelled, the process for cancellation, and what passengers and RouteX are each responsible for.</p>
        <hr style={{ height: '1px', background: '#E8EEF2', border: 'none', margin: '40px 0' }} />
        <Section title="1. Passenger-Initiated Cancellations">
          <p style={pStyle}>Passengers may cancel a confirmed booking at any time before scheduled departure through the RouteX app:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            <div style={{ background: 'var(--green-lt)', border: '1px solid var(--green-md)', borderRadius: '10px', padding: '18px 20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--green)', color: 'white', borderRadius: '6px', padding: '4px 10px', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>FULL REFUND</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--black)', marginBottom: '4px' }}>More than 2 hours before departure</div>
                <div style={{ fontSize: '14px', color: 'var(--gray2)' }}>Cancel at least 2 hours before your scheduled departure to receive a full refund.</div>
              </div>
            </div>
            <div style={{ background: '#FFF8E7', border: '1px solid #F5CBA7', borderRadius: '10px', padding: '18px 20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: '#F39C12', color: 'white', borderRadius: '6px', padding: '4px 10px', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>50% REFUND</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--black)', marginBottom: '4px' }}>Within 2 hours of departure</div>
                <div style={{ fontSize: '14px', color: 'var(--gray2)' }}>Cancellations within 2 hours of departure qualify for a 50% refund.</div>
              </div>
            </div>
            <div style={{ background: '#FEF0F0', border: '1px solid #F5A7A7', borderRadius: '10px', padding: '18px 20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: '#E74C3C', color: 'white', borderRadius: '6px', padding: '4px 10px', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>NO REFUND</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--black)', marginBottom: '4px' }}>No-show</div>
                <div style={{ fontSize: '14px', color: 'var(--gray2)' }}>If you fail to board without cancelling, no refund will be issued.</div>
              </div>
            </div>
          </div>
          <p style={pStyle}>To cancel: go to <strong>Bookings</strong> in the app, select the trip, and tap <strong>Cancel Booking</strong>. Refunds are processed automatically.</p>
        </Section>
        <Section title="2. RouteX-Initiated Cancellations">
          <p style={pStyle}>RouteX may cancel a trip due to vehicle or driver unavailability, safety concerns, force majeure events, or insufficient bookings. Affected passengers receive an immediate notification and a full refund within 5 business days.</p>
        </Section>
        <Section title="3. Passenger Notification">
          <p style={pStyle}>All cancellations are communicated via push notification, SMS to your registered number, and in-app booking status update.</p>
        </Section>
        <Section title="4. Repeat Cancellations">
          <p style={pStyle}>Passengers who repeatedly cancel at short notice may have advance booking privileges restricted. RouteX reserves the right to apply booking restrictions on accounts with a pattern of late cancellations or no-shows.</p>
        </Section>
        <Section title="5. Corporate Account Cancellations">
          <ul style={ulStyle}>
            <li style={liStyle}>Refunds for passenger-initiated cancellations are returned to the corporate account, not to the individual employee</li>
            <li style={liStyle}>Corporate administrators may set additional cancellation rules through the admin dashboard</li>
            <li style={liStyle}>RouteX-initiated cancellation refunds are returned to the original payment source</li>
          </ul>
        </Section>
        <Section title="6. Questions">
          <p style={pStyle}>Contact <a href="mailto:support@routexgo.co" style={{ color: 'var(--green)' }}>support@routexgo.co</a> with your booking reference if you have questions about a specific cancellation. We respond within 24 hours.</p>
        </Section>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/policies/refund" style={{ background: 'var(--green)', color: 'white', padding: '12px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 500 }}>Read Refund Policy →</Link>
          <Link href="/policies" style={{ background: 'var(--gray5)', color: 'var(--gray2)', padding: '12px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, border: '1px solid #E8EEF2' }}>All Policies</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
