"use client";

import { Notepad, Planet, Sparkle } from "@phosphor-icons/react";

export default function Card() {
  return (
    <>
      <div className="flex flex-col gap-6 p-6 bg-[#222] text-white rounded-2xl w-[45%] shadow-[0_6px_56px_rgba(0,0,0,.16862745098039217)]">
        <div className="w-full flex flex-row gap-4">
          <span className="flex flex-row font-medium flex-wrap items-end px-1.5 py-0.5 rounded-lg">
            <Notepad size={28} weight="duotone" />
            Announcing xAI
          </span>
          <span className="flex flex-row font-medium gap-1 flex-wrap items-center px-1.5 py-0.5 rounded-lg bg-[#ffffff26]">
            <Sparkle size={24} weight="duotone" />
            AI
          </span>
          <span className="flex flex-row font-medium gap-1 flex-wrap items-center px-1.5 py-0.5 rounded-lg bg-[#ffffff26]">
            <Planet size={24} weight="duotone" />
            Universe
          </span>
        </div>
        <div className="text-1xl font-medium">
          Our team is led by Elon Musk, CEO of{" "}
          <a
            href="https://www.tesla.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#3b82f6]"
          >
            Tesla
          </a>{" "}
          and{" "}
          <a
            href="https://spacex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#3b82f6]"
          >
            SpaceX
          </a>
          {""}
          .
          <br />
          We have worked on and led the development of some of the largest
          breakthroughs in the field including{" "}
          <a
            href="https://www.nature.com/articles/s41586-019-1724-z"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#3b82f6]"
          >
            AlphaStar
          </a>
          {""},{" "}
          <a
            href="https://www.science.org/doi/10.1126/science.abq1158"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#3b82f6]"
          >
            AlphaCode
          </a>
          {""} ,{" "}
          <a
            href="https://arxiv.org/pdf/1409.4842.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#3b82f6]"
          >
            Inception
          </a>
          {""} ,{" "}
          <a
            href="https://ai.googleblog.com/2022/06/minerva-solving-quantitative-reasoning.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#3b82f6]"
          >
            Minerva
          </a>
          {""} ,{" "}
          <a
            href="https://platform.openai.com/docs/models/gpt-3-5"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#3b82f6]"
          >
            GPT-3.5
          </a>
          {""}, and{" "}
          <a
            href="https://openai.com/research/gpt-4"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#3b82f6]"
          >
            GPT-4
          </a>
          {""}.
        </div>
      </div>
    </>
  );
}
