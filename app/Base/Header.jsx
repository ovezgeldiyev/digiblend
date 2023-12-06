"use client";
import React, { useEffect } from "react";
import LanguageSelect from "./LanguageSelect";
import { usePathname } from "next/navigation";
import { dioganalArrow } from "./SVG";
const languageList = [
  { id: "1", value: "NL", image: "/images/nl.png" },
  { id: "2", value: "EN", image: "/images/en.png" },
];

export default function Header({ setMenu, menu }) {
  const closeMenu = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };
  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  const pathname = usePathname();
  return (
    <header className="header2">
      <div className="auto__container">
        <div className="header2__inner">
          <div className="header2__inner-side">
            <div className="header2__inner-logo">
              <img src="./images/logo-name.svg" alt="" />
            </div>
            <div className="header2__inner-stars">
              <img src="./images/icons/stars.svg" alt="" />
            </div>
          </div>
          <nav className={"nav2 " + (menu ? "active" : "")} onClick={closeMenu}>
            <div className="nav2__inner">
              <ul>
                <li>
                  <a href="#" className="active">
                  <span>3</span>
                    What we do
                  </a>
                </li>
                <li>
                  <a href="#">Who we are <span>3</span></a>
                </li>
                <li>
                  <a href="#">Cases <span>3</span></a>
                </li>

                <li>
                  <a href="#" className="notif">Careers <span>3</span></a>
                </li>
                <div className="switch__row">
                  <div className="switch__text">U</div>
                  <div className="switch">
                    <input type="checkbox" />
                    <label htmlFor=""></label>
                  </div>
                  <div className="switch__text">Je</div>
                </div>
                <li className="hidden">
                  <a href="#">
                    Contact
              {dioganalArrow}

                  </a>
                </li>
              </ul>
              <LanguageSelect list={languageList} selected={languageList[0]} />
            </div>
          </nav>
          <div className="header2__inner-buttons">
            <div className="switch__row">
              <div className="switch__text">U</div>
              <div className="switch">
                <input type="checkbox" />
                <label htmlFor=""></label>
              </div>
              <div className="switch__text">Je</div>
            </div>
            <a href="#" className="header2__inner-link">
              Contact Us
            </a>
            <LanguageSelect list={languageList} selected={languageList[0]} />
            <div
              className={"burger last " + (menu ? "active" : "")}
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
