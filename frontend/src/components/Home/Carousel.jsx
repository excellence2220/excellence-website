"use client";

import { Carousel, Button } from "flowbite-react";

export default function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[36rem] relative">
      <Carousel pauseOnHover>
        <div className="relative">
          <img
            src="/assets/2.png"
            alt="..."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white"></div>
        </div>
        <div className="relative">
          <img
            src="/assets/2.jpg"
            alt="..."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex-col flex items-center justify-center text-white">
            <span>
              <h1 className="text-4xl underline font-bold">
                WELCOME TO  <br /> Excellence Learning Centre
              </h1>{" "}
              <p className="text-6xl font-black">
                Best Learning Centre In
                <br /> Bharatpur, Chitwan
              </p>
            </span>
            <span className="flex gap-4 mt-3">
              <Button>Join Now</Button>
              <Button>View Courses</Button>
            </span>
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/3.jpg"
            alt="..."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex-col flex items-center justify-center text-white">
            <span>
              <h1 className="text-4xl underline font-bold">
                WELCOME TO
                <br />
                Excellence Learning Centre
              </h1>{" "}
              <p className="text-6xl font-black">
                Best Learning Centre In
                <br /> Bharatpur, Chitwan
              </p>
            </span>
            <span className="flex gap-4 mt-3">
              <Button>Join Now</Button>
              <Button>View Courses</Button>
            </span>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
