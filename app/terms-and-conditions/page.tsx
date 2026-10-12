import { PageShell } from '@/components/site-header'

export const metadata = { title: 'Terms & Conditions | PATHOLOGIC', description: 'Terms and conditions for the PATHOLOGIC website.' }

export default function TermsAndConditions() {
  return (
    <PageShell>
      <main className="legal-page">
        <div className="container legal-layout">
          <div className="legal-intro">
            <p className="eyebrow">Legal / Terms &amp; conditions</p>
            <h1>Terms and Conditions</h1>
            <p>
              PATHOLOGIC – A Field Veterinary Postmortem &amp; Disease Investigation Assistant<br />
              Effective Date: 12 October 2026<br />
              Last Updated: 12 October 2026
            </p>
            
          </div>
          <div className="legal-content">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the PATHOLOGIC mobile application (&quot;PATHOLOGIC&quot;, &quot;App&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;).</p>
              <p>By downloading, installing, accessing or using PATHOLOGIC, you agree to be bound by these Terms.</p>
              <p>If you do not agree with these Terms, please do not use the application.</p>
            </section>

            <section>
              <h2>2. Purpose of PATHOLOGIC</h2>
              <p>PATHOLOGIC is a field veterinary postmortem and disease-investigation assistant designed to support veterinarians and veterinary professionals during postmortem examination.</p>
              <p>The application enables users to systematically record gross findings and may provide:</p>
              <ul>
                <li>Possible/tentative diagnoses</li>
                <li>Differential diagnoses</li>
                <li>Recommended samples</li>
                <li>Sample collection guidance</li>
                <li>Suggested laboratory tests</li>
                <li>A diagnostic sampling checklist</li>
              </ul>
              <p>The basic workflow is:</p>
              <p className="font-medium">Observe &rarr; Record &rarr; Suspect &rarr; Sample &rarr; Test &rarr; Confirm.</p>
              <p>PATHOLOGIC is intended to assist the professional user in moving from field observations toward appropriate laboratory confirmation.</p>
            </section>

            <section>
              <h2>3. Professional Use</h2>
              <p>PATHOLOGIC is particularly intended for:</p>
              <ul>
                <li>Field veterinarians</li>
                <li>Veterinary officers</li>
                <li>Veterinary pathologists</li>
                <li>Disease investigation officers</li>
                <li>Veterinary diagnostic laboratories</li>
                <li>Veterinary hospitals</li>
                <li>Government veterinary services</li>
                <li>Veterinary teaching institutions</li>
                <li>Veterinary students during supervised field training</li>
                <li>Epidemiological and outbreak-investigation teams</li>
              </ul>
              <p>Veterinary students should use the application under appropriate professional supervision.</p>
            </section>

            <section>
              <h2>4. No Definitive Diagnosis</h2>
              <p>PATHOLOGIC provides decision support and tentative field diagnostic possibilities.</p>
              <p>It does not provide a definitive diagnosis.</p>
              <p>The application analyses findings entered by the user and may identify diseases that are compatible with the recorded observations.</p>
              <p>Similar gross lesions may occur in different diseases. Conversely, important diseases may not always produce typical gross lesions.</p>
              <p>Therefore, users must exercise independent professional judgement.</p>
            </section>

            <section>
              <h2>5. Laboratory Confirmation</h2>
              <p>Users must obtain appropriate laboratory confirmation whenever required.</p>
              <p>Depending upon the suspected condition, appropriate investigations may include:</p>
              <ul>
                <li>Histopathology</li>
                <li>Bacterial culture and identification</li>
                <li>Antibiotic susceptibility testing</li>
                <li>PCR/RT-PCR</li>
                <li>Antigen detection</li>
                <li>Immunohistochemistry</li>
                <li>Serology</li>
                <li>Toxicological examination</li>
                <li>Parasitological examination</li>
                <li>Cytology</li>
                <li>Molecular investigations</li>
                <li>Other specialised diagnostic tests</li>
              </ul>
              <p>PATHOLOGIC does not guarantee that any suggested diagnosis or laboratory test will establish the final diagnosis.</p>
            </section>

            <section>
              <h2>6. Sample Collection</h2>
              <p>One of the principal functions of PATHOLOGIC is to assist the veterinarian in identifying appropriate samples for confirmation.</p>
              <p>The user remains responsible for:</p>
              <ul>
                <li>Selecting the appropriate specimen</li>
                <li>Collecting representative tissue</li>
                <li>Using appropriate collection techniques</li>
                <li>Using the correct preservative</li>
                <li>Maintaining aseptic technique where required</li>
                <li>Correctly labelling specimens</li>
                <li>Maintaining appropriate temperature and storage conditions</li>
                <li>Packaging samples appropriately</li>
                <li>Following biosafety procedures</li>
                <li>Transporting samples according to the receiving laboratory&apos;s requirements</li>
              </ul>
              <p>For example, histopathology samples may require appropriate fixation, while samples intended for bacterial culture should generally not be placed in formalin.</p>
              <p>The receiving laboratory&apos;s instructions always take precedence where they differ from general recommendations within the application.</p>
            </section>

            <section>
              <h2>7. Biosafety</h2>
              <p>Postmortem examination and disease investigation may involve infectious, zoonotic, toxic or otherwise hazardous materials.</p>
              <p>Users are solely responsible for following applicable:</p>
              <ul>
                <li>Biosafety procedures</li>
                <li>Biosecurity procedures</li>
                <li>Personal protective equipment requirements</li>
                <li>Animal-health regulations</li>
                <li>Zoonotic-disease precautions</li>
                <li>Sample transportation requirements</li>
                <li>Waste-disposal requirements</li>
                <li>Applicable government and institutional regulations</li>
              </ul>
              <p>PATHOLOGIC does not replace institutional biosafety procedures or official disease-control instructions.</p>
            </section>

            <section>
              <h2>8. Accuracy of Information</h2>
              <p>Every reasonable effort may be made to provide useful veterinary pathology and disease-investigation information.</p>
              <p>However, PATHOLOGIC may contain:</p>
              <ul>
                <li>Incomplete information</li>
                <li>Generalised recommendations</li>
                <li>Errors</li>
                <li>Outdated information</li>
                <li>Species-specific limitations</li>
                <li>Disease-specific limitations</li>
                <li>Recommendations that may not apply to a particular field situation</li>
              </ul>
              <p>Veterinary diagnosis depends on the complete clinical, epidemiological, pathological and laboratory context.</p>
              <p>Users must independently evaluate the information before acting upon it.</p>
            </section>

            <section>
              <h2>9. No Guarantee of Diagnostic Outcome</h2>
              <p>We do not guarantee that:</p>
              <ul>
                <li>The most likely diagnosis displayed by the App is correct</li>
                <li>A differential diagnosis list is complete</li>
                <li>Recommended samples will always be sufficient</li>
                <li>Recommended laboratory tests will always confirm the disease</li>
                <li>A particular disease will be detected</li>
                <li>A laboratory will accept a particular specimen</li>
                <li>The App will identify every possible disease</li>
                <li>Use of the App will result in a particular clinical, epidemiological or legal outcome</li>
              </ul>
            </section>

            <section>
              <h2>10. User Responsibility</h2>
              <p>The user is responsible for:</p>
              <ul>
                <li>Performing an appropriate postmortem examination</li>
                <li>Accurately recording observed findings</li>
                <li>Considering the clinical history</li>
                <li>Considering epidemiological information</li>
                <li>Considering the animal&apos;s species and circumstances</li>
                <li>Collecting appropriate samples</li>
                <li>Following laboratory instructions</li>
                <li>Obtaining laboratory confirmation where appropriate</li>
                <li>Making the final professional decision</li>
              </ul>
              <p>PATHOLOGIC should be regarded as an assistant, not as a replacement for the trained veterinary professional.</p>
            </section>

            <section>
              <h2>11. Official Disease-Control Decisions</h2>
              <p>PATHOLOGIC does not replace:</p>
              <ul>
                <li>Government veterinary authorities</li>
                <li>Official disease-control programmes</li>
                <li>Statutory reporting requirements</li>
                <li>Quarantine requirements</li>
                <li>Regulatory laboratory confirmation</li>
                <li>Epidemiological investigation</li>
                <li>Official veterinary certification</li>
              </ul>
              <p>Where a disease is suspected to be notifiable or subject to statutory control, the user must follow applicable governmental requirements.</p>
            </section>

            <section>
              <h2>12. User-Entered Information</h2>
              <p>Users are responsible for the accuracy and legality of information entered into PATHOLOGIC.</p>
              <p>Users should not enter information that they are not legally authorised to collect, process or share.</p>
              <p>Users should avoid unnecessary personal information concerning animal owners, farmers, employees or other individuals.</p>
            </section>

            <section>
              <h2>13. Intellectual Property</h2>
              <p>Unless otherwise stated, PATHOLOGIC, including its:</p>
              <ul>
                <li>Name</li>
                <li>Logo</li>
                <li>Software</li>
                <li>User interface</li>
                <li>Text</li>
                <li>Diagnostic decision-support content</li>
                <li>Database structure</li>
                <li>Graphics</li>
                <li>Documentation</li>
                <li>Manuals</li>
                <li>Other original content</li>
              </ul>
              <p>is owned by or licensed to the developer/publisher and is protected by applicable intellectual-property laws.</p>
              <p>You may use PATHOLOGIC for its intended professional purpose.</p>
              <p>You may not, without written permission:</p>
              <ul>
                <li>Copy the application</li>
                <li>Reproduce substantial portions of its content</li>
                <li>Sell or commercially redistribute the application</li>
                <li>Reverse engineer the application, except where permitted by applicable law</li>
                <li>Modify or create derivative versions of the application</li>
                <li>Remove proprietary notices</li>
                <li>Use the PATHOLOGIC name or logo in a misleading manner</li>
              </ul>
            </section>

            <section>
              <h2>14. Prohibited Use</h2>
              <p>Users must not use PATHOLOGIC:</p>
              <ul>
                <li>For unlawful purposes</li>
                <li>To violate applicable veterinary, animal-health or biosecurity laws</li>
                <li>To intentionally submit false information for a harmful purpose</li>
                <li>To interfere with the operation of the application</li>
                <li>To attempt unauthorised access to application systems</li>
                <li>To introduce malicious software</li>
                <li>To misuse diagnostic information in a manner that creates an avoidable risk to animals, humans or public health</li>
                <li>In any manner that violates these Terms</li>
              </ul>
            </section>

            <section>
              <h2>15. Third-Party Services</h2>
              <p>PATHOLOGIC may depend upon third-party infrastructure or services, including application stores, hosting providers, analytics providers, cloud services or other technical services.</p>
              <p>The developer does not control third-party services and is not responsible for their independent policies, availability or operation.</p>
              <p>Use of third-party services may be subject to their separate terms and privacy policies.</p>
            </section>

            <section>
              <h2>16. Application Availability</h2>
              <p>We may modify, suspend or discontinue all or part of PATHOLOGIC at any time.</p>
              <p>We do not guarantee that the application will:</p>
              <ul>
                <li>Always be available</li>
                <li>Be free of errors</li>
                <li>Operate on every device</li>
                <li>Remain compatible with every Android version</li>
                <li>Operate without interruption</li>
                <li>Remain unchanged</li>
              </ul>
              <p>Updates may be required to continue using certain functions.</p>
            </section>

            <section>
              <h2>17. Limitation of Liability</h2>
              <p>To the maximum extent permitted by applicable law, the developer and publisher shall not be responsible for losses, damages, claims or consequences arising from reliance solely upon:</p>
              <ul>
                <li>A tentative diagnosis</li>
                <li>A differential diagnosis</li>
                <li>A recommended sample</li>
                <li>A suggested laboratory test</li>
                <li>An incorrect or incomplete finding entered by a user</li>
                <li>Improper sample collection</li>
                <li>Improper sample preservation</li>
                <li>Improper sample transportation</li>
                <li>Failure to obtain laboratory confirmation</li>
                <li>Any professional decision made by the user</li>
              </ul>
              <p>Nothing in these Terms is intended to exclude liability that cannot legally be excluded under applicable law.</p>
            </section>

            <section>
              <h2>18. Veterinary Professional Judgement</h2>
              <p>The user acknowledges that veterinary diagnosis requires professional judgement.</p>
              <p>PATHOLOGIC is intended to support, rather than replace, the knowledge and judgement of a qualified veterinary professional.</p>
              <p>The final diagnosis and action must take into account the complete circumstances of the case.</p>
            </section>

            <section>
              <h2>19. Changes to These Terms</h2>
              <p>We may update these Terms from time to time.</p>
              <p>The revised Terms will become effective when published through the application or designated website unless otherwise stated.</p>
              <p>Continued use of PATHOLOGIC after an updated version becomes effective constitutes acceptance of the revised Terms, to the extent permitted by law.</p>
            </section>

            <section>
              <h2>20. Termination</h2>
              <p>The developer may suspend or terminate access to PATHOLOGIC where reasonably necessary, including where a user:</p>
              <ul>
                <li>Violates these Terms</li>
                <li>Misuses the application</li>
                <li>Attempts to compromise application security</li>
                <li>Uses the application unlawfully</li>
              </ul>
              <p>A user may discontinue use of PATHOLOGIC at any time.</p>
            </section>

            <section id="governing-law">
              <h2>21. Governing Law</h2>
              <p>These Terms shall be governed by the laws applicable in India.</p>
              <p>Subject to applicable law, disputes relating to these Terms or PATHOLOGIC shall be subject to the jurisdiction of the competent courts at Bikaner, Rajasthan, India.</p>
            </section>

            <section id="contact">
              <h2>22. Contact</h2>
              <p>For questions regarding these Terms, please contact:</p>
              <ul>
                <li>
                  <strong>Developer/Publisher:</strong> Dr Manisha Mathur, Professor and Head, Department of Pathology, College of Veterinary and Animal Sciences, Bikaner
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:head6.pathology@gmail.com" className="legal-link">
                    head6.pathology@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Postal Address:</strong> Department of Veterinary Pathology, College of Veterinary and Animal Sciences, Bikaner, Rajasthan, India
                </li>
              </ul>
            </section>

            <section>
              <h2>23. Acknowledgement</h2>
              <p>By using PATHOLOGIC, you acknowledge that:</p>
              <ul>
                <li>PATHOLOGIC is a veterinary decision-support tool</li>
                <li>Its outputs are tentative and not definitive diagnoses</li>
                <li>Professional veterinary judgement remains essential</li>
                <li>Laboratory confirmation may be necessary</li>
                <li>Sample collection and transportation must follow appropriate laboratory and biosafety requirements</li>
                <li>You accept these Terms and Conditions</li>
              </ul>
            </section>

          </div>
        </div>
      </main>
    </PageShell>
  )
}
