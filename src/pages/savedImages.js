import React, { useState, useEffect } from "react";
const images = [3, 4, 6];
const SavedImages = ({
  //   images,

  saveImage,
}) => {
  console.log(saveImage);
  console.log(images);

  useEffect(() => {
    console.log("Image Saved");
  }, [saveImage]);
  return saveImage.lenght > 0 ? (
    saveImage.map((img) => (
      <div>
        <img src={img.url} />
      </div>
    ))
  ) : (
    <div className="flex items-center justify-center w-sreen h-screen">
      No image Saved at the Moment
    </div>
  );
};

export default SavedImages;
