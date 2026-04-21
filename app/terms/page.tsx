import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — RouteX',
  description: 'The rules and conditions for using the RouteX platform.',
}

const pStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--gray2)', marginBottom: '16px' }
const ulStyle: React.CSSProperties = { margin: '0 0 16px 20px' }
const liStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--gray2)', marginBottom: '8px' }
const h3Style: React.CSSProperties = { fontSize: '16px', fontWeight: 600, color: 'var(--black)', margin: '24px 0 10px' }

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

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <div style={{ background: 'var(--green)', padding: '64px 5% 56px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: '12px' }}>Terms of Service</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '480px', margin: '0 auto' }}>The rules and conditions for using the RouteX platform</p>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <div style={{ display: 'inline-block', background: 'var(--green-lt)', color: 'var(--green)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 500, marginBottom: '40px' }}>Last updated: March 2025</div>
        <p style={pStyle}>These Terms of Service govern your access to and use of the RouteX platform operated by <strong>RouteX Mobility Limited</strong>, a company registered in the Federal Capital Territory, Abuja, Nigeria. By creating an account or using our Service, you agree to be bound by these Terms.</p>
        <Divider />
        <Section title="1. Eligibility">
          <ul style={ulStyle}>
            <li style={liStyle}>Be at least 18 years of age</li>
            <li style={liStyle}>Have legal capacity to enter a binding agreement under Nigerian law</li>
            <li style={liStyle}>Provide accurate, current, and complete information during registration</li>
            <li style={liStyle}>Not have been previously suspended or removed from the RouteX platform</li>
          </ul>
        </Section>
        <Section title="2. Account Registration">
          <p style={pStyle}>You are responsible for maintaining the confidentiality of your account credentials. Notify us immediately at <a href="mailto:support@routexgo.co" style={{ color: 'var(--green)' }}>support@routexgo.co</a> if you suspect unauthorised access.</p>
        </Section>
        <Section title="3. The RouteX Service">
          <p style={pStyle}>RouteX provides a technology platform connecting corporate passengers with scheduled bus transport in Abuja. RouteX is a technology intermediary and does not own or operate vehicles unless otherwise stated.</p>
          <h3 style={h3Style}>3.1 Bookings</h3>
          <ul style={ulStyle}>
            <li style={liStyle}>Bookings are confirmed upon successful payment</li>
            <li style={liStyle}>Seat assignments are final at the time of booking confirmation</li>
            <li style={liStyle}>You must arrive at your pickup point at least 5 minutes before scheduled departure</li>
          </ul>
          <h3 style={h3Style}>3.2 Corporate Accounts</h3>
          <ul style={ulStyle}>
            <li style={liStyle}>Companies may register business accounts to manage employee transport</li>
            <li style={liStyle}>Corporate administrators are responsible for managing employee access and bookings</li>
            <li style={liStyle}>Corporate pricing and terms are governed by a separate service agreement</li>
          </ul>
        </Section>
        <Section title="4. Payments and Refunds">
          <p style={pStyle}>All fares are in Nigerian Naira (NGN). We accept debit/credit cards and bank transfers.</p>
          <h3 style={h3Style}>Cancellations</h3>
          <ul style={ulStyle}>
            <li style={liStyle}>More than 2 hours before departure: full refund</li>
            <li style={liStyle}>Within 2 hours of departure: 50% refund</li>
            <li style={liStyle}>No-shows: no refund</li>
            <li style={liStyle}>RouteX-cancelled trips: full refund within 5 business days</li>
          </ul>
        </Section>
        <Section title="5. User Conduct">
          <p style={pStyle}>You agree to treat drivers and passengers with respect, not bring prohibited items onto vehicles, not use the platform for unlawful purposes, and follow driver safety instructions at all times.</p>
        </Section>
        <Section title="6. Limitation of Liability">
          <p style={pStyle}>RouteX&apos;s total liability shall not exceed the amount paid for the relevant booking. RouteX is not liable for delays or cancellations caused by circumstances beyond our reasonable control including traffic, weather, or government directives.</p>
        </Section>
        <Section title="7. Governing Law">
          <p style={pStyle}>These Terms are governed by the laws of the Federal Republic of Nigeria. Disputes shall be referred to arbitration in Abuja under the Arbitration and Conciliation Act of Nigeria.</p>
        </Section>
        <Section title="8. Changes to These Terms">
          <p style={pStyle}>We will notify you of material changes at least 14 days before they take effect. Continued use of the Service constitutes acceptance of the revised Terms.</p>
        </Section>
        <div style={{ background: 'var(--green-lt)', border: '1px solid var(--green-md)', borderRadius: '12px', padding: '24px 28px', marginTop: '40px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--green)', marginBottom: '12px' }}>Questions About These Terms?</h3>
          <p style={{ fontSize: '14px', color: 'var(--gray2)', marginBottom: '6px' }}>RouteX Mobility Limited · Federal Capital Territory, Abuja, Nigeria</p>
          <p style={{ fontSize: '14px', color: 'var(--gray2)' }}>Email: <a href="mailto:support@routexgo.co" style={{ color: 'var(--green)' }}>support@routexgo.co</a></p>
        </div>
      </div>
      <Footer />
    </>
  )
}
