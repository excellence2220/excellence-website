"use client";
import React from "react";
import { Card } from "flowbite-react";

function Admission({ firstName, email, image, middleName, lastName, id }) {
  return (
    <Card className="max-w-sm">
      <div className="flex flex-col items-center pb-10">
        <img
          alt={firstName}
          height="96"
          src={`data:image/png;base64,${image}`}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          <span>{firstName}</span> <span>{middleName}</span>{" "}
          <span>{lastName}</span>
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {email}
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href={`/view-admission/${id}`}
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            View Detials
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div>
      </div>
    </Card>
  );
}

export default Admission;
