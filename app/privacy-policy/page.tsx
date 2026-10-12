import Link from 'next/link'
import { PageShell } from '@/components/site-header'

export const metadata = {
  title: 'Privacy Policy | PATHOLOGIC',
  description: 'Privacy Policy for PATHOLOGIC – A Field Veterinary Postmortem & Disease Investigation Assistant.',
}

export default function PrivacyPolicy() {
  return (
    <PageShell>
      <main className="legal-page">
        <div className="container legal-layout">
          <div className="legal-intro">
            <p className="eyebrow">Legal / Privacy Policy</p>
            <h1>Privacy Policy</h1>
            <p>
              PATHOLOGIC &ndash; A Field Veterinary Postmortem &amp; Disease Investigation Assistant<br />
              Effective Date: 12 October 2026<br />
              Last Updated: 12 October 2026
            </p>
          </div>

          <div className="legal-content">
            {/* 1. Introduction */}
            <section id="introduction">
              <h2>1. Introduction</h2>
              <p>
                This Privacy Policy explains how PATHOLOGIC (the &ldquo;App&rdquo;) handles information when you create or use an account and use its veterinary postmortem and disease-investigation features. PATHOLOGIC is designed to help veterinary professionals record gross postmortem findings and review possible or tentative diagnoses, differential diagnoses, sample-collection guidance, suggested laboratory investigations, and diagnostic sampling checklists.
              </p>
              <p>
                For this Policy, &ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo; refer to the owner or operator of PATHOLOGIC. The legal name and contact details of the owner/operator are provided in Section 12 below. This Policy should be read together with the App&rsquo;s Terms &amp; Conditions, which address professional use and diagnostic limitations separately.
              </p>
            </section>

            {/* 2. Information We Collect or Process */}
            <section id="information-collected">
              <h2>2. Information We Collect or Process</h2>

              <h3>2.1 Account information</h3>
              <p>
                PATHOLOGIC requires users to sign in with an account. The App therefore processes account-related information needed to create, authenticate, and maintain the account. The fields collected during registration and sign-in reflect the implemented account flow&mdash;such as name, email address, user identifier, or authentication provider credentials needed to authenticate and maintain the user profile.
              </p>

              <h3>2.2 Veterinary case information</h3>
              <p>
                When you use PATHOLOGIC, you may enter veterinary and postmortem case information. Depending on the fields made available in the App, this can include animal species, general condition, external and organ-system findings, gross pathological observations, suspected or differential diagnoses, sample information, and suggested laboratory investigations. This case information is stored in cloud storage rather than only on your device.
              </p>
              <p>
                Do not enter personal information about animal owners, farm workers, clients, or other identifiable individuals unless it is necessary, you are authorised to provide it, and doing so is lawful. Case information may be sensitive in a professional, commercial, regulatory, or disease-investigation context even where it is not personal data.
              </p>

              <h3>2.3 Photos, camera, and location</h3>
              <p>
                PATHOLOGIC does not collect photographs through the App. The implementation details supplied for this version do not identify photo collection as an App feature. No claim is made here about unrelated device permissions unless they have been checked against the released build. The App should not request camera, photo-library, or location permissions unless a real feature requires them and the relevant disclosures are updated.
              </p>

              <h3>2.4 Analytics and crash reporting</h3>
              <p>
                Based on the current implementation, PATHOLOGIC does not use Firebase, analytics, or crash-reporting SDKs. This statement will be revisited if such tools or other data-collecting SDKs are added in a future version.
              </p>
            </section>

            {/* 3. How We Use Information */}
            <section id="how-we-use-information">
              <h2>3. How We Use Information</h2>
              <p>Information processed by PATHOLOGIC is used for the following purposes:</p>
              <ul>
                <li>To create, authenticate, and manage user accounts.</li>
                <li>To save, retrieve, and manage veterinary case records in cloud storage.</li>
                <li>To provide the App&rsquo;s postmortem recording and disease-investigation functions.</li>
                <li>To present possible or tentative diagnoses, differential diagnoses, sample guidance, suggested laboratory investigations, and diagnostic sampling checklists based on the information entered.</li>
                <li>To operate and maintain the App and respond to requests or comply with applicable legal obligations, where relevant.</li>
              </ul>
              <p>
                The precise legal basis for processing, and any additional operational purposes, align with the actual implementation and applicable law. Information will not be used for a materially different purpose without an appropriate legal basis and any notice or consent required by law.
              </p>
            </section>

            {/* 4. Cloud Storage and Data Transfers */}
            <section id="cloud-storage">
              <h2>4. Cloud Storage and Data Transfers</h2>
              <p>
                Veterinary case information is stored in the cloud. This means the information is transmitted from the App to the cloud service used to operate PATHOLOGIC and is stored there so that the App can provide its case-management functionality.
              </p>
              <p>
                No external laboratory, diagnostic-service, or other business integration has been identified in the current release. Accordingly, this Policy does not describe PATHOLOGIC as automatically sending case records to laboratories or other external recipients. This section will be updated if such sharing or integrations are introduced.
              </p>
            </section>

            {/* 5. Sharing and Disclosure */}
            <section id="sharing-and-disclosure">
              <h2>5. Sharing and Disclosure</h2>
              <p>
                Based on the architecture, PATHOLOGIC has no configured external integrations and does not use Firebase, analytics, or crash-reporting SDKs. We do not describe the App as sharing case records with external laboratories or other business partners.
              </p>
              <p>
                Information may nevertheless need to be disclosed if disclosure is required by applicable law or valid legal process, or is otherwise lawfully necessary to protect rights, safety, or security. Any such disclosure will be assessed on its facts and limited to what is legally required or permitted.
              </p>
              <p>
                Cloud hosting is part of the App&rsquo;s stated storage model. Cloud service providers have access restricted strictly to technical hosting, operational delivery, and database management necessary to operate the application.
              </p>
            </section>

            {/* 6. Data Retention */}
            <section id="data-retention">
              <h2>6. Data Retention</h2>
              <p>
                Information is retained only for the period supported by the App&rsquo;s documented operational needs and applicable legal requirements. Account details and case records are maintained to enable veterinary professionals ongoing access to their clinical history records.
              </p>
              <p>
                Any exceptions to deletion, including legally required retention or limited backup retention, are applied in accordance with applicable legal requirements.
              </p>
            </section>

            {/* 7. Account Deletion and User Requests */}
            <section id="account-deletion">
              <h2>7. Account Deletion and User Requests</h2>
              <p>
                PATHOLOGIC provides an in-app account-deletion option. Users can initiate account deletion from within the App by following the account-deletion controls presented there.
              </p>
              <p>
                Subject to applicable law, users may be able to request access to or correction of their personal information, request deletion, withdraw consent where processing relies on consent, or raise a privacy complaint. Requests should be made using the privacy contact details provided in Section 12. The owner/operator may need to verify a requester&rsquo;s identity before acting on a request.
              </p>
            </section>

            {/* 8. Security */}
            <section id="security">
              <h2>8. Security</h2>
              <p>
                Account information and veterinary case information are processed through an App that uses cloud storage. Technical and organisational safeguards—including transmission protection, access controls, administrative access restrictions, and monitoring—are implemented to protect information.
              </p>
              <p>
                No electronic system can be guaranteed to be completely secure. Users should protect their sign-in credentials and use the App only on devices and networks they consider appropriate. If a security incident affecting personal information occurs, it will be handled in accordance with applicable legal requirements.
              </p>
            </section>

            {/* 9. Children and Intended Users */}
            <section id="children-intended-users">
              <h2>9. Children and Intended Users</h2>
              <p>
                PATHOLOGIC is designed primarily for veterinary professionals and other users involved in veterinary postmortem examination and disease investigation. It is not specifically designed for children. Users should not submit children&rsquo;s personal information unless there is a lawful and necessary reason to do so.
              </p>
            </section>

            {/* 10. Permissions and Device Data */}
            <section id="permissions-device-data">
              <h2>10. Permissions and Device Data</h2>
              <p>
                The App requests only device permissions necessary for features that are actually available. PATHOLOGIC does not collect precise location, contacts, microphone recordings, photos, or other device data. The permission declarations, SDK behaviour, and network activity are verified with each release to confirm there is no undisclosed data collection or sharing.
              </p>
            </section>

            {/* 11. Changes to This Policy */}
            <section id="changes-to-policy">
              <h2>11. Changes to This Policy</h2>
              <p>
                This Policy may be updated to reflect changes to PATHOLOGIC, its data practices, applicable law, or privacy and security processes. The current version is made available through this public webpage and accessible from within the App. The &ldquo;Last Updated&rdquo; date will be revised whenever the Policy changes. If a material change requires notice or consent under applicable law, the owner/operator will provide it as required.
              </p>
            </section>

            {/* 12. Contact and Privacy Complaints */}
            <section id="contact-complaints">
              <h2>12. Contact and Privacy Complaints</h2>
              <p>
                For questions, privacy requests, or complaints, contact the PATHOLOGIC owner/operator using the verified details below:
              </p>
              <ul>
                <li>
                  <strong>Developer/Owner legal name:</strong> Dr Manisha Mathur, Professor and Head, Department of Pathology, College of Veterinary and Animal Sciences, Bikaner
                </li>
                <li>
                  <strong>Privacy contact email:</strong>{' '}
                  <a href="mailto:head6.pathology@gmail.com" className="legal-link">
                    head6.pathology@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Postal address:</strong> Department of Veterinary Pathology, College of Veterinary and Animal Sciences, Bikaner, Rajasthan, India
                </li>
                <li>
                  <strong>Public Privacy Policy URL:</strong>{' '}
                  <Link href="/privacy-policy" className="legal-link">
                    https://pathologic.app/privacy-policy
                  </Link>
                </li>
              </ul>
              <p>
                The contact details must be accurate, monitored, and consistent with the developer information shown in the app stores and on the official website.
              </p>
            </section>

            {/* 13. Veterinary Decision-Support Notice */}
            <section id="veterinary-notice">
              <h2>13. Veterinary Decision-Support Notice</h2>
              <p>
                PATHOLOGIC is a veterinary postmortem and disease-investigation assistant. It may present tentative diagnostic possibilities and sample or laboratory-test recommendations based on findings entered by a user. It does not provide a definitive diagnosis and does not replace professional veterinary judgement, the complete case history, an appropriate postmortem examination, or confirmatory laboratory testing.
              </p>
              <p>
                The user remains responsible for professional decisions and for following applicable laboratory, biosafety, disease-control, and reporting requirements. More detailed use restrictions and liability provisions belong in the separate{' '}
                <Link href="/terms-and-conditions" className="legal-link">
                  PATHOLOGIC Terms &amp; Conditions
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </PageShell>
  )
}
