import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserNav } from "@/components/layouts/user-nav";
import { MainNav } from "@/components/layouts/main-nav";
import React from "react";
import { SignIn } from "next-auth/react";

export function NavBar() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
          </div>
        </div>
      </div>
      <div className="flex">
        <aside className="sticky top-0 h-screen w-56 bg-gray-100 text-gray-800 p-4">
          <nav className="space-y-2">
            <button className="w-full flex items-center space-x-2 bg-gray-200 active:bg-grey-300 py-2 px-2 rounded-lg text-gray-800">
              <svg
                className="w-4 h-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="text-sm font-medium">Dashboard</span>
            </button>
            <button className="w-full flex items-center space-x-2 hover-bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
              </svg>
              <span className="text-sm font-medium">IRS</span>
            </button>
            <button className="w-full flex items-center space-x-2 hover-bg-gray-200 active-bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="text-sm font-medium">PKL</span>
            </button>
            <button className="w-full flex items-center space-x-2 hover-bg-gray-200 active-bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                <path d="M13 5v2" />
                <path d="M13 17v2" />
                <path d="M13 11v2" />
              </svg>

              <span className="text-sm font-medium">Skripsi</span>
            </button>

            <button
              className="w-full flex items-center space-x-2 hover-bg-gray-200 active-bg-gray-300 py-2 px-2 rounded-lg text-gray-500"
              onClick={() => SignIn()}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                <path d="M13 5v2" />
                <path d="M13 17v2" />
                <path d="M13 11v2" />
              </svg>

              <span className="text-sm font-medium">Sign In</span>
            </button>
          </nav>
        </aside>

        <div className="flex">
          <main className="flex-grow p-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-medium">Dashboard</h1>
            </div>
            <div className="absolute top-0 right-0 p-4 w-50 h-50">
              <UserNav />
            </div>

            {/* <div>
                <UserNav/>
              <Avatar className="absolute top-0 right-0 p-4 w-20 h-20">
                <AvatarImage src="../monkey.jpg" alt="avatar" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </div> */}
          </main>
        </div>
      </div>
    </>
  );
}

export default NavBar;
