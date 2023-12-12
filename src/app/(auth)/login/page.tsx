import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import FormLogin from "@/components/partials/Login/FormLogin";

const Page: NextPage = () => {
  return (
    <div className="relative">
      <div className="p-4 md:p-8 absolute top-0">
        {" "}
        <Link className="flex items-center gap-4 p-2" href="/">
          <Image
            width={62}
            height={72}
            src={"/images/logo-nc.png"}
            alt="Logo"
          />
          <h2 className="text-primary font-bold text-2xl">
            Nova <br /> Circle
          </h2>
        </Link>
      </div>
      <div className="flex h-screen w-full items-center justify-center bg-white p-4 md:p-4 ">
        <div className="w-full md:w-1/2 lg:w-[480px] rounded-sm border border-stroke bg-white shadow-default">
          <div className="w-full flex flex-wrap items-center">
            <div className="w-full p-4 sm:p-12 xl:p-17">
              <h2 className="mb-9 font-areaInktrap text-left text-3xl  text-primary">
              <span className="font-bold"> Welcome to</span> <br /> Business Dashboard
              </h2>
              {/* <p className="text-greyDarkest">Please enter your email and password</p> */}
              <FormLogin />
              <div className="text-center py-8 md:pt-8 md:pb-0">
                <Link href={"/"} className="text-greyDarkest font-semibold underline">
                  Need Access?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
