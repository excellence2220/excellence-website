import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Spinner } from "flowbite-react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetch("/api/user");
        const data = await users.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [users]);

  const deleteUsers = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(`/api/user/delete/${id}`);
      if (response.status === 200) {
        // Successful deletion
        toast.success("Successfully deleted");
        setLoading(false);
      } else {
        // Handle other status codes
        console.log(response.statusText);
        toast.error(response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
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
            <h2 className="text-lg font-semibold">Users</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all users. You can add new employees, edit or
              delete existing ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={() => (window.location.href = "/")}
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Dashboard
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>S.N</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>users</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        email
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        username
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
                    {users.map((person, index) => (
                      <tr key={person._id} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.fullName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                          {person.email}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                          {person.username}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                          <button
                            onClick={() => deleteUsers(person._id)}
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
        {users.length > 0 && (
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
        )}
      </section>
    </>
  );
}
