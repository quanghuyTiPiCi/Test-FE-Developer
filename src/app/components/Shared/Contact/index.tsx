import React from "react";
import Image from "next/image";

import Union from "@/app/assets/Union.svg";
import IconPhone from "@/app/assets/icon/phone-14.png";
import Flag from "@/app/assets/flag.png";
import { bigShoulders, lexendDeca, spaceGrotesk } from "@/app/lib/fonts";

const Contact = () => {
  return (
    <div
      className="absolute right-1/2 bottom-52 z-5 h-[150px] w-[382px] translate-x-1/2 rounded-3xl lg:right-12 lg:bottom-[50px] lg:translate-x-0"
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
        A few kilometers from Cheb, we have built a new entertainment centre FUN
        Arena Cheb for you. You will find entertainment and sports activities
        for children and adults here.
      </p>
      <button className="absolute right-0 -bottom-[19px] flex h-[38px] w-[178px] cursor-pointer items-center gap-2.5 rounded-[50px] bg-[#D9D9D9] py-1 pr-1 pl-3">
        <span className={`${lexendDeca.className} text-base`}>
          +420737878891
        </span>
        <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#E30613]">
          <Image src={IconPhone} alt="Phone" width={14} height={14} />
        </span>
      </button>
    </div>
  );
};

export default Contact;
