import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-center rounded-md justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/images/bg-shadow.png)" }}
    >
      <div>
        <img src="/images/banner-main.png" alt="" />
        <h1 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <h1 className="text-2xl">Beyond Boundaries Beyond Limits</h1>
        <button className="btn">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Hero;
