'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Youtube, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'contact@surgisense.com',
      link: 'mailto:contact@surgisense.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      title: 'YouTube',
      value: '@SurgiSense31',
      link: 'https://www.youtube.com/@SurgiSense31',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Based in India',
      link: null,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Reach Out
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions, suggestions, or collaboration ideas? We'd love to
            hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 group border-2 hover:border-blue-200"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform`}
              >
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={
                    info.link.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-600">{info.value}</p>
              )}
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Send Us a Message
              </h3>
              <p className="text-gray-600 text-lg">
                Whether you're a student looking for guidance, a fellow educator
                interested in collaboration, or simply have feedback to share,
                we're here to help.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Quick Response
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We typically respond within 24-48 hours
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Send className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Open to Collaboration
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Interested in partnerships and guest content
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 border-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white h-12"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
