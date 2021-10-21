import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactCard from "../Components/ContactCard";
import {
  goToDisplayMenu,
  goToDisplayForm,
} from "../features/contact/LayoutSlice";
import { unselect, getContact } from "../features/contact/ContactSlice";
const Profile = () => {
  const selectedContact = useSelector((state) => state.contact.selectedContact);
  const dispatch = useDispatch();
  const handleGoBack = () => {
    dispatch(goToDisplayMenu());
    dispatch(getContact());
    dispatch(unselect());
  };
  const handleEdit = () => {
    dispatch(goToDisplayForm(selectedContact));
  };
  return (
    <div className="contact-profile">
      <ContactCard details={selectedContact}></ContactCard>
      <div className="contact-profile__button">
        <button className="button" onClick={handleGoBack}>
          Go Back
        </button>
        <button className="button" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Profile;
