"use client";

import RegisterForm from "./RegisterForm";
import UsersTable from "./usersTable";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap justify-between min-h-screen justify-between p-24">
      <RegisterForm />
      <UsersTable />,
    </main>
  );
}
