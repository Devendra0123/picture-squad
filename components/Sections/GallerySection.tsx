"use client";
import React, { useState } from "react";
import { gallleryData } from "../../data/galleryData";
import GalleryCard from "../Cards/GalleryCard";
import ImagePopup from "../ImagePopup";
import Overlay from "../Overlay";

const GallerySection = ({ galleryData }: any) => {
  const [clickedImageUrl, setClickedImageUrl] = useState<string>("");
  return (
    <div className="gallerySection w-full md:w-[90%] px-[20px] py-[50px] flex flex-col items-center ">
      <div className="w-full flex items-center justify-center gap-[50px]">
        <h1 className="font-poppins text-xl font-bold tracking-[2px] underline underline-offset-8 decoration-primaryBlue">
          Our Gallery
        </h1>
      </div>

      <div className="w-full flex items-center justify-center gap-[20px] flex-wrap mt-[70px] ">
        {galleryData?.length > 0 &&
          galleryData.map((item: any, index: number) => (
            <GalleryCard
              key={index}
              image={item.image}
              handleImageClick={() => setClickedImageUrl(item.image)}
            />
          ))}
      </div>

      {clickedImageUrl && (
        <ImagePopup
          image={clickedImageUrl}
          handleCross={() => setClickedImageUrl("")}
        />
      )}

      {clickedImageUrl && <Overlay />}
    </div>
  );
};

export default GallerySection;
