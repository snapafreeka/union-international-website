import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import {
  FileCheck,
  MapPin,
  Truck,
  Settings,
  Shield,
  CheckCircle,
  Package,
  Lock,
  Database,
  Clock,
  Award,
  Zap,
  Briefcase
} from 'lucide-react';
import serviceImage1 from '@/imports/image-23.png';
import serviceImage2 from '@/imports/image-33.png'; // Electronic Sealing System
import serviceImage3 from '@/imports/image-35.png'; // Driver Safety/Fleet Management
import serviceImage4 from '@/imports/image-26.png';
import serviceImage5 from '@/imports/image-25.png';

export function ServicesPage() {
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const mainServices = [
    {
      icon: Package,
      title: 'Imports & Exports Services',
      description: 'As licensed Customs Agents (License #1), we provide comprehensive import and export services including customs clearance, documentation, compliance, and trade facilitation across all borders.',
      image: serviceImage1,
      gradient: 'from-blue-600 to-blue-800',
      features: [
        'Customs Clearance & Brokerage',
        'Import/Export Documentation',
        'Tariff Classification & Valuation',
        'Trade Compliance Consulting',
        'Transit Bond Management',
        'Duty Drawback Services',
        'Origin Certification',
        'Cross-Border Trade Facilitation'
      ]
    },
    {
      icon: Shield,
      title: 'Electronic Sealing Solutions',
      description: 'Advanced electronic sealing solutions that safeguard cargo integrity, ensuring that goods remain secure throughout their journey with tamper detection and real-time monitoring capabilities.',
      image: serviceImage2,
      gradient: 'from-indigo-600 to-indigo-800',
      features: [
        'Real-time GPS Tracking',
        'Tamper Detection & Alerts',
        'Secure Cargo Protection',
        'Route Monitoring',
        'Compliance Reporting',
        'Electronic Fuel Seals',
        'Dry Cargo eSeal Solutions',
        'KRA Multi-Vendor E-Seals (Under Review)'
      ]
    },
    {
      icon: Truck,
      title: 'Electronic Cargo Tracking & Fleet Management',
      description: 'In partnership with Kunlun Digital, we offer cutting-edge Electronic Cargo Tracking System (ECTS) and comprehensive Fleet Management solutions for real-time visibility and operational efficiency.',
      image: serviceImage3,
      gradient: 'from-purple-600 to-purple-800',
      features: [
        'Real-time Vehicle Tracking',
        'Route Optimization & Planning',
        'Driver Behavior Monitoring',
        'Fuel Management & Analytics',
        'Maintenance Scheduling',
        'Cargo Status Updates',
        'Geofencing & Alerts',
        'Powered by Kunlun Digital Technology'
      ]
    },
    {
      icon: Settings,
      title: 'Managed Services',
      description: 'Our Managed Services are designed to optimize performance for your business operations. We provide continuous improvement, ensuring smooth and successful transition to cloud operations.',
      image: serviceImage4,
      gradient: 'from-violet-600 to-violet-800',
      features: [
        '24/7 Infrastructure Monitoring',
        'Proactive Support & Maintenance',
        'Performance Optimization',
        'Issue Resolution',
        'System Health Monitoring',
        'Capacity Planning',
        'Continuous Improvement',
        'Managed Cloud Services'
      ]
    },
    {
      icon: Database,
      title: 'System Integration Services',
      description: 'Our System Integration services facilitate seamless communication between various technologies, delivering scalable, integrated solutions that enhance overall business efficiency.',
      image: serviceImage5,
      gradient: 'from-emerald-600 to-emerald-800',
      features: [
        'API Integration',
        'Data Synchronization',
        'Legacy System Integration',
        'Platform Connectivity',
        'Custom Integration Development',
        'Real-time Data Exchange',
        'Middleware Solutions',
        'Enterprise Application Integration'
      ]
    },
    {
      icon: Briefcase,
      title: 'Compliance & Bids Consultancy',
      description: 'Expert compliance management and professional bid preparation services. We ensure your business meets all regulatory requirements while helping you win government and private sector contracts.',
      image: serviceImage1,
      gradient: 'from-amber-600 to-amber-800',
      features: [
        'Type Approval Services (CA Kenya)',
        'Regulatory Compliance Management',
        'KRA, NEMA, KEBS Compliance',
        'Professional Bid Preparation',
        'Tender Document Analysis',
        'Technical & Financial Proposals',
        'Compliance Matrix Development',
        'License & Permit Applications'
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced electronic sealing with tamper detection and GPS tracking for complete cargo protection'
    },
    {
      icon: Database,
      title: 'Technology Excellence',
      description: 'Comprehensive infrastructure leveraging cutting-edge frontend, backend, and cloud technologies'
    },
    {
      icon: Lock,
      title: 'Reliability & Compliance',
      description: 'Industry-standard compliance with robust system integration and quality assurance'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Continuous monitoring and proactive management ensuring optimal performance'
    },
    {
      icon: Award,
      title: 'Strategic Partnerships',
      description: 'Collaboration with BSMART Technology and other industry leaders for advanced solutions'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Commitment to continuous improvement and adoption of latest technologies'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6">
              <span className="text-blue-200 text-sm font-medium">Comprehensive Solutions for Modern Business Needs</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Tailored Solutions for a Secure Future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Core Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert solutions designed to meet the highest standards of regulatory compliance and operational excellence
            </p>
          </motion.div>

          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                      <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-xl`}>
                        <Icon className="text-white" size={32} />
                      </div>
                    </div>
                  </div>

                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${service.gradient} text-white rounded-full mb-4 text-sm font-semibold`}>
                      Core Service
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-2">
                          <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              The Union International Advantage
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              What sets us apart in security and technology innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-blue-200 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact our team today to discuss your security, technology, and managed services needs
              </p>
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Request a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
