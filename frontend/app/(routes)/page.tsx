import Link from "next/link";

export default function Home() {
  return (
    <main className="p-12 relative">
      <h1 className="text-5xl text-center font-bold text-grey-950">
        One Bad Apple
      </h1>
      <h3 className="text-center text-sm mt-5 italic">
        Addressing the United Nation's call to action for good health and wellbeing, one meal at a time.
      </h3>
      <div className="flex justify-center text-2xl mt-32 font-semibold text-white">
        <Link href={"/food-checker"} className="px-3 py-1 rounded-md bg-[#0099CA] hover:bg-[#0099FA] mr-12 hover:-translate-y-4 transition-all duration-300">
          Check Food Health
        </Link>
        <Link href={"/mission-statement"} className="px-3 py-1 rounded-md bg-[#0099CA] hover:bg-[#0099FA] ml-12 hover:-translate-y-4 transition-all duration-300">
          <span>
            Mission Statement
          </span>
        </Link>
      </div>
      
    </main>
  )
}
