import React, { useState, useEffect, useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const volume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
    setVolume(volume);
  };

  const handleFullScreenToggle = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="container px-4 lg:px-10 flex justify-center items-center">
        <section className="flex flex-col justify-center items-center w-full py-8 gap-8">
          <div className="flex flex-col justify-center items-center gap-2 lg:gap-4 text-center">
            <h1 className="text-2xl lg:text-4xl font-bold drop-shadow-lg">
              Craft Stunning Videos Effortlessly with AI.
            </h1>
            <p className="lg:text-lg font-semibold leading-relaxed w-full lg:w-3/4">
              Enhance your video content with dynamic Captions, Engaging
              Effects, and Smooth Transitions.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center h-96 lg:h-[500px] w-full lg:w-3/4 relative rounded-lg bg-gradient-to-t from-[#f4c4f3] to-[#fc67fa]">
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-t"
              onEnded={handleVideoEnd}
              onTimeUpdate={handleTimeUpdate}
            >
              <source src="./assets/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Controls
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
              volume={volume}
              onVolumeChange={handleVolumeChange}
              onFullScreenToggle={handleFullScreenToggle}
              isFullScreen={isFullScreen}
              currentTime={currentTime}
              duration={duration}
            />
            <ProgressBar videoRef={videoRef} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideoSection;

const Controls = ({
  isPlaying,
  onPlayPause,
  volume,
  onVolumeChange,
  onFullScreenToggle,
  isFullScreen,
  currentTime,
  duration,
}) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex flex-col items-center gap-4 absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-2 w-full">
      <div className="relative flex justify-center items-center gap-2 lg:gap-4 w-full">
        <button
          onClick={onPlayPause}
          className="bg-gradient-to-l from-pink-600 to-pink-900 rounded-full px-6 py-2 lg:min-w-28 text-xs lg:text-base text-white font-semibold"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <div className="flex justify-center items-center gap-2 bg-gradient-to-l from-pink-600 to-pink-900 rounded-full px-4 py-2 lg:min-w-28 text-xs lg:text-base text-white ">
          <span>{formatTime(currentTime)}</span>
          <span>/</span>
          <span>{formatTime(duration)}</span>
        </div>

        <button
          onClick={onFullScreenToggle}
          className="bg-gradient-to-l from-pink-600 to-pink-900 rounded-full px-4 py-2 lg:min-w-28 text-xs lg:text-base text-white font-semibold"
        >
          {isFullScreen ? "Full Screen" : "Full Screen"}
        </button>
      </div>
      <div className="absolute bottom-20 lg:bottom-0 right-2 lg:right-4">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          orient="vertical"
          value={volume}
          onChange={onVolumeChange}
          className="bg-gray-500 rounded-full"
        />
      </div>
    </div>
  );
};

const ProgressBar = ({ videoRef }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        const currentProgress =
          (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(currentProgress);
      }
    };

    const videoElement = videoRef.current;
    videoElement?.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoElement?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [videoRef]);

  return (
    <div className="progress-bar bg-gray-200 h-2 w-full rounded-b-full">
      <div
        className="bg-pink-500 h-2 rounded-b-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
