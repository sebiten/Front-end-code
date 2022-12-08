import { createContext, useEffect, useState } from "react";
export const PersonContext = createContext();

export const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState({
    fullName: "",
    age: "",
    occupation: "",
    gender: "",
    nickname: "",
    picture: "",
  });



const handleNavigate = (url) => {
  navigate(url, { replace: true }); 
};
    
  useEffect(() => {
    getStaticProps();
  }, []);

  const getStaticProps = async () => {
    const res = await fetch("http://localhost:3001/persons");
    const data = await res.json();
    setPerson(data);
  };
  return (
    <PersonContext.Provider value={{ person, setPerson, handleNavigate }}>
      {children}
    </PersonContext.Provider>
  );
};
