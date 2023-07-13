import Image from "next/image";
import Header from "./components/header/index";
import Card from "./components/card/index";
import Features from "./components/features/index";

export default function Home() {
  return (
    <main className="flex text-lg min-h-screen flex-col items-center py-16">
      <Header />
      <Card />
      <Features />
    </main>
  );
}
