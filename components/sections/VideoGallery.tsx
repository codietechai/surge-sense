"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Youtube, ExternalLink } from "lucide-react";
import VideoCarousel from "./video-carausel";

export default function VideoGallery() {
  const videoCategories = [
    {
      title: "Surgical Instruments",
      description: "Complete guide to identifying and using surgical tools",
      icon: "🔧",
      videosCount: 50,
    },
    {
      title: "Operative Procedures",
      description: "Step-by-step surgical procedure demonstrations",
      icon: "⚕️",
      videosCount: 120,
    },
    {
      title: "Clinical Examination",
      description: "Master physical examination techniques",
      icon: "🩺",
      videosCount: 80,
    },
    {
      title: "Case Presentations",
      description: "Real-world surgical case discussions",
      icon: "📋",
      videosCount: 100,
    },
    {
      title: "Exam Preparation",
      description: "Tips for MBBS, PG exams, and viva",
      icon: "📚",
      videosCount: 90,
    },
    {
      title: "Pre & Post-Op Care",
      description: "Essential patient management protocols",
      icon: "💊",
      videosCount: 60,
    },
  ];

  return (
    <section
      id="videos"
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
            Video Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learn Through Videos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Watch detailed and easy-to-understand videos covering all aspects of
            surgical education
          </p>
          <a
            href="https://www.youtube.com/@SurgiSense31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white text-lg h-14 px-8"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Visit YouTube Channel
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>

        <VideoCarousel />

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <Youtube className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Subscribe to SurgiSense31</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of medical students and professionals learning
            surgery the right way. New videos uploaded regularly!
          </p>
          <a
            href="https://www.youtube.com/@SurgiSense31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8">
              Subscribe Now
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
