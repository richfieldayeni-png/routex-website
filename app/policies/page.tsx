import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Policies — RouteX',
  description: 'RouteX platform policies covering privacy, terms of use, trip cancellation, refunds, and passenger behaviour.',
}

const policies = [
  { title: 'Terms of Use', desc: 'The rules and conditions that govern your use of the RouteX platform, app, and services.', href: '/terms', icon: '📋' },
  { title: 'Privacy Policy', desc: 'How we collect, use, store, and protect your personal data in compliance with the NDPA 2023.', href: '/privacy', icon: '🔒' },
  { title: 'Trip Cancellation Policy', desc: 'When and how trips can be cancelled, who can cancel, and what happens when a cancellation occurs.', href: '/policies/trip-cancellation', icon: '🚫' },
  { title: 'Refund Policy', desc: 'How refunds are processed, eligibility criteria, timelines, and how to request a refund.', href: '/policies/refund', icon: '↩️' },
  { title: 'Behaviour Policy', desc: 'The standards of conduct expected from all passengers and drivers on the RouteX platform.', href: '/policies/behaviour', icon: '🛡️' },
]

export default function PoliciesHub() {
  return (
    <>
      <Navbar />
      <div style={{ background: 'var(--green)', padding: '64px 5% 56px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: '12px' }}>Our Policies</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '480px', margin: '0 auto' }}>
          Everything you need to know about how RouteX operates — our commitments to you and what we expect in return.
        </p>
      </div>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '56px' }}>
          {policies.map((policy) => (
            <Link key={policy.title} href={policy.href}
              style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'var(--gray5)', border: '1px solid #E8EEF2', borderRadius: '12px', padding: '24px', textDecoration: 'none' }}>
              <div style={{ width: '52px', height: '52px', background: 'var(--green-lt)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                {policy.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--black)', marginBottom: '4px' }}>{policy.title}</div>
                <div style={{ fontSize: '14px', color: 'var(--gray2)', lineHeight: 1.5 }}>{policy.desc}</div>
              </div>
              <div style={{ color: 'var(--green)', fontSize: '20px', flexShrink: 0 }}>→</div>
            </Link>
          ))}
        </div>
        <div style={{ background: 'var(--green-lt)', border: '1px solid var(--green-md)', borderRadius: '12px', padding: '28px 32px' }}>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 700, color: 'var(--black)', marginBottom: '10px' }}>Questions about our policies?</h3>
          <p style={{ fontSize: '14px', color: 'var(--gray2)', marginBottom: '16px', lineHeight: 1.65 }}>
            If you have any questions about our policies or how they apply to you, our support team is happy to help.
          </p>
          <a href="mailto:support@routexgo.co" style={{ display: 'inline-block', background: 'var(--green)', color: 'white', padding: '10px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 500 }}>
            Contact support
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}
