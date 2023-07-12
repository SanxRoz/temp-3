"use client";

import { PlugsConnected, ArrowRight } from "@phosphor-icons/react";

export default function Header() {
  return (
    <>
      <div className="flex flex-col items-center gap-9 max-w-[768px]">
        <PlugsConnected
          size={100}
          color="#222"
          weight="duotone"
          className="w-16 h-16 md:w-20 md:h-20"
        />

        <div className="flex flex-col items-center gap-6">
          <h1 className="header_text md:text-7xl text-3xl font-bold text-center">
            Connect your business with AI in seconds
          </h1>
          <p className="w-[70%] text-center text-black/50">
            Integrate and automate every task of your business with AI and
            double your revenue in 3 months
          </p>
          <div className="flex flex-row gap-4">
            <button className="flex flex-row gap-2 items-center font-medium bg-[#171717] text-white px-4 py-1 rounded-[10px]">Get Started <ArrowRight size={24} /></button>
            <button className="bg-black/10">Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
}
