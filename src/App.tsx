import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BackToTop from './components/BackToTop';

// Lazy load below-the-fold components for better initial load performance
const Partners = lazy(() => import('./components/Partners'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Calculator = lazy(() => import('./components/Calculator'));
const Certifications = lazy(() => import('./components/Certifications'));
const RegionalImpact = lazy(() => import('./components/RegionalImpact'));
const SolarGuide = lazy(() => import('./components/SolarGuide'));
const Blog = lazy(() => import('./components/Blog'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Expertise = lazy(() => import('./components/Expertise'));
const SolarKnowledge = lazy(() => import('./components/SolarKnowledge'));
const FAQ = lazy(() => import('./components/FAQ'));
const PostSales = lazy(() => import('./components/PostSales'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ProjectStatus = lazy(() => import('./components/ProjectStatus'));

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const LOGO_URL = "https://drive.google.com/thumbnail?id=1zkjzrgzcFksMAzqMLPc8ii7CK1-qtmnt&sz=w1000";

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-sans selection:bg-solar-orange selection:text-white transition-colors duration-300 ${darkMode ? 'bg-solar-dark text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header 
        LOGO_URL={LOGO_URL} 
        onAdminLogin={() => setIsAdmin(true)} 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      <Hero />

      <Suspense fallback={<div className="py-20 text-center text-gray-400">Carregando...</div>}>
        <Calculator />
        <SolarGuide />
        <Partners />
        <AboutUs />
        <ProjectStatus />
        <Testimonials />
        <Portfolio isAdmin={isAdmin} />
        <Expertise />
        <Certifications />
        <RegionalImpact />
        <Blog />
        <SolarKnowledge />
        <FAQ />
        <PostSales />
        <Contact />
        <Footer LOGO_URL={LOGO_URL} />
      </Suspense>

      <BackToTop />
    </div>
  );
}
