import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function BlogPage() {
  const [blogRef, blogInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const blogPosts = [
    {
      title: 'The Future of Fleet Management in Africa',
      excerpt: 'Explore how AI and IoT are revolutionizing fleet operations across the continent.',
      author: 'Union Tech Team',
      date: 'January 25, 2026',
      category: 'Fleet Management',
      image: 'https://images.unsplash.com/photo-1765574782103-6d326d2240f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGVldCUyMG1hbmFnZW1lbnQlMjB2ZWhpY2xlc3xlbnwxfHx8fDE3Njk1MzMxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '5 min read'
    },
    {
      title: 'Smart Gas Stations: The Next Generation',
      excerpt: 'How automation and smart technology are transforming fuel station operations.',
      author: 'Innovation Team',
      date: 'January 20, 2026',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1646873108924-a9e45cf9fd36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGdhcyUyMHN0YXRpb24lMjBmdWVsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njk1ODI0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '6 min read'
    },
    {
      title: 'AI in Business: Transforming Operations',
      excerpt: 'Discover how artificial intelligence is reshaping modern business processes.',
      author: 'AI Research Team',
      date: 'January 15, 2026',
      category: 'Artificial Intelligence',
      image: 'https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2OTU4MjQxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '7 min read'
    },
    {
      title: 'Sustainable Energy Solutions for Africa',
      excerpt: 'The role of renewable energy and AI in powering Africa\'s future.',
      author: 'Energy Solutions Team',
      date: 'January 10, 2026',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3Njk0ODY2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '8 min read'
    },
    {
      title: 'Digital Transformation Best Practices',
      excerpt: 'Key strategies for successful digital transformation in modern enterprises.',
      author: 'Business Solutions Team',
      date: 'January 5, 2026',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2OTQ4MTM4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '6 min read'
    },
    {
      title: 'The Impact of IoT on Supply Chain',
      excerpt: 'How Internet of Things is revolutionizing logistics and supply chain management.',
      author: 'Logistics Team',
      date: 'December 30, 2025',
      category: 'IoT',
      image: 'https://images.unsplash.com/photo-1573209680076-bd7ec7007616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBzdXBwbHklMjBjaGFpbiUyMHdhcmVob3VzZXxlbnwxfHx8fDE3Njk1ODI0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '5 min read'
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
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Insights, Updates, and Industry Trends
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-6 py-4 rounded-lg text-gray-900 pl-12"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-700 font-semibold text-sm">Featured Article</span>
            </div>
          </motion.div>

          <Link to="/blog/type-approval-compliance">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative h-96 lg:h-full overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Type Approval and Compliance"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full">
                      Compliance & Consultancy
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Type Approval License & Compliance Made Simple
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Your complete interactive guide to navigating Type Approval, regulatory compliance, and winning bids in Kenya. Learn how Union International can streamline your compliance journey.
                  </p>

                  <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>April 28, 2026</span>
                    </div>
                    <span>12 min read</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User size={16} />
                      <span>Compliance Team</span>
                    </div>
                    <div className="text-blue-600 font-bold inline-flex items-center space-x-2 group-hover:space-x-4 transition-all">
                      <span>Read Full Article</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={blogRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={blogInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <button className="text-blue-600 font-semibold inline-flex items-center space-x-2 hover:space-x-3 transition-all">
                      <span>Read More</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest insights and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900"
              />
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
