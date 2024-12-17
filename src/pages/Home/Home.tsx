import Banner from "@/components/Banner/Banner";
import Care from "@/components/Care/Care";
import Contact from "@/components/Contact/Contact";
import New from "@/components/New/New";
import Shop from "@/components/Shop/Shop";
import { BiSolidContact } from "react-icons/bi";
import { FaHome, FaShoppingBasket } from "react-icons/fa";
import { GiCactusPot, GiHealthNormal } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="" id="home">
      <div className="container ">
        <Banner />
        <New />
        <Shop />
        <Care />
        <Contact />
      </div>
      {/* Mobile Menu */}
      <div className="fixed top-[50%] left-[95%] translate-x-[-95%] translate-y-[-50%] flex gap-4 flex-col p-3 bg-[#21283B] lg:hidden ">
        <HashLink className="text-white active" smooth to="/#banner">
          <FaHome />
        </HashLink>
        <HashLink className="text-white active" smooth to="/#new">
          <GiCactusPot />
        </HashLink>
        <HashLink className="text-white active" smooth to="/#shop">
          <FaShoppingBasket />
        </HashLink>
        <HashLink className="text-white active" smooth to="/#care">
          <GiHealthNormal />
        </HashLink>
        <HashLink className="text-white active" smooth to="/#contact">
          <BiSolidContact />
        </HashLink>
      </div>
    </div>
  );
};

export default Home;
