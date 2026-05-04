import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Behaviour Policy — RouteX',
  description: 'RouteX passenger and driver behaviour standards.',
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

export default function BehaviourPolicy() {
  return (
    <>
      <Navbar />
      <div style={{ background: 'var(--green)', padding: '64px 5% 56px', textAlign: 'center' }}>
        <Link href="/policies" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', marginBottom: '20px' }}>← Our Policies</Link>
        <h1 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: '12px' }}>Behaviour Policy</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '480px', margin: '0 auto' }}>The standards of conduct we expect from every passenger and driver on the RouteX platform</p>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <div style={{ display: 'inline-block', background: 'var(--green-lt)', color: 'var(--green)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500, marginBottom: '40px' }}>Last updated: May 2025</div>
        <p style={pStyle}>RouteX is built on the belief that corporate commuting should be comfortable, safe, and professional. By using the RouteX platform, you agree to conduct yourself in accordance with this policy at all times.</p>
        <hr style={{ height: '1px', background: '#E8EEF2', border: 'none', margin: '40px 0' }} />
        <Section title="1. General Standards for All Users">
          <ul style={ulStyle}>
            <li style={liStyle}><strong>Treat others with respect</strong> — be courteous to fellow passengers, drivers, and RouteX staff at all times</li>
            <li style={liStyle}><strong>Maintain personal hygiene</strong> — ensure your presence does not cause discomfort to others in a shared vehicle</li>
            <li style={liStyle}><strong>Keep noise to a reasonable level</strong> — phone calls and conversations should not disturb fellow passengers</li>
            <li style={liStyle}><strong>Respect personal space</strong> — occupy only your reserved seat</li>
            <li style={liStyle}><strong>Follow safety instructions</strong> — comply with seatbelt requirements and driver guidance</li>
            <li style={liStyle}><strong>Keep the vehicle clean</strong> — do not litter inside vehicles</li>
          </ul>
        </Section>
        <Section title="2. Passenger Conduct Standards">
          <ul style={ulStyle}>
            <li style={liStyle}>Board only at your designated pickup point at the scheduled time</li>
            <li style={liStyle}>Present your booking confirmation when requested by the driver</li>
            <li style={liStyle}>Occupy only your assigned seat — do not take another passenger&apos;s reserved seat</li>
            <li style={liStyle}>Alight only at your designated drop-off point</li>
            <li style={liStyle}>Do not request or pressure drivers to deviate from the assigned route</li>
            <li style={liStyle}>Do not distract the driver while the vehicle is in motion</li>
          </ul>
        </Section>
        <Section title="3. Driver Conduct Standards">
          <ul style={ulStyle}>
            <li style={liStyle}>Operate vehicles safely and in accordance with Nigerian traffic laws at all times</li>
            <li style={liStyle}>Follow the assigned route and schedule — deviations require prior approval from RouteX operations</li>
            <li style={liStyle}>Treat all passengers with professionalism and courtesy</li>
            <li style={liStyle}>Do not use a mobile phone while driving</li>
            <li style={liStyle}>Do not consume alcohol or any substance that impairs driving ability</li>
            <li style={liStyle}>Maintain the vehicle in a clean and presentable condition for every trip</li>
            <li style={liStyle}>Start and end GPS tracking at the correct times through the driver app</li>
          </ul>
        </Section>
        <Section title="4. Prohibited Items and Activities">
          <ul style={ulStyle}>
            <li style={liStyle}>Weapons of any kind</li>
            <li style={liStyle}>Illegal substances or controlled drugs</li>
            <li style={liStyle}>Alcohol — consumption is not permitted on RouteX vehicles</li>
            <li style={liStyle}>Flammable, explosive, or hazardous materials</li>
            <li style={liStyle}>Oversized luggage that blocks aisles or causes safety risks</li>
            <li style={liStyle}>Smoking or vaping of any kind</li>
          </ul>
        </Section>
        <Section title="5. Zero Tolerance Behaviour">
          <p style={pStyle}>The following result in immediate removal and suspension or permanent ban with no refund:</p>
          <ul style={ulStyle}>
            <li style={liStyle}><strong>Physical violence or threats</strong> of any kind</li>
            <li style={liStyle}><strong>Sexual harassment or assault</strong> — any unwanted sexual conduct or contact</li>
            <li style={liStyle}><strong>Verbal abuse or intimidation</strong> — aggressive or discriminatory language</li>
            <li style={liStyle}><strong>Deliberate property damage</strong> to RouteX vehicles or equipment</li>
            <li style={liStyle}><strong>Fraud</strong> — false booking information or boarding without a valid booking</li>
            <li style={liStyle}><strong>Recording without consent</strong> — filming passengers without explicit consent</li>
          </ul>
          <div style={{ background: '#FEF0F0', border: '1px solid #F5A7A7', borderRadius: '10px', padding: '16px 20px' }}>
            <p style={{ fontSize: '14px', color: '#C0392B', margin: 0, fontWeight: 500 }}>Zero tolerance violations will be reported to relevant authorities where required by Nigerian law.</p>
          </div>
        </Section>
        <Section title="6. Reporting an Incident">
          <ul style={ulStyle}>
            <li style={liStyle}><strong>In the app</strong> — go to your trip history, select the trip, and tap &quot;Report an Issue&quot;</li>
            <li style={liStyle}><strong>By email</strong> — <a href="mailto:support@routexgo.co" style={{ color: 'var(--green)' }}>support@routexgo.co</a> with your booking reference</li>
            <li style={liStyle}><strong>Emergency</strong> — call <strong>112</strong> (Nigeria emergency services)</li>
          </ul>
          <p style={pStyle}>All reports are treated confidentially. We acknowledge within 24 hours and resolve within 5 business days.</p>
        </Section>
        <Section title="7. Consequences of Violations">
          <ul style={ulStyle}>
            <li style={liStyle}><strong>Warning</strong> — formal notification of policy violation</li>
            <li style={liStyle}><strong>Temporary suspension</strong> — restricted access to the platform</li>
            <li style={liStyle}><strong>Permanent ban</strong> — removal from the platform with no refund</li>
            <li style={liStyle}><strong>Legal action</strong> — referral to Nigerian law enforcement where applicable</li>
          </ul>
        </Section>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/support" style={{ background: 'var(--green)', color: 'white', padding: '12px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 500 }}>Report an Incident</Link>
          <Link href="/policies" style={{ background: 'var(--gray5)', color: 'var(--gray2)', padding: '12px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, border: '1px solid #E8EEF2' }}>All Policies</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
