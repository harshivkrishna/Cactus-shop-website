import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import "./New.scss";
import newCatus1 from "../../../public/assets/new-cactus-1.png";
import newCatus2 from "../../../public/assets/new-cactus-2.png";
import newCatus3 from "../../../public/assets/new-cactus-3.png";

const New = () => {
  return (
    <div
      className="new min-h-[100vh] flex xl:flex-nowrap flex-wrap mdl:gap-5 sm:gap-[100px]"
      id="new"
    >
      <div className="flex flex-col justify-center gap-5 p-10 text-center left xl:basis-1/2 basis-full">
        <h1 className="text-4xl text-white uppercase">
          New Plants For <br /> Your Home
        </h1>
        <p className="mt-4 text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem debitis magnam necessitatibus nobis iure quo quidem
          beatae fuga adipisci, doloremque sint saepe aspernatur facere, vitae
          molestiae recusandae? Accusamus, quas provident?
        </p>
      </div>
      {/* Right */}
      <div className="flex flex-wrap justify-center lg:flex-nowrap right xl:basis-1/2 basis-full mdl:mt-[100px]">
        <div className="flex xs:flex-col xl:flex-row gap-[50px]">
          <div className="flex flex-col gap-[100px] justify-center items-center">
            <Card className="min-h-[250px] w-60 text-center cac-card">
              <CardHeader className="relative flex items-center justify-center">
                <img
                  src={newCatus1}
                  alt=""
                  className="absolute top-[-60px] w-[150px] cac-img"
                />
                <CardTitle className="text-2xl text-white title">
                  Gymnocalycium Cactus
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="min-h-[250px] w-60 text-center cac-card">
              <CardHeader className="relative flex items-center justify-center">
                <img
                  src={newCatus2}
                  alt=""
                  className="absolute top-[-60px] w-[150px] cac-img"
                />
                <CardTitle className="text-2xl text-white title">
                  Lilly Pad <br /> Succulent
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="flex items-center justify-center xs:mt-[100px] mdl:mt-20">
            <Card className="min-h-[250px] w-60 text-center cac-card cac-img-3">
              <CardHeader className="relative flex items-center justify-center">
                <img
                  src={newCatus3}
                  alt=""
                  className="absolute top-[-60px] w-[150px] cac-img "
                />
                <CardTitle className="text-2xl text-white title">
                  Rebutia Cactus
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
