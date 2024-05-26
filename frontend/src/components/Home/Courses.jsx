import React from "react";
import Course from "./Course";

function Courses() {
  return (
    <div className="flex max-w-7xl m-auto flex-col my-14">
      <div className="flex justify-center mb-10">
        <h2 className="text-4xl font-bold">
          Explore Our Popular Courses
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <Course name={'Bridge Course'} physicalPrice={10000} OnlinePrice={2000} />
        <Course name={'CTEVT Entrance Preparation'} physicalPrice={10000} OnlinePrice={2500} />
        <Course name={'Tution Classes'} physicalPrice={5000} OnlinePrice={1000} />
        <Course name={'License Preparation'} physicalPrice={6000} OnlinePrice={2000} />
      </div>
    </div>
  );
}

export default Courses;
