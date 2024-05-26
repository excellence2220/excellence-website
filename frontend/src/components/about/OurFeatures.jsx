import React from "react";

function OurFeatures() {
  return (
    <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
           <img src="/assets/time.svg" alt="" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            Flexible Time
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
            <img src="/assets/teachers.svg" alt="" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            Professionals Teachers
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
           <img src="/assets/online.svg" alt="" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
           Smart Technology
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <img src="/assets/exam.svg" alt="" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            Daily, Weekly, Monthly Test
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurFeatures;
