"use client";

import { useRef, useState } from "react";
import MainLayout from "@/components/MainLayout";
import Splash from "@/components/Splash";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    setShowSplash(false);
    audioRef.current?.play();
  };

  return (
    <>
      {showSplash ? <Splash onEnter={handleEnter} /> : <MainLayout />}
      <audio ref={audioRef} src="/birthday/music.mp3" loop className="hidden" />
    </>
  );
}
