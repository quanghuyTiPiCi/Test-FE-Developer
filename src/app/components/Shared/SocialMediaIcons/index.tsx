import Image from "next/image";
import Link from "next/link";

import Camera from "@/app/assets/icon/camera.png";
import Facebook from "@/app/assets/icon/facebook.png";
import Mail from "@/app/assets/icon/mail.png";
import Phone from "@/app/assets/icon/phone.png";

type Props = {};

const SocialMediaIcons = (props: Props) => {
  return (
    <div className="flex w-fit items-center justify-center gap-3 rounded-full bg-[#292929] px-3 py-1">
      <Link
        href="https://www.facebook.com"
        className="transition duration-500 hover:opacity-50"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={Facebook} alt="Facebook-link" />
      </Link>
      <Link
        href="https://www.instagram.com"
        className="transition duration-500 hover:opacity-50"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={Camera} alt="Instagram-link" />
      </Link>
      <Link
        href="https://www.gmail.com"
        className="transition duration-500 hover:opacity-50"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={Mail} alt="gmail-link" />
      </Link>
      <Link
        href="tel:0909999999"
        className="transition duration-500 hover:opacity-50"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={Phone} alt="Phone" />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
