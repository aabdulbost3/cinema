import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbarstyle.css"
import { useTranslation } from "react-i18next";
import Select from '../../../minicomp/select/select'
function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
    <section className="top-nav">
    <div>
      <h2>BananUzCinema</h2>
    </div>
    <p><Select/></p>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' for="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <li><NavLink to={"/"}><p>{t("Navbar.0")}</p></NavLink></li>
      <li><NavLink to={"/aboutme"}><p>{t("Navbar.1")}</p></NavLink></li>
      <li><NavLink to={"/contact"}><p>{t("Navbar.2")}</p></NavLink></li>
      <li><NavLink to={"/archive"}><p>{t("Header.18")}</p></NavLink></li>
      <li className='poiu'><NavLink to={"/myblog"}>{t("Navbar.3")}</NavLink></li>
    </ul>
  </section>
  </div>
  )
}
export default Navbar