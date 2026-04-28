import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Award, Users, TrendingUp, Globe } from 'lucide-react';
import aboutImage1 from '@/imports/image-20.png';
import aboutImage2 from '@/imports/image-21.png';
import aboutImage3 from '@/imports/image-22.png';

export function AboutPage() {
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain exceptional performance by consistently delivering high-quality solutions that exceed client expectations',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty, transparency, and ethical conduct in all business operations',
    },
    {
      icon: Users,
      title: 'Customer Partnership',
      description: 'We build long-term relationships by understanding client needs and delivering tailored solutions',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and creative problem-solving to stay ahead in our industry',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We are committed to environmentally responsible practices that support long-term value and environmental stewardship',
    },
    {
      icon: Eye,
      title: 'Accountability',
      description: 'We take full responsibility for delivering on our promises and maintaining transparency',
    },
  ];

  const milestones = [
    { year: '2013', title: 'Company Founded', description: 'Union International Limited established in Nairobi, Kenya as a licensed Customs Agent' },
    { year: '2020', title: 'Kunlun Digital Partnership', description: 'Primary technology partnership with Kunlun Digital for Electronic Cargo Tracking & Fleet Management Systems' },
    { year: '2021', title: 'BSMART Partnership', description: 'Strategic partnership with BSMART Technology for advanced eSeal solutions' },
    { year: '2022', title: 'Regional Expansion', description: 'Extended operations across East Africa with enhanced service delivery' },
    { year: '2023', title: 'RECTS Implementation', description: 'Full compliance and deployment of Regional Electronic Cargo Tracking System' },
    { year: '2024', title: 'General Bond Certification & International Forum', description: 'Obtained General Bond for Security of Warehoused Goods (2024-2026) and participated in Malaysia-Kenya High Level Business Forum' },
    { year: '2026', title: 'KRA Multi-Vendor Framework', description: 'Application submitted for KRA Multi-Vendor E-seals prequalification (Under Review)' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">About Union International Ltd</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Uniting Borders, Inspiring Growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Company Overview</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2013, Union International Limited is a pioneering provider of advanced electronic sealing solutions and comprehensive technology services, strategically positioned at the intersection of security, innovation, and technology excellence. We hold Customs Agent License #1 and the General Bond for Security of Warehoused Goods (2024-2026).
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With our headquarters in Nairobi, Kenya, we deliver cutting-edge solutions across Imports & Exports, Supply Chain & Logistics, Energy & Petroleum, ICT & Digital Solutions, and QHSE & Compliance sectors. Our commitment to reliability extends to Repair & Maintenance services and robust System Integration offerings.
              </p>
              <p className="text-lg text-gray-700">
                Through strategic partnerships with technology leaders like Kunlun Digital and BSMART Technology, we provide Infrastructure & Cloud Solutions, Electronic Cargo Tracking Systems, and Fleet Management solutions that deliver scalable and secure options for modern businesses. We are currently under review for KRA Multi-Vendor E-seals prequalification, demonstrating innovation and excellence across all our service verticals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative space-y-4"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImage1}
                  alt="Union International Professional Excellence"
                  className="w-full h-[350px] object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={aboutImage2}
                    alt="Technology Innovation"
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={aboutImage3}
                    alt="Regional Operations"
                    className="w-full h-[200px] object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="text-blue-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700">
                To provide integrated, reliable, and innovative solutions through advanced cybersecurity, accelerating development of quality, healthy, safe and sustainable operations for enhanced value creation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-2xl shadow-lg text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg">
                To be a globally trusted partner delivering innovative, sustainable, and high-impact solutions that empower organizations, drive technological advancement and enrich communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section ref={teamRef} className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key milestones in our growth and development
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                animate={teamInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative pl-8 pb-12 border-l-2 border-blue-500 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-blue-400 font-bold text-2xl mb-2">{milestone.year}</div>
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
