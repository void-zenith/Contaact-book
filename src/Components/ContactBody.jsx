import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../Container/Form";
import ContactList from "./ContactList";
import Loader from "react-loader-spinner";
import { getContact, unselect } from "../features/contact/ContactSlice";
import Profile from "../Container/Profile";

const ContactBody = ({ isBlur, searchValue }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact());
    dispatch(unselect());
  }, [dispatch]);
  const contacts = useSelector((state) => state.contact.contact);
  const layout = useSelector((state) => state.layout);
  const loading = useSelector((state) => state.contact.isLoading);
  const list = contacts.filter((user) =>
    user.firstname.toLowerCase().includes(searchValue.toLowerCase()) ||
    user.lastname.toLowerCase().includes(searchValue.toLowerCase())
      ? user
      : searchValue === "" && user
  );
  return (
    <div className={`contact-body ${isBlur ? "blur" : ""}`}>
      {loading && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {layout.displayMenu && (
        <div className="contact-list">
          {list.map((user) => (
            <ContactList key={user.id} user={user}></ContactList>
          ))}
        </div>
      )}
      {layout.displayForm && <Form></Form>}
      {layout.displayContact && <Profile></Profile>}
    </div>
  );
};

export default ContactBody;
