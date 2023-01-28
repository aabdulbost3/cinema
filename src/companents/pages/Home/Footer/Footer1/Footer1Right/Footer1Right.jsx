import React from "react";
import "./Footer1Right.css";
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';

function Footer1Right() {
  const { t, i18n } = useTranslation();
  const copytextfooter = "January  2022";

  return (

    <div className="Footer1Right">
      <NavLink to={"/Login"} className="archive">
        <h2>{t("Header.18")}</h2>
        <ul>
    
          <li>{copytextfooter}</li>
          <li>{copytextfooter}</li>
          <li>{copytextfooter}</li>

        </ul>
      </NavLink>
      <NavLink to={"/Login"} className="archive">
        <h2>{t("Header.19")}</h2>
        <ul>
     
          <li>{copytextfooter}</li>
          <li>{copytextfooter}</li>
          <li>{copytextfooter}</li>
        </ul>
      </NavLink>
      </div>
  
  );
}
export default Footer1Right;