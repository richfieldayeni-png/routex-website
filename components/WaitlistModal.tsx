'use client'

import { useState } from 'react'
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('Commuter')
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="waitlist-modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close" aria-label="Close modal">
          <X className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ width: '56px', height: '56px', background: '#EAF3EE', color: '#164E2D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <CheckCircle2 className="w-8 h-8 text-[#164E2D]" />
            </div>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '24px', fontWeight: 800, color: '#121517', marginBottom: '8px' }}>
              Priority Waitlist Confirmed!
            </h3>
            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: '24px' }}>
              Thank you, <strong>{name || 'Commuter'}</strong>. You're set to receive early access invite codes &amp; 25% launch pass discounts at <u>{email}</u>.
            </p>
            <button
              onClick={onClose}
              style={{ background: '#164E2D', color: '#FFFFFF', fontWeight: 700, padding: '12px 28px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '14px' }}
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EAF3EE', color: '#164E2D', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px' }}>
              <ShieldCheck className="w-4 h-4" style={{ width: '16px', height: '16px' }} /> Pre-Launch Priority
            </div>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '24px', fontWeight: 800, color: '#121517', marginBottom: '8px' }}>
              Join the RouteX Early Access List
            </h3>
            <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '24px', lineHeight: 1.5 }}>
              Be the first to reserve seats on Abuja's premier scheduled shuttle lines before public release.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#121517', marginBottom: '6px' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Zainab Kalu"
                  style={{ width: '100%', padding: '12px 14px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '14px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#121517', marginBottom: '6px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  style={{ width: '100%', padding: '12px 14px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '14px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#121517', marginBottom: '6px' }}>
                  I am a...
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  style={{ width: '100%', padding: '12px 14px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '14px', outline: 'none', background: '#FFFFFF' }}
                >
                  <option value="Commuter">Daily Commuter (Abuja)</option>
                  <option value="Corporate HR">Corporate HR / Fleet Admin</option>
                  <option value="Estate Association">Estate Association Executive</option>
                  <option value="Charter Client">Event / Group Charter Client</option>
                </select>
              </div>

              <button
                type="submit"
                style={{ width: '100%', background: '#164E2D', color: '#FFFFFF', fontWeight: 700, padding: '14px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '8px' }}
              >
                Claim Priority Early Access
                <ArrowRight className="w-4 h-4" style={{ width: '18px', height: '18px' }} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
