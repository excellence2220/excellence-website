import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Spinner } from "flowbite-react";

export function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getLoading, setGetLoading] = useState(false);

  useEffect(() => {
    const getTeachers = async () => {
      try {
        setGetLoading(true); // Start loading spinner
        const response = await axios.get("/api/teachers/get");
        if (response.status === 200) {
          setTeachers(response.data); // Update teachers state with fetched data
        } else {
          toast.error("Failed to fetch teachers data");
        }
      } catch (error) {
        console.error("Error fetching teachers:", error);
        toast.error("Failed to fetch teachers data");
      } finally {
        setGetLoading(false); // Stop loading spinner regardless of success or failure
      }
    };

    getTeachers();
  }, []);

  const deleteTeachers = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(`/api/teachers/delete/${id}`);
      if (response.status === 200) {
        // Successful deletion
        toast.success("Successfully deleted");
        setLoading(false);
      } else {
        // Handle other status codes
        alert(response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error deleting teacher:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-wrap gap-2 justify-center items-center h-screen">
        <div className="text-center">
          <Spinner aria-label="Center-aligned spinner example" size="xl" />
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Employees</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit
              or delete existing ones.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => (window.location.href = "/")}
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Dashboard
            </button>
            <button
              type="button"
              onClick={() => (window.location.href = "/add-teacher")}
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new employee
            </button>
          </div>
        </div>
        {getLoading ? (
          <div className="flex flex-wrap gap-2 justify-center items-center h-screen">
            <div className="text-center">
              <Spinner aria-label="Center-aligned spinner example" size="xl" />
            </div>
          </div>
        ) : (
          <div className="mt-6 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="divide-x divide-gray-200">
                        <th
                          scope="col"
                          className="px-2 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          S.N
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          <span>Employee</span>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          Address
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          Status
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          Education
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          Subject
                        </th>
                        <th
                          scope="col"
                          className="text-center py-3.5 text-sm font-normal text-gray-500"
                        >
                          Manage
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {teachers.map((person, index) => (
                        <tr
                          key={person.name}
                          className="divide-x divide-gray-200"
                        >
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full object-cover"
                                  src={`data:image/png;base64,${person.image}`}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {person.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {person.email}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {person.phone}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-2 py-4">
                            <div className="text-sm text-gray-900">
                              {person.address}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                            {person.role}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                            {person.education}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                            {person.subject}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                            <a
                              href={`/update-teacher/${person._id}`}
                              className="text-gray-500 hover:text-indigo-600"
                            >
                              Update
                            </a>
                            <button
                              onClick={() => deleteTeachers(person._id)}
                              className="text-gray-500 hover:text-red-600 ml-2"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mt-4 w-full border-gray-300">
          <div className="mt-2 flex items-center justify-end">
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
