'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FileText,
  AlertCircle,
  Heart,
  Book,
  Scissors,
  ArrowRight,
} from 'lucide-react';

export default function Blog() {
  const blogTopics = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Common Surgical Diseases',
      description: 'Quick guides on frequently encountered conditions',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Emergency Management',
      description: 'Critical protocols for surgical emergencies',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Case-Based Approach',
      description: 'Learn through real patient scenarios',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Anatomy Made Simple',
      description: 'Complex anatomy concepts simplified',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: 'Surgical Preparations',
      description: 'Pre-operative essentials and checklists',
      color: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            Blog & Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Clinical Tips & Surgical Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Short, easy notes to support your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogTopics.map((topic, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 group overflow-hidden relative border-2 hover:border-orange-200"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${topic.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}
              ></div>
              <div className="relative">
                <div className={`w-12 h-12 bg-gradient-to-br ${topic.color} rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold group"
                >
                  Read articles
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-blue-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Updated Regularly
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Stay current with the latest surgical techniques, clinical
                pearls, and evidence-based practices. Our blog is continuously
                updated with fresh content to keep you at the forefront of
                surgical knowledge.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">New Content Weekly</div>
                  <div className="text-sm text-gray-600">
                    Fresh articles every week
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Coming Soon
              </h4>
              <div className="space-y-4">
                {[
                  'Downloadable study notes',
                  'Interactive case quizzes',
                  'MCQ practice sets',
                  'Surgical procedure checklists',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
