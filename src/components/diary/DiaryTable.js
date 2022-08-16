import React, { useEffect } from "react";
import DiaryItem from "./DiaryItem";
import DiaryAddItem from "./DiaryAddItem";
import DiaryItemDescription from "./DiaryItemDescription";
import useFetch from "../../hooks/useFetch";

const DiaryTable = () => {
  const todayDate = new Date();
  const fullTodayDate = `${todayDate.getFullYear()}-${(
    "00" + String(todayDate.getMonth() + 1)
  ).slice(-2)}-${("00" + todayDate.getDate()).slice(-2)}`;

  const { diaryList, getDiary, deleteDiary } = useFetch();

  useEffect(() => {
    getDiary();
  }, [getDiary]);

  //삭제 버튼
  const handleDeleteButton = async (e) => {
    e.preventDefault();
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      await deleteDiary(e.target.id);
      setTimeout(() => {
        getDiary();
      }, 500);
    }
  };

  return (
    <form className="DiaryTable">
      <div className="AccountTable">
        <DiaryItemDescription />
        <DiaryAddItem fullTodayDate={fullTodayDate} />
        {diaryList.map((diary, num) => (
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
