// Edit this to customize the birthday message:
export const BIRTHDAY_MESSAGE = "Happy Birthday";

export default function BirthdayMessage({
  message = BIRTHDAY_MESSAGE,
}: {
  message?: string;
}) {
  return (
    <p className="px-2 py-4 text-xl font-medium leading-relaxed text-zinc-900 sm:text-2xl sm:py-6">
      {message}
    </p>
  );
}
