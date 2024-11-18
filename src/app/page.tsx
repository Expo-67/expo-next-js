import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <section className=" bg-OmashuImg bg-repeat bg-cover bg-bottom w-full h-screen">
          <div className="w-full h-screen flex items-center bg-blackOverlay">
            <h1 className="flex justify-between items-center mb-4 text-5xl">
              Welcome to Omashu
            </h1>
            <Link
              className="border border-slate-300 text-slate-300 px-2 py-1 rounded
           hover:bg-slate-700 focus-within:bg-slate-700 outline-none text-2xl "
              href="/Fire"
            >
              Fire Nation
            </Link>
            <Link
              className="border border-slate-300 text-slate-300 px-2 py-1 rounded
           hover:bg-slate-700 focus-within:bg-slate-700 outline-none text-2xl"
              href="/Earth"
            >
              Earth Nation
            </Link>
            <Link
              className="border border-slate-300 text-slate-300 px-2 py-1 rounded
           hover:bg-slate-700 focus-within:bg-slate-700 outline-none text-2xl"
              href="/todo"
            >
              Todo Page
            </Link>
          </div>
        </section>
      </header>
    </div>
  );
}
