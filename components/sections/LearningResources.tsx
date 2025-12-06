'use client';

import { Card } from '@/components/ui/card';
import {
  CheckCircle2,
  BookOpen,
  Stethoscope,
  FileText,
  Award,
  Target,
} from 'lucide-react';

export default function LearningResources() {
  const resources = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Instrument Identification',
      description: 'Master all surgical instruments used in operations',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Case Presentations',
      description: 'Learn structured approach to surgical cases',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Clinical Examination',
      description: 'OPD and ward examination skills made simple',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Pre & Post-Op Care',
      description: 'Complete patient management protocols',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Exam Preparation',
      description: 'Practical tips for exams and viva voce',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Essential Concepts',
      description: 'For MBBS, INI-CET, NEET-PG, FMGE',
    },
  ];

  const examPrep = [
    'MBBS Final Year',
    'INI-CET',
    'NEET-PG',
    'FMGE',
    'DNB Surgery',
    'MS/MCh Entrance',
  ];

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Learning Resources
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What You'll Learn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All content is made to help you learn faster, better, and smarter
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 group border-2 hover:border-green-200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600">{resource.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Exam Preparation
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our content is specifically designed to help you excel in all
                major medical examinations. Get focused, high-yield content that
                covers exactly what you need to know.
              </p>
              <div className="flex flex-wrap gap-3">
                {examPrep.map((exam, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-white rounded-lg shadow-sm border border-green-200 font-semibold text-green-700"
                  >
                    {exam}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                'Detailed video explanations',
                'Clinical pearls and tips',
                'Exam-focused content',
                'Real surgical case discussions',
                'Updated regularly',
                'Free access to all videos',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
