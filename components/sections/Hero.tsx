'use client';

import { Button } from '@/components/ui/button';
import { PlayCircle, BookOpen, Award, Users } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <Award className="w-4 h-4" />
                Trusted Surgical Education Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                SurgiSense
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Your trusted platform for clear, simplified, and high-quality
              surgical education. Helping medical students, interns, and young
              surgeons master essential surgical concepts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('videos')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-lg h-14 px-8"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Videos
              </Button>
              <Button
                onClick={() => scrollToSection('resources')}
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg h-14 px-8"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Learning Resources
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600 mt-1">Videos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-gray-600 mt-1">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600 mt-1">Topics</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <PlayCircle className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Start Learning Today
                  </h3>
                  <p className="text-gray-600">
                    Access hundreds of surgical education videos
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
