import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();

// Provider
export function MenuContextProvider({ children }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const value = { isOpenMenu, setIsOpenMenu };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

// Hook
export const useMenuContext = () => {
  return useContext(MenuContext);
};
