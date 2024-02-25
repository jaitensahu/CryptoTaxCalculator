import React from "react";
import kotinlogo from "../../assets/kotinXlogo.png";

const Header = () => {
  return (
    <div className="flex w-[100%] shadow-md px-[5%] py-5 bg-white">
      <div className="logo w-[55%]">
        <img src={kotinlogo} alt="" />
      </div>
      <div className="flex w-[45%] min-w-[500px] justify-between">
        <div className="flex justify-between gap-4 font-semibold">
          <p>Features</p>
          <p>Exchanges</p>
          <p className="whitespace-nowrap">How it Works</p>
          <p>Blog</p>
          <p className="whitespace-nowrap">About Us</p>
        </div>
        <div className="sign_in font-semibold">
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
