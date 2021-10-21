import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  selectedContact,
  removeContact,
  getContact,
} from "../features/contact/ContactSlice";
import {
  goToDisplayContact,
  goToDisplayForm,
} from "../features/contact/LayoutSlice";
const ContactList = ({ user }) => {
  const dispatch = useDispatch();
  const handleSelectedContact = (user) => {
    dispatch(selectedContact(user));
    dispatch(goToDisplayContact());
  };
  const handleEdit = (user) => {
    dispatch(selectedContact(user));
    dispatch(goToDisplayForm());
  };
  const handleRemove = (user) => {
    dispatch(removeContact(user.id));
    setTimeout(() => {
      dispatch(getContact());
    }, 100);
  };
  return (
    <div
      className="contact-list__detail"
      style={{ background: user.color }}
      onClick={() => handleSelectedContact(user)}
    >
      <p className="user-id">{user.id}</p>
      <div className="user-detail">
        <p className="user-detail__name">
          {user.firstname} {user.lastname}
        </p>
        <div className="user-detail__personal">
          <p className="user-age">{user.age}</p>
          <p className="user-email">{user.email}</p>
        </div>
      </div>
      <div className="user-icons">
        <FontAwesomeIcon
          onClick={(e) => {
            e.stopPropagation();
            handleEdit(user);
          }}
          icon="user-edit"
          size="lg"
        />
        <FontAwesomeIcon
          icon="user-minus"
          onClick={(e) => {
            e.stopPropagation();
            handleRemove(user);
          }}
          size="lg"
        />
      </div>
    </div>
  );
};

export default ContactList;
