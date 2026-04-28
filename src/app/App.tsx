import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Analytics } from '@/app/components/Analytics';
import { InfinitePageScroll } from '@/app/components/InfinitePageScroll';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { HomePage } from '@/app/pages/HomePage';
import { AboutPage } from '@/app/pages/AboutPage';
import { ServicesPage } from '@/app/pages/ServicesPage';
import { ProductsPage } from '@/app/pages/ProductsPage';
import { ProjectsPage } from '@/app/pages/ProjectsPage';
import { BlogPage } from '@/app/pages/BlogPage';
import { BlogTypeApprovalPage } from '@/app/pages/BlogTypeApprovalPage';
import { ContactPage } from '@/app/pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Analytics />
      <InfinitePageScroll />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/type-approval-compliance" element={<BlogTypeApprovalPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
