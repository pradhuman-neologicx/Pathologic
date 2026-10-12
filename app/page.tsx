import Link from 'next/link'
import {
  Check,
  ChevronDown,
  ArrowRight,
  ScanSearch,
  FlaskConical,
  ClipboardList,
  Microscope,
  ShieldAlert,
  Smartphone,
  Sparkles,
} from 'lucide-react'
import {
  GooglePlayButton,
  PageShell,
  keyFeaturesList,
  howItWorksList,
  whoCanUseList,
} from '@/components/site-header'

export const metadata = {
  title: 'PATHOLOGIC | Field Veterinary Postmortem & Disease Investigation Assistant',
  description:
    'PATHOLOGIC is a mobile application designed to assist field veterinarians during postmortem examination and disease investigation. From field findings to laboratory confirmation.',
}

export default function Home() {
  return (
    <PageShell>
      <main className="home-main">
        {/* ═══════════════ SECTION 1: HERO ═══════════════ */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-badge-wrap">
                <span className="eyebrow-pill">
                  <span className="eyebrow-dot" /> Veterinary Diagnostic Support
                </span>
              </div>
              <h1 className="hero-brand-title">
                <em>PATHOLOGIC</em>
              </h1>
              <p className="hero-tagline">
                From Field Findings to Laboratory Confirmation
              </p>
              <p className="hero-description">
                PATHOLOGIC is a field veterinary postmortem and disease investigation assistant
                that helps veterinarians record pathological findings, explore possible diagnoses,
                and identify appropriate samples and laboratory tests.
              </p>
              <div className="hero-actions">
                <GooglePlayButton href="#download" />
                <Link className="button button-secondary" href="#features">
                  <span>Explore Features</span>
                  <ChevronDown size={15} />
                </Link>
              </div>
              <div className="hero-species-pill">
                <span className="species-label">Supported Species:</span>
                <span>Cattle · Buffalo · Sheep · Goats · Horses · Camels · Dogs · Cats · Pigs</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow" />
              <div className="visual-card visual-card-main">
                <div className="card-top">
                  <span className="status-dot" />
                  <span>Postmortem Case Session</span>
                  <span className="card-number">ACTIVE · ID #PM-408</span>
                </div>
                <div className="scan-line" />

                <div className="visual-body">
                  <div className="visual-label">Gross Pathological Findings</div>

                  <div className="finding-row">
                    <span className="finding-icon">
                      <ScanSearch size={18} />
                    </span>
                    <span className="finding-text">
                      <strong>Observation Recorded</strong>
                      <small>Respiratory system · Lung hepatization noted</small>
                    </span>
                    <span className="finding-badge">
                      <Check size={14} />
                    </span>
                  </div>

                  <div className="finding-row">
                    <span className="finding-icon">
                      <ClipboardList size={18} />
                    </span>
                    <span className="finding-text">
                      <strong>Differential Suspected</strong>
                      <small>Bovine Respiratory Disease Complex</small>
                    </span>
                    <span className="finding-badge finding-badge-accent">
                      <Sparkles size={13} />
                    </span>
                  </div>

                  <div className="finding-row">
                    <span className="finding-icon">
                      <FlaskConical size={18} />
                    </span>
                    <span className="finding-text">
                      <strong>Recommended Sample</strong>
                      <small>Cranioventral lung margin · 10% Neutral Formalin</small>
                    </span>
                    <span className="finding-badge">
                      <Check size={14} />
                    </span>
                  </div>

                  <div className="finding-row muted">
                    <span className="finding-icon">
                      <Microscope size={18} />
                    </span>
                    <span className="finding-text">
                      <strong>Confirmatory Test</strong>
                      <small>Histopathology &amp; Bacterial Culture / PCR</small>
                    </span>
                    <span className="finding-badge finding-badge-pending">
                      Ready
                    </span>
                  </div>
                </div>

                <div className="visual-footer-bar">
                  <span className="protocol-text">Diagnostic Decision Support Active</span>
                  <span className="protocol-badge">Systematic Flow</span>
                </div>
              </div>

              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-tag">
                <span className="status-dot" /> Field to Confirmatory Lab
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ SECTION 2: ABOUT PATHOLOGIC ═══════════════ */}
        <section className="about-section" id="about">
          <div className="container">
            {/* Top header area */}
            <div className="about-header">
              <p className="eyebrow">About PATHOLOGIC</p>
              <h2 className="about-title">
                Bridging Field Examination and{' '}
                <em>Laboratory Diagnosis.</em>
              </h2>
            </div>

            {/* Two column content */}
            <div className="about-grid">
              {/* Left: Dark hero card */}
              <div className="about-dark-card">
                <div className="about-dark-glow" />
                <div className="about-dark-badge">The Field Challenge</div>
                <p className="about-dark-lead">
                  During a field postmortem, a veterinarian can reach only a <strong>tentative diagnosis</strong> based
                  on gross findings. A <strong>definitive diagnosis</strong> requires laboratory confirmation — which depends on selecting the right samples, collecting them correctly, and requesting appropriate tests.
                </p>
                <div className="about-dark-divider" />
                <p className="about-dark-solution">
                  <span className="about-solution-icon">
                    <Sparkles size={18} />
                  </span>
                  PATHOLOGIC bridges this gap — connecting field observations to structured laboratory confirmation.
                </p>
              </div>

              {/* Right: Pathway + pillars */}
              <div className="about-right-col">
                <p className="about-right-intro">
                  PATHOLOGIC supports a structured examination workflow. By connecting recorded pathological
                  findings with tentative diagnoses, sample collection recommendations, and laboratory testing
                  guidance, the application helps veterinarians conduct more systematic disease investigations.
                </p>

                {/* Animated pathway flow */}
                <div className="about-pathway">
                  <div className="pathway-step">
                    <div className="pathway-icon-ring">
                      <ScanSearch size={20} />
                    </div>
                    <div className="pathway-label">
                      <strong>Observe &amp; Record</strong>
                      <small>Systematic gross lesion documentation</small>
                    </div>
                  </div>
                  <div className="pathway-connector">
                    <ArrowRight size={16} />
                  </div>
                  <div className="pathway-step">
                    <div className="pathway-icon-ring">
                      <ClipboardList size={20} />
                    </div>
                    <div className="pathway-label">
                      <strong>Suspect &amp; Sample</strong>
                      <small>Tentative diagnosis &amp; specimen selection</small>
                    </div>
                  </div>
                  <div className="pathway-connector">
                    <ArrowRight size={16} />
                  </div>
                  <div className="pathway-step">
                    <div className="pathway-icon-ring pathway-icon-ring-final">
                      <Microscope size={20} />
                    </div>
                    <div className="pathway-label">
                      <strong>Test &amp; Confirm</strong>
                      <small>Laboratory investigation &amp; confirmation</small>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ SECTION 3: KEY FEATURES ═══════════════ */}
        <section className="features-section" id="features">
          <div className="container">
            <div className="section-header-centered">
              <p className="eyebrow">Key Features</p>
              <h2>
                Comprehensive <em>Field Capabilities</em>
              </h2>
              <p className="section-lead">
                Six dedicated features built to support systematic disease investigation and
                targeted laboratory confirmation in the field.
              </p>
            </div>

            <div className="features-grid-cards">
              {keyFeaturesList.map(({ title, description, Icon, tag }, index) => (
                <div className="feature-card-modern" key={title}>
                  <div className="feature-card-top">
                    <span className="feature-card-icon-box">
                      <Icon size={22} />
                    </span>
                    <span className="feature-card-number">0{index + 1}</span>
                  </div>
                  <span className="feature-card-tag">{tag}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ SECTION 4: HOW IT WORKS ═══════════════ */}
        <section className="how-it-works-section" id="how-it-works">
          <div className="container">
            <div className="section-header-centered">
              <p className="eyebrow">How It Works</p>
              <h2>
                A Structured Approach to <em>Disease Investigation</em>
              </h2>
              <p className="section-lead">
                A seamless, systematic 6-step diagnostic pathway from gross postmortem observation
                to confirmatory laboratory diagnosis.
              </p>
            </div>

            <div className="how-it-works-grid">
              {howItWorksList.map(({ step, title, description }, index) => (
                <div className="step-flow-card" key={step}>
                  <div className="step-flow-header">
                    <span className="step-flow-number">{step}</span>
                    <span className="step-flow-dot" />
                    {index < howItWorksList.length - 1 && (
                      <span className="step-flow-line" />
                    )}
                  </div>
                  <div className="step-flow-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ SECTION 5: WHO CAN USE PATHOLOGIC? ═══════════════ */}
        <section className="who-section" id="who-can-use">
          <div className="container">
            <div className="section-header-centered">
              <p className="eyebrow">Intended Users</p>
              <h2>
                Designed for <em>Veterinary Professionals</em>
              </h2>
              <p className="section-lead">
                PATHOLOGIC is intended for professionals and institutions involved in animal disease
                investigation, including:
              </p>
            </div>

            <div className="who-grid-modern">
              {whoCanUseList.map(({ title, Icon, badge }) => (
                <div className="who-card-modern" key={title}>
                  <span className="who-icon-box">
                    <Icon size={22} />
                  </span>
                  <div className="who-content">
                    <span className="who-badge-pill">{badge}</span>
                    <h3>{title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ SECTION 6: DOWNLOAD THE APP ═══════════════ */}
        <section className="download-cta-section" id="download">
          <div className="container">
            <div className="download-banner-card">
              <div className="download-glow" />
              <div className="download-badge">
                <Smartphone size={20} />
              </div>
              <h2>Make Your Field Investigations More Systematic</h2>
              <p className="download-description">
                Use PATHOLOGIC to connect postmortem observations with appropriate sample collection
                and laboratory investigation recommendations.
              </p>
              <div className="download-actions">
                <GooglePlayButton className="google-play-btn-large" />
              </div>
              
            </div>
          </div>
        </section>

        {/* ═══════════════ SECTION 7: IMPORTANT DISCLAIMER ═══════════════ */}
        <section className="disclaimer-section" id="disclaimer">
          <div className="container disclaimer-inner">
            <div className="disclaimer-mark">
              <ShieldAlert size={24} />
            </div>
            <div className="disclaimer-content">
              <p className="eyebrow">Important Disclaimer</p>
              <h2>Diagnostic Decision Support</h2>
              <p>
                PATHOLOGIC provides tentative diagnostic suggestions and sample collection guidance
                to support veterinary disease investigation. It does not replace professional
                veterinary judgement or definitive laboratory diagnosis. Final conclusions should
                consider appropriate laboratory investigations, clinical history, epidemiological
                information, and pathological findings. Sample handling and transportation must comply
                with applicable biosafety requirements and the receiving laboratory&apos;s
                instructions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
