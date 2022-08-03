import React, { useCallback, useContext, useEffect, useState } from "react";
import DiaryItem from "./DiaryItem";
import DiaryAddItem from "./DiaryAddItem";
import DiaryItemDescription from "./DiaryItemDescription";
import DiaryContext from "../../store/diary-context";

const DiaryTable = () => {
  const diaryCtx = useContext(DiaryContext);

  const { handleDiary, diaryList, error } = diaryCtx;

  // Input 세팅
  const todayDate = new Date();
  const fullTodayDate = `${todayDate.getFullYear()}-${(
    "00" + String(todayDate.getMonth() + 1)
  ).slice(-2)}-${("00" + todayDate.getDate()).slice(-2)}`;
  const [inputState, setInputState] = useState({
    date: fullTodayDate,
    price: "",
    content: "",
    type: "",
    note: "",
  });
  const handleInputState = useCallback((e) => {
    setInputState((state) => {
      const newState = {
        ...state,
        [e.target.name]: e.target.value,
      };
      return newState;
    });
  }, []);

  // 제출 버튼
  const [ErrorMessage, setErrorMessage] = useState("");
  const handleSubmitDiary = (e) => {
    e.preventDefault();
    if (
      inputState.price < 0 ||
      inputState.price === "" ||
      isNaN(inputState.price) ||
      inputState.content === "" ||
      inputState.type === ""
    ) {
      setErrorMessage(<span>빈 칸을 모두 채워주세요</span>);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    } else {
      setErrorMessage("");
      const newDiary = {
        date: inputState.date,
        price: inputState.price,
        content: inputState.content,
        type: inputState.type,
        note: inputState.note,
      };
      handleDiary({
        url: "https://account-book-d2459-default-rtdb.firebaseio.com/diaries.json",
        type: "POST",
        newDiary: newDiary,
      });
      setInputState({
        date: fullTodayDate,
        price: "",
        content: "",
        type: "",
        note: "",
      });
    }
  };

  //삭제 버튼
  const handleDeleteButton = useCallback(
    async (e) => {
      e.preventDefault();
      handleDiary({
        url: `https://account-book-d2459-default-rtdb.firebaseio.com/diaries/${e.target.id}.json`,
        type: "DELETE",
      });
    },
    [handleDiary]
  );

  return (
    <form className="DiaryTable">
      <div className="AccountTable">
        <DiaryItemDescription />
        <DiaryAddItem
          inputState={inputState}
          handleInputState={handleInputState}
        />
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
      {ErrorMessage ? (
        <span className="span--message">{ErrorMessage}</span>
      ) : (
        <button
          onClick={handleSubmitDiary}
          className="btn btn-primary btn--submit"
        >
          제출
        </button>
      )}
    </form>
  );
};

export default React.memo(DiaryTable);
