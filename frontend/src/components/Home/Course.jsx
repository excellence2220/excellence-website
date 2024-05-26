"use client";

import { Card } from "flowbite-react";

function Course({ name, physicalPrice, OnlinePrice }) {
  return (
    <Card
      className="max-w-xs"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="/assets/2.jpg"
    >
      <div className="flex justify-center">
        <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </div>

      <div className="flex flex-col items-center justify-between">
        <span className=" font-bold text-gray-900 dark:text-white">
          Physial Class only RS:{physicalPrice}
        </span>
        <span className=" font-bold text-gray-900 dark:text-white">
          Online Class only RS:{OnlinePrice}
        </span>
        <a
          href="/admission-form"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 mt-2"
        >
          Get Admission
        </a>
      </div>
    </Card>
  );
}

export default Course;
