import { createContext, useEffect, useState } from "react";

export const myContext = createContext();

import React from "react";

const Context = ({ children }) => {
  let [purchasePrice, setPurchasePrice] = useState(0);
  let [salesPrice, setSalesPrice] = useState(0);
  let [expense, setExpenses] = useState(0);
  let [annualIncome, setAnnualIncome] = useState(0);
  let [capitalGains, setCapitalGain] = useState(0);
  let [discountForCapitalGains, setDiscount] = useState(0);
  let [netGains, setNetGans] = useState();
  let [tax, setTax] = useState();
  let [isLongTerm, setLongTerm] = useState(true);
  let [rates, setRates] = useState(0);

  useEffect(() => {
    let gains = salesPrice - purchasePrice - expense;
    setCapitalGain(gains);
    let discount;
    if (gains > 0) {
      discount = (gains * 50) / 100;
      setDiscount(discount);
    }
    if (isLongTerm) {
      let netGain = gains - discount;
      setNetGans(netGain);
    } else {
      setNetGans(gains);
    }

    let tax = (gains * parseFloat(annualIncome)) / 100;
    console.log(annualIncome, tax);
    setTax(tax);
  }, [salesPrice, purchasePrice, expense, annualIncome, isLongTerm]);

  function getPurchasePrice(e) {
    console.log("purchase price", e.target.value);
    setPurchasePrice(e.target.value);
  }
  function getSalesPrice(e) {
    console.log("sales price", e.target.value);
    setSalesPrice(e.target.value);
  }
  function getExpenses(e) {
    console.log("expense", e.target.value);
    setExpenses(e.target.value);
  }
  function getAnnualIncome(e) {
    const selectedName =
      e.target.options[e.target.selectedIndex].getAttribute("name");
    setRates(selectedName);
    setAnnualIncome(e.target.value);
  }

  return (
    <myContext.Provider
      value={{
        purchasePrice,
        getPurchasePrice,
        salesPrice,
        getSalesPrice,
        expense,
        getExpenses,
        capitalGains,
        discountForCapitalGains,
        netGains,
        tax,
        annualIncome,
        setAnnualIncome,
        getAnnualIncome,
        isLongTerm,
        setLongTerm,
        rates,
        tax,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default Context;
