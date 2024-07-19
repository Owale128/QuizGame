import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="font-bold text-3xl">Home Page</h1>
        <Link href='/quiz'>
          <button className="border-2 border-black rounded p-1">Start Quiz</button>
        </Link>
    </main>
  );
}
