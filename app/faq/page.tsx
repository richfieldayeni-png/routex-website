import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Rocket, Ticket, CreditCard, MapPin, RefreshCw, User, Building2, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — RouteX',
  description: 'Answers to common questions about booking, payments, tracking, and using the RouteX platform.',
}

const categories = [
  {
    title: 'Getting Started',
    icon: Rocket,
    faqs: [
      { q: 'What is RouteX?', a: 'RouteX is a technology-driven corporate transport platform connecting business employees with reliable, scheduled, seat-based bus services across Abuja.' },
      { q: 'How do I create an account?', a: 'Download the RouteX app, tap "Get Started", enter your phone number, verify with the OTP sent to your number, and complete your profile. The whole process takes under 2 minutes.' },
      { q: 'Is RouteX available to individuals or only companies?', a: 'RouteX primarily serves corporate passengers. Individual commuters can also sign up independently. Contact admin@routexgo.co to find out if your route is available.' },
      { q: 'Which areas in Abuja does RouteX serve?', a: 'We currently operate routes across Wuse Zone 2, Maitama, Garki, the Central Business District, Lugbe, Kubwa, Lokogama, and Gwarinpa corridors. Check the app for the latest available routes.' },
      { q: 'How is RouteX different from regular buses?', a: 'RouteX offers pre-booked guaranteed seats on corporate-grade buses with real-time GPS tracking, digital payments, automated notifications, and a passenger manifest. No standing, no overcrowding.' },
    ],
  },
  {
    title: 'Booking a Ride',
    icon: Ticket,
    faqs: [
      { q: 'How do I book a seat?', a: 'Open the RouteX app, tap "Book a route", select your preferred route and departure date, choose a seat, and complete payment. You will receive an instant booking confirmation.' },
      { q: 'How far in advance can I book?', a: 'You can book up to 7 days in advance. We recommend booking at least 24 hours before your trip to guarantee your preferred seat.' },
      { q: 'Can I choose my seat?', a: 'Yes. When booking, you will see the available seats on your selected bus. Tap your preferred seat to reserve it.' },
      { q: 'What if my preferred route is fully booked?', a: 'You will see a "Fully Booked" indicator. You can join a waitlist and we will notify you if a seat becomes available, or book the next available departure on the same route.' },
      { q: 'Can I book a recurring daily ride?', a: 'Recurring bookings are on our roadmap. Currently you book per trip. Corporate clients can speak to us about bulk booking arrangements.' },
    ],
  },
  {
    title: 'Payments',
    icon: CreditCard,
    faqs: [
      { q: 'What payment methods are accepted?', a: 'We accept debit cards, credit cards, and bank transfers via our secure payment partners. All transactions are processed in Nigerian Naira (NGN).' },
      { q: 'Is it safe to save my card on RouteX?', a: 'Yes. RouteX uses PCI-DSS compliant payment processing. We do not store your full card number — payments are handled by our certified payment partners.' },
      { q: 'Can my company pay for my rides?', a: 'Yes. If your company has a RouteX business account, they can fully or partially subsidise your fares. Check with your HR or admin team.' },
      { q: 'Will I receive a receipt?', a: 'Yes. A receipt is automatically sent to your registered email address after every successful payment. You can also view payment history under Bookings in the app.' },
      { q: 'Why was my payment declined?', a: 'Payments can fail due to insufficient funds, incorrect card details, or bank restrictions. Check your details and try again. If the problem persists contact support@routexgo.co.' },
    ],
  },
  {
    title: 'Trips & Tracking',
    icon: MapPin,
    faqs: [
      { q: 'How do I track my bus in real time?', a: 'Once your trip begins, open the RouteX app and tap on your active booking. A live map will show your bus location updated every 60 seconds.' },
      { q: 'Will I be notified when my bus is close?', a: 'Yes. You will receive push notifications when your bus is approaching your pickup point and when it departs. Make sure notifications are enabled for RouteX.' },
      { q: 'What if my bus is delayed?', a: 'Our system monitors departures in real time. If a delay is detected, you will receive an in-app notification and push alert.' },
      { q: 'What should I do if the bus leaves without me?', a: 'Contact support@routexgo.co immediately with your booking reference. We will investigate and process a refund if the departure was confirmed before you arrived.' },
      { q: 'Where exactly is my pickup point?', a: 'Your pickup point is shown on your booking confirmation and in the app. We recommend arriving at least 5 minutes before your scheduled departure.' },
    ],
  },
  {
    title: 'Cancellations & Refunds',
    icon: RefreshCw,
    faqs: [
      { q: 'Can I cancel my booking?', a: 'Yes. You can cancel through the app up to 2 hours before departure for a full refund. Cancellations within 2 hours qualify for a 50% refund. No-shows are non-refundable.' },
      { q: 'How do I cancel a booking?', a: 'Go to Bookings in the app, select the trip, and tap Cancel Booking. Confirm the cancellation and your refund will be processed automatically.' },
      { q: 'How long do refunds take?', a: 'Refunds are processed within 5 business days. Your bank may take an additional 2-7 working days to reflect the amount.' },
      { q: 'What if RouteX cancels my trip?', a: 'If RouteX cancels a trip, you will receive a full refund automatically within 5 business days and an immediate notification explaining the reason.' },
    ],
  },
  {
    title: 'Account & Profile',
    icon: User,
    faqs: [
      { q: 'How do I update my personal information?', a: 'Go to Account in the app and tap Edit Profile. To change your phone number, contact support@routexgo.co as this requires verification.' },
      { q: 'I forgot my password. How do I reset it?', a: 'On the login screen, tap Forgot Password and enter your registered email. You will receive a reset link. If you signed up with your phone number, request an OTP instead.' },
      { q: 'How do I delete my account?', a: 'You can request account deletion in the RouteX mobile app settings or via our online web request form at /delete-account.' },
      { q: 'How do I add an emergency contact?', a: 'Go to Account in the app, scroll to Emergency Contact, and tap Add Contact. This information is only used in the event of an emergency.' },
    ],
  },
  {
    title: 'Corporate Accounts',
    icon: Building2,
    faqs: [
      { q: 'How does my company sign up?', a: 'Visit routexgo.co, scroll to Solutions, and submit an enquiry. Our team will reach out within 24 hours to discuss requirements, routes, and pricing.' },
      { q: 'Can our company subsidise employee fares?', a: 'Yes. RouteX offers full company payment, company-employee fare split, and individual employee payment models. We tailor plans to your HR budget.' },
      { q: 'Can we request a custom route?', a: 'Yes. Contact admin@routexgo.co with your office address and the areas where most employees live. We will assess feasibility and get back to you.' },
    ],
  },
  {
    title: 'Safety & Conduct',
    icon: ShieldCheck,
    faqs: [
      { q: 'How does RouteX ensure passenger safety?', a: 'All vehicles are inspected and roadworthy. Drivers are verified and trained. Every trip is GPS-tracked in real time. Passengers have access to emergency contact features through the app.' },
      { q: 'What do I do in an emergency during a trip?', a: 'Alert the driver immediately. For life-threatening situations, call 112 (Nigeria emergency services). You can also contact your registered emergency contact via the app.' },
      { q: 'How do I report a driver or fellow passenger?', a: 'Go to your trip history in the app and select Report an Issue. You can also email support@routexgo.co with your booking reference and a description of the incident.' },
    ],
  },
]

export default function FAQ() {
  return (
    <>
      <Navbar />
      <div style={{ background: 'var(--green)', padding: '64px 5% 56px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: '12px' }}>
          Frequently Asked Questions
        </h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0 auto 28px' }}>
          Everything you need to know about RouteX. Can&apos;t find an answer?{' '}
          <a href="/support" style={{ color: '#C9A84C', textDecoration: 'underline' }}>
            Contact our support team
          </a>.
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.title}
                href={`#${cat.title.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and')}`}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Icon className="w-3.5 h-3.5" /> {cat.title}
              </a>
            )
          })}
        </div>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 96px' }}>
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <div
              key={cat.title}
              id={cat.title.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and')}
              style={{ marginBottom: '56px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                  paddingBottom: '16px',
                  borderBottom: '2px solid var(--green-lt)',
                }}
              >
                <Icon className="w-6 h-6 text-[#1A5632]" />
                <h2
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: 'var(--black)',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {cat.title}
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {cat.faqs.map((faq, i) => (
                  <details
                    key={i}
                    style={{
                      background: 'var(--gray5)',
                      borderRadius: '10px',
                      border: '1px solid #E8EEF2',
                      overflow: 'hidden',
                    }}
                  >
                    <summary
                      style={{
                        padding: '18px 20px',
                        fontSize: '15px',
                        fontWeight: 600,
                        color: 'var(--black)',
                        cursor: 'pointer',
                        listStyle: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      {faq.q}
                      <span style={{ color: 'var(--green)', fontSize: '20px', flexShrink: 0, marginLeft: '12px' }}>
                        +
                      </span>
                    </summary>
                    <div style={{ padding: '0 20px 18px', fontSize: '14px', color: 'var(--gray2)', lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )
        })}

        <div style={{ background: 'var(--green)', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
          <h3
            style={{
              fontFamily: 'var(--display)',
              fontSize: '24px',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-0.5px',
              marginBottom: '10px',
            }}
          >
            Still have questions?
          </h3>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', marginBottom: '24px' }}>
            Our support team is available Monday to Friday, 8am to 6pm WAT.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/support"
              style={{
                background: 'var(--gold)',
                color: 'var(--charcoal)',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              Visit Support Centre
            </a>
            <a
              href="mailto:support@routexgo.co"
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
