import Image from "next/image";
import Header from "./components/header/index";

export default function Home() {
  return (
    <main className="flex text-lg min-h-screen flex-col items-center justify-between pt-16">
      <Header />
    </main>
  );
}
