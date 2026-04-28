import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Truck,
  Cpu,
  Droplet,
  Cloud,
  CheckCircle2,
  Award,
  Users,
  Lock,
  Zap,
  Globe,
  PackageCheck,
  Settings,
  Database,
  MapPin,
  TrendingUp,
  FileCheck,
  Gauge,
  Building2,
  BarChart3,
  Package,
  Phone,
  Mail,
  Star,
  Target,
  Rocket,
  Lightbulb,
  Send
} from 'lucide-react';
import { HeroCarousel } from '@/app/components/HeroCarousel';
import { trackPhoneClick, trackEmailClick, trackButtonClick } from '@/app/components/Analytics';
import partnershipImage from '@/imports/image-25.png';
import kunlunImage from '@/imports/image-26.png';

export function HomePage() {
  const [coreAreasRef, coreAreasInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [techRef, techInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const coreBusinessAreas = [
    {
      icon: Package,
      title: 'Imports & Exports',
      description: 'Licensed Customs Agent #1 providing comprehensive customs clearance, documentation, trade compliance, and facilitation services. Holding General Bond for Security of Warehoused Goods (2024-2026).',
      gradient: 'from-blue-600 to-indigo-600',
      features: ['Customs Clearance', 'Import/Export Documentation', 'Trade Compliance', 'Transit Bond Management']
    },
    {
      icon: Truck,
      title: 'Supply Chain & Logistics',
      description: 'Electronic sealing solutions, cargo tracking, inventory management, and warehouse operations with nationwide deployment.',
      gradient: 'from-cyan-600 to-blue-600',
      features: ['Electronic Seals', 'Cargo Tracking', 'Inventory Management', 'Warehouse Solutions']
    },
    {
      icon: Droplet,
      title: 'Energy & Petroleum',
      description: 'Smart energy solutions, fuel monitoring systems, and strategic positioning across East Africa.',
      gradient: 'from-orange-600 to-red-600',
      features: ['Fuel Monitoring', 'Energy Infrastructure', 'Smart Metering', 'Geographic Coverage']
    },
    {
      icon: Cpu,
      title: 'ICT & Digital Solutions',
      description: 'Systems integration, cloud platforms, infrastructure automation, and comprehensive IT solutions.',
      gradient: 'from-purple-600 to-fuchsia-600',
      features: ['Cloud Platforms', 'System Integration', 'DevOps', 'Backend Technologies']
    },
    {
      icon: Shield,
      title: 'QHSE & Compliance',
      description: 'Quality, Health, Safety, and Environment management with advanced monitoring and compliance systems.',
      gradient: 'from-emerald-600 to-teal-600',
      features: ['Quality Assurance', 'Safety Monitoring', 'Environmental Compliance', 'Risk Management']
    },
    {
      icon: Settings,
      title: 'Managed Services',
      description: '24/7 infrastructure monitoring, proactive support, and optimal performance management for business operations.',
      gradient: 'from-cyan-600 to-blue-600',
      features: ['24/7 Monitoring', 'Proactive Support', 'Performance Optimization', 'Continuous Improvement']
    },
    {
      icon: Lock,
      title: 'Enhanced Security Solutions',
      description: 'Advanced electronic sealing with tamper detection, GPS tracking, and real-time monitoring capabilities.',
      gradient: 'from-violet-600 to-purple-600',
      features: ['Tamper Detection', 'GPS Tracking', 'Real-time Alerts', 'Secure Operations']
    },
  ];

  const achievements = [
    { icon: Award, label: 'Licensed Customs Agent', count: 'License #1' },
    { icon: CheckCircle2, label: 'KRA Multi-Vendor E-Seals', count: 'Under Review' },
    { icon: Shield, label: 'General Bond 2024-2026', count: 'Warehoused Goods' },
    { icon: Globe, label: 'Established 2013', count: '13+ Years Excellence' },
  ];

  const testimonials = [
    {
      quote: 'Union International has transformed our cargo tracking operations with their advanced eSeal solutions. The real-time monitoring and compliance features are exceptional.',
      author: 'Import/Export Operations Manager',
      company: 'Major Logistics Provider',
      rating: 5,
    },
    {
      quote: 'Their comprehensive ICT solutions and 24/7 managed services have significantly improved our infrastructure reliability and performance.',
      author: 'IT Director',
      company: 'Regional Enterprise',
      rating: 5,
    },
    {
      quote: 'The professionalism and technical expertise demonstrated by Union International is world-class. They deliver on their promises consistently.',
      author: 'Operations Director',
      company: 'Energy Sector Company',
      rating: 5,
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Core Business Areas */}
      <section ref={coreAreasRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={coreAreasInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-700 font-semibold text-sm">Our Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Core Business Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              World-class solutions across multiple sectors, delivering excellence and innovation at every touchpoint
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreBusinessAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={coreAreasInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${area.gradient} opacity-5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700`}></div>

                  <div className={`w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>

                  <div className="space-y-2">
                    {area.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle2 className={`flex-shrink-0 bg-gradient-to-br ${area.gradient} bg-clip-text text-transparent`} size={18} />
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/services"
                    className="inline-flex items-center space-x-2 mt-6 text-blue-600 font-semibold hover:space-x-3 transition-all group-hover:text-blue-700"
                  >
                    <span>Explore Services</span>
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMCAwIDEwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Achievements & Milestones
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Pioneering excellence in security and technology innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all hover:scale-105"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{achievement.count}</div>
                  <h3 className="text-white font-semibold">{achievement.label}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-amber-100 rounded-full mb-4">
              <span className="text-amber-700 font-semibold text-sm">Client Success</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by industry leaders across multiple sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
              >
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-blue-200 pt-4">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section ref={techRef} className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-purple-100 rounded-full mb-4">
              <span className="text-purple-700 font-semibold text-sm">Technology Excellence</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade infrastructure powering innovation across all sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'Frontend Technologies',
                items: ['React', 'Angular', 'Vue.js', 'TypeScript'],
                gradient: 'from-blue-600 to-cyan-600',
              },
              {
                category: 'Backend Technologies',
                items: ['Node.js', 'Python', 'Java', 'Go'],
                gradient: 'from-purple-600 to-pink-600',
              },
              {
                category: 'Cloud Platforms',
                items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'],
                gradient: 'from-orange-600 to-red-600',
              },
              {
                category: 'Infrastructure & DevOps',
                items: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
                gradient: 'from-emerald-600 to-teal-600',
              },
            ].map((tech, idx) => (
              <motion.div
                key={tech.category}
                initial={{ scale: 0, opacity: 0 }}
                animate={techInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: idx * 0.1, type: 'spring' }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <Cpu className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-center space-x-2">
                      <CheckCircle2 size={16} className="text-gray-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section - BSMART */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={partnershipImage}
                  alt="BSMART Electronic Seal Technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block px-6 py-2 bg-indigo-100 rounded-full mb-6">
                <span className="text-indigo-700 font-semibold text-sm">Strategic Partnership</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Technology Partnership with BSMART
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Union International Limited has formed a strategic partnership with BSMART Technology to deliver advanced eSeal solutions across Kenya, specializing in trade facilitation development projects.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Advanced IoT Solutions',
                  'Cross-Border Trade Facilitation',
                  'Drone Technology Integration',
                  'Regional Standards Compliance',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-indigo-600 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all"
              >
                <span>Learn About Our Partnerships</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kunlun Digital Partnership Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={kunlunImage}
                  alt="Kunlun Digital Partnership Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block px-6 py-2 bg-purple-100 rounded-full mb-6">
                <span className="text-purple-700 font-semibold text-sm">Technology Partnership</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Partnership with Kunlun Digital
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Union International Limited has partnered with Kunlun Digital to deliver advanced Electronic Cargo Tracking System (ECTS) and Fleet Management solutions across East Africa, providing real-time visibility and operational excellence.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Electronic Cargo Tracking System',
                  'Fleet Management Solutions',
                  'Real-time GPS Monitoring',
                  'Advanced Analytics & Reporting',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-purple-600 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/products"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Operations Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-green-100 rounded-full mb-4">
              <span className="text-green-700 font-semibold text-sm">Geographic Presence</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Regional Operations Expansion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic positioning across East Africa for enhanced service delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                country: 'Kenya',
                status: 'Headquarters',
                icon: Building2,
                description: 'Central operations and nationwide field support across all sectors',
              },
              {
                country: 'East Africa',
                status: 'Regional Coverage',
                icon: Globe,
                description: 'Strategic expansion supporting cross-border trade and logistics',
              },
              {
                country: 'Future Markets',
                status: 'Growth Plans',
                icon: TrendingUp,
                description: 'Continuous market development and service enhancement',
              },
            ].map((location, idx) => {
              const Icon = location.icon;
              return (
                <motion.div
                  key={location.country}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <Icon className="text-blue-600 mb-4" size={40} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.country}</h3>
                  <div className="text-sm font-semibold text-blue-600 mb-4">{location.status}</div>
                  <p className="text-gray-600 leading-relaxed">{location.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Agent Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-6 py-2 bg-purple-100 rounded-full mb-6">
                <span className="text-purple-700 font-semibold text-sm">AI-Powered Solutions</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Custom Agent Assistant
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience our intelligent custom agent system designed to streamline your operations with real-time monitoring, automated responses, and intelligent decision-making capabilities.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Real-time Monitoring & Analytics',
                  'Automated Alert System',
                  'Intelligent Route Optimization',
                  '24/7 Virtual Support',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-purple-600 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all"
              >
                <span>Request Demo</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border-2 border-purple-200"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Union Agent</h3>
                    <p className="text-xs text-green-600 flex items-center space-x-1">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>Online</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="text-purple-600" size={16} />
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm text-gray-800">Hello! I'm your Union International virtual assistant. How can I help you today?</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-purple-600 rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm text-white">I need information about cargo tracking</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xs font-bold">You</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="text-purple-600" size={16} />
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm text-gray-800">I can help you with electronic sealing solutions and real-time cargo tracking. Would you like to learn more?</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    disabled
                  />
                  <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <Send className="text-white" size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMCAwIDEwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Lightbulb className="text-white mx-auto mb-6" size={56} />
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Partner with Union International Limited for world-class solutions across Imports & Exports, Electronic Cargo Tracking, Fleet Management, and Technology Integration
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-12">
              <Link
                to="/contact"
                onClick={() => trackButtonClick('Schedule a Consultation', '/contact')}
                className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                <Phone size={24} />
                <span>Schedule a Consultation</span>
                <ArrowRight size={24} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105"
              >
                <span>Explore All Services</span>
                <ArrowRight size={24} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a
                href="https://wa.me/254769021111"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPhoneClick('0769021111', 'whatsapp')}
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 hover:bg-white/20 transition-all cursor-pointer"
              >
                <Phone className="text-white" size={24} />
                <div className="text-left">
                  <div className="text-white/80 text-sm">Call/WhatsApp Us</div>
                  <div className="text-white font-semibold">0769021111</div>
                </div>
              </a>
              <a
                href="mailto:info@unioninternational.co.ke"
                onClick={() => trackEmailClick('info@unioninternational.co.ke')}
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 hover:bg-white/20 transition-all cursor-pointer"
              >
                <Mail className="text-white" size={24} />
                <div className="text-left">
                  <div className="text-white/80 text-sm">Email Us</div>
                  <div className="text-white font-semibold">info@unioninternational.co.ke</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
