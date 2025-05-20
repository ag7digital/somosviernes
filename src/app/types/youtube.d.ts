interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  stopVideo(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  getPlayerState(): number;
  getCurrentTime(): number;
  getDuration(): number;
  mute(): void;
  unMute(): void;
  isMuted(): boolean;
  setVolume(volume: number): void;
  getVolume(): number;
}

interface YTPlayerEvent {
  target: YTPlayer;
}

interface YTPlayerOptions {
  height?: string | number;
  width?: string | number;
  videoId?: string;
  width?: string | number;
  playerVars?: {
    autoplay?: 0 | 1;
    controls?: 0 | 1;
    rel?: 0 | 1;
    fs?: 0 | 1;
    iv_load_policy?: 1 | 3;
    modestbranding?: 0 | 1;
    playsinline?: 0 | 1;
    start?: number;
    end?: number;
    origin?: string;
  };
  events?: {
    onReady?: (event: YTPlayerEvent) => void;
    onStateChange?: (event: YTPlayerEvent) => void;
    onPlaybackQualityChange?: (event: YTPlayerEvent) => void;
    onPlaybackRateChange?: (event: YTPlayerEvent) => void;
    onError?: (event: YTPlayerEvent) => void;
    onApiChange?: (event: YTPlayerEvent) => void;
  };
}

interface YT {
  Player: {
    new (elementId: string | HTMLElement, options: YTPlayerOptions): YTPlayer;
  };
  PlayerState: {
    UNSTARTED: number;
    ENDED: number;
    PLAYING: number;
    PAUSED: number;
    BUFFERING: number;
    CUED: number;
  };
}

interface Window {
  YT?: YT;
  onYouTubeIframeAPIReady?: () => void;
}
