import Image from "next/image";
import { bigShoulders } from "@/app/lib/fonts";

type Props = {
  src: any;
  title: string;
  activity: string;
};

const Mask = ({ src, title, activity }: Props) => {
  const isSelected = activity === title;
  return (
    <div
      className={`relative ml-2 h-10 w-[70vw] -skew-x-[25.25deg] overflow-hidden rounded-2xl lg:h-16 ${isSelected ? "lg:w-[35vw] xl:w-[550px]" : "lg:w-[30vw] xl:w-[430px]"}`}
    >
      <h2
        className={`${isSelected ? "lg:-translate-x-5 xl:-translate-x-[90px]" : "text-[#292929]"} ${bigShoulders.className} absolute top-1/2 right-8 z-20 w-full -translate-y-1/2 skew-x-[25.25deg] text-right text-2xl leading-[38px] font-normal uppercase lg:w-[350px] lg:text-[32px]`}
      >
        {title}
      </h2>
      <div
        className={`${isSelected ? "bg-gradient-dark" : "bg-gradient-light"} absolute top-0 left-0 z-10 h-full w-full`}
      />
      <div className="skew-x-[25.25deg]">
        <Image src={src} alt="Kart Mini" width={276} height={0} />
      </div>
    </div>
  );
};

export default Mask;
