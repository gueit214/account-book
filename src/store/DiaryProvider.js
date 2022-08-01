import React, { useState } from "react";
import DiaryContext from "./diary-context";

const dumpDiaryList = [
  {
    id: Math.random(),
    date: "2022-08-01",
    price: 1500,
    type: "식비",
    content: "라면",
    note: "규혁이",
  },
  {
    id: Math.random(),
    date: "2022-08-02",
    price: 8000,
    type: "데이트",
    content: "국밥",
    note: "여자친구",
  },
];

const DiaryProvider = (props) => {
  const [diaryList, setDiaryList] = useState(dumpDiaryList);
  const contextProp = {
    diaryList: diaryList,
  };
  return (
    <DiaryContext.Provider value={contextProp}>
      {props.children}
    </DiaryContext.Provider>
  );
};

export default DiaryProvider;
