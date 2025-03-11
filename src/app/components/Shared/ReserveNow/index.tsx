import Link from "next/link";
import { bigShouldersDisplay } from "@/app/lib/fonts";

type Props = {};

const reserveLink = "https://booking.funarenacheb.cz/";
const ReserveNow = ({}: Props) => {
  return (
    <div className="absolute -bottom-20 left-1/2 z-5 h-[210px] w-[264.75px] -translate-x-1/2 lg:-bottom-24 xl:top-[575px] xl:left-[625px] xl:translate-none">
      <div className="absolute top-16 left-20 shadow-[0_0_80px_20px_rgba(255,255,255,0.7),0_0_80px_40px_rgba(0,159,227,0.3)]" />
      <div className="absolute right-16 bottom-14 shadow-[0_0_100px_40px_rgba(0,159,227,0.5),0_0_100px_50px_rgba(227,6,19,0.7)]" />
      <Link
        href={reserveLink}
        target="_blank"
        className="absolute top-[87px] left-0 z-20 h-[65px] w-full cursor-pointer"
      >
        <h1
          className={`absolute top-[16px] left-[37.75px] z-20 flex h-8 w-[179px] justify-between text-[32px] font-bold ${bigShouldersDisplay.className} items-center`}
        >
          <span>RESERVE</span>
          <span>NOW!</span>
        </h1>
        <div className="absolute top-0 left-[14px] z-10 h-[65px] w-[128.7px] -skew-x-[30deg] rounded-lg bg-[#009FE3]"></div>
        <div className="absolute top-0 right-[17px] h-[65px] w-[227.2px] -skew-x-[30deg] rounded-lg bg-[#E30613] text-right"></div>
      </Link>
    </div>
  );
};

export default ReserveNow;
