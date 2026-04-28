import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Package, ArrowRight } from 'lucide-react';
import productImage1 from '@/imports/image-10.png';
import productImage2 from '@/imports/image-11.png';
import productImage3 from '@/imports/image-33.png'; // Electronic Sealing System Diagram
import productImage4 from '@/imports/image-15.png';
import productImage5 from '@/imports/image-34.png'; // Fleet Management Dashboard
import productImage6 from '@/imports/image-16.png';
import productImage7 from '@/imports/image-36.png'; // LPG Natural Gas

export function ProductsPage() {
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const products = [
    {
      name: 'eLock - Electronic Container Seal',
      category: 'Electronic Sealing',
      description: 'Advanced electronic lock with AI, Bluetooth, WiFi, RFID capabilities and 60-day battery life. Features blockchain security and IP67 water resistance for secure cargo protection.',
      image: productImage1,
      features: ['AI-Powered Security', 'Bluetooth & WiFi Connectivity', 'RFID Technology', 'Blockchain Integration', '60-Day Battery Life', 'IP67 Water Resistant', 'Fast Charging', 'Real-time Alerts']
    },
    {
      name: 'Lockable eSEA - Electronic Seal for Agriculture',
      category: 'Electronic Sealing',
      description: 'Specialized electronic seal designed for agricultural and bulk cargo transport with advanced tracking and tamper detection capabilities.',
      image: productImage2,
      features: ['AI & RFID Technology', 'Bluetooth & WiFi Enabled', '60-Day Battery Life', 'Blockchain Security', 'Fast Charging', 'IP67 Rating', 'Agricultural Cargo Optimized', 'Real-time GPS Tracking']
    },
    {
      name: 'dFL - Dynamic Fuel Lock',
      category: 'Fuel Management',
      description: 'Precision fuel loading volume capture system with pre-check verification, real-time monitoring, and smart gate integration for complete fuel security.',
      image: productImage3,
      features: ['Export Booking Integration', 'eFUEL Pre-Check (48 Hours)', 'Fuel Depo Entrance Verification', 'Loading with Dynamic eFUEL', 'Activation by URA', 'Fuel Depo Exit Recognition', 'Offloading Monitoring', 'Deactivation by System']
    },
    {
      name: 'RECTS - Regional Electronic Cargo Tracking',
      category: 'Cargo Tracking',
      description: 'Comprehensive electronic cargo tracking system implemented across East Africa for seamless transit monitoring from point of loading to final destination.',
      image: productImage4,
      features: ['Cross-Border Tracking', 'Real-time Visibility', 'eTRACK Integration', 'eSEAL Monitoring', 'eFUEL Tracking', 'Driver Recognition', 'Video Surveillance', 'Multi-Country Coverage']
    },
    {
      name: 'Fleet Management System',
      category: 'Fleet Management',
      description: 'Complete fleet management platform powered by Kunlun Digital with real-time tracking, driver registration, and comprehensive analytics.',
      image: productImage5,
      features: ['GPS Real-time Tracking', 'Driver Registration & Verification', 'Route Optimization', 'Fuel Management', 'Maintenance Scheduling', 'Performance Analytics', 'Geofencing & Alerts', 'Mobile App Integration']
    },
    {
      name: 'EAC Centralized Monitoring Center',
      category: 'Monitoring Solutions',
      description: 'East African Community Centralized Monitoring Center for tanker trucks, transporter monitoring, and electronic fuel seal inspection.',
      image: productImage6,
      features: ['Tanker Trucks Holding', 'Transporter Monitoring', 'Electronic Fuel Seal Inspection', 'Electronic Fuel Examination', 'Multi-Screen Control Center', 'Real-time Dashboard', 'Regional Coverage', 'Automated Alerts']
    },
    {
      name: 'LPG & Natural Gas Solutions',
      category: 'Energy Solutions',
      description: 'Comprehensive LPG and natural gas pipeline monitoring and management solutions powered by Kunlun Digital. Complete tracking from distribution to delivery with advanced safety systems.',
      image: productImage7,
      features: ['LPG Cylinder Tracking', 'Pipeline Monitoring', 'Gas Distribution Management', 'Safety Compliance Systems', 'Real-time Volume Monitoring', 'Leak Detection', 'Delivery Route Optimization', 'Customer Management']
    },
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
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">Our Products</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Innovative Solutions Built for Modern Business Challenges
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={productsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm rounded-full mb-2">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with cutting-edge technology and industry best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Scalable', description: 'Grow with your business needs' },
              { title: 'Reliable', description: '99.9% uptime guarantee' },
              { title: 'Secure', description: 'Enterprise-grade security' },
              { title: 'Support', description: '24/7 technical assistance' },
              { title: 'Integration', description: 'Easy to integrate with existing systems' },
              { title: 'Updates', description: 'Regular feature updates' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Package className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
