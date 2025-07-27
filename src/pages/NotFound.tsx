import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="bebas-neue text-[60px] leading-[60px]">404 NOT FOUND</h1>
      <Link
        to="/"
        className="bebas-neue mt-4 text-blue-500 hover:underline text-[40px] leading-[40px]">
        BACK TO HOME
      </Link>
    </div>
  );
};

export default NotFound;
