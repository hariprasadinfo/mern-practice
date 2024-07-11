import React, { useEffect, useState } from "react";
import axios from "axios";

function UserProfile() {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/getUserById/${localStorage.getItem(
          "userid"
        )}`,
        {
          headers: {
            "x-token": `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        if (response.data.details) {
          setUserDetails(response.data.details);
        }
      });
  }, []);

  return (
    <>
      {userDetails && (
        <div className="card card-side bg-base-100 shadow-xl pt-12 border">
          <figure>
            {/* <img
              src={`
            http://localhost:5000/${user.path}`}
              alt="filename"
            /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title text-green-950 text-center font-semibold text-4xl uppercase">
              {userDetails.username}
            </h2>
            <p className="py-4 text-center text-emerald-950 font-semibold text-4xl uppercase">
              {userDetails.email}
            </p>
            <p className="py-4 text-blue-300"> {userDetails.createdAt} </p>
            <p className="py-4 text-purple-400"> {userDetails.updatedAt} </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserProfile;
