'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import VideoGallery from '@/components/sections/VideoGallery';
import LearningResources from '@/components/sections/LearningResources';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <VideoGallery />
      <LearningResources />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
