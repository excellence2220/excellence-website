import { useEffect, useState } from "react";
import Admission from "../componenets/Admission";
import { Spinner } from "flowbite-react";
export default function NewAdmission() {
  const [newAdmission, setNewAdmission] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const newAdmission = async () => {
      try {
        const response = await fetch("/api/admission/get");
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setNewAdmission(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    newAdmission();
  }, []);

  return (
    <div className="my-10">
      <button
        className="ml-20 inline-flex items-center rounded-lg border-2 border-black bg-black px-4 py-2 text-center text-sm font-medium text-white hover:bg-white hover:text-black"
        onClick={() => (window.location.href = "/")}
      >
        Dashboard
      </button>
      {loading ? (
        <div className="flex flex-wrap gap-2 justify-center items-center h-screen w-full">
          <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" size="xl" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 m-10 gap-y-6">
          {newAdmission.map((admission) => (
            <Admission
              key={admission._id}
              id={admission._id}
              firstName={admission.firstName}
              middleName={admission.middleName}
              lastName={admission.lastName}
              email={admission.email}
              image={admission.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}
