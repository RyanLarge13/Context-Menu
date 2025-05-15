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

import React, { useContext } from "react";

import ContextMenuContext from "./ContextMenuContext";

type ContextMenuOption = {
  title: string;
  icon: React.Element;
};

const ContextMenu = (): JSX.Element => {
  const { setContextMenu, contextMenu, position } =
    useContext(ContextMenuContext);

  return (
    <>
      {contextMenu?.show && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={() =>
              setContextMenu({
                show: false,
                meta: { title: "", color: "" },
                options: [],
              })
            }
          ></div>
          <div
            style={{ top: `${position.top}px`, left: `${position.left}px` }}
            className={`fixed ${
              userPreferences.darkMode ? "bg-[#555]" : "bg-slate-200"
            } z-50 flex flex-col justify-start items-start w-60 shadow-md`}
          >
            <div className={`${contextMenu.meta.color} w-full h-1`}></div>
            <p className="p-2 font-semibold">
              {contextMenu.meta.title && contextMenu.meta.title}
            </p>
            {contextMenu.options.map((option: ContextMenuOption) => (
              <button
                key={option.title}
                className={`px-2 py-1 text-sm w-full text-left flex justify-between items-center ${
                  userPreferences.darkMode
                    ? "hover:bg-slate-500"
                    : "hover:bg-slate-300"
                }`}
                onClick={() => option.func()}
              >
                <p>{option.title}</p>
                <p className="text-xs">{option.icon}</p>
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ContextMenu;
