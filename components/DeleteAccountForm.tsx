'use client'

import { useState } from 'react'

export default function DeleteAccountForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailOrPhone: '',
    role: 'rider',
    reason: '',
    confirmed: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.confirmed) return

    setIsSubmitting(true)
    // Simulate submission to backend / support queue
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 800)
  }

  if (isSubmitted) {
    return (
      <div className="delete-success-banner">
        <div className="delete-success-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Request Submitted Successfully
        </div>
        <p className="delete-success-desc">
          We have received your account deletion request for <strong>{formData.emailOrPhone}</strong>. Our support team will verify your details and process your request within <strong>30 days</strong>.
        </p>
        <p style={{ fontSize: '13px', marginTop: '10px', opacity: 0.9 }}>
          A confirmation record has been logged. If you need to cancel this request or have urgent questions, please email <strong>support@routexgo.co</strong>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="delete-form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          required
          placeholder="e.g. Samuel Okonkwo"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </div>

      <div className="delete-form-group">
        <label htmlFor="emailOrPhone">Registered Email or Phone Number</label>
        <input
          id="emailOrPhone"
          type="text"
          required
          placeholder="name@example.com or +234..."
          value={formData.emailOrPhone}
          onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
        />
      </div>

      <div className="delete-form-group">
        <label htmlFor="role">Account Type</label>
        <select
          id="role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="rider">Rider / Passenger</option>
          <option value="business">Corporate / Business Account</option>
          <option value="driver">Driver / Transport Partner</option>
        </select>
      </div>

      <div className="delete-form-group">
        <label htmlFor="reason">Reason for Deletion (Optional)</label>
        <textarea
          id="reason"
          rows={3}
          placeholder="Please let us know why you are leaving RouteX..."
          value={formData.reason}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
        />
      </div>

      <div className="delete-form-group" style={{ marginTop: '20px' }}>
        <label className="delete-checkbox-label">
          <input
            type="checkbox"
            required
            checked={formData.confirmed}
            onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })}
          />
          <span>
            I understand that requesting account deletion will permanently remove my profile, route subscriptions, and ride history after the retention period.
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="delete-submit-btn"
        disabled={isSubmitting || !formData.confirmed}
      >
        {isSubmitting ? 'Submitting Request...' : 'Submit Deletion Request'}
      </button>
    </form>
  )
}
