import Image from "next/image";
import Link from "next/link";

import { spaceGrotesk } from "@/app/lib/fonts";

import GiftBox from "../../assets/gift-box.png";

const buyLink = "https://vouchers.funarenacheb.cz/c/darkovy-poukaz";

const Gifting = () => {
  return (
    <div className="h-full w-full px-3 md:h-[40vw] md:px-[5vw] lg:h-72 xl:h-[109px] xl:px-0">
      <div className="relative mx-auto flex h-full flex-col items-center gap-4 rounded-3xl bg-[#E30613] py-2.5 xl:w-[1000px] xl:flex-row xl:gap-0">
        <Image
          src={GiftBox}
          alt="Gift box"
          width={220}
          height={220}
          className="absolute top-0 -translate-y-1/2 scale-75 md:scale-90 lg:top-[40px] lg:left-0"
        />
        <div className="px-5 md:mt-20 lg:mt-0 lg:ml-[227px]">
          <h1
            className={`${spaceGrotesk.className} mt-16 mb-4 text-center text-2xl leading-[41px] font-medium text-white sm:text-3xl lg:mt-10 lg:text-start xl:my-0 xl:text-center xl:text-[32px]`}
          >
            Make somebody happy with a gift voucher
          </h1>
          <p
            className={`${spaceGrotesk.className} text-justify text-sm leading-4 font-medium tracking-tight text-white lg:text-xl xl:text-base`}
          >
            The voucher is valid for all services. Unforgettable experiences for
            children and adults!
          </p>
        </div>
        <Link
          href={buyLink}
          target="_blank"
          className={`${spaceGrotesk.className} h-11 w-[115px] cursor-pointer rounded-xl bg-white px-6 py-3 text-base leading-4 font-bold text-[#292929] lg:mt-10 xl:absolute xl:top-1/2 xl:right-0 xl:mt-0 xl:translate-x-1/2 xl:-translate-y-1/2`}
        >
          Buy now
        </Link>
      </div>
    </div>
  );
};

export default Gifting;
