import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const videos = [
  {
    id: 1,
    title: "Qismat – Ammy Virk & Sargun Mehta",
    description:
      "A soulful Punjabi track expressing love, heartbreak, and destiny.",
    youtubeUrl: "https://www.youtube.com/watch?v=qSfv7QRjvMA",
    embed: "https://www.youtube.com/embed/qSfv7QRjvMA",
  },
  {
    id: 2,
    title: "Excuses – AP Dhillon",
    description: "A modern Punjabi hit with smooth vocals and catchy beats.",
    youtubeUrl: "https://www.youtube.com/watch?v=83nSodg-HTQ",
    embed: "https://www.youtube.com/embed/83nSodg-HTQ",
  },
  {
    id: 3,
    title: "295 – Sidhu Moose Wala",
    description: "An iconic song delivering strong message with deep vocals.",
    youtubeUrl: "https://www.youtube.com/watch?v=TBTG3MXZB_g",
    embed: "https://www.youtube.com/embed/TBTG3MXZB_g",
  },
  {
    id: 4,
    title: "295 – Sidhu Moose Wala",
    description: "An iconic song delivering strong message with deep vocals.",
    youtubeUrl: "https://www.youtube.com/watch?v=TBTG3MXZB_g",
    embed: "https://www.youtube.com/embed/TBTG3MXZB_g",
  },
  {
    id: 5,
    title: "295 – Sidhu Moose Wala",
    description: "An iconic song delivering strong message with deep vocals.",
    youtubeUrl: "https://www.youtube.com/watch?v=TBTG3MXZB_g",
    embed: "https://www.youtube.com/embed/TBTG3MXZB_g",
  },
  {
    id: 6,
    title: "295 – Sidhu Moose Wala",
    description: "An iconic song delivering strong message with deep vocals.",
    youtubeUrl: "https://www.youtube.com/watch?v=TBTG3MXZB_g",
    embed: "https://www.youtube.com/embed/TBTG3MXZB_g",
  },
];

export default function VideoCarousel() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {videos.map((video) => (
          <CarouselItem
            key={video.id}
            className="basis-1/1 md:basis-1/2 lg:basis-1/4 p-4 h-[400px]"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow pb-4 flex flex-col gap-3 border h-full">
              <div className="relative group">
                <Image
                  height={176}
                  width={200}
                  src={`https://img.youtube.com/vi/${
                    video.youtubeUrl.split("v=")[1]
                  }/0.jpg`}
                  alt={video.title}
                  className="w-full h-44 object-cover"
                />
                <Dialog>
                  <DialogTrigger
                    onClick={() => setActiveVideo(video as any)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition rounded-xl"
                  >
                    <Play className="w-12 h-12 text-white" />
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden">
                    {activeVideo && (
                      <iframe
                        src={`${(activeVideo as any).embed}?autoplay=1`}
                        className="w-full h-[500px]"
                        allow="autoplay; encrypted-media"
                      />
                    )}
                  </DialogContent>
                </Dialog>
              </div>

              <h3 className="text-lg font-semibold px-4 flex-grow">
                {video.title}
              </h3>
              <p className="text-sm text-gray-600 px-4 flex-grow">
                {video.description}
              </p>

              <Button
                asChild
                className="bg-gradient-to-r mx-4 from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-lg mt-2 "
              >
                <Link
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  Watch on YouTube
                </Link>
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex gap-3 relative mt-7 justify-end pr-3">
        <CarouselPrevious className="static" />
        <CarouselNext className="static" />
      </div>
    </Carousel>
  );
}
