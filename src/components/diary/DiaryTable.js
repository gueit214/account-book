import React, { useCallback, useEffect, useState } from "react";
import DiaryItem from "./DiaryItem";
import DiaryAddItem from "./DiaryAddItem";
import DiaryItemDescription from "./DiaryItemDescription";
import useFetch from "../../hooks/useFetch";

const sortDiary = (list, isAscending) => {
  return list.sort((a, b) => {
    if (isAscending) {
      if (a.date > b.date) {
        return 1;
      } else if (a.date < b.date) {
        return -1;
      } else {
        return a.id < b.id;
      }
    } else {
      if (a.date < b.date) {
        return 1;
      } else if (a.date > b.date) {
        return -1;
      } else {
        return a.id < b.id;
      }
    }
  });
};

const DiaryTable = () => {
  const [sortState, setSortState] = useState("ascending");
  const todayDate = new Date();
  const fullTodayDate = `${todayDate.getFullYear()}-${(
    "00" + String(todayDate.getMonth() + 1)
  ).slice(-2)}-${("00" + todayDate.getDate()).slice(-2)}`;

  const { diaryList, deleteDiary, getDiary, status } = useFetch();
  useEffect(() => {
    getDiary();
  }, [getDiary]);
  //삭제 버튼
  const handleDeleteButton = async (e) => {
    e.preventDefault();

    if (window.confirm("정말로 삭제하시겠습니까?")) {
      await deleteDiary(e.target.id);
    }
    await getDiary();
    console.log(diaryList);
  };

  const sortedDiary = sortDiary(diaryList, sortState === "ascending");
  return (
    <form className="DiaryTable">
      <div className="AccountTable">
        <DiaryItemDescription setSortState={setSortState} />
        <DiaryAddItem fullTodayDate={fullTodayDate} getDiary={getDiary} />
        {sortedDiary.map((diary, num) => (
          <DiaryItem
            key={diary.id}
            diary={diary}
            num={num}
            handleDeleteButton={handleDeleteButton}
            id={diary.id}
          />
        ))}
      </div>
    </form>
  );
};

export default React.memo(DiaryTable);
