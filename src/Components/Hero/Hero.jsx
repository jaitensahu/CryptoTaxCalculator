import React, { useContext } from "react";
import logo from "../../assets/img1.png";
import Faqs from "../FAQs/Faqs";
import { myContext } from "../dataStore/Context";
import Footer from "../Footer/Footer";

const Hero = () => {
  let {
    purchasePrice,
    getPurchasePrice,
    salesPrice,
    getSalesPrice,
    expense,
    getExpenses,
    annualIncome,
    getAnnualIncome,
    isLongTerm,
    setLongTerm,
    rates,
    capitalGains,
    discountForCapitalGains,
    netGains,
    tax,
  } = useContext(myContext);
  // console.log(purchasePrice);
  return (
    <>
      <div className="flex p-10 gap-10 ">
        <div className=" w-[75%] bg-white p-10 rounded-xl">
          <div className="w-full">
            <h1 className="text-[42px] text-center font-bold w-[80%] mx-auto ">
              Free Crypto Tax Calculator Australia
            </h1>
            <div className="left w-[95%]  mx-auto p-10">
              <div className="first flex justify-between my-3 py-2 gap-10">
                <div className="year flex gap-2 w-[50%] items-center">
                  <label htmlFor="" className="text-[20px] whitespace-nowrap">
                    Financial Year
                  </label>
                  {/* <div className="bg-gray-200 px-3 py-1 rounded-lg"> */}
                  <select
                    name=""
                    id=""
                    className=" bg-slate-200 px-3 py-1 rounded-lg  text-[24px] w-full px-4 "
                  >
                    <option value="">FY 2023-24</option>
                  </select>
                  {/* </div> */}
                </div>
                <div className="flex gap-2 w-[50%] items-center">
                  <label htmlFor="" className="text-[20px]">
                    Country
                  </label>
                  <select
                    name=""
                    id=""
                    className="bg-slate-200 px-3 py-1 rounded-lg  text-[24px] w-full"
                  >
                    <option value="">India</option>
                    <option value="">Australia</option>
                  </select>
                </div>
              </div>
              <hr />

              <div className="second flex justify-between gap-5 my-3 py-2">
                <div className="w-[50%]">
                  <p className="text-[20px]">Enter purchase price of Crypto</p>
                  <input
                    type="text"
                    className="rounded-md bg-slate-200 w-[100%] py-3 px-4"
                    onChange={getPurchasePrice}
                    value={purchasePrice}
                  />
                </div>
                <div className="w-[50%]">
                  <p className="text-[20px] ">Enter sale price of Crypto</p>
                  <input
                    type="text"
                    className="rounded-md bg-slate-200 w-[100%] py-3 px-4"
                    onChange={getSalesPrice}
                    value={salesPrice}
                  />
                </div>
              </div>

              <div className="thgird my-3 py-2 flex justify-between gap-5">
                <div className="w-[50%]">
                  <p className="text-[20px]">Enter your Expenses</p>
                  <input
                    type="text"
                    className="rounded-md bg-slate-200 w-[100%] py-3 px-4"
                    onChange={getExpenses}
                    value={expense}
                  />
                </div>
                <div className="w-[50%]">
                  <p className="text-[20px]">Capital gains amount</p>
                  <div className="flex gap-3">
                    <div className="w-[50%]">
                      <button
                        onClick={() => setLongTerm(!isLongTerm)}
                        className={`rounded-md bg-slate-200 w-[100%] border py-3  ${
                          !isLongTerm
                            ? "border-blue-700 bg-blue-200"
                            : "border-0"
                        }`}
                      >
                        Short Term
                      </button>
                      <p className="text-[15px]">Smaller than 12</p>
                    </div>
                    <div className="w-[50%]">
                      <button
                        onClick={() => setLongTerm(!isLongTerm)}
                        className={`rounded-md bg-slate-200 w-[100%] border py-3
                      ${isLongTerm ? "border-blue-700 bg-blue-200" : "border-0"}
                      `}
                      >
                        Long Term
                      </button>
                      <p className="text-[15px]">greater than 12</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fourth my-3 py-2 flex justify-between gap-5">
                <div className="w-[50%]">
                  <p className="text-[20px]">Select Your Annual Income</p>
                  <select
                    // name=""
                    // id=""
                    className="rounded-md bg-slate-200 w-[100%] py-3 px-4"
                    onChange={getAnnualIncome}
                  >
                    <option value="0" name="0">
                      Rs. 0 - Rs 10,00,000
                    </option>
                    <option
                      value="19"
                      name="Nil + 19% excess over Rs. 10,00,001"
                    >
                      Rs. 10,00,001 - Rs. 20,00,000
                    </option>
                    <option
                      value="32.5"
                      name="Rs. 5,092 + 32% excess over Rs. 20,00,001"
                    >
                      Rs. 20,00,001 - Rs. 50,00,000
                    </option>
                    <option
                      value="37"
                      name="Rs. 29,467 + 37% excess over Rs. 50,00,001"
                    >
                      Rs. 50,00,001 - Rs. 1,00,00,000
                    </option>
                    <option
                      value="45"
                      name="Rs. 51,667 + 45% excess over Rs. 1,00,00,000"
                    >
                      Rs. 1,00,00,000+
                    </option>
                  </select>
                </div>
                <div className="w-[50%] flex flex-col justify-center">
                  <p className="text-[16px]">Tax Rate</p>
                  <p>{rates} </p>
                </div>
              </div>

              {isLongTerm ? (
                <div className="fifth my-3 py-2 flex justify-between gap-5">
                  <div className="w-[50%]">
                    <p className="text-[20px]">Capital gains amount</p>
                    <input
                      type="text"
                      value={capitalGains}
                      className="rounded-md bg-slate-200 w-[100%] py-3 px-4"
                    />
                  </div>
                  <div className="w-[50%]">
                    <p className="text-[20px]">Discount for long term gains</p>
                    <input
                      value={discountForCapitalGains}
                      type="text"
                      className="rounded-md bg-slate-200 w-[100%] py-3 px-4"
                    />
                  </div>
                </div>
              ) : null}

              <div className="last my-3 py-2 flex justify-between gap-5">
                <div className="w-[50%] bg-green-100 flex flex-col py-5 text-center rounded-lg">
                  <p className="text-[20px]">Net Capital gains tax amount</p>
                  <span className="text-[24px] font-bold">
                    {netGains ? "Rs" + netGains : "Please select all inputs"}
                  </span>
                </div>

                <div className="w-[50%] bg-blue-100 flex flex-col py-5 text-center rounded-lg">
                  <p className="text-[20px]">The tax you need to pay*</p>
                  <span className="text-[24px] font-bold">
                    {tax ? "Rs" + tax : "Please select all inputs"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Faqs />
          <div>
            <h1 className="text-[24px] font-bold">Capital Gains Tax (CGT)</h1>
            <p>
              Calculate your capital gains or losses on cryptocurrency
              transactions using this formula:
            </p>
            <strong> Capital Gain/Loss = Capital Proceeds - Cost Basis </strong>
            <p className="font-bold">
              Note: 
              <br /> Capital Proceeds (sale value or any form of receipt) <br />
              Cost Basis (costs incurred to acquire, hold, and dispose of the
              asset)
            </p>
            <br />
            <p>
              Your tax rate depends on whether you held the cryptocurrency for
              more than 12 months (long-term) or less (short-term). Long-term
              gains receive a 50% discount.{" "}
            </p>
            <p>
              Calculate your Australian crypto taxes accurately and effortlessly
              with KoinX's free crypto tax calculator for Australia. It
              simplifies the process, ensuring compliance with the latest tax
              rates and regulations making crypto tax calculations easy and
              precise.
            </p>
          </div>
        </div>
        <div className="w-[25%] h-min bg-blue-700 text-white text-center p-7 rounded-xl">
          <h1 className="text-[26px] font-semibold">
            Get Started with KoinX for FREE
          </h1>
          <p className="text-[14px] my-5">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
          <div className="text-center py-5">
            <img src={logo} alt="" className="mx-auto" />
          </div>
          <button className="bg-white text-black py-2 px-5 rounded-md">
            Get Started for FREE
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hero;
