"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import {
  bigShoulders,
  bigShouldersStencil,
  lexendDeca,
  spaceGrotesk,
} from "@/app/lib/fonts";

import Go from "@/app/assets/banner/kart.png";
import Jump from "@/app/assets/banner/jump.png";
import Laser from "@/app/assets/banner/laser.png";
import Multi from "@/app/assets/banner/multiball.png";
import Virtual from "@/app/assets/banner/virtual.png";
import Flag from "@/app/assets/flag.png";
import IconPhone from "@/app/assets/icon/phone-14.png";
import Union from "@/app/assets/Union (1).svg";

const slides = [
  {
    caption: "GO-KARTS",
    description:
      "Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts.",
    src: Go,
    background: `linear-gradient(180deg, rgba(25, 25, 25, 0) 52.85%, #191919 100%)`,
  },
  {
    caption: "JUMPARENA",
    description:
      "Aréna se spoustou atrakcí pro děti i dospělé všech věkových kategorií. Trampolíny, lezecká stěna, ninja dráha a další atrakce.",
    src: Jump,
    background: `linear-gradient(180deg, rgba(25, 25, 25, 0) 52.85%, #191919 88.21%)`,
  },
  {
    caption: "Virtuální realita",
    description:
      "Díky naší virtuální realitě vstoupíte do jiného světa a poznáte nové technologie. Vyberte si z naší nabídky her a zažijte VR na vlastní kůži.",
    src: Virtual,
    background: `linear-gradient(180deg, rgba(25, 25, 25, 0) 52.85%, #191919 100%)`,
  },
  {
    caption: "MULTIBALL",
    description:
      "Interaktivní sportovní a herní konzole, která z pohybu a vzdělávání dělá opravdovou zábavu. Velké množství her zaujme všechny věkové kategorie.",
    src: Multi,
    background: `linear-gradient(180deg, rgba(25, 25, 25, 0) 52.85%, #191919 88.21%)`,
  },
  {
    caption: "Laserová střelnice",
    description:
      "Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice se třemi režimy střelby na čas otestuje nejen vaši přesnost, ale také rychlost a postřeh.",
    src: Laser,
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(180deg, rgba(25, 25, 25, 0) 52.85%, #191919 88.21%)`,
  },
];

const SwiperSlider = () => {
  const pagination = {
    clickable: true,
  };

  return (
    <Swiper
      slidesPerView={1}
      loop
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay, Pagination]}
      pagination={pagination}
      effect="fade"
      className="relative h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="overflow-hidden">
          <Image
            src={slide.src}
            alt={`Slide ${index + 1}`}
            width={0}
            height={0}
          />
          <div
            className="absolute inset-0 h-full w-full"
            style={{
              background: slide.background,
            }}
          />
          <div className="absolute bottom-[400px] left-1/2 -translate-x-1/2 lg:bottom-[90px] lg:left-12 lg:translate-x-0">
            <h1
              className={`${bigShouldersStencil.className} 2xl mb-6 w-auto text-6xl leading-[100%] font-bold uppercase lg:h-36 lg:text-7xl xl:text-[120px]`}
            >
              {slide.caption}
            </h1>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
              <p
                className={`font-space w-[347px] text-sm leading-[18px] font-normal text-[#D9D9D9]`}
              >
                {slide.description}
              </p>
              <button
                className={`${spaceGrotesk.className} ml-2.5 h-[49px] w-[134px] -skew-x-[30deg] cursor-pointer rounded-lg border-1 text-base leading-4 font-medium text-white lg:ml-0 lg:text-[#D9D9D9]`}
              >
                <span className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 skew-x-[30deg]">
                  Find out more
                </span>
              </button>
            </div>
          </div>
          {/* <div
            className="absolute right-1/2 bottom-52 h-[150px] w-[382px] translate-x-1/2 rounded-3xl lg:right-12 lg:bottom-[50px] lg:translate-x-0"
            style={{
              backgroundImage: `url("${Union.src}")`,
            }}
          >
            <Image
              src={Flag}
              alt="Flag"
              width={87}
              height={87}
              className="absolute right-[312px] bottom-[94px]"
            />
            <div className="absolute -top-2 left-32 shadow-[0_0_80px_20px_rgba(255,255,255,0.7),0_0_80px_40px_rgba(0,159,227,0.3)]" />
            <div className="absolute right-24 bottom-14 shadow-[0_0_100px_40px_rgba(0,159,227,0.5),0_0_100px_50px_rgba(227,6,19,0.7)]" />
            <h1
              className={`${bigShoulders.className} mt-2 ml-3.5 w-[352px] text-right text-[32px] leading-[38px] uppercase`}
            >
              Everyday fun for everyone
            </h1>
            <p
              className={`${spaceGrotesk.className} mt-3 mr-4 ml-3.5 text-sm leading-[18px] font-normal`}
            >
              A few kilometers from Cheb, we have built a new entertainment
              centre FUN Arena Cheb for you. You will find entertainment and
              sports activities for children and adults here.
            </p>
            <button className="absolute right-0 -bottom-[19px] flex h-[38px] w-[178px] cursor-pointer items-center gap-2.5 rounded-[50px] bg-[#D9D9D9] py-1 pr-1 pl-3">
              <span className={`${lexendDeca.className} text-base`}>
                +420737878891
              </span>
              <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#E30613]">
                <Image src={IconPhone} alt="Phone" width={14} height={14} />
              </span>
            </button>
          </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
