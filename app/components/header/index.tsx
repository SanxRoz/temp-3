"use client";

import { Atom, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="py-16 flex flex-col items-center w-full magicpattern">
        <div className="flex flex-col items-center gap-5 max-w-[768px]">
          <Atom
            size={100}
            color="#222"
            weight="duotone"
            className="w-16 h-16 md:w-20 md:h-20"
          />

          <div className="flex flex-col items-center gap-6">
            <h1 className="header_text md:text-7xl text-3xl font-bold text-center">
              Connect your business with AI in seconds
            </h1>
            <p className="w-[70%] text-center text-[#222]/70">
              Integrate and automate every task of your business with AI and
              double your revenue in 3 months
            </p>
            <div className="flex flex-row gap-4">
              <button className="flex flex-row gap-2 items-center font-medium bg-[#222] text-white px-4 py-1 rounded-[10px]">
                Get Started <ArrowRight size={24} />
              </button>
              <button className="bg-black/10 px-4 py-1 rounded-[10px] font-medium">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
