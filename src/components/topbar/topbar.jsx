import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import FuzuLogo from "../../assets/fuzu_logo.png";

import "./topbar.css";
import useStore from "../../zustand/useStore";

function Topbar() {
  const [active, setActive] = useState("en");
  const { i18n } = useTranslation();

  const { setLanguage } = useStore((state) => ({
    setLanguage: state.setLanguage,
  }));

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const activateBtn = () => {
    if (active === "en") {
      setLanguage("sw");
      changeLanguage("sw");
      setActive("sw");
    } else {
      setLanguage("en");
      changeLanguage("en");
      setActive("en");
    }
  };
  return (
    <div className="topbar-container" data-testid="topbar-container">
      <div className="logo-container" data-testid="logo-container">
        <img className="logo" src={FuzuLogo} alt="logo" />
      </div>
      <div
        className="translation-container"
        data-testid="translation-container"
      >
        <button
          className={`translate-button ${active === "en" ? "active" : ""}`}
          onClick={activateBtn}
        >
          English
        </button>
        <button
          className={`translate-button ${active === "sw" ? "active" : ""}`}
          onClick={activateBtn}
        >
          Swahili
        </button>
      </div>
    </div>
  );
}

export default Topbar;
