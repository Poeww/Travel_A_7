import React from "react";

const Register = () => {
  return (
    <div className="bg-[#fffdf6] h-[1080px] relative overflow-hidden">

      <img
        className="w-[782px] h-[1080px] absolute left-0 top-0 object-cover"
        src="/bg-regis.png"
        alt=""
      />

      <img
        className="absolute left-[1086px] top-[126px]"
        src="/logo.svg"
        alt=""
      />

      <h1 className="text-black text-[32px] font-bold absolute left-[1098px] top-[301px]">
        Create Your Account
      </h1>

      <p className="text-black text-[22px] font-medium absolute left-[1098px] top-[360px] w-[518px]">
        Discover hidden gems, exclusive offers and unforgettable travel
        experiences in Yogyakarta.
      </p>

      <label className="text-black text-[22px] font-semibold absolute left-[1128px] top-[457px]">
        Name
      </label>
      <div className="bg-white rounded-[20px] border border-[#00a9ff] w-[518px] h-[54px] absolute left-[1098px] top-[497px]" />
      <span className="text-[#808080] text-xl absolute left-[1128px] top-[511px]">
        Enter your name...
      </span>

      <label className="text-black text-[22px] font-semibold absolute left-[1128px] top-[568px]">
        Email
      </label>
      <div className="bg-white rounded-[20px] border border-[#00a9ff] w-[518px] h-[54px] absolute left-[1098px] top-[614px]" />
      <span className="text-[#808080] text-xl absolute left-[1128px] top-[628px]">
        Enter your email...
      </span>

      <label className="text-black text-[22px] font-semibold absolute left-[1128px] top-[685px]">
        Password
      </label>
      <div className="bg-white rounded-[20px] border border-[#00a9ff] w-[518px] h-[54px] absolute left-[1098px] top-[725px]" />
      <span className="text-[#808080] text-xl absolute left-[1128px] top-[739px]">
        Enter your password...
      </span>

      <button className="bg-[#00a9ff] text-white text-[22px] font-semibold rounded-[20px] w-[518px] h-[54px] absolute left-[1098px] top-[839px]">
        Sign Up
      </button>

      <img
        className="absolute left-[1390px] top-[830px]"
        src="/icon.svg"
        alt=""
      />

      <div className="text-lg absolute left-[1098px] top-[932px]">
        <span>Already have an account?</span>{" "}
        <span className="text-[#00a9ff] cursor-pointer">Sign In Here</span>
      </div>

      <img className="absolute left-[1616px] top-[275px]" src="/frame-atas.svg" alt="" />
      <img className="absolute left-[1616px] top-[805px]" src="/frame-bawah.svg" alt="" />
    </div>
  );
};

export default Register;