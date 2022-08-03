import React from "react";
import DiaryTable from "../components/diary/DiaryTable";
import Header from "../components/UI/Header";
import Inner from "../components/UI/Inner";
import "./DiaryList.scss";

const DiaryList = () => {
  return (
    <div className="DiaryList">
      <Inner>
        <Header />
      </Inner>
      <Inner>
        <DiaryTable />
      </Inner>
    </div>
  );
};

export default DiaryList;
