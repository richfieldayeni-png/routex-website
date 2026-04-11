'use client'

import { useState } from 'react'

export default function ForBusiness() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="for-business" className="business-section">
      <div className="business-inner">
        <div className="business-grid">
          <div>
            <div className="section-tag">For business</div>
            <div className="section-title" style={{ marginBottom: '16px' }}>
              Why companies<br />choose <em>RouteX</em>
            </div>
            <p style={{ fontSize: '16px', color: 'var(--gray2)', marginBottom: '36px', lineHeight: '1.65' }}>
              Corporate transport is a retention and productivity lever. RouteX makes it easy to offer your team a reliable, subsidized commute benefit.
            </p>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                </svg>
              </div>
              <div>
                <div className="benefit-title">Reduce transport allowance overhead</div>
                <div className="benefit-desc">
                  Replace ad-hoc transport allowances with structured, trackable bookings that give you full visibility into spend.
                </div>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" />
                </svg>
              </div>
              <div>
                <div className="benefit-title">Improve staff punctuality</div>
                <div className="benefit-desc">
                  Employees on dedicated corporate routes arrive on time, consistently — no more traffic excuses.
                </div>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
              <div>
                <div className="benefit-title">Employer transport benefit</div>
                <div className="benefit-desc">
                  Offer subsidized commutes as a staff benefit — a differentiator for recruitment and retention in Abuja&apos;s competitive talent market.
                </div>
              </div>
            </div>
          </div>
          <div className="business-cta">
            <div className="pricing-label">Business enquiry</div>
            <div className="pricing-val">Get RouteX for your team</div>
            <div className="pricing-note">Pricing from ₦1,200/seat/day. Volume discounts available.</div>
            <div className="form-row">
              <label>Company name</label>
              <input type="text" placeholder="e.g. Apex Consulting Ltd" />
            </div>
            <div className="form-row">
              <label>Work email</label>
              <input type="email" placeholder="you@company.com" />
            </div>
            <div className="form-row">
              <label>Team size</label>
              <select>
                <option>5–20 employees</option>
                <option>21–50 employees</option>
                <option>51–100 employees</option>
                <option>100+ employees</option>
              </select>
            </div>
            <div className="form-row">
              <label>Primary pickup area</label>
              <input type="text" placeholder="e.g. Wuse Zone 2, Garki" />
            </div>
            {submitted ? (
              <p style={{ fontSize: '14px', color: 'var(--green)', textAlign: 'center', padding: '13px 0', fontWeight: 500 }}>
                Thanks! Our team will reach out within 24 hours.
              </p>
            ) : (
              <button className="form-submit" type="button" onClick={() => setSubmitted(true)}>
                Submit enquiry →
              </button>
            )}
            <p style={{ fontSize: '12px', color: 'var(--gray3)', textAlign: 'center', marginTop: '12px' }}>
              No commitment required. We&apos;ll reach out within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
