"use client";

import { Notepad, HashStraight, Seal } from "@phosphor-icons/react";

export default function Card() {
  return (
    <>
      <div className="flex flex-col gap-6 p-6 bg-[#222] text-white rounded-2xl w-[40%] shadow-[0_6px_56px_rgba(0,0,0,.16862745098039217)]">
        <div className="w-full flex flex-row gap-4">
          <span className="flex flex-row font-medium flex-wrap items-end px-1.5 py-0.5 rounded-lg">
            <Notepad size={28} weight="duotone" />
            Note
          </span>
          <span className="flex flex-row font-medium flex-wrap items-center px-1.5 py-0.5 rounded-lg bg-[#ffffff26]">
            <HashStraight size={24} weight="duotone" />
            AI
          </span>
          <span className="flex flex-row font-medium flex-wrap items-center px-1.5 py-0.5 rounded-lg bg-[#ffffff26]">
            <HashStraight size={24} weight="duotone" />
            Business
          </span>
        </div>
        <div className="text-2xl font-medium">
          AI may seem overwhelming
          <br /> We&apos;re here to simplify it. Together, we&apos;ll unlock
          AI&apos;s potential to solve challenges across your business
        </div>
      </div>
    </>
  );
}
