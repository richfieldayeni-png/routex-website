import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Support — RouteX',
  description: 'Get help with bookings, payments, account issues and more.',
}

const faqs = [
  { q: 'How do I book a seat?', a: 'Download the RouteX app, create an account, browse available routes, select your trip, choose a seat, and complete payment. You will receive a booking confirmation immediately.' },
  { q: 'Can I cancel my booking?', a: 'Yes. Cancellations more than 2 hours before departure receive a full refund. Within 2 hours, 50% refund. No-shows are non-refundable.' },
  { q: 'What payment methods are accepted?', a: 'We accept debit cards, credit cards, and bank transfers. All transactions are processed in Nigerian Naira (NGN).' },
  { q: 'How do I track my bus?', a: 'Once your trip begins, open the RouteX app and go to your active booking. The live map shows your bus location updated every 60 seconds.' },
  { q: 'My bus did not arrive. What do I do?', a: 'Contact us immediately at support@routexgo.co. If a trip is cancelled by RouteX, you will receive a full refund within 5 business days.' },
  { q: 'How do I register my company?', a: 'Visit our For Business section on the homepage and fill in the enquiry form. Our team will contact you within 24 hours.' },
  { q: 'Can I change my seat after booking?', a: 'Seat changes are subject to availability and must be requested at least 1 hour before departure. Contact support@routexgo.co with your booking reference.' },
  { q: 'How long do refunds take?', a: 'Refunds are processed within 5 business days. Your bank may take an additional 2-7 working days to reflect the amount.' },
]

export default function Support() {
  return (
    <>
      <Navbar />
      <div style={{ background: 'var(--green)', padding: '64px 5% 56px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: '12px' }}>How can we help?</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '480px', margin: '0 auto' }}>Our support team is here to help you with bookings, payments, account issues and anything else.</p>
      </div>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px 96px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '48px' }}>
          {[
            { title: 'Email Support', desc: 'Send us a message and we will get back to you within 24 hours on business days.', link: 'mailto:support@routexgo.co', label: 'support@routexgo.co', outline: false },
            { title: 'Live Chat', desc: 'Chat with a support agent in real time. Available Monday to Friday, 8am to 6pm WAT.', link: 'mailto:support@routexgo.co', label: 'Start a chat', outline: true },
            { title: 'Help Centre', desc: 'Browse answers to common questions about bookings, payments, and your account.', link: '#faq', label: 'Browse FAQs', outline: true },
          ].map((card) => (
            <div key={card.title} style={{ border: '1px solid #E8EEF2', borderRadius: '12px', padding: '28px 24px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--black)', marginBottom: '8px' }}>{card.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--gray3)', marginBottom: '16px' }}>{card.desc}</p>
              <a href={card.link} style={{ display: 'inline-block', background: card.outline ? 'transparent' : 'var(--green)', color: card.outline ? 'var(--green)' : 'white', border: card.outline ? '1.5px solid var(--green-md)' : 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 500 }}>{card.label}</a>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--green-lt)', border: '1px solid var(--green-md)', borderRadius: '10px', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '56px', flexWrap: 'wrap' }}>
          <div style={{ width: '10px', height: '10px', background: 'var(--green3)', borderRadius: '50%', flexShrink: 0 }} />
          <span style={{ fontSize: '14px', color: 'var(--gray2)' }}>Support hours: <strong style={{ color: 'var(--black)' }}>Monday to Friday, 8:00am to 6:00pm WAT</strong> · Average response time: <strong style={{ color: 'var(--black)' }}>under 4 hours</strong></span>
        </div>

        <div id="faq" style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 800, color: 'var(--black)', letterSpacing: '-1px', marginBottom: '32px' }}>Frequently asked questions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'var(--gray5)', borderRadius: '10px', padding: '22px 24px', border: '1px solid #E8EEF2' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--black)', marginBottom: '10px' }}>{faq.q}</h4>
                <p style={{ fontSize: '14px', color: 'var(--gray2)', lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--green)', borderRadius: '16px', padding: '48px' }}>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: '8px' }}>Send us a message</h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', marginBottom: '32px' }}>Fill in the form and our support team will get back to you.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { label: 'Full name', type: 'text', placeholder: 'Your full name', full: false },
              { label: 'Email address', type: 'email', placeholder: 'you@email.com', full: false },
              { label: 'Phone number (optional)', type: 'tel', placeholder: '+234 800 000 0000', full: false },
              { label: 'Booking reference (if applicable)', type: 'text', placeholder: 'e.g. BK0042', full: false },
            ].map((field) => (
              <div key={field.label} style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.75)', marginBottom: '6px', fontWeight: 500 }}>{field.label}</label>
                <input type={field.type} placeholder={field.placeholder} style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '8px', color: 'white', fontSize: '14px', outline: 'none' }} />
              </div>
            ))}
            <div style={{ marginBottom: '16px', gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.75)', marginBottom: '6px', fontWeight: 500 }}>Describe your issue</label>
              <textarea placeholder="Please provide as much detail as possible..." style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '8px', color: 'white', fontSize: '14px', outline: 'none', minHeight: '120px', resize: 'vertical' }} />
            </div>
          </div>
          <button style={{ background: 'white', color: 'var(--green)', border: 'none', padding: '13px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', marginTop: '8px' }}>Send message</button>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '12px' }}>By submitting this form you agree to our <a href="/privacy" style={{ color: 'rgba(255,255,255,0.7)' }}>Privacy Policy</a>.</p>
        </div>

      </div>
      <Footer />
    </>
  )
}
