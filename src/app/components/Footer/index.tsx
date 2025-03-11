"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { spaceGrotesk } from "@/app/lib/fonts";

import LogoFooter from "../../assets/logo-footer.png";
import ArrowUp from "../../assets/icon/arrow-up.png";

import SocialMediaIcons from "@/app/components/Shared/SocialMediaIcons";

const Footer = ({}) => {
  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <footer className="mx-auto mt-[100px] w-full lg:py-20 xl:h-[319px] xl:max-w-[1512px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        className="mx-auto flex w-fit flex-col items-center justify-between gap-3 lg:h-[95px] lg:w-[90vw] lg:flex-row lg:gap-0 xl:w-[1280px] xl:px-20 2xl:px-0"
      >
        <Image src={LogoFooter} alt="Logo footer" width={200} height={95} />
        <p
          className={`${spaceGrotesk.className} w-[300px] text-sm leading-[150%] font-normal`}
        >
          New entertainment centre FUN arena Cheb. You will find entertainment
          and sports activities for children and adults here.
        </p>
        <div
          className={`${spaceGrotesk.className} flex flex-col items-start gap-2.5 text-sm leading-[150%] font-normal lg:items-end`}
        >
          <span>Potočiště 3, 350 02 Odrava</span>
          <span>fun@funarenacheb.cz</span>
          <span>+420737878891</span>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        exit="hidden"
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.2,
            },
          },
        }}
        className="mx-auto mt-10 flex h-10 flex-col items-center justify-between gap-4 lg:mt-6 lg:w-[90vw] lg:flex-row xl:w-[1280px] xl:px-20 2xl:px-0"
      >
        <SocialMediaIcons />
        <div className="relative flex flex-col items-center lg:flex-row lg:gap-12">
          <p>© 2025 FUN Arena Cheb. All rights Reserved.</p>
          <button
            className="absolute -right-8 bottom-6 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#292929] transition hover:bg-gray-800 lg:relative lg:right-0 lg:bottom-0"
            onClick={scrollToTop}
          >
            <Image src={ArrowUp} alt="Arrow up" />
          </button>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
