import { Download } from 'lucide-react';
import unionLogo from "figma:asset/51fdf7bce016910622092c40c4b920c27a0501a4.png";

export function BoardPaper() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Download Button - Hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 z-50">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          <Download className="w-4 h-4" />
          Download/Print
        </button>
      </div>

      {/* Cover Page */}
      <div className="max-w-[210mm] mx-auto bg-white page-break-after">
        <div className="h-screen flex flex-col items-center justify-center p-12">
          {/* Logo */}
          <div className="mb-16">
            <img 
              src={unionLogo} 
              alt="Union International Limited" 
              className="h-32 w-auto"
            />
          </div>

          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-6">BOARD PAPER</h1>
            <div className="text-lg space-y-3">
              <p className="font-bold">UIL/3/02/2026</p>
              <p className="mt-4">Financial Performance Reports as at 31st December 2025</p>
              <p>and</p>
              <p>Budget Proposals for FY 2026</p>
            </div>
          </div>

          {/* Meeting Details */}
          <div className="mt-12 border-t-2 border-gray-300 pt-8 text-center">
            <p className="font-semibold mb-2">For Presentation to:</p>
            <p className="text-lg">3rd Board Meeting</p>
            <p className="text-lg font-bold">2nd February 2026</p>
          </div>

          {/* Footer */}
          <div className="mt-auto text-center text-sm text-gray-600">
            <p>Union International Limited</p>
            <p>Postbank Building, Nairobi, Kenya</p>
            <p>Date: 21st January 2026</p>
          </div>
        </div>
      </div>

      {/* Document Content */}
      <div className="max-w-[210mm] mx-auto p-12 bg-white">
        {/* Header */}
        <div className="mb-8">
          <div className="text-right mb-4">
            <p className="font-bold">BOARD PAPER REFERENCE: UIL/3/02/2026</p>
          </div>
          
          <table className="w-full text-sm mb-6">
            <tbody>
              <tr>
                <td className="font-bold py-2 w-48">MEETING:</td>
                <td>3rd Board Meeting to be Held on 2nd February 2026</td>
              </tr>
              <tr>
                <td className="font-bold py-2">AGENDA ITEM NO.:</td>
                <td>4.4</td>
              </tr>
              <tr>
                <td className="font-bold py-2">AGENDA ITEM:</td>
                <td>To receive and consider Financial Performance Reports as at 31st December 2025 and Budget Proposals for FY 2026 from Union International Limited.</td>
              </tr>
              <tr>
                <td className="font-bold py-2">PRESENTER:</td>
                <td>General Manager - Union International Limited</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 1: Proposed Resolution */}
        <div className="mb-6">
          <h2 className="font-bold text-base mb-3">1. Proposed Resolution:</h2>
          <div className="ml-6">
            <p className="mb-2">(a) To approve the budget proposals for the Financial Year 2026</p>
            <p>(b) To note and adopt the management accounts for the period ended 31st December 2025.</p>
          </div>
        </div>

        {/* Section 2: Purpose and Context */}
        <div className="mb-6">
          <h2 className="font-bold text-base mb-3">2. Purpose and Context:</h2>
          <div className="ml-6">
            <p className="mb-3">
              This Board Paper is submitted to seek the Board's consideration and approval of Union International Limited's strategic and financial direction for the fiscal year 2026. The document presents a comprehensive review of the company's operational performance during 2024-2025, highlighting key achievements, challenges, and strategic positioning in the technology solutions and procurement services sector.
            </p>
            
            <p className="mb-3"><strong>Specifically, this paper seeks to:</strong></p>
            
            <p className="mb-2">
              (a) <strong>Budget Approval:</strong> Obtain Board approval for the proposed budget for FY 2026, which has been thoroughly reviewed and validated by the Management team. The budget reflects Union International Limited's strategic growth trajectory, incorporating lessons learned from the 2024-2025 operational period (which consisted entirely of proof-of-concept projects and tender applications with no revenue generation), market intelligence, and forward-looking opportunities in automation, fleet management, smart systems, and clearing & forwarding sectors.
            </p>
            
            <p className="mb-2">
              (b) <strong>Financial Performance Review:</strong> Present the unaudited Management Accounts for the year ended 31st December 2025 to provide the Board with visibility into the company's financial position. It is important to note that 2024-2025 was a foundational period focused on market entry, relationship building, and proof-of-concept development with zero revenue generation. This presentation is made pending the completion of the comprehensive annual statutory audit, which will be conducted by the company's external auditors and presented to the Board in March 2026.
            </p>
            
            <p>
              (c) <strong>Strategic Roadmap for Revenue Generation:</strong> Present the Board with a clear pathway to revenue generation in 2026 through strategic project execution and tender conversion, building upon the groundwork laid during the 2024-2025 period.
            </p>
          </div>
        </div>

        {/* Section 3: Background */}
        <div className="mb-6">
          <h2 className="font-bold text-base mb-3">3. Background:</h2>
          <div className="ml-6 space-y-4">
            <p className="mb-3">
              Union International Limited is a strategic technology and procurement solutions provider focused on delivering innovative automation, fleet management, and smart systems solutions across East Africa. The company has positioned itself as a key player in the automation and digital transformation space, serving both public and private sector clients.
            </p>

            <h3 className="font-bold text-sm mt-4 mb-2">3.1 Operational Performance (2024-2025)</h3>
            <p className="mb-3">
              During the period under review, Union International Limited successfully executed 59 strategic activities across multiple operational departments. <strong>It is important to note that all projects during this period were Proof-of-Concept (POC) initiatives with zero revenue generation.</strong> The focus was on market validation, capability demonstration, and relationship building to secure revenue-generating contracts in 2026. The following key milestones were achieved:
            </p>

            <div className="ml-4 mb-4">
              <h4 className="font-semibold text-sm mb-2">Strategy, Automation & Projects Department:</h4>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li><strong>Fleet Management POC:</strong> Executed proof of concept for fleet tracking systems with Ultra Eureka Farm Limited (5 trucks deployment) from September 2025 to date. The POC was designed to run for 3 months, during which all planned activities were successfully completed including GPS tracking, fuel monitoring, and real-time surveillance. <u>No contract was signed during the POC period</u> - No revenue generated. The company is now focused on addressing customer satisfaction and transitioning to a full project rollout in 2026, which will include contract signing with Ultra Eureka and expansion to additional clients.</li>
                <li><strong>China Business Exchange Visit:</strong> Successfully concluded sourcing trip for OEM partnerships and establishing direct distributor agreements with camera, GPS, and fuel monitoring equipment manufacturers</li>
                <li><strong>Smart Gas Station Scoping:</strong> Completed initial scoping and site identification activities for Stabex International Uganda Gas Stations and CBMart. Activities included vendor selection for surveillance cameras and POC deployment for POS system solutions - No revenue generated</li>
                <li><strong>BSmart Technology Partnership:</strong> Signed strategic MOU with BSmart Technology for cargo tracking, e-seal systems, and fuel monitoring platforms, establishing access to CAK-certified technology platforms</li>
                <li><strong>SGR Fuel Tender Success:</strong> Kenya Railways fuel tender submitted (100% complete), representing potential high-volume fuel supply opportunity. <strong>Tender WON with Stabex International Limited mentioned as the successful bidder</strong> - pending contract execution and revenue realization in 2026</li>
                <li><strong>LIIMO EPZ Project Proposal:</strong> Completed comprehensive project proposal with full documentation submitted for consideration</li>
                <li><strong>Multiple Scoping Initiatives:</strong> Advanced feasibility studies for Kukuchic farm automation, Smart Grid Solutions for KPLC, Kenya Pipeline SCADA systems - all at scoping/proposal stages</li>
              </ul>

              <h4 className="font-semibold text-sm mt-3 mb-2">Research, Bids & Procurement Department:</h4>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li>Successfully completed 14 prequalifications with government entities and private organizations including:
                  <ul className="list-circle ml-6 mt-1">
                    <li>State Department of Petroleum (3 prequalifications)</li>
                    <li>World Food Program supplier registration</li>
                    <li>Multiple county governments (Elgeyo Marakwet, Uasin Gishu, Turkana)</li>
                    <li>KTDA, Kenya Railways (SGR), and various institutions</li>
                  </ul>
                </li>
                <li>Completed e-GP Registration for Union International Limited, Stabex International, and Ultra Eureka Farm Limited</li>
                <li>Achieved US Embassy Vendor Registration (SAMGov) certification</li>
                <li>Advanced ICTA Registration application (8% complete)</li>
                <li>Completed business permit physical address migration to Postbank Building</li>
              </ul>

              <h4 className="font-semibold text-sm mt-3 mb-2">Clearing & Forwarding Department:</h4>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li>Completed KIFWA membership invoicing</li>
                <li><strong>KRA Clearing Certification:</strong> Application submitted for clearing and forwarding agent certification (100%) to meet basic regulatory requirements for customs clearing operations</li>
                <li>Advanced KRA License application (13% complete)</li>
              </ul>

              <h4 className="font-semibold text-sm mt-3 mb-2">Marketing Department:</h4>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li>Developing WhatsApp Business Profile for enhanced customer engagement</li>
                <li>Establishing social media presence across Facebook, Instagram, LinkedIn, TikTok, and X</li>
                <li>Completed website SSL certificate renewal and platform access confirmation</li>
              </ul>
            </div>

            <h3 className="font-bold text-sm mt-4 mb-2">3.2 Key Performance Highlights</h3>
            <div className="ml-4">
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li><strong>Tender Success Rate:</strong> Won Kenya Railways SGR Fuel tender (Stabex International Limited as successful bidder) - contract execution pending</li>
                <li><strong>POC Completion Rate:</strong> 28 activities completed (47% completion rate) with demonstrated technology capabilities</li>
                <li><strong>Active Pipeline:</strong> 20 activities in progress or on track for commercialization in 2026</li>
                <li><strong>Market Access:</strong> Successfully registered with 14+ government and international procurement entities, opening doors to tender opportunities</li>
                <li><strong>Strategic Partnerships:</strong> Established BSmart MOU (CAK-certified platform access) and China OEM direct distributor relationships</li>
                <li><strong>Service Portfolio:</strong> Validated capabilities across clearing & forwarding, fleet management, and smart systems solutions through successful POC delivery</li>
                <li><strong>Revenue Status:</strong> Zero revenue in 2024-2025 as all projects were proof-of-concept and market validation exercises</li>
              </ul>
            </div>

            <h3 className="font-bold text-sm mt-4 mb-2">3.3 Challenges and Constraints</h3>
            <div className="ml-4">
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li><strong>Regulatory Requirements:</strong> Missing certifications including CAK, EPRA, ICTA, and sector-specific licenses limiting tender participation</li>
                <li><strong>Financial Constraints:</strong> Budget limitations affecting tender submissions and project scaling</li>
                <li><strong>Personnel Certifications:</strong> Shortage of certified personnel for specialized tenders (PSRA, ICTA requirements)</li>
                <li><strong>Infrastructure:</strong> Limited countrywide presence affecting large-scale government tender competitiveness</li>
                <li><strong>On-Hold Projects:</strong> 5 activities on hold due to funding challenges and regulatory approvals</li>
              </ul>
            </div>

            <h3 className="font-bold text-sm mt-4 mb-2">3.4 Strategic Opportunities (2026)</h3>
            <div className="ml-4">
              <p className="mb-3 text-sm">
                Building on the successful POC delivery and market validation during 2024-2025, Union International Limited has identified five (5) strategic revenue-generating projects for 2026. These projects represent a focused approach to commercialize proven capabilities while addressing compliance and dependency challenges. The projected revenue impact forms the foundation of the 2026 budget proposal.
              </p>

              <div className="space-y-3">
                <div className="bg-gray-50 p-3 border border-gray-300">
                  <h5 className="font-bold text-sm mb-2">PROJECT 1: Union BSmart Solutions (Strategic Partnership - Project Dependency)</h5>
                  <p className="text-xs mb-2"><strong>Project Dependency Status:</strong> This project is <u>entirely dependent on BSmart Technology's successful delivery</u> of technology platforms, regulatory certifications, and ongoing technical support.</p>
                  <p className="text-xs mb-1"><strong>Description:</strong> Commercialize cargo tracking, e-seal systems, and fuel monitoring solutions leveraging BSmart's CAK-certified platforms for government and commercial fleet customers.</p>
                  <p className="text-xs mb-1"><strong>Dependency Factors:</strong></p>
                  <ul className="list-disc ml-6 text-xs space-y-0.5">
                    <li>BSmart must maintain CAK certification and platform availability</li>
                    <li>Technology transfer and training dependent on BSmart's technical team availability</li>
                    <li>Pricing competitiveness subject to BSmart's wholesale rates</li>
                    <li>System uptime and performance reliant on BSmart's infrastructure</li>
                    <li>Contract execution timeline subject to BSmart's internal approval processes</li>
                  </ul>
                  <p className="text-xs mt-1"><strong>Revenue Target:</strong> To be determined based on BSmart partnership commercialization terms</p>
                  <p className="text-xs"><strong>Timeline:</strong> Q1-Q4 2026 (subject to BSmart partnership activation)</p>
                </div>

                <div className="bg-gray-50 p-3 border border-gray-300">
                  <h5 className="font-bold text-sm mb-2">PROJECT 2: Fleet Management Expansion - Ultra Eureka Farm Limited</h5>
                  <p className="text-xs mb-1"><strong>Description:</strong> Transition from the successful POC (September 2025 - present) to a full commercial deployment with Ultra Eureka Farm Limited, including contract signing, expanded fleet deployment beyond the current 5 trucks, and fast-phase rollout of smart locks and comprehensive surveillance systems across all vehicles and operational facilities.</p>
                  <p className="text-xs mb-1"><strong>Strategic Objective:</strong> Work closely with Ultra Eureka Farm Limited to ensure exceptional customer satisfaction during the POC-to-commercial transition, building a reference case to secure additional Stabex Group contracts and third-party clients.</p>
                  <p className="text-xs mb-1"><strong>Project Components:</strong></p>
                  <ul className="list-disc ml-6 text-xs space-y-0.5">
                    <li>Contract finalization and signing with Ultra Eureka Farm Limited</li>
                    <li>Full fleet GPS tracking and fuel monitoring system deployment</li>
                    <li>Smart lock installation across expanded vehicle fleet</li>
                    <li>Surveillance camera systems for vehicles and farm facilities</li>
                    <li>Real-time monitoring dashboard and mobile application</li>
                    <li>24/7 technical support and system maintenance</li>
                    <li>Client acquisition and expansion to other Stabex Group entities</li>
                  </ul>
                  <p className="text-xs mt-1"><strong>Success Metrics:</strong> Contract signature by Q1 2026, client satisfaction score >90%, system uptime >98%, measurable reduction in fuel consumption and unauthorized usage, minimum 2 additional clients by Q4 2026</p>
                  <p className="text-xs"><strong>Revenue Potential:</strong> Medium to High (recurring monthly service fees from Ultra Eureka + new clients)</p>
                  <p className="text-xs"><strong>Timeline:</strong> Q1-Q2 2026 (contract and fast-phase rollout)</p>
                </div>

                <div className="bg-gray-50 p-3 border border-gray-300">
                  <h5 className="font-bold text-sm mb-2">PROJECT 3: Smart Gas Station Solutions (Compliance-Challenged)</h5>
                  <p className="text-xs mb-2"><strong>Project Scope:</strong> Comprehensive smart technology deployment across Stabex International gas stations, including Smart Depot automation, solar energy solutions, surveillance systems, POS systems, fuel monitoring, and inventory management - consolidated as one integrated project.</p>
                  <p className="text-xs mb-2"><strong>⚠️ CRITICAL COMPLIANCE LIMITATIONS:</strong></p>
                  <ul className="list-disc ml-6 text-xs space-y-0.5 mb-2">
                    <li><strong>EPRA Licensing:</strong> Energy & Petroleum Regulatory Authority site-specific approvals required for fuel sector technology deployment - application process lengthy (6-12 months typical processing time)</li>
                    <li><strong>Electrical Installation Standards:</strong> Solar energy components require certified electrical contractors and EPRA approval for grid-tied systems</li>
                    <li><strong>Data Protection Compliance:</strong> Surveillance and POS systems must comply with Data Protection Act - DPO appointment and registration required</li>
                    <li><strong>Fire Safety Certifications:</strong> Electronic systems in fuel dispensing areas require special fire safety certifications</li>
                  </ul>
                  <p className="text-xs mb-1"><strong>Mitigation Strategy:</strong></p>
                  <ul className="list-disc ml-6 text-xs space-y-0.5">
                    <li>Engage EPRA-approved consultants to expedite licensing process</li>
                    <li>Partner with certified electrical contractors for solar installations</li>
                    <li>Implement phased rollout starting with non-regulated components (surveillance, POS) while awaiting EPRA approvals</li>
                    <li>Allocate dedicated compliance budget for certifications and consultant fees</li>
                  </ul>
                  <p className="text-xs"><strong>Revenue Potential:</strong> High (subject to compliance clearance timeline)</p>
                  <p className="text-xs"><strong>Timeline:</strong> Q2-Q4 2026 (phased deployment based on licensing approvals)</p>
                </div>

                <div className="bg-gray-50 p-3 border border-gray-300">
                  <h5 className="font-bold text-sm mb-2">PROJECT 4: CDM (Cash Deposit Machines) Project (Compliance-Challenged)</h5>
                  <p className="text-xs mb-2"><strong>Description:</strong> Deployment and management of Cash Deposit Machines for retail and banking sector clients, providing automated cash handling and reconciliation solutions.</p>
                  <p className="text-xs mb-2"><strong>⚠️ CRITICAL COMPLIANCE LIMITATIONS:</strong></p>
                  <ul className="list-disc ml-6 text-xs space-y-0.5 mb-2">
                    <li><strong>PSRA Certification:</strong> Private Security Regulatory Authority certification required for personnel handling cash security systems - current personnel shortage</li>
                    <li><strong>Central Bank Approval:</strong> CBK approval may be required for machines interfacing with banking systems - regulatory consultation needed</li>
                    <li><strong>Insurance Requirements:</strong> Comprehensive insurance coverage for cash-in-transit and machine liability - capital intensive</li>
                    <li><strong>Vendor Certification:</strong> Machine manufacturers must meet CBK and banking sector technical standards - OEM partnership certification required</li>
                    <li><strong>Data Security Compliance:</strong> Payment Card Industry Data Security Standard (PCI DSS) compliance if handling card transactions</li>
                    <li><strong>Physical Security Standards:</strong> Installation sites must meet stringent security requirements - site assessment and upgrades costly</li>
                  </ul>
                  <p className="text-xs mb-1"><strong>Mitigation Strategy:</strong></p>
                  <ul className="list-disc ml-6 text-xs space-y-0.5">
                    <li>Recruit and sponsor personnel for PSRA certification training (budget allocation required)</li>
                    <li>Engage regulatory consultants for CBK approval pathway assessment</li>
                    <li>Negotiate equipment insurance and liability coverage with underwriters</li>
                    <li>Partner with CBK-approved CDM manufacturers for vendor certification</li>
                    <li>Consider consortium partnership with established security firms for initial deployments</li>
                    <li>Phase 1: Focus on retail clients with lower regulatory requirements while building compliance capacity</li>
                  </ul>
                  <p className="text-xs"><strong>Revenue Potential:</strong> Medium (dependent on compliance timeline and initial capital investment)</p>
                  <p className="text-xs"><strong>Timeline:</strong> Q3-Q4 2026 (subject to regulatory approvals and personnel certification)</p>
                </div>

                <div className="bg-gray-50 p-3 border border-gray-300">
                  <h5 className="font-bold text-sm mb-2">PROJECT 5: Kenya AI Power Project (International Partnership - Project Dependency)</h5>
                  <p className="text-xs mb-2"><strong>Project Dependency Status:</strong> This project is <u>entirely dependent on successful partnership execution with international AI and renewable energy technology providers</u>.</p>
                  <p className="text-xs mb-1"><strong>Description:</strong> AI-powered energy management and renewable energy solutions for commercial and industrial clients in Kenya, leveraging international technology partnerships for smart grid integration, predictive maintenance, and energy optimization.</p>
                  <p className="text-xs mb-1"><strong>Dependency Factors:</strong></p>
                  <ul className="list-disc ml-6 text-xs space-y-0.5">
                    <li>Technology transfer dependent on international partner's commitment and timeline</li>
                    <li>Regulatory approvals (EPRA, ERC) dependent on technology provider's certifications</li>
                    <li>Capital investment requirements subject to partner's minimum order quantities and financing terms</li>
                    <li>Technical training and support reliant on partner's resource availability</li>
                    <li>Market entry strategy contingent on partner's existing market presence and brand recognition</li>
                    <li>Project viability subject to partner's pricing structure and competitive positioning</li>
                  </ul>
                  <p className="text-xs mt-1"><strong>Current Status:</strong> Partnership identification and negotiation stage - MOU pending</p>
                  <p className="text-xs"><strong>Revenue Target:</strong> To be determined based on partnership commercialization terms and market entry strategy</p>
                  <p className="text-xs"><strong>Timeline:</strong> Q3-Q4 2026 (contingent on partnership execution by Q2 2026)</p>
                </div>

                <div className="bg-blue-50 p-3 border border-blue-300 mt-3">
                  <h5 className="font-bold text-sm mb-2">STRATEGIC INITIATIVE: Tender Compliance & Application Program</h5>
                  <p className="text-xs mb-1"><strong>Objective:</strong> Leverage 14+ completed prequalifications from 2024-2025 to aggressively pursue government and private sector tenders, converting registrations into awarded contracts.</p>
                  <p className="text-xs mb-1"><strong>Priority Focus Areas:</strong></p>
                  <ul className="list-disc ml-6 text-xs space-y-0.5">
                    <li><strong>Kenya Railways (SGR) Fuel Tender:</strong> Execute won tender contract for high-volume fuel supply</li>
                    <li><strong>County Governments:</strong> Submit proposals for fleet management, surveillance, and smart systems across prequalified counties (Elgeyo Marakwet, Uasin Gishu, Turkana)</li>
                    <li><strong>State Department of Petroleum:</strong> Apply for fuel monitoring and automation tenders using completed prequalifications</li>
                    <li><strong>KTDA & Agricultural Sector:</strong> Target smart irrigation, surveillance, and logistics tenders</li>
                    <li><strong>US Embassy/SAMGov:</strong> Pursue security and technology solution tenders through completed vendor registration</li>
                  </ul>
                  <p className="text-xs mt-1"><strong>Success Metric:</strong> Minimum 3 tender awards in 2026 from prequalified entities</p>
                  <p className="text-xs"><strong>Budget Requirement:</strong> Dedicated tender preparation, bid security, and compliance documentation budget</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Recommendations */}
        <div className="mb-6">
          <h2 className="font-bold text-base mb-3">4. Recommendations:</h2>
          <div className="ml-6">
            <p className="mb-3">
              The recommendation by Management is that the Board considers and subject to amendments or comments by the Board, to approve the Budget Proposals for FY 2026.
            </p>
            <p>
              Management further recommends to the Board to note the Management Accounts for the year ended 31st December 2025.
            </p>
          </div>
        </div>

        {/* Section 5: Issues */}
        <div className="mb-6">
          <h2 className="font-bold text-base mb-3">5. Issues:</h2>

          <div className="ml-6 space-y-4">
            <div>
              <h3 className="font-bold text-sm mb-2">5.1 Strategy Implications</h3>
              <div className="ml-4">
                <p className="mb-2 text-sm">
                  The proposed budget aligns with the company's strategic objectives to:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-sm">
                  <li>Position Union International Limited as a leading technology solutions provider in East Africa</li>
                  <li>Diversify revenue streams through new business lines (clearing & forwarding, fleet management)</li>
                  <li>Secure necessary certifications and licenses to compete for high-value government tenders</li>
                  <li>Invest in personnel development and certification to meet market requirements</li>
                  <li>Expand market presence to achieve countrywide operational capability</li>
                  <li>Leverage strategic partnerships (BSmart, China OEMs) for competitive advantage</li>
                  <li>Support Stabex Group operations through integrated technology solutions</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-2">5.2 Financial Implications</h3>
              <div className="ml-4 text-sm">
                <p className="mb-3 italic text-xs bg-yellow-50 p-2 border border-yellow-300">
                  <strong>Important Note:</strong> Union International Limited generated zero revenue during the 2024-2025 period as all activities were proof-of-concept initiatives, market validation exercises, and tender applications. The company operated as an investment phase focused on building capabilities, partnerships, and market access. The 2026 budget represents the transition from foundation-building to revenue generation.
                </p>

                <p className="mb-2"><strong>2026 Revenue Growth Projections (From Zero Base):</strong></p>
                <ul className="list-disc ml-6 mb-3 space-y-1">
                  <li><strong>Ultra Eureka Farm Fleet Management:</strong> Recurring monthly service fees from contract finalization and expanded fleet deployment and smart lock/surveillance rollout - High certainty (existing POC success, contract negotiation underway)</li>
                  <li><strong>Kenya Railways SGR Fuel Tender Execution:</strong> Won tender pending contract signature for high-volume fuel supply - Medium-High certainty (contract terms under negotiation)</li>
                  <li><strong>County Government Tenders:</strong> Leveraging 14+ completed prequalifications for fleet management and smart systems tenders - Medium certainty (competitive bidding environment)</li>
                  <li><strong>Smart Gas Station Solutions:</strong> Phased deployment for Stabex International network (surveillance, POS, fuel monitoring, solar) - Medium certainty (dependent on EPRA licensing timeline)</li>
                  <li><strong>Union BSmart Solutions:</strong> Cargo tracking and e-seal systems revenue sharing - Low-Medium certainty (partnership activation and commercialization terms pending)</li>
                  <li><strong>CDM Project:</strong> Cash deposit machine deployment and management fees - Low certainty (significant compliance barriers and capital requirements)</li>
                  <li><strong>Kenya AI Power Project:</strong> Energy management solutions - Low certainty (partnership negotiation stage)</li>
                  <li><strong>Clearing & Forwarding Operations:</strong> Logistics services for export-import clients - Medium certainty (KRA license application at 13%)</li>
                </ul>

                <p className="mb-2"><strong>Critical Capital Investment Requirements (2026 Budget Priority):</strong></p>
                <ul className="list-disc ml-6 mb-3 space-y-1">
                  <li><strong>Compliance & Certification Costs:</strong>
                    <ul className="list-circle ml-6 mt-1">
                      <li>EPRA site-specific license applications and consultant fees - estimated KES 1,200,000-2,000,000</li>
                      <li>CAK certification for cargo tracking and fleet systems - estimated KES 300,000-500,000</li>
                      <li>ICTA registration completion (currently 8%) - estimated KES 200,000-400,000</li>
                      <li>PSRA personnel certification for CDM project - estimated KES 150,000-250,000 per person</li>
                    </ul>
                  </li>
                  <li><strong>Equipment & Hardware Procurement:</strong>
                    <ul className="list-circle ml-6 mt-1">
                      <li>Fleet management devices (GPS, smart locks, fuel sensors) for Ultra Eureka expansion and new clients</li>
                      <li>Surveillance camera systems for gas station and facility deployments</li>
                      <li>POS systems and solar energy equipment for smart gas stations</li>
                      <li>CDM machines (lease or purchase depending on deployment model)</li>
                      <li>Demonstration equipment for tender presentations and client POCs</li>
                    </ul>
                  </li>
                  <li><strong>Technology Platform Investments:</strong>
                    <ul className="list-circle ml-6 mt-1">
                      <li>Monitoring and management software licenses</li>
                      <li>Cloud infrastructure for real-time tracking and analytics</li>
                      <li>Mobile application development for client dashboards</li>
                      <li>BSmart platform integration and API access fees</li>
                    </ul>
                  </li>
                  <li><strong>Personnel Development:</strong>
                    <ul className="list-circle ml-6 mt-1">
                      <li>Technical training for installation and maintenance teams</li>
                      <li>Professional certifications (PSRA, ICTA, technical certifications)</li>
                      <li>Project management capacity building</li>
                      <li>Sales and business development training</li>
                    </ul>
                  </li>
                </ul>

                <p className="mb-2"><strong>Working Capital Requirements:</strong></p>
                <ul className="list-disc ml-6 mb-3 space-y-1">
                  <li><strong>Tender Participation Costs:</strong>
                    <ul className="list-circle ml-6 mt-1">
                      <li>Bid security/tender guarantee deposits (typically 1-2% of tender value)</li>
                      <li>Tender document fees and professional tender preparation services</li>
                      <li>Technical proposal development and printing costs</li>
                      <li>Performance bond arrangements for awarded contracts</li>
                    </ul>
                  </li>
                  <li><strong>Project Mobilization:</strong>
                    <ul className="list-circle ml-6 mt-1">
                      <li>Initial equipment inventory for immediate deployment capability</li>
                      <li>Installation tools, vehicles, and field equipment</li>
                      <li>Project startup costs before client payment milestones</li>
                    </ul>
                  </li>
                  <li><strong>Operational Cash Flow:</strong>
                    <ul className="list-circle ml-6 mt-1">
                      <li>Staff salaries and benefits during revenue ramp-up period (Q1-Q2 2026)</li>
                      <li>Office rent, utilities, and administrative expenses</li>
                      <li>Marketing materials, website maintenance, and business development costs</li>
                      <li>Insurance premiums (professional indemnity, equipment, liability)</li>
                    </ul>
                  </li>
                </ul>

                <p className="mb-2 text-xs bg-blue-50 p-2 border border-blue-300">
                  <strong>Budget Philosophy:</strong> The 2026 budget adopts a conservative revenue projection approach while ensuring adequate capital allocation for compliance, certifications, and strategic investments that unlock high-value tender opportunities. The budget prioritizes:
                  (1) Completion of ongoing compliance requirements (EPRA, CAK, ICTA)
                  (2) Successful contract finalization and delivery of Ultra Eureka Fleet Management expansion to establish a reference case
                  (3) SGR fuel tender contract execution
                  (4) Strategic positioning for high-value 2027 opportunities through certifications and track record development
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-2">5.3 Risk Analysis</h3>
              <div className="ml-4">
                <table className="w-full border-collapse border border-gray-400 text-xs">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-400 px-2 py-1 text-left font-bold">Risk Category</th>
                      <th className="border border-gray-400 px-2 py-1 text-left font-bold">Description</th>
                      <th className="border border-gray-400 px-2 py-1 text-left font-bold">Mitigation Strategy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-2 py-1">Regulatory & Compliance</td>
                      <td className="border border-gray-400 px-2 py-1">Missing critical certifications (CAK, EPRA, ICTA) limiting tender participation</td>
                      <td className="border border-gray-400 px-2 py-1">Budget allocation for certification acquisition; engage consultants for expedited processing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 py-1">Market Competition</td>
                      <td className="border border-gray-400 px-2 py-1">Established competitors with proven track records and certifications</td>
                      <td className="border border-gray-400 px-2 py-1">Focus on niche markets; leverage strategic partnerships; build reference portfolio</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 py-1">Financial</td>
                      <td className="border border-gray-400 px-2 py-1">Working capital constraints affecting tender participation and project execution</td>
                      <td className="border border-gray-400 px-2 py-1">Phased implementation; explore credit facilities; prioritize high-value opportunities</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 py-1">Human Resources</td>
                      <td className="border border-gray-400 px-2 py-1">Shortage of certified personnel for specialized projects</td>
                      <td className="border border-gray-400 px-2 py-1">Training and certification programs; strategic recruitment; consortium partnerships</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 py-1">Operational</td>
                      <td className="border border-gray-400 px-2 py-1">Limited countrywide infrastructure and presence</td>
                      <td className="border border-gray-400 px-2 py-1">Regional office establishment; partnership with local agents; phased expansion</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 py-1">Technology</td>
                      <td className="border border-gray-400 px-2 py-1">Rapid technological changes and need for continuous innovation</td>
                      <td className="border border-gray-400 px-2 py-1">Strategic partnerships with OEMs; continuous market intelligence; R&D investment</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 py-1">Project Delivery</td>
                      <td className="border border-gray-400 px-2 py-1">Risk of project delays due to regulatory approvals and client dependencies</td>
                      <td className="border border-gray-400 px-2 py-1">Proactive stakeholder engagement; realistic timelines; contingency planning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-2">5.4 Legal and Compliance</h3>
              <div className="ml-4">
                <p className="mb-2 text-sm"><strong>Budget Preparation Compliance:</strong></p>
                <ul className="list-disc ml-6 mb-3 space-y-1 text-sm">
                  <li>The proposed budget has been prepared in compliance with the Finance Act 2025</li>
                  <li>Adherence to International Financial Reporting Standards (IFRS)</li>
                  <li>Compliance with the Company's Finance and Accounting Policy</li>
                  <li>Alignment with Companies Act (Cap 486) requirements</li>
                </ul>

                <p className="mb-2 text-sm"><strong>Regulatory Requirements for Operations:</strong></p>
                <ul className="list-disc ml-6 mb-3 space-y-1 text-sm">
                  <li><strong>CAK Certification:</strong> Required for cargo tracking and fleet management systems - application in progress</li>
                  <li><strong>EPRA Licenses:</strong> Necessary for fuel sector projects - site-specific approvals required</li>
                  <li><strong>ICTA Registration:</strong> Mandatory for ICT sector tenders - application at 8% completion</li>
                  <li><strong>KRA Clearing License:</strong> Essential for clearing & forwarding operations - application at 13% completion</li>
                  <li><strong>KIFWA Membership:</strong> Completed - enables clearing agent operations</li>
                </ul>

                <p className="mb-2 text-sm"><strong>Contractual Obligations:</strong></p>
                <ul className="list-disc ml-6 space-y-1 text-sm">
                  <li>BSmart MOU obligations for technology collaboration</li>
                  <li>OEM partnership agreements and distribution commitments</li>
                  <li>Service level agreements with Ultra Eureka Farm Limited and other clients</li>
                  <li>Tender performance security and compliance requirements</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-2">5.5 Other Issues</h3>
              <div className="ml-4">
                <p className="mb-2 text-sm"><strong>Capacity Building Requirements:</strong></p>
                <ul className="list-disc ml-6 mb-3 space-y-1 text-sm">
                  <li>Investment in personnel training and professional certifications (PSRA, ICTA, technical certifications)</li>
                  <li>Development of project management capabilities for large-scale deployments</li>
                  <li>Enhancement of technical competencies in emerging technologies (IoT, AI, smart systems)</li>
                </ul>

                <p className="mb-2 text-sm"><strong>Infrastructure Development:</strong></p>
                <ul className="list-disc ml-6 mb-3 space-y-1 text-sm">
                  <li>Establishment of regional offices or representative centers to meet countrywide presence requirements</li>
                  <li>Warehousing and logistics infrastructure for clearing & forwarding operations</li>
                  <li>Technology infrastructure (servers, monitoring systems, software platforms)</li>
                </ul>

                <p className="mb-2 text-sm"><strong>Stakeholder Coordination:</strong></p>
                <ul className="list-disc ml-6 mb-3 space-y-1 text-sm">
                  <li>Integration with Stabex Group IT and operational systems</li>
                  <li>Coordination with affiliate companies (Ultra Eureka Farm, Eureka Security Services)</li>
                  <li>Partnership management with BSmart, OEMs, and technology providers</li>
                </ul>

                <p className="mb-2 text-sm"><strong>Market Development:</strong></p>
                <ul className="list-disc ml-6 space-y-1 text-sm">
                  <li>Aggressive marketing and business development to leverage completed prequalifications</li>
                  <li>Building reference portfolio through successful project delivery</li>
                  <li>Exploration of regional markets (Uganda, Tanzania) for expansion opportunities</li>
                  <li>Development of sector-specific solutions for government and corporate clients</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Preparation and Approval */}
        <div className="mb-8">
          <h2 className="font-bold text-base mb-4">6. Preparation and Approval of Board Paper:</h2>
          <div className="ml-6">
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="w-1/3 py-8 align-bottom border-b border-gray-400">
                    <div>
                      <p className="font-bold">Prepared by:</p>
                      <p className="mt-8">[Signature]</p>
                      <p className="mt-2">Finance Manager</p>
                      <p>Union International Limited</p>
                      <p className="mt-2">Date: 21st January 2026</p>
                    </div>
                  </td>
                  <td className="w-1/3 py-8 align-bottom border-b border-gray-400 px-4">
                    <div>
                      <p className="font-bold">Reviewed by:</p>
                      <p className="mt-8">[Signature]</p>
                      <p className="mt-2">General Manager</p>
                      <p>Union International Limited</p>
                      <p className="mt-2">Date: 21st January 2026</p>
                    </div>
                  </td>
                  <td className="w-1/3 py-8 align-bottom border-b border-gray-400">
                    <div>
                      <p className="font-bold">Approved for Circulation by:</p>
                      <p className="mt-8">[Signature]</p>
                      <p className="mt-2">Executive Director</p>
                      <p>Stabex International Limited</p>
                      <p className="mt-2">Date: 21st January 2026</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 7: Annexures */}
        <div className="mb-6">
          <h2 className="font-bold text-base mb-3">7. Annexures:</h2>
          <div className="ml-6">
            <ol className="list-[lower-alpha] ml-6 space-y-1 text-sm">
              <li>Annexure I - Key Budget Assumptions</li>
              <li>Annexure II - Profit and Loss Statement (Budget vs Actual)</li>
              <li>Annexure III - Capital Expenditure Plan 2026</li>
              <li>Annexure IV - Projected Balance Sheet</li>
              <li>Annexure V - Cashflow Statement and Projections</li>
              <li>Annexure VI - Management Accounts Q4 2025</li>
              <li>Annexure VII - Activities Register and Status Report 2024-2025</li>
              <li>Annexure VIII - Risk Assessment Matrix</li>
              <li>Annexure IX - Certification and Licensing Roadmap</li>
              <li>Annexure X - Operational Challenges and Mitigation Plans</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-4 border-t border-gray-400 text-xs text-gray-600">
          <p>Union International Limited - Board Paper UIL/3/02/2026</p>
          <p>Page 1 of 1</p>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 1.5cm;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .page-break-after {
            page-break-after: always;
          }
          
          * {
            break-inside: avoid;
          }
          
          h2, h3 {
            page-break-after: avoid;
          }
          
          table {
            page-break-inside: auto;
          }
          
          tr {
            page-break-inside: avoid;
            page-break-after: auto;
          }
        }
      `}</style>
    </div>
  );
}
