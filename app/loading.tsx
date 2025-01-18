import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] w-full">
      <div className="dot animate-pulse1 bg-blue-300 rounded-full h-5 w-5 mr-2" />
      <div className="dot animate-pulse2 bg-blue-300 rounded-full h-5 w-5 mr-2" />
      <div className="dot animate-pulse3 bg-blue-300 rounded-full h-5 w-5 mr-2" />
      <div className="dot animate-pulse4 bg-blue-300 rounded-full h-5 w-5 mr-2" />
      <div className="dot animate-pulse5 bg-blue-300 rounded-full h-5 w-5" />
    </div>
  );
};

export default loading;
