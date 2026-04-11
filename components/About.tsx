export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="section-tag">About RouteX</div>
        <div className="about-grid">
          <div>
            <div className="section-title" style={{ marginBottom: '24px' }}>
              Building the <em>infrastructure</em><br />for corporate mobility
            </div>
            <p className="about-text">
              RouteX is a technology-driven corporate transport platform headquartered in Abuja, Nigeria. We were founded on a simple observation: corporate workers in Nigeria&apos;s capital spend too much time and money navigating unreliable transport to reach their workplaces.
            </p>
            <p className="about-text">
              Our platform digitizes the entire corporate commute — from route discovery and seat booking to payments and live tracking — giving both employees and employers full visibility and control over daily transport.
            </p>
            <p className="about-text">
              Currently in pilot phase across Abuja&apos;s key business corridors, RouteX is focused on building a transport product that is reliable, affordable, and designed for the specific demands of Nigeria&apos;s corporate sector.
            </p>
            <div style={{ marginTop: '32px' }}>
              <a href="#contact" className="btn-primary">Get in touch</a>
            </div>
          </div>
          <div className="about-detail">
            <div className="detail-card">
              <div className="detail-card-title">Company name</div>
              <div className="detail-card-val">RouteX Technologies</div>
            </div>
            <div className="detail-card">
              <div className="detail-card-title">Website</div>
              <div className="detail-card-val">routexgo.co</div>
            </div>
            <div className="detail-card">
              <div className="detail-card-title">Headquarters</div>
              <div className="detail-card-val">Abuja, Federal Capital Territory, Nigeria</div>
            </div>
            <div className="detail-card">
              <div className="detail-card-title">Service area</div>
              <div className="detail-card-val">Abuja Metropolitan Area — Wuse, Garki, Maitama, CBD, Kubwa corridors</div>
            </div>
            <div className="detail-card">
              <div className="detail-card-title">Stage</div>
              <div className="detail-card-val">Pilot phase — B2B corporate transport</div>
            </div>
            <div className="detail-card">
              <div className="detail-card-title">Contact email</div>
              <div className="detail-card-val">hello@routexgo.co</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
