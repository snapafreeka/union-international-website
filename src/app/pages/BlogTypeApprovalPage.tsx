import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Shield,
  CheckCircle2,
  FileCheck,
  Award,
  ChevronDown,
  ChevronRight,
  Clock,
  Users,
  Target,
  TrendingUp,
  Lightbulb,
  AlertCircle,
  BookOpen,
  Briefcase,
  FileText,
  Phone,
  Mail,
  ArrowRight,
  Check,
  X,
  HelpCircle,
} from 'lucide-react';
import { trackButtonClick } from '@/app/components/Analytics';

export function BlogTypeApprovalPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<'type-approval' | 'compliance' | 'bids'>('type-approval');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [checklist, setChecklist] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  });

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const toggleChecklistItem = (item: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const completedItems = Object.values(checklist).filter(Boolean).length;
  const totalItems = Object.keys(checklist).length;
  const progressPercentage = (completedItems / totalItems) * 100;

  const faqs = [
    {
      question: 'What is Type Approval and why is it important?',
      answer: 'Type Approval is a regulatory certification process that ensures telecommunications and ICT equipment meets national technical standards and specifications. It\'s mandatory in Kenya for all electronic communication devices before they can be imported, sold, or used. Without Type Approval, your equipment cannot legally operate in the country.',
    },
    {
      question: 'How long does the Type Approval process take?',
      answer: 'The standard Type Approval process typically takes 4-8 weeks from application submission to approval, depending on the complexity of the equipment and completeness of documentation. Union International\'s expertise can help expedite this process by ensuring all documentation is correct from the start.',
    },
    {
      question: 'What documents are required for Type Approval?',
      answer: 'Required documents include: Equipment technical specifications, Test reports from accredited laboratories, User manuals, Declaration of Conformity, Company registration documents, and Import documentation. Our team handles all documentation requirements end-to-end.',
    },
    {
      question: 'Do I need Type Approval for imported ICT equipment?',
      answer: 'Yes, absolutely. All telecommunications and ICT equipment imported into Kenya must have Type Approval from the Communications Authority of Kenya (CA) before customs clearance. As Licensed Customs Agent #1, we ensure your equipment has proper Type Approval before processing customs clearance.',
    },
    {
      question: 'What happens if equipment fails Type Approval?',
      answer: 'If equipment fails, the CA provides detailed feedback on non-compliance areas. Our technical team analyzes the failure points, works with manufacturers on remediation, and manages the re-submission process. We minimize delays and ensure compliance on subsequent attempts.',
    },
    {
      question: 'Can Union International help with bid preparation?',
      answer: 'Yes! Our Bids Consultancy service provides end-to-end support including: tender document analysis, compliance matrix preparation, technical proposal writing, financial modeling, and submission management. We\'ve helped clients win major government and private sector contracts.',
    },
  ];

  const complianceServices = [
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Full compliance management for KRA, CA, NEMA, KEBS, and other regulatory bodies.',
      benefits: ['Avoid penalties', 'Maintain licenses', 'Stay audit-ready'],
    },
    {
      icon: FileCheck,
      title: 'Type Approval Services',
      description: 'End-to-end Type Approval for telecommunications and ICT equipment.',
      benefits: ['Fast processing', 'Expert guidance', '99% success rate'],
    },
    {
      icon: Briefcase,
      title: 'Bids & Tenders',
      description: 'Professional bid preparation and consultancy for government and private tenders.',
      benefits: ['Win more contracts', 'Professional proposals', 'Compliance assurance'],
    },
    {
      icon: Award,
      title: 'License Applications',
      description: 'Assistance with business licenses, permits, and regulatory certifications.',
      benefits: ['Quick approvals', 'Complete documentation', 'Follow-up support'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMCAwIDEwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-6">
              <BookOpen size={20} />
              <span className="text-sm font-semibold">Expert Guide</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Type Approval License & Compliance Made Simple
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Your complete guide to navigating Type Approval, regulatory compliance, and winning bids in Kenya
            </p>

            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                <Clock size={18} />
                <span>12 min read</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                <Users size={18} />
                <span>Updated April 2026</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                <Award size={18} />
                <span>Expert Insights</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Tab Navigation */}
      <section className="py-12 bg-white sticky top-0 z-30 shadow-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedTab('type-approval')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedTab === 'type-approval'
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FileCheck className="inline-block mr-2" size={20} />
              Type Approval
            </button>
            <button
              onClick={() => setSelectedTab('compliance')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedTab === 'compliance'
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Shield className="inline-block mr-2" size={20} />
              Compliance
            </button>
            <button
              onClick={() => setSelectedTab('bids')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedTab === 'bids'
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Briefcase className="inline-block mr-2" size={20} />
              Bids Consultancy
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <AnimatePresence mode="wait">
            {selectedTab === 'type-approval' && (
              <motion.div
                key="type-approval"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="prose max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Type Approval in Kenya</h2>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">What is Type Approval?</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Type Approval is a mandatory certification issued by the Communications Authority of Kenya (CA) that verifies telecommunications and ICT equipment meets national technical standards, safety requirements, and electromagnetic compatibility specifications before being deployed in Kenya.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Type Approval Matters</h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {[
                      {
                        icon: Shield,
                        title: 'Legal Compliance',
                        description: 'Mandatory requirement under Kenya Information and Communications Act',
                      },
                      {
                        icon: Check,
                        title: 'Customs Clearance',
                        description: 'Required before KRA releases imported equipment',
                      },
                      {
                        icon: Award,
                        title: 'Market Access',
                        description: 'Enables legal sale and deployment in Kenyan market',
                      },
                      {
                        icon: Users,
                        title: 'Consumer Protection',
                        description: 'Ensures equipment safety and quality standards',
                      },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                        >
                          <Icon className="text-blue-600 mb-3" size={32} />
                          <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Interactive Process Timeline */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Type Approval Process</h3>

                  <div className="space-y-4 mb-12">
                    {[
                      {
                        step: 1,
                        title: 'Document Preparation',
                        description: 'Compile technical specs, test reports, and compliance documents',
                        duration: '3-5 days',
                      },
                      {
                        step: 2,
                        title: 'Application Submission',
                        description: 'Submit complete application to Communications Authority',
                        duration: '1-2 days',
                      },
                      {
                        step: 3,
                        title: 'Technical Evaluation',
                        description: 'CA reviews documentation and conducts technical assessment',
                        duration: '2-4 weeks',
                      },
                      {
                        step: 4,
                        title: 'Testing & Verification',
                        description: 'Equipment testing at approved laboratories (if required)',
                        duration: '1-2 weeks',
                      },
                      {
                        step: 5,
                        title: 'Approval & Certification',
                        description: 'Type Approval certificate issued upon successful completion',
                        duration: '1-3 days',
                      },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => toggleSection(`step-${idx}`)}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 cursor-pointer hover:border-blue-400 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4 flex-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                              {item.step}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                              <div className="flex items-center space-x-2 text-sm text-blue-600">
                                <Clock size={16} />
                                <span>{item.duration}</span>
                              </div>
                            </div>
                          </div>
                          <ChevronDown
                            className={`text-gray-400 transition-transform ${
                              activeSection === `step-${idx}` ? 'rotate-180' : ''
                            }`}
                            size={24}
                          />
                        </div>

                        <AnimatePresence>
                          {activeSection === `step-${idx}` && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mt-4 pt-4 border-t border-gray-200"
                            >
                              <p className="text-gray-700 text-sm leading-relaxed">
                                <strong>Union International Support:</strong> Our expert team handles this step completely, ensuring all requirements are met and documentation is perfect. We leverage our experience as Licensed Customs Agent #1 to expedite the process.
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>

                  {/* Interactive Checklist */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Type Approval Readiness Checklist</h3>

                  <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 mb-12">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">Progress</span>
                        <span className="text-sm font-semibold text-blue-600">
                          {completedItems} of {totalItems} completed
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progressPercentage}%` }}
                          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        { key: 'item1', label: 'Equipment technical specifications and data sheets' },
                        { key: 'item2', label: 'Test reports from accredited laboratories' },
                        { key: 'item3', label: 'User manuals and installation guides' },
                        { key: 'item4', label: 'Declaration of Conformity and certificates' },
                        { key: 'item5', label: 'Company registration and import documentation' },
                      ].map((item) => (
                        <label
                          key={item.key}
                          className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={checklist[item.key as keyof typeof checklist]}
                            onChange={() => toggleChecklistItem(item.key as keyof typeof checklist)}
                            className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                          />
                          <span
                            className={`flex-1 ${
                              checklist[item.key as keyof typeof checklist]
                                ? 'text-gray-500 line-through'
                                : 'text-gray-900'
                            }`}
                          >
                            {item.label}
                          </span>
                          {checklist[item.key as keyof typeof checklist] && (
                            <CheckCircle2 className="text-green-600" size={20} />
                          )}
                        </label>
                      ))}
                    </div>

                    {completedItems === totalItems && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="text-green-600" size={24} />
                          <div>
                            <p className="font-semibold text-green-900">You're ready to apply!</p>
                            <p className="text-sm text-green-700">Contact us to start your Type Approval process.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {selectedTab === 'compliance' && (
              <motion.div
                key="compliance"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Compliance Services Excellence</h2>

                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                  As Licensed Customs Agent #1 with over 13 years of experience, Union International provides comprehensive compliance services ensuring your business meets all regulatory requirements while avoiding costly penalties and delays.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {complianceServices.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                          <Icon className="text-white" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        <div className="space-y-2">
                          {service.benefits.map((benefit, bidx) => (
                            <div key={bidx} className="flex items-center space-x-2">
                              <CheckCircle2 className="text-green-600 flex-shrink-0" size={18} />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 text-white mb-12">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Union International for Compliance?</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { icon: Award, label: 'Licensed Customs Agent #1', value: 'Official License' },
                      { icon: TrendingUp, label: 'Success Rate', value: '99%+' },
                      { icon: Clock, label: 'Years of Experience', value: '13+' },
                    ].map((stat, idx) => {
                      const Icon = stat.icon;
                      return (
                        <div key={idx} className="text-center">
                          <Icon className="mx-auto mb-3 text-blue-200" size={40} />
                          <div className="text-3xl font-bold mb-1">{stat.value}</div>
                          <div className="text-blue-200 text-sm">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {selectedTab === 'bids' && (
              <motion.div
                key="bids"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Bids & Tenders Consultancy</h2>

                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                  Win more contracts with our expert bid preparation services. We provide end-to-end support from tender analysis to submission, ensuring your proposals are competitive, compliant, and compelling.
                </p>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white mb-12">
                  <h3 className="text-2xl font-bold mb-6">Our Bid Consultancy Process</h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    {[
                      { step: '01', title: 'Analysis', desc: 'Tender document review and requirements analysis' },
                      { step: '02', title: 'Strategy', desc: 'Competitive positioning and win strategy development' },
                      { step: '03', title: 'Preparation', desc: 'Technical and financial proposal writing' },
                      { step: '04', title: 'Submission', desc: 'Quality assurance and timely submission' },
                    ].map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-5xl font-bold text-white/20 mb-2">{item.step}</div>
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-sm text-blue-100">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Deliver</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {[
                    {
                      title: 'Technical Proposals',
                      items: ['Methodology and approach', 'Technical specifications', 'Implementation plans', 'Quality assurance frameworks'],
                    },
                    {
                      title: 'Financial Proposals',
                      items: ['Competitive pricing models', 'Cost breakdowns', 'Value-for-money analysis', 'Payment schedules'],
                    },
                    {
                      title: 'Compliance Documentation',
                      items: ['Eligibility criteria verification', 'Mandatory requirements checklist', 'Legal and tax compliance', 'Certification and licenses'],
                    },
                    {
                      title: 'Bid Management',
                      items: ['Timeline management', 'Team coordination', 'Document version control', 'Submission logistics'],
                    },
                  ].map((section, idx) => (
                    <div key={idx} className="bg-white rounded-xl border-2 border-gray-200 p-6">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                        <FileText className="text-purple-600" size={24} />
                        <span>{section.title}</span>
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, iidx) => (
                          <li key={iidx} className="flex items-start space-x-2">
                            <Check className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <Lightbulb className="text-amber-600 flex-shrink-0" size={32} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Success Story</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        "Union International's bid consultancy helped us win a KES 45M government tender for electronic cargo tracking systems. Their attention to detail and compliance expertise made the difference."
                      </p>
                      <p className="text-sm text-gray-600 font-semibold">— Logistics Company, Nairobi</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <HelpCircle className="mx-auto mb-4 text-blue-600" size={48} />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about Type Approval and Compliance</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`text-gray-400 flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>

                <AnimatePresence>
                  {expandedFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-200 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Target className="mx-auto mb-6" size={56} />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let Union International handle your Type Approval, Compliance, and Bid Consultancy needs. Contact us today for expert guidance.
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-10">
              <Link
                to="/contact"
                onClick={() => trackButtonClick('Get Started - Type Approval Blog', '/contact')}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                <Phone size={24} />
                <span>Get Started</span>
                <ArrowRight size={24} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                <span>View All Services</span>
                <ArrowRight size={24} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href="https://wa.me/254769021111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 hover:bg-white/20 transition-all"
              >
                <Phone className="text-white" size={20} />
                <span className="text-white text-sm">0769021111</span>
              </a>
              <a
                href="mailto:info@unioninternational.co.ke"
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 hover:bg-white/20 transition-all"
              >
                <Mail className="text-white" size={20} />
                <span className="text-white text-sm">info@unioninternational.co.ke</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
