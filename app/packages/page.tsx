import React from "react";
import { packagesData } from "@/data/packagesData";
import PackageCard from "@/components/Cards/PackageCard";

const Packages = () => {
  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center mt-[100px] pb-[50px]">
      <p className="w-max tracking-[2px] bg-primaryBlue p-[10px] text-center font-satisfy text-2xl tracking-[1.3] font-bold ">
        Packages
      </p>
      {packagesData?.length > 0 && (
        <div className="mt-[50px] flex items-center gap-[20px] justify-center flex-wrap">
          {packagesData.map((item: any, index: number) => (
            <PackageCard
              key={index}
              title={item.title}
              price={item.price}
              features={item.features}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Packages;
