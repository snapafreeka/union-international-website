import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import projectImage1 from '@/imports/image-15.png';
import projectImage2 from '@/imports/image-16.png';
import projectImage3 from '@/imports/image-10.png';
import projectImage4 from '@/imports/image-14.png';
import projectImage5 from '@/imports/image-9.png';
import projectImage6 from '@/imports/image-13.png';
import projectImage7 from '@/imports/image-2.png';
import projectImage8 from '@/imports/image-12.png';

export function ProjectsPage() {
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'RECTS Implementation - East Africa',
      client: 'East African Community',
      location: 'Kenya, Uganda, Rwanda',
      year: '2023-2024',
      status: 'Completed',
      description: 'Regional Electronic Cargo Tracking System implementation across Northern corridor tracking goods from point of loading to destination with Kenya, Rwanda & Uganda.',
      image: projectImage1,
      category: 'Cargo Tracking'
    },
    {
      title: 'EAC Centralized Monitoring Center',
      client: 'East African Community',
      location: 'Regional HQ',
      year: '2024',
      status: 'Completed',
      description: 'Deployment of centralized monitoring center for tanker trucks holding, transporter monitoring, and electronic fuel seal inspection across East Africa.',
      image: projectImage2,
      category: 'Monitoring Solutions'
    },
    {
      title: 'Electronic Seal Deployment - eLock & eSEA',
      client: 'Regional Logistics Partners',
      location: 'East Africa',
      year: '2024-2026',
      status: 'In Progress',
      description: 'Large-scale deployment of eLock and Lockable eSEA electronic seals with AI, RFID, and blockchain technology for cargo and agricultural transport security.',
      image: projectImage3,
      category: 'Electronic Sealing'
    },
    {
      title: 'Dynamic Fuel Lock (dFL) System',
      client: 'Petroleum Transporters',
      location: 'Kenya',
      year: '2025-2026',
      status: 'In Progress',
      description: 'Implementation of precision fuel loading volume capture system with eFUEL pre-check verification and smart gate integration for fuel security.',
      image: projectImage4,
      category: 'Fuel Management'
    },
    {
      title: 'Fleet Management System Rollout',
      client: 'Transport & Logistics Companies',
      location: 'Kenya & East Africa',
      year: '2025-2026',
      status: 'In Progress',
      description: 'Partnership with Kunlun Digital for comprehensive fleet management system with driver registration, GPS tracking, and real-time analytics.',
      image: projectImage5,
      category: 'Fleet Management'
    },
    {
      title: 'Capacity Building & Training Programs',
      client: 'Government & Private Sector',
      location: 'Kenya',
      year: '2024-2026',
      status: 'Completed',
      description: 'Institutional capacity building programs for customs, logistics professionals, and technology implementation teams across multiple sectors.',
      image: projectImage6,
      category: 'Training & Development'
    },
    {
      title: 'Malaysia-Kenya High Level Business Forum',
      client: 'International Trade',
      location: 'Malaysia & Kenya',
      year: '2024',
      status: 'Completed',
      description: 'Participation in high-level business forum strengthening trade relations and technology partnerships between Malaysia and Kenya.',
      image: projectImage7,
      category: 'International Partnership'
    },
    {
      title: 'Equipment & Infrastructure Setup',
      client: 'Various Clients',
      location: 'Multiple Sites',
      year: '2024-2026',
      status: 'In Progress',
      description: 'Installation and configuration of monitoring equipment, warehouse systems, and operational infrastructure for various client facilities.',
      image: projectImage8,
      category: 'Infrastructure'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Planning':
      case 'Development':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Transforming Vision into Reality Through Innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Briefcase size={16} className="text-blue-600" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-blue-600" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-blue-600" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '80+', label: 'Total Projects' },
              { value: '25+', label: 'Active Projects' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '13', label: 'Years of Excellence' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
