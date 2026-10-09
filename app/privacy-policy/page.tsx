import { LegalPage, policySections } from '@/components/site-header'

export const metadata = { title: 'Privacy Policy | PATHOLOGIC', description: 'Privacy policy for the PATHOLOGIC website.' }

export default function PrivacyPolicy() { return <LegalPage eyebrow="Legal / Privacy policy" title="Privacy, plainly stated." intro="This template is written in clear language for review by the PATHOLOGIC website owner and legal advisor before publication." sections={policySections} /> }
