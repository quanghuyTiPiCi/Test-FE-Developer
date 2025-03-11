import SwiperSlider from "../Slider";
import ReserveNow from "../Shared/ReserveNow";
import Contact from "../Shared/Contact";

const Banner = () => {
  return (
    <div className="relative">
      <SwiperSlider />
      <ReserveNow />
      <Contact />
    </div>
  );
};

export default Banner;
