"use client";

import { Briefcase } from "@phosphor-icons/react";

export default function Join() {
  return (
    <>
      <div className="flex flex-col gap-8 items-center py-24">
        <div className="flex flex-col gap-6">
          <Briefcase size={80} color="#222222" weight="duotone" />
          <p className="text-5xl font-semibold">Join Us</p>
        </div>
        <h1 className="w-[55%] text-center text-[#222]/70">
          We are actively recruiting experienced engineers and researchers to
          join our team as members of our technical staff in the Bay Area.
          Please fill out this{" "}
          <a
            href="https://airtable.com/shrtrQqaaoBt4Xm8i"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#3b82f6]"
          >
            form
          </a>{" "}
          to apply.
        </h1>
      </div>
    </>
  );
}
