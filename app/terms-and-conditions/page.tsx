import { LegalPage, termSections } from '@/components/site-header'

export const metadata = { title: 'Terms & Conditions | PATHOLOGIC', description: 'Terms and conditions for the PATHOLOGIC website.' }

export default function TermsAndConditions() { return <LegalPage eyebrow="Legal / Terms & conditions" title="Clear terms for a considered tool." intro="These terms are a plain-language starting point and contain marked placeholders where the owner or legal advisor must provide confirmed information." sections={termSections} /> }
