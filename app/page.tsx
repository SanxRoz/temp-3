import Image from "next/image";
import Header from "./components/header/index";
import Card from "./components/card/index";
import Features from "./components/features/index";
import Team from "./components/team/index";
import Join from "./components/join/index";
import Footer from "./components/footer/index";

export default function Home() {
  return (
    <main className="flex text-lg min-h-screen flex-col items-center py-16">
      <div className="mission"><div className="stars stars-1"></div><div className="stars stars-2"></div></div>
      <Header />
      <Card />
      <Features />
      <Team />
      <Join />
      <Footer />
    </main>
  );
}
