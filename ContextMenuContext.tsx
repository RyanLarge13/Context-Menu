/*
Context Menu - a react tool
Copyright (C) 2025 Ryan Large

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

import React, { createContext, useContext, useState } from "react";

interface ContextMenuContextType {}

export const ContextMenuContext = createContext({} as ContextMenuContextType);

export const ConfigProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState([]);
  const [color, setColor] = useState("#000");
  const [title, setTitle] = useState("");

  const build = ({}) => {};

  const contextValue = { build: build };

  return (
    <ContextMenuContext.Provider value={contextValue}>
      {children}
    </ContextMenuContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ContextMenuContext);
  if (!context) {
    throw new Error("useConfig must be within a ConfigProvider");
  }

  return context;
};
