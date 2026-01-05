import Link from "next/link";

export default function DesignPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4"></h1>
      <p className="text-xl opacity-60">Komt er binnenkort aan...</p>
      <Link href="/" className="mt-8 text-sm underline hover:opacity-50">
        ← Back Home
      </Link>
    </div>
  );
}