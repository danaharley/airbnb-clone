import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-500/50">
      <span className="loader" />
    </div>
  );
};

export default Loading;
