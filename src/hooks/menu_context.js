import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();

// Provider
export function MenuContextProvider({ children }) {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const value = { visibleMenu, setVisibleMenu };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

// Hook
export const useMenuContext = () => {
  return useContext(MenuContext);
};
