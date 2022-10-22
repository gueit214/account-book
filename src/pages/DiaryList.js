import React from "react";
import DiaryTable from "../components/diary/DiaryTable";
import "./DiaryList.scss";
import { Outlet } from "react-router-dom";

const DiaryList = (props) => {
  return (
    <div className="DiaryList">
      <DiaryTable diaryList={props.diaryList} />
    </div>
  );
};

export default DiaryList;
