import React from "react";
import { HomeIcon } from "../icons/HomeIcon";
import { RectangleStackIcon } from "../icons/RectangleStackIcon";
import { SquareStackIcon } from "../icons/SquareStackIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { UserIcon } from "../icons/UserIcon";
import { NavLink } from "react-router-dom";

// TODO: REMOVER SLASH A PATHS

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center mx-auto p-4 md:w-[90%] text-slate-100">
      <NavLink to={"/"} className="md:block hidden">
        <img src="/olympus-logo-96.webp" alt="Olympus Logo" className="w-12" />
      </NavLink>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          "flex space-x-2 " + (isActive && "btn-active")
        }
      >
        <HomeIcon />
        <span className="font-semibold hover:text-slate-700">Inicio</span>
      </NavLink>

      <NavLink
        to="/series"
        className={({ isActive }) => "flex gap-3 " + (isActive && "btn-active")}
      >
        <SquareStackIcon />
        <span className="lg:block hidden font-semibold hover:text-slate-700">
          Series
        </span>
      </NavLink>
      <NavLink
        to={"/capitulos"}
        className={({ isActive }) => "flex gap-3 " + (isActive && "btn-active")}
      >
        <RectangleStackIcon />
        <span className="lg:block hidden font-semibold hover:text-slate-700">
          Capitulos
        </span>
      </NavLink>
      <div className="flex lg:flex gap-4 cursor-pointer">
        <SearchIcon />
        <UserIcon />
      </div>
    </nav>
  );
};
