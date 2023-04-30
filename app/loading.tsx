import React from "react";

const Loading = () => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-10 bg-gray-500/50">
      <span className="loader" />
    </div>
  );
};

export default Loading;
