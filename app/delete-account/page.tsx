import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DeleteAccountForm from '@/components/DeleteAccountForm'

export const metadata: Metadata = {
  title: 'Account Deletion — RouteX',
  description: 'Learn how to delete your RouteX account via the mobile app or web form, and review our data retention timelines.',
  openGraph: {
    title: 'Account Deletion — RouteX',
    description: 'Instructions and web request form for RouteX account deletion in compliance with Apple and Google Play store policies.',
    url: 'https://routexgo.co/delete-account',
  },
}

export default function DeleteAccountPage() {
  return (
    <div className="delete-page-wrapper">
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <section className="delete-hero-section">
          <div className="delete-hero-inner">
            <div className="delete-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>Account Deletion</span>
            </div>
            <h1 className="delete-hero-title">
              Request Account <em>Deletion</em>
            </h1>
            <p className="delete-hero-sub">
              RouteX provides easy and transparent options to delete your account and personal data, in full compliance with Apple App Store and Google Play Store policies.
            </p>
          </div>
        </section>

        {/* MAIN BODY SECTION */}
        <section className="delete-body-section">
          {/* GRID FOR IN-APP & WEB FORM */}
          <div className="delete-grid">
            {/* IN-APP INSTRUCTIONS */}
            <div className="delete-block">
              <div className="delete-block-title">
                In-App Deletion
                <span className="delete-block-badge">Recommended</span>
              </div>
              <p className="delete-block-sub">
                Follow these quick steps directly inside the RouteX mobile app on iOS or Android:
              </p>

              <div className="app-steps-list">
                <div className="app-step-item">
                  <div className="app-step-num">1</div>
                  <div className="app-step-content">
                    Open the <strong>RouteX mobile app</strong> on your mobile device.
                  </div>
                </div>

                <div className="app-step-item">
                  <div className="app-step-num">2</div>
                  <div className="app-step-content">
                    Log in to the account you wish to delete.
                  </div>
                </div>

                <div className="app-step-item">
                  <div className="app-step-num">3</div>
                  <div className="app-step-content">
                    Navigate to the <strong>Account</strong> tab in the bottom navigation bar.
                  </div>
                </div>

                <div className="app-step-item">
                  <div className="app-step-num">4</div>
                  <div className="app-step-content">
                    Tap <strong>Settings &amp; Privacy</strong> &gt; <strong>Security</strong>.
                  </div>
                </div>

                <div className="app-step-item">
                  <div className="app-step-num">5</div>
                  <div className="app-step-content">
                    Select <strong>Delete Account</strong> and confirm your request.
                  </div>
                </div>
              </div>
            </div>

            {/* WEB REQUEST FORM */}
            <div className="delete-block">
              <div className="delete-block-title">
                Web Request Form
                <span className="delete-block-badge" style={{ background: '#f0f4f8', color: '#444d56' }}>Online Request</span>
              </div>
              <p className="delete-block-sub">
                If you no longer have access to the RouteX app, submit an account deletion request online:
              </p>
              
              <DeleteAccountForm />
            </div>
          </div>

          {/* DATA RETENTION TIMELINES */}
          <div className="retention-section">
            <div className="retention-header">
              <h2 className="retention-title">Data Retention &amp; Deletion Timelines</h2>
              <p className="retention-sub">
                We handle your data responsibly and transparently. Below is a breakdown of what happens to your data upon requesting account deletion.
              </p>
            </div>

            <div className="retention-grid">
              <div className="retention-card">
                <span className="retention-badge immediate">Immediate</span>
                <h3 className="retention-card-title">Account Deactivation</h3>
                <p className="retention-card-desc">
                  Your profile is disabled instantly upon submitting a deletion request. You will be logged out on all active devices.
                </p>
              </div>

              <div className="retention-card">
                <span className="retention-badge days30">Within 30 Days</span>
                <h3 className="retention-card-title">Personal Data Purge</h3>
                <p className="retention-card-desc">
                  Your profile details, saved addresses, passenger preferences, and trip history are permanently deleted from active storage.
                </p>
              </div>

              <div className="retention-card">
                <span className="retention-badge legal">Up to 7 Years</span>
                <h3 className="retention-card-title">Statutory Tax &amp; Audit Data</h3>
                <p className="retention-card-desc">
                  Financial transactions, receipts, and payment records are securely archived to comply with legal, tax, and anti-fraud regulations.
                </p>
              </div>
            </div>
          </div>

          {/* SUPPORT CONTACT BANNER */}
          <div className="support-banner">
            <div className="support-banner-text">
              <h3>Need help or have questions?</h3>
              <p>Contact our support team for any inquiries regarding your account or data deletion request.</p>
            </div>
            <a href="mailto:support@routexgo.co" className="support-email-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              support@routexgo.co
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
