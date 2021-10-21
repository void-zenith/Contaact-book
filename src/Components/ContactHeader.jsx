import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { goToDisplayForm } from "../features/contact/LayoutSlice";
const ContactHeader = ({ handleBlur, handleBlurOut, handleSearchFilter }) => {
  const dispatch = useDispatch();
  const hanldeAddContact = () => {
    dispatch(goToDisplayForm());
  };
  return (
    <>
      <h2>Contact Book</h2>
      <div className="contact-header">
        <div className="contact-header__search">
          <input
            className="input-fields input-fields__search"
            onFocus={handleBlur}
            onBlur={handleBlurOut}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleBlurOut();
              } else {
                handleBlur();
              }
            }}
            onChange={(e) => {
              handleSearchFilter(e.target.value);
            }}
            type="text"
          ></input>
          <FontAwesomeIcon icon="search" size="sm" className="btnSearch" />
        </div>
        <div className="contact-header__icons">
          <FontAwesomeIcon
            icon="plus-square"
            onClick={hanldeAddContact}
            size="lg"
          />
        </div>
      </div>
    </>
  );
};

export default ContactHeader;
