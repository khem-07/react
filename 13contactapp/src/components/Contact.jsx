import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdatecontact from "./AddAndUpdatecontact";
import useDisclouse from "../hooks/useDisclosure";
import useDisclosure from "../hooks/useDisclosure";
import { toast } from "react-toastify";

function Contact({ contact }) {
 
  const {isOpen, onClose , onOpen} = useDisclosure();
  


  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div
      key={contact.id}
      className="bg-yellow-200 flex items-center justify-between rounded-lg p-2"
    >
      <HiOutlineUserCircle className="text-orange-500 text-4xl" />
      <div className="">
        <h2 className="font-medium">{contact.name}</h2>
        <p className="text-sm">{contact.email}</p>
      </div>
      <div className="flex text-3xl">
        <RiEditCircleLine onClick={onOpen} className="cursor-pointer"/>
        <IoMdTrash
          onClick={() => deleteContact(contact.id)}
          className="cursor-pointer text-orange"
        />
      </div>
    </div>
    <AddAndUpdatecontact contact ={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  );
}

export default Contact;
