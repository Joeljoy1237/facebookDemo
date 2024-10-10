import React from "react";

function App() {
  return (
    <div className="min-h-screen min-w-[100vw] flex items-center p-16justify-center">
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col pl-[18vw] pb-[13vw]">
          <h1 className="font-bold text-7xl pb-2 text-blue-600">facebook</h1>
          <span className="text-2xl ">
            Facebook helps you connect and share with the people in your life.
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="border-2 rounded-lg shadow-lg p-2 w-[27vw]">
          <div className="flex flex-col gap-4 p-3">
            <input
              type="text"
              className="p-3 w-full border rounded-lg outline-blue-600"
              placeholder="Email address or Phone Number"
            />
            <input
              type="password"
              className="p-3 w-full border rounded-lg outline-blue-600"
              placeholder="Password"
            />
            <button className="bg-blue-600 py-2 font-semibold text-white text-lg rounded-md">
              Log In
            </button>
            <a href="" className="text-blue-600 text-center ">
              forgot password?
            </a>
          </div>
          <div className="h-[0.5px] w-full bg-gray-300 my-4"></div>
          <div className="flex w-full items-center justify-center ">
            <button className="bg-green-500 p-3 text-white font-semibold rounded-lg mb-4">
              Create new account
            </button>
          </div>
        </div>
        <div className="py-8">
          <span className="font-bold">Create a Page</span> for a celebrity,
          brand or business.
        </div>
      </div>
    </div>
  );
}

export default App;
