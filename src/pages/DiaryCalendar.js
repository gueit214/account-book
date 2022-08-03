import React from "react";
import Header from "../components/UI/Header";
import Inner from "../components/UI/Inner";
import Calendar from "../components/Calendar/Calendar";
import "./DiaryCalendar.scss";

const DiaryCalendar = () => {
  return (
    <div className="DiaryCalendar">
      <Inner>
        <Header />
      </Inner>
      <Inner>
        <Calendar />
      </Inner>
    </div>
  );
};

export default DiaryCalendar;
