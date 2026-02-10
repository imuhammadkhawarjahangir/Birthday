import BirthdayMessage from "@/components/BirthdayMessage";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 font-sans sm:px-6 lg:px-8">
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-center justify-center text-center">
        <div className="w-full max-w-lg">
          <BirthdayMessage />
        </div>
      </main>
    </div>
  );
}
