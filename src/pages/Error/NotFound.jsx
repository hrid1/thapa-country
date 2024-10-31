import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-[90vh]">
       <h1 className="text-7xl font-bold">
       {error.status || error.statusText}
       </h1>
      <h2 className="text-xl">Opps! An error Occurred</h2>
      <Link to='/' className="btn mt-4 px-3 py-2 bg-white text-black font-bold rounded-md">
        Go Home
      </Link>
      
    </div>
  );
};

export default NotFound;
