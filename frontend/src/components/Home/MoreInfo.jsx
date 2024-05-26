import React, { useState, useEffect } from "react";

function MoreInfo() {
  const [initial, setInitial] = useState(0);
  const [initial1, setInitial1] = useState(0);
  const [initial2, setInitial2] = useState(0);
  const [initial3, setInitial3] = useState(0);
  const destination = 1200;
  const destination1 = 300;
  const destination2 = 400;
  const destination3 = 587;

  useEffect(() => {
    const interval = setInterval(() => {
      if (initial < destination) {
        setInitial((prevInitial) => prevInitial + 1);
      } else {
        clearInterval(interval);
      }
    }, 1);
    const interval1 = setInterval(() => {
      if (initial1 < destination1) {
        setInitial1((prevInitial) => prevInitial + 1);
      } else {
        clearInterval(interval1);
      }
    }, 1);
    const interval2 = setInterval(() => {
      if (initial2 < destination2) {
        setInitial2((prevInitial) => prevInitial + 1);
      } else {
        clearInterval(interval1);
      }
    }, 1);
    const interval3 = setInterval(() => {
      if (initial3 < destination3) {
        setInitial3((prevInitial) => prevInitial + 1);
      } else {
        clearInterval(interval1);
      }
    }, 1);

    return () => {
      clearInterval(interval);
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [
    destination,
    initial,
    initial1,
    initial2,
    initial3,
    destination1,
    destination2,
    destination3,
  ]);

  return (
    <div className="flex justify-evenly bg-[url('/assets/writing.avif')] bg-center bg-no-repeat bg-cover h-64 items-center text-white">
      <div className="flex items-center gap-3">
        <img src="/assets/pass.svg" alt="" />
        <span>
          <h1 className="font-bold text-4xl">{initial}</h1>
          <span>SUCCESS STORIES</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <img src="/assets/teachers.svg" alt="" />
        <span>
          <h1 className="font-bold text-4xl">{initial1}</h1>{" "}
          <span>TRUSTED TUTORS</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <img src="/assets/schedule.svg" alt="" />
        <span>
          <h1 className="font-bold text-4xl">{initial2}</h1>{" "}
          <span>SCHEDULES</span>{" "}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <img src="/assets/book.svg" alt="" />
        <span>
          <h1 className="font-bold text-4xl">{initial3}</h1>{" "}
          <span>COURSES</span>{" "}
        </span>
      </div>
    </div>
  );
}

export default MoreInfo;
