import React, { useState, useEffect } from "react";
import { FaHeart, FaSave, FaShareSquare, FaUserAlt } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { BsSave2 } from "react-icons/bs";
import { user } from "../image";
import { user2 } from "../image";
import { user3 } from "../image";
import { user4 } from "../image";
function Story() {
  const images = [
    { id: 1, url: user },
    { id: 2, url: user2 },
    { id: 3, url: user3 },
    { id: 4, url: user },
    { id: 5, url: user4 },
    { id: 6, url: user2 },
  ];

  const [activeStatus, setActiveStatus] = useState(user);

  // console.log(activeStatus);

  const renderActiveStatus = () => {
    images.filter((img) =>
      // img.id === activeStatus && (
      //   <img src={img.url} className="w-full h-full" key={img.id} />
      // )

      console.log(img.id === activeStatus)
    );
  };

  // useEffect(() => {
  //   renderActiveStatus();
  // }, [activeStatus]);
  return (
    <div className="relative p-5 h-[700px] w-96 m-auto">
      <div className="absolute h-[700px] w-96 bg-black mt-0 ml-0 opacity-50">
        {/* {renderActiveStatus()} */}

        <img src={activeStatus} className="w-full h-full" />
      </div>
      <div className="p-4 status-img-container flex items-center justify-center absolute mt-16 z-50">
        {images.map((image) => (
          <button
            className="profile m-1 border cursor-pointer hover:opacity-80 duration-500 ease-linear"
            onClick={() => setActiveStatus(image.url)}
          >
            <img
              src={image.url}
              alt="images"
              height="250"
              width="250"
              key={image.id}
            />
          </button>
        ))}
      </div>
      <div className="main h-full w-96 absolute p-5">
        <div className="header">
          <div className="profile">
            <div className="profile-image">
              <img src={user} />
            </div>
            <div className="username">
              <small className="text-white">michaelblossom</small>
            </div>
          </div>
          <div>
            <button className="text-white">
              <FaEllipsisV />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <input
              className="border bg-transparent border-white w-56 rounded-3xl py-2 px-2 outline-none"
              placeholder="Enter Comment"
            />
          </div>
          <div>
            <button>
              <FaHeart color="tomatoe" />
            </button>
          </div>
          <div>
            <button className="text">
              <BsSave2 />
            </button>
          </div>
          <div>
            <FaShareSquare />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
