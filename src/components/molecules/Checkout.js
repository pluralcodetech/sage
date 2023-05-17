import React from "react";
import Text from "../atom/Text";
import Input from "../atom/Input";
import TextLinks from "../atom/TextLinks";
import Button from "../atom/Button";
import Image from "../atom/Image";
import checkimg from "../../images/coursea.png";
import { useState } from "react";
import countries from "i18n-iso-countries";
// Import the languages you want to use
import enLocale from "i18n-iso-countries/langs/en.json";

const Checkout = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (value) => setSelectedCountry(value);

  // Have to register the languages you want to use
  countries.registerLocale(enLocale);

  // Returns an object not a list
  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const [currency, setCurrency] = useState(true)
  
  return (
    <div className="p-3 p-lg-5">
      <h2>Checkout</h2>
      <div className="row py-3 py-lg-4">
        <div className="col-sm-12 col-md-12 col-lg-6 p-0 pe-lg-3">
          <Text className="checkout-head" children="Billings Information" />
          <form className="">
            <div>
              <label className="lightcol py-2">Full Name</label>
              <Input
                className="form-control lightercol px-4 py-2  checkout-inp"
                type="text"
                placeholder="Enter full name"
              />
            </div>
            <div>
              <label className="lightcol py-2">Email Address</label>
              <Input
                className="form-control lightercol px-4 py-2 checkout-inp"
                type="text"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="lightcol py-2">Country</label>
              <select
                className="form-control lightercol px-4 py-2 checkout-inp"
                value={selectedCountry}
                onChange={(e) =>{ 
                  if (e.target.value !== "NG"){
                    setCurrency(false)
                  }else{setCurrency(true)}
                  selectCountryHandler(e.target.value)
                }}
              >
                {!!countryArr?.length &&
                  countryArr.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label className="lightcol py-2">Phone Number</label>
              <Input
                className="form-control lightercol px-4 py-2 checkout-inp"
                type="text"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label className="lightcol py-2">Billing Address</label>
              <Input
                className="form-control lightercol px-4 py-2 checkout-inp"
                type="text"
                placeholder="Enter your billing address"
              />
            </div>

            <p className="lightcol py-2">
              <span className="red">Note:</span> Ensure your Full Name matches
              what will appear on your certificate at the end of the course.{" "}
            </p>
          </form>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 p-0 ps-lg-3">
          <Text className="checkout-head" children="Summary" />
          <div className="oprice">
            <div className="d-flex justify-content-between">
              <Text className="" children="Cost Price:" />
              <Text className="" children="Free" />
            </div>
            <hr className="hr-check" />
          </div>
          <div>
            <div className="d-flex justify-content-between pt-4">
              <Text className="" children="Total Price:" />
              {currency ?<Text className="" children="N13,500"/> :
              <Text className="" children="$100" />}
            </div>
            <hr className="hr-check" />
          </div>
          <Text className="checkout-head pt-4" children="Order details" />
          <div className="d-flex align-items-center justify-content-between ">
            <div className="d-flex gap-2 align-items-center payimg">
              <div>
                <Image className="checkimg" src={checkimg} />
              </div>
              <Text
                className=""
                children="Operations Management: Important of management and guide to understanding the process."
              />
            </div>
            <Text className="oprice" children="N13,500" />
          </div>
          <TextLinks
            to="#"
            className="d-flex justify-content-center pt-4"
            children={<Button className="btn cert-btn" children="Pay now" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
