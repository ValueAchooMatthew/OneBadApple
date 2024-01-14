import Link from "next/link";

export default function Home() {
  return (
    <main className="p-12 relative">
      <h1 className="text-5xl text-center font-bold text-grey-950">
        One Bad Apple
      </h1>
      <h3 className="text-center text-sm mt-3 italic">
        Addressing the United Nation's call to action for good health and wellbeing, one meal at a time.
      </h3>
      <div className="flex justify-center text-2xl mt-40 font-semibold text-white">
        <Link href={"/food-checker"} className="px-3 py-1 rounded-md bg-blue-300 mr-12">
          Check Food Health
        </Link>
        <Link href={"/mission-statement"} className="px-3 py-1 rounded-md bg-blue-300 ml-12">
          <span>
            Mission Statement
          </span>
        </Link>
      </div>
      
    </main>
  )
}
