import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import homeCactus from "../../../public/assets/home-cactus.png";

const Banner = () => {
  return (
    <div
      className="flex lg:flex-nowrap flex-wrap gap-5  banner min-h-[100vh]"
      id="banner"
    >
      <div className="flex items-center justify-center left lg:basis-1/2 basis-full">
        <img src={homeCactus} alt="" className="w-[400px] cac-home" />
      </div>
      <div className="flex flex-col items-center justify-center right lg:basis-1/2 basis-full">
        <h1 className="lg:text-[80px] text-[40px] mdl:text-[60px] font-bold text-white tracking-wide">
          ORNAMENTAL <br />{" "}
          <span className="text-[var(--primary-color)]">PLANTS</span> FOR <br />{" "}
          YOUR HOME
        </h1>
        <div className="flex items-center justify-center gap-5 mt-5">
          <Button variant="outline" className="font-bold">
            Go to Shop
          </Button>
          <Link to={"/"} className="text-white underline">
            MORE DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
