import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { bigShoulders, spaceGrotesk } from "@/app/lib/fonts";

import Subtract from "../../assets/Subtract.png";
import SubtractLong from "../../assets/Subtract-long.png";
import QRCode from "../../assets/qrcode.png";

type Props = {};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 140,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const captionVariants = {
  hidden: {
    opacity: 0,
    x: -140,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const registerLink = "https://web.racefacer.com/kiosk/kartarenacheb";

const Registration = ({}: Props) => {
  return (
    <div className="mx-auto w-full overflow-hidden px-3 md:px-[5vw] lg:py-[100px] xl:h-[728px] xl:px-0">
      <div className="xl:mx-auto xl:h-[528px] xl:w-[1280px] xl:px-20 2xl:px-0">
        <div className="grid xl:grid-cols-[1fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={containerVariants}
            className="mb-5 md:w-[90vw] xl:mb-0 xl:w-[486px] 2xl:w-[566px]"
          >
            <motion.h1
              variants={captionVariants}
              className={`${bigShoulders.className} mb-8 text-5xl leading-[100%] font-bold text-[#D9D9D9] uppercase lg:h-[86px] lg:text-7xl`}
            >
              Registration
            </motion.h1>
            <motion.p
              variants={captionVariants}
              className={`${spaceGrotesk.className} text-justify text-base leading-[150%] text-[#D9D9D9]`}
            >
              For organizational and security reasons, every visitor to the FUN
              arena Cheb must register before entering the attraction. At the
              reception, your registration will be completed and you will
              receive a loyalty card which you will use for our services.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={containerVariants}
            className=""
          >
            {/* CHOOSE AN ATTRACTION */}
            <motion.div
              className="relative mb-12 h-24 xl:h-[144px]"
              variants={itemVariants}
            >
              <div className="flex items-end">
                <div className="relative w-[clamp(50px,10vw,66.5px)]">
                  <Image
                    src={Subtract}
                    alt="Subtract"
                    width={66.5}
                    height={50}
                  />
                  <span
                    className={`absolute -top-1.5 left-[16.5px] ${spaceGrotesk.className} text-5xl leading-[50px] font-bold text-[#009FE3] md:top-0 md:text-6xl xl:text-7xl`}
                  >
                    1
                  </span>
                </div>
                <div className="relative w-[clamp(200px,78vw,581px)] -translate-x-2">
                  <Image
                    src={SubtractLong}
                    alt="Subtract"
                    width={581}
                    height={64}
                  />
                </div>
              </div>
              <div className="absolute -top-3.5 left-0 pl-16 md:-top-0 md:pl-32 xl:pl-[100px]">
                <h2
                  className={`${spaceGrotesk.className} text-2xl leading-16 font-bold text-[#D9D9D9]`}
                >
                  Choose an Attraction
                </h2>
                <p
                  className={`${spaceGrotesk.className} mt-2 text-base leading-[150%] font-normal text-[#D9D9D9]`}
                >
                  Choose from the attractions of the FUN arena.
                </p>
              </div>
            </motion.div>
            {/* REGISTER */}
            <motion.div
              className="relative mb-12 h-72 lg:h-44 xl:h-[144px]"
              variants={itemVariants}
            >
              <div className="flex items-end">
                <div className="relative w-[clamp(50px,10vw,66.5px)]">
                  <Image
                    src={Subtract}
                    alt="Subtract"
                    width={66.5}
                    height={50}
                  />
                  <span
                    className={`absolute -top-1.5 left-[16.47px] md:top-0 ${spaceGrotesk.className} text-5xl leading-[50px] font-bold text-[#009FE3] md:text-6xl xl:text-7xl`}
                  >
                    2
                  </span>
                </div>
                <div className="relative w-[clamp(200px,78vw,581px)] -translate-x-2">
                  <Image
                    src={SubtractLong}
                    alt="Subtract"
                    width={581.12}
                    height={64}
                  />
                </div>
              </div>
              <div className="absolute -top-3.5 left-0 flex flex-col gap-3 pl-16 md:top-0 md:pl-32 lg:flex-row xl:pl-[100px]">
                <div className="md:w-[70vw] lg:w-[368px]">
                  <div className="relative flex items-center justify-between">
                    <h2
                      className={`${spaceGrotesk.className} text-2xl leading-16 font-bold text-[#D9D9D9]`}
                    >
                      Register
                    </h2>
                    <Link
                      href={registerLink}
                      target="_blank"
                      className={`${spaceGrotesk.className} h-[26px] w-[86px] rounded-lg bg-[#E30613] px-2 py-1 text-sm leading-[18px] font-bold`}
                    >
                      Click here
                    </Link>
                  </div>
                  <p
                    className={`${spaceGrotesk.className} mt-2 text-base leading-[150%] font-normal text-[#D9D9D9]`}
                  >
                    You can register at the reception or by clicking the button
                    above from the comfort of your home.
                  </p>
                </div>
                <Image
                  src={QRCode}
                  alt="QR code"
                  width={128}
                  height={128}
                  className="mt-3.5"
                />
              </div>
            </motion.div>
            {/* HAVE FUN */}
            <motion.div
              className="relative h-24 xl:h-[144px]"
              variants={itemVariants}
            >
              <div className="flex items-end">
                <div className="relative w-[clamp(50px,10vw,66.5px)]">
                  <Image
                    src={Subtract}
                    alt="Subtract"
                    width={66.5}
                    height={50}
                  />
                  <span
                    className={`absolute -top-1.5 left-[16.47px] md:top-0 ${spaceGrotesk.className} text-5xl leading-[50px] font-bold text-[#009FE3] md:text-6xl xl:text-7xl`}
                  >
                    3
                  </span>
                </div>
                <div className="relative w-[clamp(200px,78vw,581px)] -translate-x-2">
                  <Image
                    src={SubtractLong}
                    alt="Subtract"
                    width={581.12}
                    height={64}
                  />
                </div>
              </div>
              <div className="absolute -top-3.5 left-0 pl-16 md:top-0 md:w-[80vw] md:pl-32 xl:w-auto xl:pl-[100px]">
                <h2
                  className={`${spaceGrotesk.className} text-2xl leading-16 font-bold text-[#D9D9D9]`}
                >
                  Have Fun
                </h2>
                <p
                  className={`${spaceGrotesk.className} mt-2 text-base leading-[150%] font-normal text-[#D9D9D9]`}
                >
                  Thank you for your online registrations. For each purchase you
                  get points, which you can apply to our services and
                  attractions then. We look forward to you!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
