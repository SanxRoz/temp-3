"use client";

import { TwitterLogo } from "@phosphor-icons/react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="flex justify-between flex-wrap items-end w-full px-7">
        <div className="flex gap-4">
          <TwitterLogo size={32} color="#222222" weight="duotone" />
          <a
            href="https://people.eecs.berkeley.edu/~hendrycks/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            @xAI
          </a>
        </div>
        <p>xAI Corp</p>
        <Image
          src="https://x.ai/favicon.svg"
          alt="xAI logo"
          width="40"
          height="40"
        />
      </div>
    </>
  );
}
