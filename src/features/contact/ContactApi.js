import axios from "axios";

let url = "http://localhost:3001/";

export const get_all_contacts = async () => await axios.get(`${url}users/`);

export const postContact = async (data) =>
  await axios.post(`${url}users`, data);

export const editContact = async (data) =>
  await axios.patch(`${url}users/${data.id}/`, data);

export const removeContact = async (id) =>
  await axios.delete(`${url}users/${id}`);
