"use client";

export default function Splash({ onEnter }: { onEnter?: () => void }) {
  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center justify-center gap-8 bg-zinc-100 px-6">
      <p className="max-w-md text-center text-xl font-medium text-zinc-900 sm:text-2xl">
        Welcome, This is my Birthday Gift to you my Love
      </p>
      <button
        type="button"
        onClick={() => onEnter?.()}
        className="min-h-[44px] min-w-[200px] rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800 active:bg-zinc-700"
      >
        Tap to see your gift
      </button>
    </div>
  );
}
