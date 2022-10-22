import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Inner = (props) => {
  return <div className="Inner">{props.children}</div>;
};

const Header = () => {
  const linkList = [
    {
      id: Math.random(),
      name: "홈",
      address: "/",
    },
    {
      id: Math.random(),
      name: "일지 작성",
      address: "/diarylist",
    },
    {
      id: Math.random(),
      name: "일지 달력",
      address: "/diarycalendar",
    },
  ];

  return (
    <header className="Header">
      <div className="title">
        <h1>AB</h1>
        <h2>(Account Book)</h2>
      </div>
      <ul className="nav nav-tabs">
        {linkList.map((link) => (
          <li key={link.id} className="nav-item">
            <Link className="nav-link" to={link.address}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

const Layout = (props) => {
  return (
    <Inner>
      <Header />
      {props.status === "Pending" && <p className="loading ...">Loading</p>}
      {props.children}
    </Inner>
  );
};

export default Layout;
