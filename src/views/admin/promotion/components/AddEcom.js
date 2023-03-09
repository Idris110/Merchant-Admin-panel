import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddEcom() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    companyName: "",
    companySite: "",
    companyUniqueId:""
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
      <form action="" className="mt-5">
        <label
          htmlFor="id1"
          className={`mt-5 ml-3 text-xl font-bold text-navy-700 dark:text-white`}
        >
          Company Name
        </label>
        <input
          name="companyName"
          value={user.companyName}
          onChange={handleChange}
          type="text"
          id="id1"
          placeholder="Enter the Company Name"
          className={`h-19 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-5 text-2xl outline-none`}
        />
        <label
          htmlFor="id1"
          className={`mt-5 ml-3 text-xl font-bold text-navy-700 dark:text-white`}
        >
          Company Site
        </label>
        <input
          name="companySite"
          value={user.companySite}
          onChange={handleChange}
          type="text"
          id="id1"
          placeholder="Enter the Company Site"
          className={`h-19 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-5 text-2xl outline-none`}
        />
        <label
          htmlFor="id1"
          className={`mt-5 ml-3 text-xl font-bold text-navy-700 dark:text-white`}
        >
          Company Unique Id
        </label>
        <input
          name="companyUniqueId"
          value={user.companyUniqueId}
          onChange={handleChange}
          type="text"
          id="id1"
          placeholder="Enter the Company Unique Id"
          className={`h-19 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-5 text-2xl outline-none`}
        />
        <button className="appButton" onClick={register} type="button">
          Sign Up
        </button>
      </form>
    </div>
  );
}
