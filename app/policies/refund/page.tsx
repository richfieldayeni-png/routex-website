import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Refund Policy — RouteX',
  description: 'RouteX refund policy — eligibility, timelines, and how to request a refund.',
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

export default function RefundPolicy() {
  return (
    <>
      <Navbar />
      <div style={{ background: 'var(--green)', padding: '64px 5% 56px', textAlign: 'center' }}>
        <Link href="/policies" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', marginBottom: '20px' }}>← Our Policies</Link>
        <h1 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: '12px' }}>Refund Policy</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '480px', margin: '0 auto' }}>How refunds work, when you qualify, and how to request one</p>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <div style={{ display: 'inline-block', background: 'var(--green-lt)', color: 'var(--green)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500, marginBottom: '40px' }}>Last updated: May 2025</div>
        <p style={pStyle}>RouteX is committed to fair and transparent refund practices. This policy explains when refunds are available, how they are processed, and what to expect.</p>
        <hr style={{ height: '1px', background: '#E8EEF2', border: 'none', margin: '40px 0' }} />
        <Section title="1. Refund Eligibility">
          <div style={{ background: 'var(--gray5)', borderRadius: '12px', overflow: 'hidden', border: '1px solid #E8EEF2', marginBottom: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--green)', color: 'white' }}>
                  <th style={{ padding: '14px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 600 }}>Situation</th>
                  <th style={{ padding: '14px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 600 }}>Refund Amount</th>
                  <th style={{ padding: '14px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 600 }}>Timeline</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cancelled 2+ hours before departure', 'Full fare (100%)', '5 business days'],
                  ['Cancelled within 2 hours of departure', '50% of fare paid', '5 business days'],
                  ['No-show', 'No refund', '—'],
                  ['RouteX cancels the trip', 'Full fare (100%)', '5 business days'],
                  ['Duplicate payment', 'Full duplicate amount', '3 business days'],
                  ['Payment error (charged but not confirmed)', 'Full amount', '3 business days'],
                ].map(([situation, amount, timeline], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #E8EEF2' }}>
                    <td style={{ padding: '14px 16px', fontSize: '14px', color: 'var(--gray2)' }}>{situation}</td>
                    <td style={{ padding: '14px 16px', fontSize: '14px', fontWeight: 600, color: amount.includes('No') ? '#E74C3C' : 'var(--green)' }}>{amount}</td>
                    <td style={{ padding: '14px 16px', fontSize: '14px', color: 'var(--gray2)' }}>{timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={pStyle}>Refunds are not available for completed trips, trips where the passenger was removed due to a conduct violation, or claims made more than 7 days after the trip date.</p>
        </Section>
        <Section title="2. How to Request a Refund">
          <p style={pStyle}>Most refunds are automatic. You do not need to request one if you cancelled through the app or if RouteX cancelled your trip. If your refund has not arrived within the stated timeframe, email <a href="mailto:support@routexgo.co" style={{ color: 'var(--green)' }}>support@routexgo.co</a> with:</p>
          <ul style={ulStyle}>
            <li style={liStyle}>Subject: <strong>Refund Request — [Your Booking Reference]</strong></li>
            <li style={liStyle}>Your booking reference and trip date</li>
            <li style={liStyle}>The amount paid and a brief description of the situation</li>
          </ul>
          <p style={pStyle}>We will acknowledge within 24 hours and resolve within 5 business days.</p>
        </Section>
        <Section title="3. How Refunds Are Processed">
          <p style={pStyle}>All refunds are returned to the original payment method. Card refunds go to the same card used. Bank transfer refunds go to the originating account. Corporate account refunds go to the company account, not the individual employee. RouteX is not responsible for delays caused by financial institutions — banks typically take an additional 2–7 working days.</p>
        </Section>
        <Section title="4. Non-Refundable Situations">
          <ul style={ulStyle}>
            <li style={liStyle}>The trip was completed and the passenger boarded</li>
            <li style={liStyle}>The passenger was a no-show without cancelling</li>
            <li style={liStyle}>The refund request is made more than 7 days after the trip date</li>
            <li style={liStyle}>The passenger was removed due to a conduct violation</li>
          </ul>
        </Section>
        <Section title="5. Disputes">
          <p style={pStyle}>If you are unsatisfied with a refund decision, escalate by emailing <a href="mailto:support@routexgo.co" style={{ color: 'var(--green)' }}>support@routexgo.co</a> with subject <strong>Refund Dispute</strong>. We will provide a final decision within 5 business days. Unresolved disputes are subject to arbitration under Nigerian law as set out in our Terms of Service.</p>
        </Section>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/policies/trip-cancellation" style={{ background: 'var(--green)', color: 'white', padding: '12px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 500 }}>Trip Cancellation Policy</Link>
          <Link href="/policies" style={{ background: 'var(--gray5)', color: 'var(--gray2)', padding: '12px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, border: '1px solid #E8EEF2' }}>All Policies</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
