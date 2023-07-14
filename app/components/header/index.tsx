"use client";

import { Atom, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="pb-24 pt-16 flex flex-col items-center w-full magicpattern">
        <div className="flex flex-col items-center gap-5 max-w-[768px]">
          <Image
            src="https://x.ai/favicon.svg"
            alt="xAI logo"
            width="80"
            height="80"
          />

          <div className="flex flex-col items-center gap-6">
            <h1 className="header_text sm:text-7xl text-3xl font-bold text-center">
              Understand the Universe
            </h1>
            <p className="w-[70%] text-center text-[#222]/70">
              The goal of xAI is to understand the true nature of the universe.
              You can meet the team and ask us questions during a{" "}
              <a
                href="https://twitter.com/xai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#3b82f6]"
              >
                Twitter Spaces chat
              </a>{" "}
              on Friday, July 14th.
            </p>
            <div className="flex flex-row gap-4">
              <Link
                href="https://twitter.com/xai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex flex-row gap-2 items-center font-medium bg-[#222] text-white px-4 py-1 rounded-[10px]">
                  Chat with Us <ArrowRight size={24} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
