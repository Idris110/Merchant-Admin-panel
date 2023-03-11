import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DynamicCoupon() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    companyName: "",
    companySite: "",
    companyUniqueId: ""
  });
  const [details, setDetails] = useState({
    setRedemption: "",
    couponType: "",
    usage: {
      type: "",
      limit: 1
    },
    minPurchase: 0,
    maxDiscount: 0,
    porductType: "",
    reward: {
      type: "",
      amount: 0
    },
    expiryDate: {
      year: 2023,
      month: 3,
      day: 11
    }
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    // console.log(user.companyName);
  };
  const register = async () => {
    // console.log("ll");
    const {
      companyName,
      companySite,
      companyUniqueId
    } = user;

    if (
      companyName &&
      companySite &&
      companyUniqueId
    ) {
      console.log(user);
      let result = await fetch("http://localhost:3000/company", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      //   console.log(result, "result");
      localStorage.setItem("admin", JSON.stringify(result));
      // navigate("/");
      // <Redirect to="/" />;
    } else {
      alert("invalid");
    }
  };
  return (
    <div className="flex w-full flex-col gap-5">
      <form action="" className="mt-3">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5  gap-6">
          <div className="">
            <label
              htmlFor="targetAud"
              className={`text-xl mt-2 text-navy-700 dark:text-white ml-3 font-bold`}
            >
              Maximum Redemptions
            </label>

            <input
              type="text"
              id="id1"
              placeholder="Enter the Count"
              disabled={false}
              className={`flex items-center justify-center w-full mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
            />
          </div>

          <div className="">
            <label
              htmlFor="targetAud"
              className={`text-lg mt-2 text-navy-700 dark:text-white ml-3 font-bold`}
            >
              Promotion Budget
            </label>

            <input
              type="text"
              id="id1"
              placeholder="Enter the Count"
              disabled={false}
              className={`flex items-center justify-center w-full mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
            />
          </div>


        </div>



        <div className="w-full mt-10 px-3 mb-6 md:mb-0">
          <label
            htmlFor="condRules"
            className={`text-xl mt-9 text-navy-700 dark:text-white font-bold`}
          >
            Conditions Rules :
          </label>
          <br />


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6 gap-6">
            <div className="">
              <label
                htmlFor="minSpent"
                className={`text-lg text-navy-700 dark:text-white ml-3 font-bold`}
              >
                Minimum purchase
              </label>

              <input
                type="text"
                id="id1"
                // onChange={(e) => { setDetails({ ...details, minPurchase: e.target.value }) }}
                placeholder="Min purchase amount"
                disabled={false}
                className={`flex w-full mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
              />
            </div>
            <div className="">
              <label
                htmlFor="maxDis"
                className={`text-lg mt-2 text-navy-700 dark:text-white ml-3 font-bold`}
              >
                Maximum discount
              </label>

              <input
                // value={details.maxDiscount}
                type="text"
                id="id1"
                // onChange={(e) => { setDetails({ ...details, maxDiscount: e.target.value }) }}
                placeholder="Max applicable discount"
                disabled={false}
                className={`flex w-full mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
              />
            </div>
          </div>


          <div className="mt-5">
            <label
              htmlFor="prodType"
              className={`text-lg mt-2 text-navy-700 dark:text-white ml-3 font-bold`}
            >
              On product &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </label>

            {/* <input
                  value={details.porductType}
                  type="text"
                  id="id1"
                  onChange={(e) => { setDetails({ ...details, porductType: e.target.value }) }}
                  placeholder="Product Type"
                  disabled={false}
                  className={`mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
                /> */}
            <div className="relative mt-1">
              <select name="couponType"
                // value={details.couponType}
                // onChange={(e) => {
                //   let x = e.target.value
                //   setDetails({ ...details, couponType: x })
                // }}
                className="block appearance-none w-full bg-formBg border border-gray-200 text-gray-700 mt-3 mr-3 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 ml-2">
          <label
            htmlFor="condRules"
            className={`text-xl text-navy-700 dark:text-white font-bold`}
          >
            Manage :
          </label>
        </div>

        <div className="ml-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-8 gap-6">
          <div className="">

            <label
              className={`text-xl text-navy-700 dark:text-white ml-3 font-bold`}>
              <input type="checkbox"
                className={`focus:ring-0 `} /> New Customer Coupon
            </label>
          </div>
          <div className="">

            <label
              className={`text-xl text-navy-700 dark:text-white ml-3 font-bold`}>
              <input type="checkbox"
                className={``} /> Returning Customer Coupon
            </label>
          </div>
          <div className="">

            <label
              className={`text-xl text-navy-700 dark:text-white ml-3 font-bold`}>
              <input type="checkbox"
                className={``} /> Prevent cart abandontment
            </label>
          </div>

        </div>

        <button
          onClick={register} type="button"
          className="text-blue mt-7 w-1/4 ml-3 rounded-xl bg-ourTheme py-3 px-6 text-xl font-bold hover:bg-ourDarkTheme hover:text-lightPrimary"
        >
          Generate Coupons
        </button>
      </form>
    </div>
  );
}
