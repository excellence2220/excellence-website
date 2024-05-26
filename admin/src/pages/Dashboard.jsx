import React, { useEffect, useState } from "react";
import { SidebarOne } from "../componenets/Sidebar";
import DashboardCard from "../componenets/DashboardCard";
import { Spinner } from "flowbite-react";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newAdmission, setNewAdmission] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);
  const [teachersLoading, setTeachersLoading] = useState(true);
  const [messagesLoading, setMessagesLoading] = useState(true);
  const [newAdmissionLoading, setNewAdmissionLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch("/api/user");
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setUsers(data);
        setUsersLoading(false);
      } catch (error) {
        setError(error.message);
        setUsersLoading(false);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getTeachers = async () => {
      try {
        const response = await fetch("/api/teachers/get");
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setTeachers(data);
        setTeachersLoading(false);
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    };
    getTeachers();
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await fetch("/api/message/get");
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
        setMessagesLoading(false);
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    };
    getMessages();
  }, []);
  useEffect(() => {
    const getNewAdmission = async () => {
      try {
        const response = await fetch("/api/admission/get");
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setNewAdmission(data);
        setNewAdmissionLoading(false);
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    };
    getNewAdmission();
  })

  return (
    <main className="flex">
      <SidebarOne />
      <section className="flex flex-col items-center w-full mt-5 mb-5">
        <div>
          <h1 className="text-center text-4xl font-bold">Dashboard</h1>
          <p className="text-xl">Welcome to the dashboard!</p>
        </div>
        {(usersLoading || teachersLoading || messagesLoading || newAdmissionLoading) && error ? (
          <div className="flex flex-wrap gap-2 justify-center items-center h-screen">
            <div className="text-center flex flex-col">
              <Spinner aria-label="Center-aligned spinner example" size="xl" />
              {error}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6 mt-10">
            <DashboardCard
              title={"Total Users"}
              description={`You Have ${users.length} of users in your data.`}
              image={"/assets/student.svg"}
              loading={usersLoading}
              link={"/users"}
              linkTitle={"View All Users"}
            />
            <DashboardCard
              title={"Total Teachers"}
              description={`You Have ${teachers.length} of teachers in your data.`}
              image={"/assets/teacher.svg"}
              loading={teachersLoading}
              link={"/teachers"}
              linkTitle={"View All Teachers"}
            />
            <DashboardCard
              title={"All Messages"}
              description={`You Have ${messages.length} of messages in your data.`}
              image={"/assets/message.svg"}
              loading={messagesLoading}
              link={"/user-messages"}
              linkTitle={"View All Messages"}
            />
            <DashboardCard
              title={"New Admission"}
              description={`You Have ${newAdmission.length} of new admission in your data.`}
              image={"/assets/admission.svg"}
              loading={newAdmissionLoading}
              linkTitle={'View new admission'}
              link={'/new-admission'}
              />
          </div>
        )}
      </section>
    </main>
  );
}

export default Dashboard;
