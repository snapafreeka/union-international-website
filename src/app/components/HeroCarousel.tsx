import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  Truck,
  Cpu,
  Zap,
  Cloud,
  Database,
  Lock,
  Globe,
  Award,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Droplet,
  Settings,
  Users,
  TrendingUp,
  Package
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage1 from '@/imports/image-20.png';
import heroImage2 from '@/imports/image-21.png';
import heroImage3 from '@/imports/image-22.png';
import heroImage4 from '@/imports/image-23.png';
import heroImage5 from '@/imports/image-24.png';
import heroImage6 from '@/imports/image-25.png';
import heroImage7 from '@/imports/image-26.png';
import heroImage8 from '@/imports/image-27.png';
import heroImage9 from '@/imports/image-29.png';

const carouselSlides = [
  {
    type: 'hero',
    title: 'Shaping the Future of Security & Technology',
    subtitle: 'Innovation Across Multiple Sectors',
    description: 'Union International Limited provides world-class solutions across Imports & Exports, Electronic Cargo Tracking, Fleet Management, and Technology Integration.',
    cta: 'Explore Our Solutions',
    ctaLink: '/services',
    gradient: 'from-blue-900 via-indigo-900 to-purple-900',
    icon: Globe,
  },
  {
    type: 'imageSlide',
    category: 'Professional Excellence',
    title: 'World-Class Cargo Solutions',
    description: 'Cutting-edge technology delivering secure and efficient cargo tracking across East Africa',
    image: heroImage1,
    gradient: 'from-blue-900 via-purple-900 to-indigo-900',
  },
  {
    type: 'imageSlide',
    category: 'Innovation & Technology',
    title: 'Advanced Fleet Management',
    description: 'Real-time monitoring and comprehensive analytics powered by industry-leading technology',
    image: heroImage2,
    gradient: 'from-purple-900 via-indigo-900 to-blue-900',
  },
  {
    type: 'imageSlide',
    category: 'Security Solutions',
    title: 'Electronic Sealing Technology',
    description: 'State-of-the-art electronic seals ensuring cargo integrity from origin to destination',
    image: heroImage3,
    gradient: 'from-cyan-900 via-blue-900 to-indigo-900',
  },
  {
    type: 'service',
    category: 'Supply Chain & Logistics',
    title: 'Electronic Sealing Solutions & Cargo Tracking',
    description: 'Advanced eSeal technology with real-time GPS tracking, tamper detection, and KRA Multi-Vendor Framework certification for secure cargo monitoring.',
    features: ['Real-time GPS Tracking', 'Tamper Detection', 'RECTS Compliance', 'Nationwide Deployment'],
    gradient: 'from-cyan-900 via-blue-900 to-indigo-900',
    icon: Lock,
  },
  {
    type: 'service',
    category: 'Energy & Petroleum',
    title: 'Smart Energy Solutions & Geographic Presence',
    description: 'Comprehensive fuel management systems, drone manufacturers partnerships, and strategic positioning across East Africa for energy infrastructure.',
    features: ['Fuel Monitoring Systems', 'Energy Infrastructure', 'Geographic Coverage', 'Smart Metering'],
    gradient: 'from-orange-900 via-red-900 to-pink-900',
    icon: Droplet,
  },
  {
    type: 'service',
    category: 'ICT & Digital Solutions',
    title: 'Cloud Infrastructure & System Integration',
    description: 'Enterprise-grade IT solutions including cloud platforms, infrastructure automation, DevOps practices, and comprehensive technology stack management.',
    features: ['Cloud Platforms (AWS, Azure)', 'Infrastructure & DevOps', 'Backend Technologies', 'Security & Compliance'],
    gradient: 'from-violet-900 via-purple-900 to-fuchsia-900',
    icon: Cloud,
  },
  {
    type: 'service',
    category: 'Managed Services',
    title: 'Ensuring Optimal Performance',
    description: 'Comprehensive IT infrastructure management, continuous improvement, 24/7 monitoring, and proactive support for business operations.',
    features: ['24/7 Infrastructure Monitoring', 'Proactive Support', 'Performance Optimization', 'Risk Mitigation'],
    gradient: 'from-emerald-900 via-teal-900 to-cyan-900',
    icon: Settings,
  },
  {
    type: 'achievement',
    category: 'Achievements & Milestones',
    title: 'Pioneering Excellence in Security and Technology',
    achievements: [
      { icon: Award, label: 'BSMART Technology Partnership', subtitle: 'Advanced eSeal Integration' },
      { icon: CheckCircle2, label: 'KRA Multi-Vendor Framework', subtitle: 'Pre-qualified Vendor' },
      { icon: Globe, label: 'Regional Expansion', subtitle: 'East African Operations' },
      { icon: Shield, label: 'RECTS Implementation', subtitle: 'Cargo Tracking Excellence' },
    ],
    gradient: 'from-amber-900 via-orange-900 to-red-900',
  },
  {
    type: 'technology',
    category: 'Technology Stack',
    title: 'Comprehensive IT Infrastructure',
    technologies: [
      { category: 'Frontend', items: ['React', 'Angular', 'Vue.js'] },
      { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'Go'] },
      { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud'] },
      { category: 'DevOps', items: ['Docker', 'Kubernetes', 'Jenkins'] },
    ],
    gradient: 'from-slate-900 via-gray-900 to-zinc-900',
    icon: Cpu,
  },
  {
    type: 'partnership',
    category: 'Primary Technology Partnership',
    title: 'Kunlun Digital - Fleet & Cargo Tracking',
    description: 'Strategic partnership with Kunlun Digital providing comprehensive Electronic Cargo Tracking System (ECTS) and Fleet Management solutions powered by cutting-edge technology.',
    highlights: [
      'Electronic Cargo Tracking System',
      'Real-time Fleet Management',
      'Driver Registration & Monitoring',
      'Advanced Analytics & Reporting',
    ],
    gradient: 'from-purple-900 via-indigo-900 to-blue-900',
    icon: Truck,
  },
  {
    type: 'partnership',
    category: 'Strategic Partnership',
    title: 'Technology Partnership with BSMART',
    description: 'Exclusive collaboration for advanced eSeal technology across Kenya, specializing in trade facilitation and development projects.',
    highlights: [
      'Advanced IoT Solutions',
      'Cross-Border Trade Facilitation',
      'Drone Technology Integration',
      'Regional Standards Compliance',
    ],
    gradient: 'from-indigo-900 via-blue-900 to-cyan-900',
    icon: Users,
  },
  {
    type: 'imageSlide',
    category: 'Logistics Excellence',
    title: 'Comprehensive Supply Chain Management',
    description: 'End-to-end logistics solutions with advanced tracking and monitoring capabilities',
    image: heroImage4,
    gradient: 'from-emerald-900 via-teal-900 to-cyan-900',
  },
  {
    type: 'imageSlide',
    category: 'Regional Coverage',
    title: 'Strategic East Africa Operations',
    description: 'Seamless cargo monitoring and customs facilitation across the region',
    image: heroImage5,
    gradient: 'from-orange-900 via-red-900 to-pink-900',
  },
  {
    type: 'imageSlide',
    category: 'Technology Integration',
    title: 'Smart Monitoring Systems',
    description: 'Comprehensive centralized monitoring and real-time alert systems',
    image: heroImage6,
    gradient: 'from-slate-900 via-gray-900 to-zinc-900',
  },
  {
    type: 'imageSlide',
    category: 'Industry Leadership',
    title: 'Trusted by Leading Organizations',
    description: 'Delivering excellence in cargo security and fleet management solutions',
    image: heroImage7,
    gradient: 'from-rose-900 via-pink-900 to-fuchsia-900',
  },
  {
    type: 'products',
    category: 'Core Products',
    title: 'Electronic Seal Solutions',
    description: 'State-of-the-art electronic sealing devices with QR codes, GPS tracking, and real-time monitoring capabilities.',
    products: [
      { name: 'Dry Cargo eSeals', feature: 'Container Security' },
      { name: 'Fuel Tanker eSeals', feature: 'Liquid Cargo Tracking' },
      { name: 'GPS Tracking Units', feature: 'Real-time Location' },
      { name: 'Monitoring Dashboard', feature: 'Central Command' },
    ],
    gradient: 'from-teal-900 via-emerald-900 to-green-900',
    icon: Package,
  },
  {
    type: 'service',
    category: 'Imports & Exports',
    title: 'Licensed Customs Agent #1',
    description: 'Comprehensive import and export services including customs clearance, documentation, compliance, and trade facilitation. Holding General Bond for Security of Warehoused Goods (2024-2026).',
    features: ['Customs Clearance', 'Trade Compliance', 'Documentation Services', 'Transit Bond Management'],
    gradient: 'from-blue-900 via-cyan-900 to-teal-900',
    icon: Package,
  },
  {
    type: 'imageSlide',
    category: 'Professional Services',
    title: 'Licensed Customs Agent Excellence',
    description: 'Comprehensive import/export services with General Bond for Warehoused Goods',
    image: heroImage8,
    gradient: 'from-violet-900 via-purple-900 to-indigo-900',
  },
  {
    type: 'imageSlide',
    category: 'Innovation Hub',
    title: 'Next-Generation Solutions',
    description: 'Pioneering technology partnerships delivering cutting-edge cargo and fleet solutions',
    image: heroImage9,
    gradient: 'from-teal-900 via-cyan-900 to-blue-900',
  },
  {
    type: 'stats',
    category: 'Company Impact',
    title: 'Driving Growth & Innovation Since 2013',
    stats: [
      { value: '13+', label: 'Years of Excellence', icon: TrendingUp },
      { value: '100%', label: 'KRA Compliance', icon: CheckCircle2 },
      { value: '24/7', label: 'Support & Monitoring', icon: Shield },
      { value: 'Regional', label: 'East Africa Coverage', icon: Globe },
    ],
    gradient: 'from-rose-900 via-pink-900 to-fuchsia-900',
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const slide = carouselSlides[currentSlide];

  return (
    <div
      className="relative min-h-[85vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMCAwIDEwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
          </div>

          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 lg:px-8 h-full flex items-center relative z-10 py-20">
            {/* Hero Slide */}
            {slide.type === 'hero' && (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-4xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="inline-flex items-center space-x-3 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6"
                >
                  {slide.icon && <slide.icon className="text-white" size={24} />}
                  <span className="text-white font-semibold">{slide.subtitle}</span>
                </motion.div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>

                <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl">
                  {slide.description}
                </p>

                <Link
                  to={slide.ctaLink}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-2xl"
                >
                  <span>{slide.cta}</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            )}

            {/* Service Slide */}
            {slide.type === 'service' && (
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="inline-flex items-center space-x-3 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                    <span className="text-white/80 text-sm font-medium">{slide.category}</span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h2>

                  <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  <Link
                    to="/services"
                    className="inline-flex items-center space-x-2 text-white font-semibold hover:space-x-3 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {slide.features?.map((feature, idx) => {
                    const Icon = slide.icon;
                    return (
                      <motion.div
                        key={feature}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1, type: 'spring' }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
                      >
                        <Icon className="text-white mb-3" size={32} />
                        <p className="text-white font-semibold text-sm">{feature}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            )}

            {/* Achievement Slide */}
            {slide.type === 'achievement' && (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="w-full"
              >
                <div className="text-center mb-12">
                  <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                    <span className="text-white/80 text-sm font-medium">{slide.category}</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {slide.achievements?.map((achievement, idx) => {
                    const Icon = achievement.icon;
                    return (
                      <motion.div
                        key={achievement.label}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105"
                      >
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="text-white" size={32} />
                        </div>
                        <h3 className="text-white font-bold mb-2">{achievement.label}</h3>
                        <p className="text-white/80 text-sm">{achievement.subtitle}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Technology Stack Slide */}
            {slide.type === 'technology' && (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="w-full"
              >
                <div className="text-center mb-12">
                  <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                    <span className="text-white/80 text-sm font-medium">{slide.category}</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {slide.technologies?.map((tech, idx) => (
                    <motion.div
                      key={tech.category}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1, type: 'spring' }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
                    >
                      <h3 className="text-white font-bold mb-4 text-lg">{tech.category}</h3>
                      <ul className="space-y-2">
                        {tech.items.map((item) => (
                          <li key={item} className="text-white/80 text-sm flex items-center space-x-2">
                            <CheckCircle2 size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Partnership Slide */}
            {slide.type === 'partnership' && (
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="inline-flex items-center space-x-3 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                    {slide.icon && <slide.icon className="text-white" size={20} />}
                    <span className="text-white/80 text-sm font-medium">{slide.category}</span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h2>

                  <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  <Link
                    to="/about"
                    className="inline-flex items-center space-x-2 text-white font-semibold hover:space-x-3 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-y-4"
                >
                  {slide.highlights?.map((highlight, idx) => (
                    <motion.div
                      key={highlight}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all"
                    >
                      <CheckCircle2 className="text-white flex-shrink-0" size={24} />
                      <span className="text-white font-semibold">{highlight}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}

            {/* Products Slide */}
            {slide.type === 'products' && (
              <div className="w-full">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-center mb-12"
                >
                  <div className="inline-flex items-center space-x-3 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                    {slide.icon && <slide.icon className="text-white" size={20} />}
                    <span className="text-white/80 text-sm font-medium">{slide.category}</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg text-white/90 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {slide.products?.map((product, idx) => (
                    <motion.div
                      key={product.name}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                        <Package className="text-white" size={24} />
                      </div>
                      <h3 className="text-white font-bold mb-2">{product.name}</h3>
                      <p className="text-white/80 text-sm">{product.feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Image Slide */}
            {slide.type === 'imageSlide' && (
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="inline-flex items-center space-x-3 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                    <span className="text-white/80 text-sm font-medium">{slide.category}</span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h2>

                  <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  <Link
                    to="/products"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all"
                  >
                    <span>Explore Products</span>
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative"
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-auto object-contain bg-white"
                    />
                  </div>
                </motion.div>
              </div>
            )}

            {/* Stats Slide */}
            {slide.type === 'stats' && (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="w-full"
              >
                <div className="text-center mb-12">
                  <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                    <span className="text-white/80 text-sm font-medium">{slide.category}</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {slide.stats?.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + idx * 0.1, type: 'spring' }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all hover:scale-105"
                      >
                        <Icon className="text-white mx-auto mb-4" size={40} />
                        <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                        <div className="text-white/80">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {carouselSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="text-white" size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="text-white" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
