/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleNavItem = (link) => {
    navigate(`${link}`);
  };
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
    {
      id: Math.random(),
      name: "Link",
      address: "/",
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
          <li
            key={link.id}
            className="nav-item"
            onClick={handleNavItem.bind(null, link.address)}
          >
            <a className="nav-link">{(link, link.name)}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
