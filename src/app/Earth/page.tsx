import Link from "next/link";
export default function Earth() {
  return (
    <div>
      <header>
        <section className=" bg-EarthImg bg-repeat bg-cover bg-bottom w-full h-screen">
          <div className="w-full h-screen flex items-center bg-blackOverlay">
            <h1 className="flex justify-between items-center mb-4 text-5xl">
              Welcome to Earth Kingdom
            </h1>
            <Link
              href=".."
              className="border border-slate-300 text-slate-300 px-2 py-1 rounded
           hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            >
              Back
            </Link>
          </div>
        </section>
      </header>
    </div>
  );
}
