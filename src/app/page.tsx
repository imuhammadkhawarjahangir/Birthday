"use client";

import { useRef, useState } from "react";
import Splash from "@/components/Splash";

function MainPlaceholder() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="text-center">
        <h1 className="text-2xl font-semibold text-zinc-900">Birthday</h1>
        <p className="mt-2 text-zinc-600">Single-page experience — one URL.</p>
      </main>
    </div>
  );
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    setShowSplash(false);
    audioRef.current?.play();
  };

  return (
    <>
      {showSplash ? <Splash onEnter={handleEnter} /> : <MainPlaceholder />}
      <audio ref={audioRef} src="/birthday/music.mp3" loop className="hidden" />
    </>
  );
}
