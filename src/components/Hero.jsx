import React from "react";

const Hero = ({moneyHandler}) => {
  return (
    <div
      className="relative h-screen flex items-center rounded-md justify-center bg-cover bg-center mb-9"
      style={{ backgroundImage: "url(/images/bg-shadow.png)" }}
    >
      <div className="flex flex-col justify-center items-center gap-y-7">
        <img className="border-2 border-dashed" src="/images/banner-main.png" alt="" />
        <h1 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <h1 className="text-2xl">Beyond Boundaries Beyond Limits</h1>
        <button onClick={() => moneyHandler()} className="btn bg-yellow-200 px-6 py-3 rounded-xl border-2 border-black font-bold">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Hero;
