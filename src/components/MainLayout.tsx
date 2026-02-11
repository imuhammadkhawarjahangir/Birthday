import BirthdayMessage from "@/components/BirthdayMessage";
import PolaroidCollage from "@/components/PolaroidCollage";

export default function MainLayout() {
  return (
    <main className="min-h-screen w-full">
      <PolaroidCollage>
        <div className="w-full max-w-lg text-center">
          <BirthdayMessage />
        </div>
      </PolaroidCollage>
    </main>
  );
}
