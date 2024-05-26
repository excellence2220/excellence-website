import React from "react";
import { Spinner } from "flowbite-react";

export default function DashboardCard({
  title,
  description,
  link,
  image,
  loading,
  linkTitle,
}) {
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={image}
        alt={title}
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {title}
        </h1>
        {loading ? (
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <div className="text-center flex flex-col">
              <Spinner aria-label="Center-aligned spinner example" size="md" />
            </div>
          </div>
        ) : (
          <p className="mt-3 text-sm text-gray-600">{description}</p>
        )}
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={() => {
            window.location.href = link;
          }}
        >
          {linkTitle}
        </button>
      </div>
    </div>
  );
}
