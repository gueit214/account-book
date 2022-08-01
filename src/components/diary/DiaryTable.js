import React, { useContext, useState } from "react";
import AddDiaryItem from "./AddDiaryItem";
import DiaryItem from "./DiaryItem";
import DiaryContext from "../../store/diary-context";

const DiaryTable = () => {
  const diaryCtx = useContext(DiaryContext);
  const diaryList = diaryCtx.diaryList;
  const handleSubmitAddDiary = () => {
    console.log(diaryList);
  };
  console.log(diaryList);

  return (
    <form className="DiaryTable" onSubmit={handleSubmitAddDiary}>
      <table className="table">
        <thead>
          <tr className="table-info">
            <th scope="col">(번)</th>
            <th scope="col">날짜</th>
            <th scope="col">금액</th>
            <th scope="col">내역</th>
            <th scope="col">분류</th>
            <th scope="col">비고</th>
          </tr>
        </thead>
        <AddDiaryItem />
        {diaryList.map((diary) => (
          <DiaryItem diary={diary} key={diary.id} />
        ))}
      </table>
    </form>
  );
};

export default DiaryTable;
