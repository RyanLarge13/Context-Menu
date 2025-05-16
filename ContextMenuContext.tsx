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

import React, { createContext, useCallback, useContext, useState } from "react";

interface ContextMenuContextType {}

type OptionType = {};

type ContextMenuDataType = {
  title: string;
  mainOptions: OptionType[];
  options: OptionType[];
  color: string;
};

export const ContextMenuContext = createContext({} as ContextMenuContextType);

export const ContextMenuProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [CtxtShow, setCtxtShow] = useState(false);
  const [CtxtMainOptions, setCtxtMainOptions] = useState([]);
  const [CtxtOptions, setCtxtOptions] = useState([]);
  const [CtxtColor, setCtxtColor] = useState("#000");
  const [CtxtTitle, setCtxtTitle] = useState("");

  const build = (contextMenuData: ContextMenuDataType) => {
    const { title, color, mainOptions, options } = contextMenuData;

    if (options.length < 1) {
      throw new Error(
        `You must add at least one option to Context Menu build method. You provided ${options.length}`
      );
    }

    if (mainOptions.length > 4) {
      throw new Error(
        "You can only add up to 4 mainOptions to your context menu. In ContextMenu.build method"
      );
    }

    setCtxtTitle(title);
    setCtxtColor(color);
    setCtxtMainOptions(mainOptions);
    setCtxtOptions(options);
  };

  const setTitle = (title: string) => {
    if (!title) {
      throw new Error("Must provide a title to ContextMenu.setTitle");
    }
    setCtxtTitle(title);
  };

  const setOptions = () => {};

  const setMainOptions = () => {};

  const setColor = () => {};

  const getValue = useCallback(
    (value: string) => {
      if (!value) {
        return null;
      }

      const values = {
        title: CtxtTitle,
        color: CtxtColor,
        options: CtxtOptions,
        mainOptions: CtxtMainOptions,
      };

      if (!values[value]) {
        return null;
      }

      return values[value];
    },
    [CtxtTitle, Ctxt]
  );

  const contextValue = {
    build: build,
    setTitle,
    CtxtShow,
    CtxtMainOptions,
    CtxtOptions,
    CtxtColor,
    CtxtTitle,
  };

  return (
    <ContextMenuContext.Provider value={contextValue}>
      {children}
    </ContextMenuContext.Provider>
  );
};

export const useContextMenu = () => {
  const context = useContext(ContextMenuContext);
  if (!context) {
    throw new Error("useContextMenu must be within a ContextMenuProvider");
  }

  return context;
};
