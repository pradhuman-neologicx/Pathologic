import Link from 'next/link'
import {
  ArrowUpRight,
  Check,
  ClipboardList,
  FlaskConical,
  ScanSearch,
  Search,
  Microscope,
  ShieldCheck,
  Stethoscope,
  GraduationCap,
  Building2,
  Hospital,
  BookOpen,
  Globe,
  ChevronRight,
  ArrowDown,
} from 'lucide-react'
import {
  ArrowIcon,
  FeatureIcon,
  PageShell,
  features,
  steps,
  howToUseSteps,
  whyPoints,
  whoCanUse,
  corePrinciple,
} from '@/components/site-header'

export const metadata = {
  title: 'PATHOLOGIC | Field Veterinary Postmortem & Disease Investigation Assistant',
  description:
    'PATHOLOGIC is a mobile application designed to assist field veterinarians during postmortem examination and disease investigation. From field findings to laboratory confirmation.',
}

const whoIcons = [
  Stethoscope, ShieldCheck, Microscope, Search, FlaskConical,
  Hospital, Building2, GraduationCap, BookOpen, Globe,
]

export default function Home() {
  return (
    <PageShell>
      <main>
        {/* ══════════ HERO ══════════ */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot" /> Field Veterinary Postmortem &amp; Disease
                Investigation Assistant
              </p>
              <h1>
                <em>PATHOLOGIC</em>
              </h1>
              <p className="hero-subtitle">
                A Field Veterinary Postmortem &amp; Disease Investigation Assistant
              </p>
              <p className="hero-description">
                PATHOLOGIC is a mobile application designed to assist field veterinarians during
                postmortem examination and disease investigation. The app guides the veterinarian
                through systematic recording of gross lesions and, based on the combination of
                findings entered, provides tentative diagnoses, recommended samples to collect,
                and appropriate laboratory tests.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="#how-to-use">
                  How to Use <ArrowIcon />
                </Link>
                <Link className="text-link" href="#about">
                  Learn more <ArrowIcon />
                </Link>
              </div>

            </div>
            <div className="hero-visual">
              <div className="visual-glow" />
              <div className="visual-card visual-card-main">

                <div className="scan-line" />
                <div className="visual-label">Diagnostic findings</div>
                <div className="finding-row">
                  <span className="finding-icon">
                    <ScanSearch />
                  </span>
                  <span>
                    <strong>Observation recorded</strong>
                    <small>Respiratory system · noted</small>
                  </span>
                  <Check />
                </div>
                <div className="finding-row">
                  <span className="finding-icon">
                    <ClipboardList />
                  </span>
                  <span>
                    <strong>Sample suggested</strong>
                    <small>Lung tissue · recommended</small>
                  </span>
                  <Check />
                </div>
                <div className="finding-row muted">
                  <span className="finding-icon">
                    <FlaskConical />
                  </span>
                  <span>
                    <strong>Investigation pathway</strong>
                    <small>Ready for professional review</small>
                  </span>
                </div>
              </div>
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-tag">
                <span className="status-dot" /> Structured by design
              </div>
              
            </div>
          </div>
        </section>

        {/* ══════════ ABOUT ══════════ */}
        <section className="about-section" id="about">
          <div className="container split-section">
            <div>
              <p className="eyebrow">01 / About Pathologic</p>
              <h2>
                Bridging the gap between field findings and{' '}
                <em>laboratory confirmation.</em>
              </h2>
            </div>
            <div className="section-copy">
              <p>
                In field conditions, a veterinarian can often reach only a tentative diagnosis
                based on gross postmortem findings. However, a definitive diagnosis usually
                requires laboratory confirmation. The accuracy of laboratory diagnosis depends
                greatly on selecting the right samples, collecting them correctly, preserving them
                appropriately, and sending them for the appropriate laboratory tests.
              </p>
              <p>
                PATHOLOGIC bridges this important gap between field postmortem findings and
                confirmatory laboratory diagnosis.
              </p>
              <p className="small-note">
                The app guides the veterinarian through systematic recording of gross lesions
                and, based on the combination of findings entered, provides a tentative/possible
                diagnosis, important differential diagnoses, recommended samples, appropriate
                sample collection guidance, and recommended laboratory tests.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════ WHY PATHOLOGIC ══════════ */}
        <section className="why-section" id="why">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / Why Pathologic</p>
                <h2>
                  Three important <em>questions</em> answered.
                </h2>
              </div>
              <p className='text-justify'>
                During a field postmortem, important diagnostic information can easily be missed. Similarly, an 
incorrect sample, improper preservation, or failure to collect multiple appropriate tissues may 
make laboratory confirmation difficult or impossible.

              </p>
            </div>
            <div className="why-grid">
              {whyPoints.map(([title, description], index) => (
                <div className="why-card" key={title}>
                  <span className="why-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CORE PRINCIPLE ══════════ */}
        <section className="principle-section" id="principle">
          <div className="container">
            <div className="principle-header">
              <p className="eyebrow">03 / The Core Principle</p>
              <h2>
                <em>&ldquo;Observe → Record → Suspect → Sample → Test → Confirm&rdquo;</em>
              </h2>
              <p className="principle-subtitle">
                PATHOLOGIC is designed around this simple diagnostic pathway.
              </p>
            </div>
            <div className="principle-flow">
              {corePrinciple.map(([verb, desc], index) => (
                <div className="principle-step" key={verb}>
                  <div className="principle-icon-wrap">
                    <span className="principle-icon">{['👁', '📝', '🔍', '🧪', '🔬', '✅'][index]}</span>
                  </div>
                  <div className="principle-text">
                    <strong>{verb}</strong> {desc}
                  </div>
                  {index < corePrinciple.length - 1 && (
                    <div className="principle-arrow">
                      <ArrowDown size={16} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ HOW TO USE ══════════ */}
        <section className="howto-section" id="how-to-use">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">04 / How to Use Pathologic</p>
                <h2>
                  Simple, fast <em>workflow</em> for the field.
                </h2>
              </div>
              <p>
                Species → Findings → Organ Systems → Tentative Diagnosis → Samples → Laboratory
                Tests
              </p>
            </div>
            <div className="howto-grid">
              {howToUseSteps.map(([step, title], index) => (
                <div
                  className={`howto-card ${index === howToUseSteps.length - 1 ? 'howto-card-final' : ''}`}
                  key={step}
                >
                  <div className="howto-number-wrap">
                    <span className="howto-number">{step}</span>
                    {index < howToUseSteps.length - 1 && (
                      <div className="howto-connector" />
                    )}
                  </div>
                  <div className="howto-content">
                    <div className="howto-marker" />
                    <h3>{title}</h3>
                  </div>
                  <ChevronRight className="howto-chevron" size={18} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ APPROACH (6 steps) ══════════ */}
        <section className="approach-section" id="approach">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">05 / Our Approach</p>
                <h2>
                  From finding to <em>confirmation.</em>
                </h2>
              </div>
              <p>
                One considered step at a time, keeping the veterinary professional at the centre
                of every decision.
              </p>
            </div>
            <div className="steps-grid">
              {steps.map(([number, title, copy], index) => (
                <div
                  className={`step-card ${index === 5 ? 'step-card-final' : ''}`}
                  key={number}
                >
                  <span className="step-number">{number}</span>
                  <div className="step-marker" />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CAPABILITIES ══════════ */}
        <section className="features-section">
          <div className="container">
            <div className="feature-intro">
              <p className="eyebrow">06 / Capabilities</p>
              <h2>
                Designed for <em>deliberate</em> decisions.
              </h2>
              <p>
                Practical capabilities that support the way veterinary professionals already think
                and work.
              </p>
            </div>
            <div className="features-list">
              {features.map(([title, copy], index) => (
                <div className="feature-row" key={title}>
                  <FeatureIcon index={index} />
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                  <ArrowUpRight aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ WHO CAN USE ══════════ */}
        <section className="who-section" id="who">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">07 / Who Can Use Pathologic</p>
                <h2>
                  Built for <em>professionals</em> in the field.
                </h2>
              </div>
              <p>
                PATHOLOGIC is particularly useful for a wide range of veterinary professionals
                and institutions.
              </p>
            </div>
            <div className="who-grid">
              {whoCanUse.map((role, index) => {
                const Icon = whoIcons[index]
                return (
                  <div className="who-card" key={role}>
                    <span className="who-icon">
                      <Icon size={20} />
                    </span>
                    <span>{role}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ══════════ DISCLAIMER ══════════ */}
        <section className="disclaimer-section">
          <div className="container disclaimer-inner">
            <div className="disclaimer-mark">!</div>
            <div>
              <p className="eyebrow">Important Disclaimer</p>
              <h2>Support, not substitution.</h2>
              <p>
                PATHOLOGIC is a veterinary diagnostic decision-support and postmortem sampling
                aid. The tentative diagnosis generated by the application should not be considered
                a definitive diagnosis.
              </p>
              <p>
                Final diagnosis should be established using appropriate laboratory
                investigations, clinical history, epidemiological information, gross pathology,
                histopathology and/or other specialized diagnostic methods, as appropriate.
              </p>
              <p>
                Sample collection, preservation, packaging and transportation should follow
                applicable biosafety requirements and the instructions of the receiving diagnostic
                laboratory.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════ CLOSING CTA ══════════ */}
        <section className="closing-section">
          <div className="container">
            <p className="eyebrow">From Field Findings to Laboratory Confirmation</p>
            <h2>
              A systematic postmortem.
              <br />
              <em>A better sample.</em>
              <br />
              A more accurate diagnosis.
            </h2>
            <p className="closing-tagline">
              PATHOLOGIC — Helping Field Veterinarians Investigate Disease, One Lesion at a Time.
            </p>
            <Link className="button button-light" href="#contact">
              Get the App <ArrowIcon />
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
