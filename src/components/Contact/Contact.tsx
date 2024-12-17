import { FaFacebookMessenger } from "react-icons/fa";
import "./Contact.scss";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import contactCactus from "../../../public/assets/contact-cactus.png";

const Contact = () => {
  return (
    <div className="care min-h-[100vh] mt-[100px] mdl:mt-10" id="contact">
      <h1 className="text-5xl font-bold text-center text-white uppercase">
        you want a cactus <br /> contact us
      </h1>
      <div className="flex flex-col-reverse flex-wrap gap-5 mt-10 lg:flex-row lg:flex-nowrap">
        <div className="flex flex-col items-center justify-center my-20 left lg:basis-1/2 basis-full lg:my-0">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white ">Write to Us</h1>
            <div className="flex items-center justify-center gap-3 mt-2 text-white">
              <FaFacebookMessenger className="cursor-pointer text-[#77B842]" />
              <IoLogoWhatsapp className="cursor-pointer text-[#77B842]" />
              <MdEmail className="cursor-pointer text-[#77B842]" />
            </div>
          </div>
          <div className="mt-10">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">
                Call Us at Any Number
              </h1>
              <div className="mt-2 text-white">
                <p className="text-gray-400 cursor-pointer">+123 456 789</p>
                <p className="text-gray-400 cursor-pointer">+123 456 259</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">Find Us Here</h1>
              <div className="mt-2 text-white ">
                <p className="text-gray-400 ">
                  13th Street. 47 W 13th St, New York, NY 10011, USA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 right lg:basis-1/2 basis-full ">
          <div className="flex items-center justify-center">
            <img src={contactCactus} alt="" className="w-[400px] cac-home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
