'use client';

import { Stethoscope, Youtube, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About Us', id: 'about' },
    { label: 'Video Gallery', id: 'videos' },
    { label: 'Learning Resources', id: 'resources' },
  ];

  const resources = [
    { label: 'Blog & Insights', id: 'blog' },
    { label: 'Contact Us', id: 'contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SurgiSense</h3>
                <p className="text-sm text-gray-400">Surgical Education</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A dedicated platform for clear, simplified, and high-quality
              surgical education. Empowering the next generation of surgeons.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="space-y-4">
              <a
                href="https://www.youtube.com/@SurgiSense31"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Youtube className="w-5 h-5" />
                </div>
                <span>@SurgiSense31</span>
              </a>
              <a
                href="mailto:contact@surgisense.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 SurgiSense — A Surgical Learning Platform
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>for medical students worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
