import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";

export const AdmissionDetails = () => {
  const { id } = useParams();
  const [admissionDetail, setAdmissionDetail] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/admission/get/${id}`);
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setAdmissionDetail(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return loading ? (
    <div className="flex flex-wrap gap-2 justify-center items-center h-screen">
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" size="xl" />
      </div>
    </div>
  ) : (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="rounded-md mb-5 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back
        </button>
        <div className="mx-auto flex flex-wrap items-center lg:w-full">
          <img
            alt={admissionDetail.firstName + " " + admissionDetail.lastName}
            className="h-64 w-full rounded object-cover lg:h-[32rem] lg:w-1/2"
            src={`data:image/png;base64,${admissionDetail.image}`}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h1 className="my-4 text-2xl font-semibold text-black">
              {admissionDetail.firstName} {admissionDetail.middleName}{" "}
              {admissionDetail.lastName}
            </h1>

            <p className="leading-relaxed">Email: {admissionDetail.email}</p>
            <p className="leading-relaxed">Phone: {admissionDetail.phone}</p>
            <p className="leading-relaxed">Gender: {admissionDetail.gender}</p>
            <p className="leading-relaxed">
              Date Of Birth:{" "}
              {new Date(admissionDetail.dateOfBirth).toDateString()}
            </p>
            <p className="leading-relaxed">
              Temporary Address: {admissionDetail.temporaryAddress}
            </p>
            <p className="leading-relaxed">
              Permanent Address: {admissionDetail.permanentAddress}
            </p>
            <p className="leading-relaxed">
              Guardian Name: {admissionDetail.guardianName}
            </p>
            <p className="leading-relaxed">
              Guardian Phone: {admissionDetail.guardianPhone}
            </p>
            <p className="leading-relaxed">School: {admissionDetail.school}</p>
            <p className="leading-relaxed">
              Class: {admissionDetail.className}
            </p>
            <p className="leading-relaxed">course: {admissionDetail.course}</p>
            <p className="leading-relaxed">
              Description: {admissionDetail.description}
            </p>
            <div className="flex items-center justify-between">
              <a
                href={`https://wa.me/${admissionDetail.phone}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-md mt-3 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Call
              </a>
              <a
                href={`mailto:${admissionDetail.email}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-md mt-3 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
