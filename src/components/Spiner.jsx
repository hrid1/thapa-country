import React from "react";

const Spiner = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-green-700"></div>
    </div>
  );
};

export default Spiner;
