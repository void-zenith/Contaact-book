import React, { useState } from "react";

import ContactBody from "../Components/ContactBody";
import ContactHeader from "../Components/ContactHeader";

const Contact = () => {
  const [blur, setBlur] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const handleBlur = () => {
    setBlur(true);
  };
  const handleBlurOut = () => {
    setBlur(false);
  };

  const handleSearchFilter = (search) => {
    setSearchValue(search);
  };

  return (
    <div className="contact">
      <ContactHeader
        handleSearchFilter={handleSearchFilter}
        handleBlur={handleBlur}
        handleBlurOut={handleBlurOut}
      ></ContactHeader>
      <ContactBody isBlur={blur} searchValue={searchValue}></ContactBody>
    </div>
  );
};

export default Contact;
