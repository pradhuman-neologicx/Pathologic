import Link from 'next/link'
import { ArrowUpRight, Menu } from 'lucide-react'

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
          <Link href="/privacy-policy" className="nav-link">Privacy</Link>
          <Link href="/terms-and-conditions" className="nav-link">Terms</Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
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
        <div>
          <Link href="/" className="brand footer-brand"><span className="brand-mark" aria-hidden="true"><span /></span><span>PATHOLOGIC</span></Link>
          <p className="footer-copy">From Field Findings to Laboratory Confirmation.<br />A systematic postmortem. A better sample. A more accurate diagnosis.</p>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#how-to-use">How to Use</Link>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/terms-and-conditions">Terms &amp; conditions</Link>
        </div>
        <p className="copyright">© {new Date().getFullYear()} PATHOLOGIC. All rights reserved.</p>
      </div>
    </footer>
  )
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>
}

/* ──────── DATA ARRAYS ──────── */

export const steps = [
  ['01', 'Observe', 'Examine the animal and identify findings.'],
  ['02', 'Record', 'Document postmortem observations.'],
  ['03', 'Suspect', 'Review possible diagnoses.'],
  ['04', 'Sample', 'Identify recommended samples.'],
  ['05', 'Test', 'Review recommended investigations.'],
  ['06', 'Confirm', 'Support confirmation through laboratory testing and veterinary judgement.'],
] as const

export const howToUseSteps = [
  ['Step 1', 'Start the Application'],
  ['Step 2', 'Select the Animal Species'],
  ['Step 3', 'Record External Examination Findings'],
  ['Step 4', 'Examine the Mucous Membranes'],
  ['Step 5', 'Examine the Lymph Nodes'],
  ['Step 6', 'Systematic Examination of Internal Organs'],
  ['Step 7', 'Enter Multiple Findings'],
  ['Step 8', 'Obtain a Tentative Diagnosis'],
  ['Step 9', 'Sample Collection Recommendations'],
  ['Step 10', 'Recommended Confirmatory Laboratory Tests'],
  ['Step 11', 'Generate a Diagnostic Sampling Checklist'],
] as const

export const whyPoints = [
  ['What could be the disease?', 'Based on the combination of gross lesions observed during postmortem examination.'],
  ['What samples should I collect?', 'The app recommends appropriate tissues, organs, swabs, blood or other specimens according to the suspected disease.'],
  ['Which laboratory tests should be performed?', 'The app suggests appropriate confirmatory investigations such as histopathology, bacterial culture, PCR/RT-PCR, antigen detection, immunohistochemistry, serology, toxicological examination, and more.'],
] as const

export const whoCanUse = [
  'Field veterinarians',
  'Veterinary officers',
  'Veterinary pathologists',
  'Disease investigation officers',
  'Veterinary diagnostic laboratories',
  'Veterinary hospitals',
  'Government veterinary services',
  'Veterinary teaching institutions',
  'Veterinary students during supervised field training',
  'Epidemiological and outbreak investigation teams',
] as const

export const corePrinciple = [
  ['Observe', 'the gross lesions carefully.'],
  ['Record', 'the findings systematically.'],
  ['Suspect', 'the most likely diseases and differentials.'],
  ['Sample', 'the correct tissues using the correct collection method.'],
  ['Test', 'using appropriate laboratory investigations.'],
  ['Confirm', 'the diagnosis through laboratory evidence.'],
] as const

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
