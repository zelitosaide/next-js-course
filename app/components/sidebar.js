"use client";

import { createContext, useContext, useState } from "react"; 

const SidebarContext = createContext();

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  function handleHandle() {
    setIsOpen(!isOpen);
  }

  return (
    <SidebarContext.Provider 
      value={{ isOpen, handleHandle }}
    >
      <SidebarNav />
    </SidebarContext.Provider>
  );
}

function SidebarNav() {
  const { isOpen, handleHandle } = useContext(SidebarContext);

  return (
    <div>
      <button onClick={handleHandle}>Toggle</button>
 
      {isOpen && <Subnav />}
    </div>
  );
}

function Subnav() {
  return <h1>Subnav</h1>;
}