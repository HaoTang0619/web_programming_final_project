import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { BASENAME } from "../constants";

export default function Sidebar() {
  const { boyName, girlName } = useSelector(selectUser);
  const { pathname } = useLocation();

  return (
    <div className="sidebar" data-color="white" data-active-color="danger">
      <div className="logo">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="simple-text logo-mini">
          <div className="logo-image-small">
            <img src={`${BASENAME}img/boy.png`} alt="boy" />
          </div>
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="simple-text logo-normal">
          {boyName} & {girlName}
        </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className={pathname === "/" ? "active" : null}>
            <Link to="/">
              <i className="nc-icon nc-money-coins" />
              <p>Our Expenses</p>
            </Link>
          </li>
          <li className={pathname === "/settles" ? "active" : null}>
            <Link to="/settles">
              <i className="fas fa-hand-holding-usd" />
              <p>Settle Up</p>
            </Link>
          </li>
          <li className={pathname === "/charts" ? "active" : null}>
            <Link to="/charts">
              <i className="nc-icon nc-chart-bar-32" />
              <p>Chart</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
