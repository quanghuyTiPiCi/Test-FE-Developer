"use client";

import Image from "next/image";

import About from "./components/About";
import Activities from "./components/Activities";
import Banner from "./components/Banner";
import Gifting from "./components/Gifting";
import Registration from "./components/Registration";

import FloatingLogo from "@/app/assets/Floating Logo.png";

export default function Home() {
  return (
    <div className="relative mx-auto h-full w-full space-y-[100px] md:max-w-[1512px]">
      <Image
        src={FloatingLogo}
        alt="Floating logo"
        width={155.17}
        height={715.83}
        className="absolute top-[1161.44px] left-[76px]"
      />
      <Banner />
      <Registration />
      <About />
      <Activities />
      <Gifting />
    </div>
  );
}
