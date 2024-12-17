import { Checkbox } from "../ui/checkbox";
import "./Care.scss";
import careCactus from "../../../public/assets/care-cactus.png";
const Care = () => {
  return (
    <div className="care min-h-[100vh] lg:mt-0 mt-20" id="care">
      <h1 className="text-5xl font-bold text-center text-white uppercase">
        Care And Health For <br /> Your Cactus
      </h1>
      <div className="flex flex-wrap gap-5 mt-10 lg:flex-nowrap">
        <div className="flex items-center justify-center left lg:basis-1/2 basis-full">
          <img src={careCactus} alt="" className="w-[400px] cac-home" />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 right lg:basis-1/2 basis-full mdl:p-[80px] p-5">
          <div className="flex space-x-2 items-top">
            <Checkbox
              id="terms1"
              className="text-2xl text-white border-white"
              checked
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                perferendis vel non omnis possimus voluptate.
              </label>
            </div>
          </div>

          <div className="flex space-x-2 items-top">
            <Checkbox id="terms1" className="text-white border-white" checked />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                perferendis vel non omnis possimus voluptate.
              </label>
            </div>
          </div>

          <div className="flex space-x-2 items-top">
            <Checkbox id="terms1" className="text-white border-white" checked />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                perferendis vel non omnis possimus voluptate.
              </label>
            </div>
          </div>

          <div className="flex space-x-2 items-top">
            <Checkbox id="terms1" className="text-white border-white" checked />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                perferendis vel non omnis possimus voluptate.
              </label>
            </div>
          </div>

          <div className="flex space-x-2 items-top">
            <Checkbox id="terms1" className="text-white border-white" checked />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                perferendis vel non omnis possimus voluptate.
              </label>
            </div>
          </div>

          <div className="flex space-x-2 items-top">
            <Checkbox id="terms1" className="text-white border-white" checked />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                perferendis vel non omnis possimus voluptate.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
