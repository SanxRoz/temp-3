"use client";

export default function Team() {
  return (
    <>
      <div className="flex flex-col gap-6 items-center bg-[#222] py-24 text-white rounded-2xl shadow-[0_6px_56px_rgba(0,0,0,.16862745098039217)]">
        <h1 className="sm:text-5xl text-4xl w-[80%] sm:w-full font-semibold">
          Relation to X Corp
        </h1>
        <p className="w-[80%] md:w-[55%] text-center text-white/70">
          We are a separate company from X Corp, but will work closely with X
          (Twitter), Tesla, and other companies to make progress towards our
          mission.
        </p>
      </div>
    </>
  );
}
