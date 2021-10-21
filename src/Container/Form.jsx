import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import ContactForm from "../Components/ContactForm";
import ContactCard from "../Components/ContactCard";
import { goToDisplayMenu } from "../features/contact/LayoutSlice";
import {
  postContact,
  unselect,
  getContact,
  editContact,
} from "../features/contact/ContactSlice";
const Form = () => {
  const dispatch = useDispatch();
  const selectedContact = useSelector((state) => state.contact.selectedContact);

  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    color: "",
    companyId: 1,
  });
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (selectedContact !== null) {
      setDetails({
        id: selectedContact.id,
        firstname: selectedContact.firstname,
        lastname: selectedContact.lastname,
        email: selectedContact.email,
        age: selectedContact.age,
        color: selectedContact.color,
        companyId: 1,
      });
    }
  }, [selectedContact]);

  const handleCancel = (e) => {
    dispatch(goToDisplayMenu());
    dispatch(getContact());
    dispatch(unselect());
  };
  const handleAddContact = (e) => {
    e.preventDefault();
    dispatch(postContact(details));
    dispatch(goToDisplayMenu());
    dispatch(unselect());
  };
  const handleEditContact = (e) => {
    e.preventDefault();
    dispatch(editContact(details));
    dispatch(goToDisplayMenu());
    dispatch(unselect());
  };
  return (
    <div className="contact-form">
      <h2>Add Contact</h2>
      <ContactForm handleChange={handleChange} details={details} />
      <ContactCard
        selected={selectedContact !== null ? true : false}
        details={details}
      ></ContactCard>
      <div className="contact-form__button">
        <button className="button btnCancel" onClick={handleCancel}>
          Cancel
        </button>
        {selectedContact !== null ? (
          <button className="button btnEditContact" onClick={handleEditContact}>
            Edit Contact
          </button>
        ) : (
          <button className="button btnAddContact" onClick={handleAddContact}>
            Add Contact
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
