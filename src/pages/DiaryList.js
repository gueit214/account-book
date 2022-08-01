import React from "react";
import DiaryTable from "../components/diary/DiaryTable";
import Header from "../components/Header";
import Inner from "../components/Inner";
import "./DiaryList.scss";

const DiaryList = () => {
  return (
    <div className="DiaryList">
      <Inner>
        <Header />
        <DiaryTable />
      </Inner>
    </div>
  );
};

export default DiaryList;
