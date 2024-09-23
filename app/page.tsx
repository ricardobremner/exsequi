import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-[#dae2f9] text-[#0b457d] p-4 md:h-52">
        <h1 className={`${lusitana.className}  text-4xl md:text-8xl lg:text-9xl`}>Exsequi</h1> 
      </div>
      <div className="justify-center mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className}  text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            Welcome to Exsequi, your task manager by excellence.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium  transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Try it</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
