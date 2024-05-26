import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Teachers } from "./pages/Teachers";
import AddTeacher from "./pages/AddTeacher";
import { Toaster } from "react-hot-toast";
import Users from "./pages/Users";
import UsersMessage from "./pages/UsersMessage";
import UpdateTeacher from "./pages/UpdateTeacher";
import NewAdmission from "./pages/NewAdmission";
import { AdmissionDetails } from "./pages/AdmissionDetails";
function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/add-teacher" element={<AddTeacher />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-messages" element={<UsersMessage />} />
        <Route path="/update-teacher/:id" element={<UpdateTeacher />} />
        <Route path="/new-admission" element={<NewAdmission />} />
        <Route path="/view-admission/:id" element={<AdmissionDetails />} />
      </Routes>
    </>
  );
}

export default App;
