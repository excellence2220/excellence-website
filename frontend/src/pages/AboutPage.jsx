"use client";

import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import toast from "react-hot-toast";
import OurFeatures from "../components/about/OurFeatures";

const locations = [
  {
    title: "Bharatpur Office",
    timings: "Sun-Sat 6am to 8pm.",
    address: "Nahar Chowk, Bharatpur-11, Chitwan, Nepal",
  },
];

export default function AboutPage() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const getTeachers = async () => {
      try {
        const teachers = await fetch("/api/teachers/get");
        const data = await teachers.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setTeachers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTeachers();
  }, [teachers]);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">
              About Our Institute
            </p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Made with love, right here in Nepal
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            veritatis voluptates neque itaque repudiandae sint, explicabo
            assumenda quam ratione placeat?
          </p>
        </div>
        <div className="w-full space-y-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1766.4871723956444!2d84.43990792675821!3d27.687187801472252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1712668944108!5m2!1sen!2snp"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* locations */}
        <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
          {locations.map((location) => (
            <div
              key={location.title}
              className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5"
            >
              <MapPin className="h-5 w-5" />
              <p className="w-full text-xl font-semibold  text-gray-900">
                {location.title}
              </p>
              <p className="w-full text-base text-gray-700">
                {location.timings}
              </p>
              <p className="text-sm font-medium">{location.address}</p>
            </div>
          ))}
        </div>
        <hr className="mt-20" />
        <OurFeatures />
        <hr className="mt-20" />
        {/* greetings */}
        <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">
                Join Us &rarr;
              </p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">
              Meet our team
            </p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do your best
              work.
            </p>
            <div></div>
          </div>
        </div>
        {/* TEAM */}
        <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {teachers.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <img
                src={`data:image/png;base64,${user.image}`}
                alt={user.name}
                className="h-[300px] w-full rounded-lg object-cover "
              />
              <p className="mt-6 w-full px-2 text-2xl  font-semibold text-gray-900">
                {user.name}
              </p>
              <p className="w-full px-2 text-sm font-semibold text-gray-500">
                {user.role}
              </p>
              <p className="w-full px-2 text-sm font-semibold text-gray-500">
                {user.email}
              </p>
              <p className="w-full px-2 text-sm font-semibold text-gray-500">
                {user.phone}
              </p>
              <p className="w-full px-2 text-sm font-semibold text-gray-500">
                {user.subject}
              </p>
              <p className="w-full pb-5 px-2 text-sm font-semibold text-gray-500">
                {user.address}
              </p>
            </div>
          ))}
        </div>
        {/* Hiring Banner */}
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">
              Join our team &rarr;
            </p>
            <p className="text-3xl font-bold md:text-4xl">
              We&apos;re just getting started
            </p>
            <p className="text-base text-gray-600 md:text-lg">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do your best
              work.
            </p>
            <button
              type="button"
              onClick={() => {
                toast.error("no vacency is available right now!!");
              }}
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Became a teacher
            </button>
          </div>
          <div className="md:mt-o mt-10 w-full">
            <img
              src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
