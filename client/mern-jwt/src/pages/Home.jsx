import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              <span className="text-3xl italic">
                Hello{" "}
                <span className="text-4xl text-cyan-700 font-extrabold">
                  {localStorage.getItem("username")}
                </span>
              </span>
            </h1>
            <p className="py-6">
              MERN is a fullstack technology stack that includes MongoDB,
              Express.js, React.js, and Node.js. MongoDB is a NoSQL database
              used to store data. Express.js is a web application framework for
              building APIs. React.js is a library for creating dynamic user
              interfaces. Node.js is a runtime environment for executing
              JavaScript on the server. Together, these technologies allow
              developers to build complete web applications using JavaScript
              from front-end to back-end.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
