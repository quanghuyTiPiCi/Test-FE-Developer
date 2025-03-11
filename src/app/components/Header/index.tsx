import Image from "next/image";

import Logo from "../../assets/Logo.png";
import Framer from "../../assets/icon/Frame.png";
import Menu from "../../assets/icon/Menu Icon.png";

type Props = {};

const Header = () => {
  return (
    <nav className="fixed top-5 z-[100] h-12 w-screen px-3 lg:left-1/2 lg:w-full lg:-translate-x-1/2 2xl:max-w-[1420px] 2xl:px-0">
      <div className="flex justify-between">
        <div>
          <Image src={Logo} width={0} height={0} alt="Logo" />
        </div>
        <div className="flex h-12 w-[108px] items-center justify-between">
          <Image src={Framer} width={28} height={28} alt="Framer" />
          <Image src={Menu} width={48} height={48} alt="Menu icon" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
