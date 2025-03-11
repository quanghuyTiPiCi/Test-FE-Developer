"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { bigShoulders, spaceGrotesk } from "@/app/lib/fonts";

import ArrowRight from "@/app/assets/icon/arrow-right.png";
import Polygon from "@/app/assets/icon/Polygon-1.png";
import VideoRacing from "@/app/assets/video-racing.png";

type Props = {};

const variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const About = ({}: Props) => {
  return (
    <div className="relative w-full overflow-hidden px-3 md:px-[5vw] xl:h-[867px] xl:px-0">
      <div className="mx-auto h-full xl:w-[1280px] xl:px-20 2xl:px-0">
        <div className="h-56 xl:ml-[233px] xl:h-[252px]">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={variants}
            className={`lg:h-[172px] lg:w-[578px] ${bigShoulders.className} text-5xl leading-[100%] font-bold text-[#D9D9D9] uppercase lg:text-7xl`}
          >
            New entertainment centre near Cheb
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={variants}
            className="mt-8 flex flex-col items-start justify-between lg:flex-row lg:items-end"
          >
            <p
              className={`${spaceGrotesk.className} mb-5 w-[365px] text-base leading-[150%] text-[#D9D9D9] lg:mb-0`}
            >
              We have been entertaining children and adults in western Bohemia
              for more than 10 years!
            </p>
            <button
              className={`${spaceGrotesk.className} flex cursor-pointer items-center text-base leading-[100%] font-medium text-[#D9D9D9]`}
            >
              Find more about us
              <Image
                src={ArrowRight}
                alt="Arrow Right"
                width={24}
                height={24}
                className="ml-3"
              />
            </button>
          </motion.div>
        </div>
        <div className="relative mt-5 lg:mt-12">
          <button className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl bg-[#009FE3]">
            <Image src={Polygon} alt="Polygon" width={35} height={39.19} />
          </button>
          <Image
            src={VideoRacing}
            width={1280}
            height={567}
            alt="Video Racing"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
