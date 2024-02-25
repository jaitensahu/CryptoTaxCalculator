import React from "react";
import frame from "../../assets/Frame.png";
import bg from "../../assets/BG Mask.png";
import footerLogo from "../../assets/FooterLogo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IconContext } from "react-icons";
import footerImg from "../../assets/Frame 1000005166.png";


const Footer = () => {
  return (
    <>
      <div className="bg-white py-[5%]">
        <div className="relative  w-[60%] mx-auto">
          <img src={bg} alt="" />
          <div className="absolute w-[90%] top-[50%] left-[50%] -translate-y-1/2  -translate-x-1/2 flex items-center justify-center">
            <img src={frame} alt="" className="w-[25%]" />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-xl text-center text-white font-bold">
                Stay up to date with latest crypto news and events. Subscribe to
                our newsletter
              </h1>
              <div>
                <input
                  type="text"
                  className="py-1 px-2 rounded-l-md"
                  placeholder="Enter Your Email"
                />
                <button className="text-black bg-yellow-500 px-3 py-1 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-[3%]">
        <div className="w-[80%] mx-auto">
          <div className="top flex justify-between items-center">
            <img src={footerLogo} alt="" />
            <div className="flex justify-around w-[20%]">
              <IconContext.Provider value={{ color: "#2997F9", size: "22px" }}>
                <FaSquareXTwitter />
                <IoLogoYoutube />
                <FaFacebook />
                <FaLinkedin />
                <IoMdContact />
              </IconContext.Provider>
            </div>
          </div>
          <hr />
          <div className="text-white flex justify-between my-10">
            <ul className="flex flex-col gap-3">
              <li className="font-bold">Crypto Taxes for </li>
              <li>Individuals and investors</li>
              <li>Tax Professionals and Accountants</li>
              <li>Exchanges and Web3 projects</li>
              <li>
                <img src={footerImg} alt="" />
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="font-bold">Free Tools</li>
              <li>Crypto Prices Live</li>
              <li>Crypto Tax Calculator</li>
              <li>Crypto Tax Saving Speculator</li>
              <li>Crypto Profit Calculator</li>
              <li>Crypto Converter</li>
              <li>Crypto Staking ROI Calculator</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="font-bold">Resource Center</li>
              <li>Crypto Tax Guides</li>
              <li>Dumb Ways To Lose Money</li>
              <li>Crypto Tax Savings Guide </li>
              <li>Blogs</li>
              <li>Crypto Buying Guides</li>
              <li>Crypto Staking Guides</li>
              <li>Crypto Mining Guides</li>
              <li>Crypto Price Predictions</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="font-bold">Help And Support</li>
              <li>Product Guides</li>
              <li>How To Guides</li>
              <li>Templates</li>
              <li>Contact us</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="font-bold">Company</li>
              <li>About Us</li>
              <li>Backed by</li>
              <li>Media and Press</li>
              <li>Careers</li>
              <li>Security</li>
              <li>Refund Policy</li>
              <li>Brand Assets</li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <hr />
          <p className="text-white text-center pt-5">All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
