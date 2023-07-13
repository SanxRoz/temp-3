"use client";

import {
  Lightning,
  Heart,
  Cube,
  Person,
  ArrowsOut,
  Shapes,
  BezierCurve,
  Aperture,
} from "@phosphor-icons/react";

interface Elements {
  Lightning: JSX.Element;
  Heart: JSX.Element;
  Cube: JSX.Element;
  Design: JSX.Element;
  Playful: JSX.Element;
  Big: JSX.Element;
  Custom: JSX.Element;
  User: JSX.Element;
  [key: string]: JSX.Element;
}

interface datatype {
  text: string;
  icon: string;
}

const iconComponents: Elements = {
  Lightning: <Lightning size={80} color="#ffadad" weight="duotone" />,
  Heart: <Heart size={80} color="#ffd6a5" weight="duotone" />,
  Cube: <Cube size={80} color="#fdffb6" weight="duotone" />,
  BezierCurve: <BezierCurve size={80} color="#caffbf" weight="duotone" />,
  Shapes: <Shapes size={80} color="#9bf6ff" weight="duotone" />,
  ArrowsOut: <ArrowsOut size={80} color="#a0c4ff" weight="duotone" />,
  Aperture: <Aperture size={80} color="#bdb2ff" weight="duotone" />,
  Person: <Person size={80} color="#ffc6ff" weight="duotone" />,
};

const Valuedata: datatype[] = [
  {
    heading: "Agility <br> Artists",
    icon: "Lightning",
  },
  {
    heading: "Innovators<br> at Heart",
    icon: "Heart",
  },
  {
    heading: "Transparency<br> Trailblazers",
    icon: "Cube",
  },
  {
    heading: "Empowerment<br> Evangelists",
    icon: "Person",
  },
  {
    heading: "Change<br> Chameleons",
    icon: "BezierCurve",
  },
  {
    heading: "Teamwork<br> Titans",
    icon: "Shapes",
  },
  {
    heading: "Efficiency<br> Experts",
    icon: "ArrowsOut",
  },
  {
    heading: "Solution <br>Seekers",
    icon: "Aperture",
  },
];

export default function Features() {
  return (
    <>
      <div className="py-16">
        <div className="grid grid-cols-4 gap-4">
          {Valuedata.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2.5 bg-transparent"
            >
              {iconComponents[item.icon]}
              <h4
                className="text-3xl font-bold text-center mb-5"
                dangerouslySetInnerHTML={{ __html: item.heading }}
              ></h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
