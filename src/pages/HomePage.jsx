import React, { forwardRef } from "react";

const HomePage = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-screen pt-20 bg-blue-400 flex justify-center items-center"
    >
      Home Section
    </div>
  );
});

export default HomePage;
