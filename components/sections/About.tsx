'use client';

import { Card } from '@/components/ui/card';
import {
  Stethoscope,
  GraduationCap,
  Target,
  Heart,
  BookOpen,
  Users,
} from 'lucide-react';

export default function About() {
  const interests = [
    'General Surgery',
    'Clinical Examination Skills',
    'Case-based Learning',
    'Surgical Instruments',
    'Medical Career Guidance',
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Empowering Future Surgeons
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between theory and clinical practice through
            structured education
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 border-2 hover:border-blue-200 transition-all hover:shadow-xl">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              About SurgiSense
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              SurgiSense is an educational initiative created to guide and
              mentor medical learners on their journey into surgery. Through
              structured videos, practical demonstrations, and real-world
              explanations, SurgiSense aims to bridge the gap between theory and
              clinical practice.
            </p>
            <div className="flex items-center gap-4 text-blue-600 font-semibold">
              <BookOpen className="w-5 h-5" />
              <span>Making surgical learning simple and accessible</span>
            </div>
          </Card>

          <Card className="p-8 border-2 hover:border-blue-200 transition-all hover:shadow-xl">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Stethoscope className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              About Dr. Arpan Josan
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dr. Arpan Josan is a passionate medical educator and surgeon
              committed to delivering high-quality surgical knowledge in a
              simplified manner. With experience in clinical teaching, patient
              care, and surgical procedures, Dr. Josan created SurgiSense to
              support learners worldwide.
            </p>
            <div className="flex items-center gap-4 text-blue-600 font-semibold">
              <GraduationCap className="w-5 h-5" />
              <span>Dedicated to excellence in medical education</span>
            </div>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Areas of Interest
            </h3>
            <p className="text-gray-600">
              Comprehensive coverage across multiple surgical domains
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {index === 0 && <Stethoscope className="w-6 h-6 text-white" />}
                  {index === 1 && <Heart className="w-6 h-6 text-white" />}
                  {index === 2 && <BookOpen className="w-6 h-6 text-white" />}
                  {index === 3 && <Target className="w-6 h-6 text-white" />}
                  {index === 4 && <Users className="w-6 h-6 text-white" />}
                </div>
                <p className="font-semibold text-gray-900">{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
