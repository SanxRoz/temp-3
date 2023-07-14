"use client";

import Link from "next/link";
import Image from "next/image";

interface datatype {
  heading: string;
  link: string;
  class: string;
}

const Valuedata: datatype[] = [
  {
    heading: "Elon <br> Musk",
    link: "https://twitter.com/elonmusk",
    class: "img-0",
  },
  {
    heading: "Igor <br> Babuschkin",
    link: "https://twitter.com/ibab_ml",
    class: "img-1",
  },
  {
    heading: "Manuel <br> Kroiss",
    link: "https://twitter.com/makro_ai",
    class: "img-2",
  },
  {
    heading: "Yuhuai <br> (Tony) Wu",
    link: "https://twitter.com/yuhu_ai_",
    class: "img-3",
  },
  {
    heading: "Christian <br> Szegedy",
    link: "https://twitter.com/chrszegedy",
    class: "img-4",
  },
  {
    heading: "Jimmy <br> Ba",
    link: "https://twitter.com/jimmybajimmyba",
    class: "img-5",
  },
  {
    heading: "Toby <br> Pohlen",
    link: "https://twitter.com/tobyphln",
    class: "img-6",
  },
  {
    heading: "Ross <br> Nordeen",
    link: "https://twitter.com/rpoo",
    class: "img-7",
  },
  {
    heading: "Kyle <br> Kosic",
    link: "https://twitter.com/kylekosic",
    class: "img-8",
  },
  {
    heading: "Greg <br> Yang",
    link: "https://twitter.com/thegregyang",
    class: "img-9",
  },
  {
    heading: "Guodong <br> Zhang",
    link: "https://twitter.com/guodzh",
    class: "img-10",
  },
  {
    heading: "Zihang <br> Dai",
    link: "https://twitter.com/zihangdai",
    class: "img-11",
  },
];

export default function Features() {
  return (
    <>
      <div className="flex flex-col gap-16 items-center py-24">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-5xl font-semibold">Meet the team</h1>
          <p className="w-[55%] text-center text-[#222]/70">
            We have previously worked at{" "}
            <a
              href="https://deepmind.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              DeepMind
            </a>
            {""},{" "}
            <a
              href="https://openai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              OpenAI
            </a>
            {""},{" "}
            <a
              href="https://research.google/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              Google Research
            </a>
            {""},{" "}
            <a
              href="https://www.microsoft.com/en-us/research/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              Microsoft Research
            </a>
            {""},{" "}
            <a
              href="https://tesla.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              Tesla
            </a>
            {""}, and the{" "}
            <a
              href="https://www.utoronto.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              University of Toronto
            </a>
            {""}. Collectively we contributed some of the most widely used
            methods in the field, in particular the{" "}
            <a
              href="https://arxiv.org/abs/1412.6980"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              Adam optimizer
            </a>
            {""},{" "}
            <a
              href="https://arxiv.org/abs/1502.03167"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              Batch Normalization
            </a>
            {""},{" "}
            <a
              href="https://arxiv.org/abs/1607.06450"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              Layer Normalization
            </a>
            {""}, and the discovery of{" "}
            <a
              href="https://arxiv.org/abs/1312.6199"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              adversarial examples
            </a>
            {""}. We further introduced innovative techniques and analyses such
            as{" "}
            <a
              href="https://arxiv.org/abs/1901.02860"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              Transformer-XL
            </a>
            {""},{" "}
            <a
              href="https://arxiv.org/abs/2205.12615"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              Autoformalization
            </a>
            {""}, the{" "}
            <a
              href="https://arxiv.org/abs/2203.08913"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              Memorizing Transformer
            </a>
            {""},{" "}
            <a
              href="https://arxiv.org/abs/1907.04164"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              Batch Size Scaling
            </a>
            {""}, and{" "}
            <a
              href="http://arxiv.org/abs/2203.03466"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#3b82f6]"
            >
              μTransfer
            </a>
            {""}.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {Valuedata.map((item, i) => (
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <div
                key={i}
                className="flex flex-col items-center gap-2.5 bg-transparent"
              >
                <div className={`teamImg ${item.class}`} />

                <h4
                  className="text-2xl font-bold text-center"
                  dangerouslySetInnerHTML={{ __html: item.heading }}
                ></h4>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-4xl font-semibold">Advisory</h1>
          <Image
            src="https://people.eecs.berkeley.edu/~hendrycks/me_2018_high_def.JPG"
            alt="Advisor pfp"
            width="80"
            height="80"
          />
          <div className={`advisorImg`} />
          <p className="w-[55%] text-center text-[#222]/70">
            Our team is advised by Dan Hendrycks who currently serves as the
            director of the Center for AI Safety.
          </p>
        </div>
      </div>
    </>
  );
}
