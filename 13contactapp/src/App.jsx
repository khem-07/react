import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import Contact from "./components/Contact";
import Modal from "./components/Modal";
import AddAndUpdatecontact from "./components/AddAndUpdatecontact";
import useDisclouse from "./hooks/useDisclosure";

function App() {
  const [contacts, setContacts] = useState([]);
  const {isOpen, onClose , onOpen} = useDisclouse(); 

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
  
        onSnapshot(contactsRef, (snapshot) =>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        })
        
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) =>{
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
  
        onSnapshot(contactsRef, (snapshot) =>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

           const filterdContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))

          setContacts(filterdContacts);
          return contactLists;
        })
  }

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="text-white text-3xl absolute ml-1" />
            <input
            onChange={filterContacts}
              type="text"
              className="bg-transparent border border-white rounded-md h-10 flex-grow text-white pl-9"
            />
          </div>

          <AiFillPlusCircle
            onClick={onOpen}
            className="text-5xl text-white cursor-pointer"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdatecontact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center"/>
    </>
  ); 
}

export default App;
