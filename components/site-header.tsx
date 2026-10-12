import Link from 'next/link'
import {
  ArrowUpRight,
  Menu,
  Stethoscope,
  Microscope,
  ShieldCheck,
  Hospital,
  Building2,
  GraduationCap,
  ClipboardList,
  Search,
  FlaskConical,
  ClipboardCheck,
  PawPrint,
} from 'lucide-react'

export function GooglePlayButton({
  href = '#download',
  className = '',
}: {
  href?: string
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`google-play-btn ${className}`}
      aria-label="Get it on Google Play"
    >
      <svg className="google-play-icon" viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path
          d="M3.609 1.814L13.792 12 3.61 22.186A2.217 2.217 0 0 1 3 20.617V3.383c0-.608.225-1.168.609-1.569z"
          fill="#00D2FF"
        />
        <path
          d="M17.184 8.608L13.792 12l3.392 3.392 3.824-2.193a1.442 1.442 0 0 0 0-2.398l-3.824-2.191z"
          fill="#FFCE00"
        />
        <path
          d="M3.609 1.814l10.183 10.186 3.392-3.392L6.155 2.378c-.783-.448-1.745-.378-2.546.564z"
          fill="#00F076"
        />
        <path
          d="M13.792 12L3.609 22.186c.801.942 1.763 1.012 2.546.564l11.029-6.23-3.392-3.392-.001-.001-.001.001z"
          fill="#FF3A44"
        />
      </svg>
      <span className="google-play-text">
        <span className="google-play-sub">GET IT ON</span>
        <span className="google-play-title">Google Play</span>
      </span>
    </a>
  )
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Pathologic home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>PATHOLOGIC</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/#about" className="nav-link">About</Link>
          <Link href="/#features" className="nav-link">Key Features</Link>
          <Link href="/#how-it-works" className="nav-link">How It Works</Link>
          <Link href="/#download" className="nav-link">Download</Link>
          <Link href="/privacy-policy" className="nav-link">Privacy Policy</Link>
        </nav>
        <div className="header-cta-wrap">
          <Link href="#download" className="header-play-link">
            Get the App
          </Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#features">Key Features</Link>
            <Link href="/#how-it-works">How It Works</Link>
            <Link href="/#download">Download</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/terms-and-conditions">Terms &amp; conditions</Link>
          </nav>
        </details>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand-col">
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span>PATHOLOGIC</span>
          </Link>
          <p className="footer-copy">
            From Field Findings to Laboratory Confirmation.
            <br />
            A field veterinary postmortem and disease investigation assistant.
          </p>
        </div>
        <div className="footer-links-col">
          <div className="footer-links-title">Quick Navigation</div>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/#about">About PATHOLOGIC</Link>
            <Link href="/#features">Key Features</Link>
            <Link href="/#how-it-works">How It Works</Link>
            <Link href="/#download">Download App</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
        <div className="footer-bottom-row">
          <p className="copyright">© 2026 PATHOLOGIC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>
}

/* ──────── NEW DATA STRUCTURES FOR HOME PAGE ──────── */

export const keyFeaturesList = [
  {
    title: 'Systematic Postmortem Examination',
    description:
      'Record external lesions, mucous membrane abnormalities, lymph node findings, and internal organ changes in a structured workflow.',
    Icon: ClipboardList,
    tag: 'Examination',
  },
  {
    title: 'Tentative Disease Identification',
    description:
      'Explore possible diagnoses and differential diagnoses based on the combination of gross pathological findings.',
    Icon: Search,
    tag: 'Diagnosis',
  },
  {
    title: 'Sample Collection Guidance',
    description:
      'Identify recommended tissues, organs, swabs, blood, and other specimens for diagnostic investigation.',
    Icon: FlaskConical,
    tag: 'Sampling',
  },
  {
    title: 'Laboratory Test Recommendations',
    description:
      'Review potentially appropriate investigations, including histopathology, culture, PCR, serology, and toxicological testing.',
    Icon: Microscope,
    tag: 'Laboratory',
  },
  {
    title: 'Diagnostic Sampling Checklist',
    description:
      'Review key examination and sample collection steps before leaving the postmortem site.',
    Icon: ClipboardCheck,
    tag: 'Checklist',
  },
  {
    title: 'Multiple Animal Species',
    description:
      'Support investigations involving cattle, buffalo, sheep, goats, horses, camels, dogs, cats, and pigs.',
    Icon: PawPrint,
    tag: 'Multi-Species',
  },
] as const

export const howItWorksList = [
  {
    step: '01',
    title: 'Select Animal Species',
    description: 'Choose the relevant animal species for the examination.',
  },
  {
    step: '02',
    title: 'Record Postmortem Findings',
    description:
      'Document observed lesions and abnormalities across external and internal examinations.',
  },
  {
    step: '03',
    title: 'Review Possible Diagnoses',
    description: 'Explore tentative diagnoses and relevant differential diagnoses.',
  },
  {
    step: '04',
    title: 'Identify Required Samples',
    description: 'Review recommended specimens and sample collection guidance.',
  },
  {
    step: '05',
    title: 'Review Laboratory Tests',
    description: 'Identify potentially appropriate confirmatory investigations.',
  },
  {
    step: '06',
    title: 'Complete the Sampling Checklist',
    description: 'Review sample collection and preparation before laboratory submission.',
  },
] as const

export const whoCanUseList = [
  {
    title: 'Field veterinarians and veterinary officers',
    Icon: Stethoscope,
    badge: 'Field Practice',
  },
  {
    title: 'Veterinary pathologists',
    Icon: Microscope,
    badge: 'Pathology',
  },
  {
    title: 'Disease investigation and outbreak response teams',
    Icon: ShieldCheck,
    badge: 'Outbreak Response',
  },
  {
    title: 'Veterinary diagnostic laboratories and hospitals',
    Icon: Hospital,
    badge: 'Diagnostics',
  },
  {
    title: 'Government veterinary services',
    Icon: Building2,
    badge: 'Public Veterinary Service',
  },
  {
    title: 'Veterinary teaching institutions and students undertaking supervised field training',
    Icon: GraduationCap,
    badge: 'Academia & Training',
  },
] as const

/* Legacy aliases for backward compatibility */
export const steps = []
export const howToUseSteps = []
export const whyPoints = []
export const whoCanUse = whoCanUseList.map((item) => item.title)
export const corePrinciple = []

export const features = [
  ['Structured postmortem findings', 'A clear way to capture observations consistently.'],
  ['Tentative diagnosis support', 'A focused view of possibilities to consider.'],
  ['Disease-specific samples', 'Relevant sampling recommendations alongside findings.'],
  ['Confirmatory investigations', 'Recommended laboratory investigations for review.'],
  ['Diagnostic sampling checklist', 'A practical prompt for the next diagnostic step.'],
] as const

export const policySections = [
  ['Introduction', 'This Privacy Policy explains how information may be handled in connection with PATHOLOGIC and this website. It is intended as a clear starting point and must be reviewed and completed by the website owner before publication.'],
  ['Information We Collect', '[OWNER TO CONFIRM: Describe the information collected directly from visitors, users, or veterinary professionals, and whether any postmortem or case-related information is processed.]'],
  ['How Information Is Used', '[OWNER TO CONFIRM: Describe the purposes for which collected information is used, such as operating the website, responding to enquiries, improving services, or providing the PATHOLOGIC experience.]'],
  ['Data Storage and Security', '[OWNER TO CONFIRM: Describe where information is stored, the safeguards used, and any relevant security practices. Do not publish specific claims until confirmed.]'],
  ['Data Sharing and Disclosure', '[OWNER TO CONFIRM: State whether information is shared with service providers, laboratories, professional partners, or other third parties, and under what circumstances.]'],
  ['Cookies and Similar Technologies', '[OWNER TO CONFIRM: Explain whether cookies, analytics, or similar technologies are used and how visitors can manage them.]'],
  ['Third-Party Services', '[OWNER TO CONFIRM: Identify any third-party hosting, analytics, forms, email, or other services that may process information.]'],
  ['Data Retention', '[OWNER TO CONFIRM: State how long different categories of information are retained and the factors used to determine retention periods.]'],
  ['User Rights and Choices', '[OWNER TO CONFIRM WITH LEGAL ADVISOR: Describe the rights and choices available to visitors and users in the applicable jurisdictions.]'],
  ['Updates to This Privacy Policy', 'This policy may be updated from time to time. The owner should add the date of the latest update and explain how material changes will be communicated.'],
  ['Contact Information', '[OWNER TO CONFIRM: Insert the official contact name, email address, and any required postal or registered address.]'],
] as const

export const termSections = [
  ['Introduction and Acceptance of Terms', 'These Terms & Conditions govern use of the PATHOLOGIC website and related decision-support materials. By using the website, you acknowledge these terms. [OWNER TO CONFIRM: Add any required acceptance language.]'],
  ['Purpose of PATHOLOGIC', 'PATHOLOGIC is intended to help veterinarians structure postmortem observations, consider tentative diagnoses, and review possible sampling and laboratory investigations. It is not the diagnostic application itself.'],
  ['Permitted Use', '[OWNER TO CONFIRM WITH LEGAL ADVISOR: Describe permitted and prohibited uses, including any restrictions on copying, reverse engineering, or misuse.]'],
  ['User Responsibilities', 'Users are responsible for exercising professional judgement, reviewing information critically, and complying with applicable professional standards, laws, and laboratory requirements.'],
  ['Veterinary Diagnostic Disclaimer', 'PATHOLOGIC is a decision-support tool. It does not replace qualified veterinary judgement, a physical examination, laboratory confirmation, or applicable professional standards.'],
  ['Tentative Diagnoses and Laboratory Confirmation', 'Any diagnoses or investigations presented by PATHOLOGIC are tentative suggestions only. Final decisions about sample collection, testing, interpretation, and treatment must be made by qualified veterinary professionals in consultation with the appropriate diagnostic laboratory.'],
  ['Accuracy and Limitations of Information', '[OWNER TO CONFIRM WITH LEGAL ADVISOR: Describe the intended scope, update practices, and any legally appropriate limitation language. Do not make unsupported accuracy or availability claims.]'],
  ['Intellectual Property', '[OWNER TO CONFIRM: Identify the owner of the website, brand, content, software, and other intellectual property, together with permitted use terms.]'],
  ['Third-Party Services', '[OWNER TO CONFIRM: Describe any third-party services or links and the applicable terms or responsibilities.]'],
  ['Limitation of Liability', '[OWNER TO CONFIRM WITH LEGAL ADVISOR: Insert legally reviewed limitation of liability language appropriate to the applicable jurisdiction.]'],
  ['Changes to These Terms', 'These terms may be updated from time to time. The owner should add the effective date and explain how material changes will be communicated.'],
  ['Governing Law', '[OWNER TO CONFIRM WITH LEGAL ADVISOR: Insert the governing law and jurisdiction. No jurisdiction is assumed by this template.]'],
  ['Contact Information', '[OWNER TO CONFIRM: Insert the official contact name, email address, and any required postal or registered address.]'],
] as const

export function LegalPage({ title, eyebrow, intro, sections }: { title: string; eyebrow: string; intro: string; sections: readonly (readonly [string, string])[] }) {
  return <PageShell><main className="legal-page"><div className="container legal-layout"><div className="legal-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div><div className="legal-content">{sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}</div></div></main></PageShell>
}

export function ArrowIcon() { return <ArrowUpRight aria-hidden="true" /> }

export function FeatureIcon({ index }: { index: number }) { const icons = ['◌', '↗', '⊹', '⌁', '✓']; return <span className="feature-icon" aria-hidden="true">{icons[index]}</span> }
