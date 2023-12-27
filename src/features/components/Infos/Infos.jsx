import PropTypes from "prop-types";
import React, { useState, createRef } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import Input from "../Input";
import InputMask from "../Input/InputMask";
import { useStyles } from "./styles";

const Infos = (props) => {
  const { setUser } = props;
  const classes = useStyles();
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    jobTitle: "",
    phone: "",
  });
  const [mask, setMask] = useState();
  const ref = createRef();
  const handleChangeField = (field) => (event) => {
    const value = event?.target?.value || "";
    setUserData((prev) => ({ ...prev, [field]: value }));
  };
  setUser(userData);

  const handleMask = (event) => {
    setUserData((prev) => ({
      ...prev,
      phone: event,
    }));
    setMask(event);
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <span>Enter your information</span>
      </div>
      <div>
        <Input
          label="First Name"
          value={userData.name}
          onChange={handleChangeField("name")}
        />
        <Input
          label="Last Name"
          value={userData.lastName}
          onChange={handleChangeField("lastName")}
        />
        <Input
          label="Job Title"
          value={userData.jobTitle}
          onChange={handleChangeField("jobTitle")}
        />
        <div className={classes.divMask}>
          <PhoneInput
            inputComponent={InputMask}
            name="phone"
            onChange={handleMask}
            ref={ref}
            international
            countryCallingCodeEditable={false}
            initialValueFormat="national"
            defaultCountry="US"
            placeholder="Phone"
            value={mask}
          />
        </div>
      </div>
    </div>
  );
};

Infos.propTypes = {
  setUser: PropTypes.isRequired,
};

export default Infos;
