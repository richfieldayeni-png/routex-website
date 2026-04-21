import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — RouteX',
  description: 'How RouteX Mobility Limited collects, uses and protects your personal data.',
}

const pStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--gray2)', marginBottom: '16px' }
const ulStyle: React.CSSProperties = { margin: '0 0 16px 20px' }
const liStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--gray2)', marginBottom: '8px' }

function Divider() {
  return <hr style={{ height: '1px', background: '#E8EEF2', border: 'none', margin: '40px 0' }} />
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h2 style={{ fontFamily: 'var(--display)', fontSize: '22px', fontWeight: 700, color: 'var(--black)', margin: '40px 0 14px', letterSpacing: '-0.5px' }}>{title}</h2>
      {children}
      <Divider />
    </>
  )
}

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div style={{ background: 'var(--green)', padding: '64px 5% 56px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: '12px' }}>Privacy Policy</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '480px', margin: '0 auto' }}>How RouteX Mobility Limited collects, uses, and protects your personal data</p>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <div style={{ display: 'inline-block', background: 'var(--green-lt)', color: 'var(--green)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500, marginBottom: '40px' }}>Last updated: March 2025</div>
        <p style={pStyle}>This Privacy Policy describes how <strong>RouteX Mobility Limited</strong> (&quot;RouteX&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company registered in the Federal Capital Territory, Abuja, Nigeria, collects, uses, stores, and protects personal information when you use our platform, mobile application, or website at routexgo.co.</p>
        <p style={pStyle}>This policy is issued in compliance with the <strong>Nigeria Data Protection Act 2023 (NDPA)</strong>. By using our services, you consent to the practices described in this policy.</p>
        <Divider />
        <Section title="1. Information We Collect">
          <ul style={ulStyle}>
            <li style={liStyle}>Full name, email address, and phone number during account registration</li>
            <li style={liStyle}>Company or employer name (for corporate users)</li>
            <li style={liStyle}>Payment information processed securely via our payment partners</li>
            <li style={liStyle}>Location data (GPS coordinates during active trips only)</li>
            <li style={liStyle}>Usage data including booking history and trip records</li>
            <li style={liStyle}>Device information and log data (IP address, browser type, access times)</li>
          </ul>
        </Section>
        <Section title="2. How We Use Your Information">
          <ul style={ulStyle}>
            <li style={liStyle}>To create and manage your RouteX account</li>
            <li style={liStyle}>To process bookings, payments, and issue receipts</li>
            <li style={liStyle}>To provide live bus tracking and trip notifications</li>
            <li style={liStyle}>To assign seats and generate passenger manifests for drivers</li>
            <li style={liStyle}>To communicate service updates, delays, and cancellations</li>
            <li style={liStyle}>To provide customer support and resolve disputes</li>
            <li style={liStyle}>To detect and prevent fraud or misuse of our platform</li>
          </ul>
        </Section>
        <Section title="3. Data Sharing">
          <p style={pStyle}>We do not sell your personal data. We may share your data with drivers (passenger manifest), payment processors, your employer if on a corporate account, SMS/notification providers, and legal authorities where required by Nigerian law.</p>
        </Section>
        <Section title="4. Data Retention">
          <ul style={ulStyle}>
            <li style={liStyle}>Account data retained for duration of account plus 2 years after closure</li>
            <li style={liStyle}>Transaction records retained for 7 years per Nigerian financial regulations</li>
            <li style={liStyle}>GPS location data retained for 90 days then anonymised</li>
          </ul>
        </Section>
        <Section title="5. Your Rights Under the NDPA 2023">
          <p style={pStyle}>You have the right to access, correct, delete, and port your data, and to object to processing. To exercise these rights or lodge a complaint, contact us at <a href="mailto:support@routexgo.co" style={{ color: 'var(--green)' }}>support@routexgo.co</a>. You may also contact the Nigeria Data Protection Commission (NDPC) at ndpc.gov.ng.</p>
        </Section>
        <Section title="6. Data Security">
          <p style={pStyle}>We implement TLS/SSL encryption, PCI-DSS compliant payment processing, and access controls limiting data to authorised personnel only.</p>
        </Section>
        <Section title="7. Children's Privacy">
          <p style={pStyle}>Our services are not directed at individuals under 18. Contact <a href="mailto:support@routexgo.co" style={{ color: 'var(--green)' }}>support@routexgo.co</a> if you believe we have inadvertently collected data from a minor.</p>
        </Section>
        <Section title="8. Changes to This Policy">
          <p style={pStyle}>We will notify registered users of material changes via email or in-app notification. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
        </Section>
        <div style={{ background: 'var(--green-lt)', border: '1px solid var(--green-md)', borderRadius: '12px', padding: '24px 28px', marginTop: '40px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--green)', marginBottom: '12px' }}>Contact Our Data Protection Team</h3>
          <p style={{ fontSize: '14px', color: 'var(--gray2)', marginBottom: '6px' }}>RouteX Mobility Limited · Federal Capital Territory, Abuja, Nigeria</p>
          <p style={{ fontSize: '14px', color: 'var(--gray2)' }}>Email: <a href="mailto:support@routexgo.co" style={{ color: 'var(--green)' }}>support@routexgo.co</a></p>
        </div>
      </div>
      <Footer />
    </>
  )
}
