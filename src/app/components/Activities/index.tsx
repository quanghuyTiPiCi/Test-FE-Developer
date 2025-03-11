import Image from "next/image";
import { motion } from "framer-motion";

import { bigShoulders, spaceGrotesk } from "@/app/lib/fonts";

import PolygonBlue from "@/app/assets/icon/Polygon-2.png";
import PolygonRed from "@/app/assets/icon/Polygon-3.png";
import KartMini from "@/app/assets/activities/kart-mini.png";
import JumpMini from "@/app/assets/activities/jump-mini.png";
import VirtualMini from "@/app/assets/activities/virtual-mini.png";
import MultiballMini from "@/app/assets/activities/multiball-mini.png";
import ShootingMini from "@/app/assets/activities/shooting-mini.png";
import EventsMini from "@/app/assets/activities/events-mini.png";
import Shape from "@/app/assets/Shape.png";
import Mask from "../Shared/Mask";

type Props = {};

const masks = [
  { title: "KARTARENA", src: KartMini },
  { title: "JUMPARENA", src: JumpMini },
  { title: "VIRTUAL REALITY", src: VirtualMini },
  { title: "MULTIBALL", src: MultiballMini },
  { title: "LASER SHOOTING RANGE", src: ShootingMini },
  { title: "COMPANY EVENTS", src: EventsMini },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -140,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const Activities = ({}: Props) => {
  const selectActivity = "JUMPARENA";
  return (
    <div className="w-full overflow-hidden px-3 md:px-[5vw] lg:py-[100px] xl:h-[858px] xl:px-20 2xl:px-[116px]">
      <div className="flex flex-col justify-between xl:flex-row xl:items-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
          }}
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          className={`${bigShoulders.className} text-5xl leading-[100%] font-bold text-[#D9D9D9] uppercase lg:text-7xl`}
        >
          OUR ATTRACTIONS
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
          }}
          variants={{
            hidden: {
              opacity: 0,
              x: 100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          className={`${spaceGrotesk.className} mt-3 flex justify-between text-base leading-[100%] font-medium text-[#D9D9D9] xl:mt-0`}
        >
          Multiple activities at Fun Arena Cheb
          <div className="flex">
            <Image
              src={PolygonRed}
              alt="Polygon Red"
              width={16}
              height={16}
              className="ml-6"
            />
            <Image
              src={PolygonBlue}
              alt="Polygon Blue"
              width={16}
              height={16}
            />
          </div>
        </motion.div>
      </div>
      <div className="mt-12 flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={containerVariants}
          className="space-y-3 lg:py-10 xl:w-[500px]"
        >
          {masks.map((item, i) => (
            <motion.div variants={itemVariants} key={i} className="h-fit w-fit">
              <Mask
                src={item.src}
                title={item.title}
                activity={selectActivity}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="relative z-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <Image src={Shape} alt="Shape" width={780} height={524} />
          </motion.div>
          <div className="absolute bottom-0 left-0 flex w-full flex-col md:flex-row md:items-end md:justify-between md:pl-[33px]">
            <p
              className={`${spaceGrotesk.className} mb-6 text-base leading-5 font-normal text-white md:h-[60px] md:w-[366.49px]`}
            >
              Arena with lots of attractions for children and adults of all
              ages. Trampolines, climbing wall, ninja track and other
              attractions.
            </p>
            <motion.button
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                  },
                },
              }}
              className={`h-8 w-full cursor-pointer rounded-full bg-[#D9D9D9] px-4 py-1 md:h-11 md:w-[155px] md:px-6 md:py-3 ${spaceGrotesk.className} text-base leading-[100%] font-bold text-[#292929]`}
            >
              Find out more
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
