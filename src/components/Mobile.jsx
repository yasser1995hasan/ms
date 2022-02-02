import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, Route, Routes } from "react-router-dom";
import Routess from "./Routess";
import Skincare from "../Pages/Skincare";
import Bodycare from "../Pages/Bodycare";

export default function Mobile() {
  return (
    <div>
      <div className="flex items-center justify-center mt-5    ">
        <span>logo</span>
        <span className="ml-36 mr-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </span>
        <span>
          <Menu>
            <Menu.Button>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi  bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </Menu.Button>
            <Transition
              enter="transition duration-20 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            />
            <Menu.Items className=" absolute left-9 space-y-3 mt-2  w-5/6 block bg-black ">
              <Menu.Item>
                {({ active }) => (
                  <a className={`${active && " text-slate-300"} text-white block pt-2 pl-4`} href="/">
                    Home <hr />
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {
                  <Link to="Skincare" className="text-white block pt-2 pl-4 hover:text-slate-300">
                    Skincare <hr />
                  </Link>
                }
              </Menu.Item>
              <Menu.Item>
                {
                  <Link to="Bodycare" className="text-white  pt-2 pl-4 hover:text-slate-300">
                    Bodycare <hr />
                  </Link>
                }
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </span>
      </div>
      <div className="mt-5 container">
        <Routess />
      </div>
    </div>
  );
}
