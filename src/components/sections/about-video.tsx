"use client";

import PlayLinear from "@iconify-react/solar/play-linear";
import { useState } from "react";

import { cn } from "@/lib/utils";

export default function AboutVideo({ className, containerClass }: { className?: string; containerClass?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // You can add video play logic here
  };

  return (
    <section className={cn("section-padding relative", className)}>
      <div className={cn("container", containerClass)}>
        <div className="flex flex-col justify-between gap-4 md:flex-row xl:gap-8">
          <h2 className="max-w-3xl text-4xl tracking-tight lg:text-5xl">
            Built by sellers, for high-velocity revenue teams
          </h2>
          <p className="text-muted-foreground max-w-lg text-sm">
            Flux started when our founders couldn&apos;t find a CRM that kept up with modern sales. We built the
            AI-native platform we wished existed — one that reads every signal, drafts the next move, and keeps
            pipelines moving on autopilot.
          </p>
        </div>
        {/* Video Section */}
        <div className="mt-8 lg:mt-12">
          <div className="bg-muted relative aspect-video w-full overflow-hidden rounded-md border">
            {!isPlaying ? (
              <>
                {/* Video Thumbnail/Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url(/images/videos/video-man-16x9-preview.webp)",
                  }}
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Custom Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <button
                    onClick={handlePlay}
                    className="group flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-103 hover:shadow-xl lg:h-24 lg:w-24"
                    aria-label="Play Video"
                  >
                    <PlayLinear className="ml-1 size-6 fill-black text-black lg:size-7" />
                  </button>
                  <span className="font-medium text-white">Play Video</span>
                </div>
              </>
            ) : (
              /* Video Player - Replace with your actual video */
              <video
                className="h-full w-full object-cover"
                controls
                autoPlay
                poster="/images/videos/video-man-16x9-preview.webp"
              >
                <source src="/images/videos/video-man-16x9.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground mx-auto mt-4 text-center text-xs md:mt-8">
            See how Flux turns customer signals into closed deals — from AI-drafted follow-ups to pipeline automations
            that run while you sleep.
          </p>
        </div>
      </div>
    </section>
  );
}
