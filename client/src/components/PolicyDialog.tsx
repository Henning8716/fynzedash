import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PolicyDialogProps {
  type: 'terms' | 'privacy' | 'refund';
  onClose: () => void;
  isOpen: boolean;
}

export default function PolicyDialog({ type, onClose, isOpen }: PolicyDialogProps) {
  const [policyContent, setPolicyContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  // Define the policy content directly
  const termsOfService = `**Terms of Service**

**Last Updated:** April 14, 2025

**1. Acceptance of Terms**

Welcome to Fynze! These Terms of Service ("Terms") constitute a binding legal agreement between you and Fynze ("we," "us," "our") governing your access to and use of our website, digital products, software, community platforms, and all related services (collectively, the "Services"). By accessing, purchasing, downloading, or utilizing any part of the Services, you signify your unconditional acceptance of these Terms in their entirety.

**2. Evolution of Services**

Fynze is committed to innovation and continuous improvement. You acknowledge and agree that the form, nature, and scope of the Services may change from time to time without prior notice to you. This includes adding, modifying, suspending, or discontinuing features, functionalities, or entire products, potentially impacting access or usability. Fynze shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Services.

**3. Account Integrity and Responsibility**

* **Account Necessity:** Access to certain core functionalities, particularly purchases and licensed content, requires account registration.
* **Information Accuracy:** You commit to providing and maintaining accurate, complete, and current registration information. Failure to do so constitutes a breach of these Terms, which may result in immediate termination of your account.
* **Security:** You bear sole responsibility for maintaining the confidentiality of your account credentials and for all activities conducted under your account. You must notify Fynze immediately of any suspected breach of security or unauthorized use. Fynze cannot and will not be liable for any loss or damage arising from your failure to comply with this security obligation.

**4. Purchases, Payments, and Billing**

* **Payment Obligation:** You agree to pay all applicable fees and charges associated with your use of the Services and purchases made through your account, utilizing the billing terms active at the time of the transaction. We leverage secure third-party payment processors (e.g., billgang).
* **Dynamic Pricing:** All prices are subject to change at Fynze's sole discretion without advance notice.
* **Tax Responsibility:** You are solely responsible for identifying and paying all applicable taxes, levies, or duties imposed by taxing authorities associated with your purchases.

**5. Limited License Grant & Fynze's Retained Rights**

* **Grant:** Subject to your strict compliance with these Terms, upon successful payment for a digital product, Fynze grants you a limited, non-exclusive, non-transferable, non-sublicensable, and **revocable** license to use the product solely for your personal or internal business purposes, as explicitly defined by the accompanying documentation or license specifics.
* **Revocation & Modification:** **Fynze expressly reserves the right, at its absolute discretion, to modify, suspend, or revoke this license at any time, without notice or liability, for any reason.** This includes, but is not limited to, breaches of these Terms, suspected misuse, piracy, efforts to circumvent licensing mechanisms, or operational decisions necessary for the health and evolution of the Fynze ecosystem.
* **No Ownership Transfer:** This license is not a sale. You acquire no ownership rights, title, or interest in the digital product(s) or underlying intellectual property. All rights not expressly granted are reserved by Fynze.

**6. Strict Usage Restrictions**

Your license is contingent upon adherence to the following restrictions. You agree **not** to, and not to permit others to:
* Circumvent any licensing or access control mechanisms.
* Resell, rent, lease, lend, redistribute, sublicense, or otherwise commercially exploit the product(s) or make them available to third parties beyond the scope explicitly permitted.
* Reverse engineer, decompile, disassemble, modify, translate, or attempt to derive the source code, underlying ideas, algorithms, structure, or organization of any software component.
* Remove, alter, or obscure any copyright, trademark, patent, or other proprietary notices.
* Use the Services for any purpose that is illegal, fraudulent, harmful, or infringes on the rights of others.
* Interfere with or disrupt the integrity or performance of the Services or Fynze's infrastructure.

**7. Fynze Intellectual Property Supremacy**

The Services, including all software, content, visual interfaces, graphics, design, compilation, information, data, computer code, products, and all other elements, are the exclusive property of Fynze or its licensors and are protected by intellectual property laws. Use of the Services grants no rights to Fynze's trademarks, logos, domain names, or other distinctive brand features.

**8. User Content (If Applicable)**

Should the Services permit User Content submission:
* While you retain ownership of your original content, you grant Fynze an irrevocable, perpetual, worldwide, royalty-free, non-exclusive, sublicensable license to use, host, store, reproduce, modify, adapt, create derivative works from, communicate, publish, publicly perform, publicly display, and distribute such User Content. This license is granted for the primary purposes of operating, promoting, improving, and developing the Services, and potentially for other Fynze ventures.
* You are solely responsible for your User Content and ensuring it does not violate any laws or third-party rights. Fynze reserves the right (but not the obligation) to remove or modify User Content for any reason, including content we believe violates these Terms or our policies.

**9. Termination Rights of Fynze**

**Fynze reserves the absolute right to suspend, restrict, or terminate your access to any or all parts of the Services, or your account, immediately and without prior notice or liability, for any reason or no reason**, including, but not limited to, if we believe, in our sole judgment, that you have violated these Terms, engaged in harmful conduct, or pose a risk to Fynze, our Services, or other users. Provisions intended to survive termination (including ownership, disclaimers, indemnification, and limitations of liability) shall continue to apply even after account termination.

**10. Disclaimer of Warranties (Emphasis)**

THE SERVICES ARE PROVIDED "AS IS," "AS AVAILABLE," AND "WITH ALL FAULTS." FYNZE AND ITS AFFILIATES, LICENSORS, AND SUPPLIERS EXPRESSLY DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, OR NON-INFRINGEMENT.

**11. Severe Limitation of Liability**

TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL FYNZE, ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR (A) ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, COVER, OR CONSEQUENTIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOST PROFITS, REVENUE, GOODWILL, USE, OR DATA) HOWEVER CAUSED, UNDER ANY THEORY OF LIABILITY (INCLUDING CONTRACT, TORT, WARRANTY, NEGLIGENCE OR OTHERWISE), EVEN IF FYNZE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

**12. Unilateral Changes to Terms**

Fynze reserves the exclusive right, at its sole discretion, to modify or replace these Terms at any time. We may provide notice of material changes, but it is your responsibility to review these Terms periodically. By continuing to access or use our Services after revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you must stop using the Services.`;

  const privacyPolicy = `**Privacy Policy**

**Last Updated:** April 14, 2025

**1. Our Commitment & Scope**

Fynze ("we," "us," "our") values user trust, however, providing and optimizing our digital products and services (collectively, the "Services") necessitates the collection and processing of certain information. This Privacy Policy outlines our practices regarding the information we collect when you interact with our Services. By using the Services, you acknowledge and consent to the data practices described herein.

**2. Information We Collect**

To operate, personalize, and improve the Services, we may collect a broad range of information, including but not limited to:

* **Provided Information:** Data you voluntarily supply, such as name, email address, billing details (processed by third-party partners like billgang), contact information, and any other data entered during registration, purchase, support requests, or other interactions.
* **Automatically Collected Data:** Information gathered automatically via our servers and tracking technologies when you access the Services. This can include IP address, device type, operating system, browser type, unique device identifiers, access times, pages viewed, referring URLs, interaction patterns within our products (feature usage, clicks, session duration), crash reports, and location data (if enabled).
* **Cookies & Tracking Technologies:** We utilize cookies, web beacons, pixels, scripts, and similar technologies to operate and administer the Services, gather usage data, enhance user experience (e.g., remembering preferences), manage sessions, and potentially for targeted advertising or analytics. You maintain control over cookie settings via your browser, but disabling them may impair Service functionality.
* **Third-Party Data:** We may receive information about you from third-party sources, including payment processors (transaction confirmation), analytics providers, and advertising networks.

**3. How We Utilize Your Information**

The information collected is instrumental for various operational and strategic purposes, including:

* **Service Provision & Maintenance:** Creating accounts, processing transactions, delivering products, providing core functionalities.
* **Improvement & Optimization:** Analyzing usage patterns, identifying trends, diagnosing technical issues, enhancing features, optimizing performance, and developing new products or services.
* **Personalization:** Tailoring content and user experience based on preferences and interactions.
* **Communication:** Sending essential administrative messages (updates, security alerts, policy changes), responding to support inquiries, and delivering marketing/promotional communications (where consent is obtained or implied, with opt-out options available).
* **Security & Fraud Prevention:** Monitoring for suspicious activity, preventing abuse, enforcing our terms, protecting the rights and safety of Fynze and our users.
* **Compliance & Reporting:** Fulfilling legal or regulatory requirements (though specific governing law clauses are omitted here) and internal reporting.

**4. Information Sharing & Disclosure**

Fynze operates within a network of partners and may share your information under specific circumstances, always aiming to support the provision and enhancement of our Services:

* **Service Providers:** We engage trusted third-party companies and individuals to perform functions on our behalf (e.g., payment processing via billgang, hosting, data analysis, email delivery, customer support, marketing). These providers access your information only to perform these tasks and are typically obligated contractually to maintain confidentiality and security.
* **Business Transactions:** In the event of a merger, acquisition, reorganization, bankruptcy, asset sale, or similar transaction, your information may be transferred as part of the deal, subject to standard confidentiality agreements.
* **Legal Obligations & Safety:** We may disclose information if we believe in good faith that it's necessary to comply with a legal obligation, protect and defend the rights or property of Fynze, prevent or investigate possible wrongdoing in connection with the Services, protect the personal safety of users or the public, or protect against legal liability.
* **Aggregated/Anonymized Data:** We may share aggregated or anonymized data (which cannot reasonably identify you) for industry analysis, demographic profiling, marketing, analytics, or other business purposes.
* **With Consent:** We may share your information for other purposes disclosed to you at the time of collection or with your explicit consent.

**5. Data Security Practices**

We implement technical and organizational measures designed to protect your information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. However, **no system is perfectly secure.** Despite our efforts, we cannot guarantee the absolute security of your information, and any transmission is at your own risk. You are responsible for maintaining the security of your account credentials.

**6. Data Retention**

We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law (e.g., for tax, accounting, or other legal requirements). When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it.

**7. Your Choices & Rights (General)**

While specific legal rights vary by jurisdiction, we generally provide users with the ability to access or update their account information through their profile settings. You can typically opt-out of non-essential marketing communications via unsubscribe links or account settings. For specific requests regarding your data (access, correction, deletion), please contact us, though Fynze reserves the right to evaluate such requests based on operational needs and feasibility.

**8. Third-Party Links & Services**

Our Services may integrate with or contain links to external sites or services not operated by Fynze. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services.

**9. Children's Privacy**

The Services are not directed to individuals under the age of 13 (or applicable higher age). We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information without appropriate consent, we will take steps to delete such information.

**10. Policy Updates**

This Privacy Policy may be updated periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the revised policy on this page and update the "Last Updated" date. Your continued use of the Services after changes are posted constitutes your acceptance of the revised policy.`;

  const refundPolicy = `**Refund Policy**

**Last Updated:** April 14, 2025

**1. Our Firm Policy: All Sales Are Final**

Thank you for choosing Fynze. We specialize in digital products and services, which, due to their nature, are accessible immediately upon purchase. Consequently, **Fynze maintains a strict NO REFUND policy.** Once a purchase is completed and the digital product or service access is delivered or made available, the sale is considered **final, irreversible, and non-refundable.**

**By proceeding with a purchase on our platform (e.g., via billgang), you explicitly acknowledge, understand, and agree to waive any right to a refund, except under the extraordinarily limited circumstances outlined below, which are determined solely at Fynze's absolute discretion.**

**2. Nature of Digital Goods**

Digital products cannot be "returned" in the traditional sense. Once downloaded or accessed, they remain in your possession. This policy is necessary to protect our intellectual property, prevent abuse, and maintain fair operations for all users.

**3. Extremely Limited Exceptions (Sole Discretion of Fynze)**

While our default stance is unequivocally no refunds, Fynze *may*, in exceedingly rare cases and entirely at its own discretion, consider a refund or store credit only if **all** of the following conditions are met:

* **Verifiable Non-Delivery:** You demonstrably paid for but received absolutely no access or download link to the purchased product due to a confirmed technical failure originating solely within Fynze's systems, AND
* **Prompt Reporting:** You reported this specific non-delivery issue to Fynze support via official channels within one hour of the purchase date, providing verifiable proof of purchase and non-receipt, AND
* **Resolution Failure:** Fynze support is verifiably unable to provide you with access to the purchased product within one hour after confirming the issue.

**No other circumstances will be considered for a refund.**

**4. Circumstances Explicitly Ineligible for Refunds**

To avoid any ambiguity, refunds **will NOT** be granted for any reason including, but absolutely not limited to:

* Changing your mind after purchase.
* Accidental purchase (except potentially verifiable immediate duplicate charges caused by system error, reviewed case-by-case).
* Lack of expertise or required third-party software/hardware to use the product.
* The product not meeting subjective expectations or needs, provided it functions as described.
* Compatibility issues with systems, software, or configurations not explicitly listed as supported by Fynze.
* No longer needing the product after purchase.
* Finding an alternative product after purchase.
* Issues arising from user error, system misconfiguration, or conflicts with other software on your system.
* Failure to read the product description, features, or requirements prior to purchase.
* Disagreement with any part of our Terms of Service or other policies.
* Server downtime or temporary unavailability of services.
* Promotional price changes after your purchase.

**5. Refund Request Process (For Exception Cases Only)**

If, and only if, you genuinely believe your situation meets **all** criteria for the extremely limited exception outlined in Section 3, contact Fynze support at https://discord.gg/gxw4GaKkGp within the stipulated timeframe. Provide: Order ID, purchase email, product name, and irrefutable evidence supporting the claim of non-delivery and Fynze system failure. **Submission of a request does not imply eligibility or guarantee a refund.** All decisions are final and at Fynze's sole discretion.

**6. Chargebacks Are Strongly Discouraged**

Initiating a chargeback or payment dispute through your bank or payment processor (e.g., billgang) without first exhausting the process outlined above (if applicable) or for reasons clearly stated as ineligible in this policy is considered a violation of trust and terms. **Doing so will likely result in the immediate and permanent termination of your Fynze account, revocation of all product licenses, and potential blacklisting from future purchases, without recourse.**

**7. Policy Modifications**

Fynze reserves the right to modify this Refund Policy at any time without notice. The policy in effect at the time of your purchase will govern that transaction.`;

  useEffect(() => {
    if (isOpen) {
      // Set the appropriate policy content based on type
      switch (type) {
        case 'terms':
          setPolicyContent(termsOfService);
          break;
        case 'privacy':
          setPolicyContent(privacyPolicy);
          break;
        case 'refund':
          setPolicyContent(refundPolicy);
          break;
        default:
          setPolicyContent('Policy content not found.');
      }
    }
  }, [isOpen, type]);

  // Generate policy title based on type
  const getPolicyTitle = () => {
    switch (type) {
      case 'terms':
        return 'Terms of Service';
      case 'privacy':
        return 'Privacy Policy';
      case 'refund':
        return 'Refund Policy';
      default:
        return 'Legal Information';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-lg shadow-blue-900/20 border border-slate-800">
        <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900">
          <h2 className="text-xl font-bold gradient-text">{getPolicyTitle()}</h2>
          <button 
            onClick={onClose}
            className="rounded-full w-8 h-8 flex items-center justify-center bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X size={18} className="text-slate-300" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
            </div>
          ) : (
            <div className="prose prose-invert prose-headings:text-blue-400 prose-strong:text-blue-300 max-w-none">
              {policyContent.split('\n\n').map((paragraph, index) => {
                // Handle headings
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  const headingText = paragraph.replace(/\*\*/g, '');
                  return <h2 key={index} className="text-xl font-bold text-blue-400 mt-6 mb-4">{headingText}</h2>;
                }
                
                // Handle list items
                if (paragraph.includes('* **')) {
                  const listItems = paragraph.split('\n* ');
                  return (
                    <ul key={index} className="list-disc pl-5 my-4 space-y-2">
                      {listItems.filter(item => item.trim()).map((item, itemIndex) => (
                        <li key={`${index}-${itemIndex}`} className="text-slate-300">
                          {item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                
                // Handle paragraphs with bold text
                return (
                  <p key={index} className="my-3 text-slate-300"
                     dangerouslySetInnerHTML={{ 
                       __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-300">$1</strong>') 
                     }}
                  />
                );
              })}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-slate-800 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-white font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}