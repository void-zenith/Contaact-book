import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./ContactApi";
const initialState = {
  isLoading: false,
  contact: [],
  selectedContact: null,
};
export const getContact = createAsyncThunk(
  "contact/getContact",
  async () => await api.get_all_contacts()
);

export const postContact = createAsyncThunk(
  "contact/postContact",
  async (data) => await api.postContact(data)
);

export const editContact = createAsyncThunk(
  "contact/editContact",
  async (data) => await api.editContact(data)
);

export const removeContact = createAsyncThunk(
  "contact/removeContact",
  async (id) => await api.removeContact(id)
);

const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    selectedContact: (state, action) => {
      state.selectedContact = action.payload;
    },
    unselect: (state) => {
      state.selectedContact = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contact = action.payload.data;
      })
      .addCase(getContact.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(postContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.contact.push(action.payload.data);
        state.isLoading = false;
      })
      .addCase(postContact.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(editContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contact = state.contact.map((ev) =>
          ev.id === action.payload.data.id ? action.payload.data : ev
        );
      })
      .addCase(editContact.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(removeContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(removeContact.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { selectedContact, unselect } = ContactSlice.actions;
export default ContactSlice.reducer;
