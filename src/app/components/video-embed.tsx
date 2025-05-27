"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoId: string;
  thumbnailUrl?: string;
  title?: string;
}

export function VideoPlayer({
  videoId,
  thumbnailUrl,
  title = "Video",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isApiReady, setIsApiReady] = useState(false);
  const playerRef = useRef<YTPlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load YouTube API
  useEffect(() => {
    // Only load the API once
    if (window.YT) {
      setIsApiReady(true);
      return;
    }

    // Create a global callback function
    window.onYouTubeIframeAPIReady = () => {
      setIsApiReady(true);
    };

    // Load the YouTube API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Clean up
    return () => {
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, []);

  // Initialize player when API is ready
  useEffect(() => {
    if (!isApiReady || !containerRef.current || playerRef.current) return;

    const playerId = `youtube-player-${videoId}`;

    // Create a div for the player
    const playerDiv = document.createElement("div");
    playerDiv.id = playerId;
    containerRef.current.appendChild(playerDiv);

    // Create YouTube player
    playerRef.current = new window.YT!.Player(playerId, {
      videoId: videoId,
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
      },
    });
  }, [isApiReady, videoId]);

  const handlePlay = () => {
    setIsPlaying(true);

    // Use a small timeout to ensure the player is ready
    setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.playVideo();
      }
    }, 100);
  };

  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden w-full">
      {/* Container for YouTube player */}
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full bg-white"
        style={{ display: isPlaying ? "block" : "none" }}
      />

      {/* Custom overlay */}
      {!isPlaying && (
        <div
          className="absolute inset-0 cursor-pointer z-10"
          onClick={handlePlay}
          aria-label={`Play ${title} video`}
        >
          {thumbnailUrl && (
            <Image
              src={thumbnailUrl}
              alt={`${title} thumbnail`}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center transition-transform transform hover:scale-110">
              <Play className="w-8 h-8 text-white fill-white" />
            </button>
          </div>
          <div className="absolute top-4 left-4 flex items-center gap-2 text-white">
            <span className="text-sm font-medium">{title}</span>
          </div>
        </div>
      )}
    </div>
  );
}
