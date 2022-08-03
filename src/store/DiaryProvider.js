import React, { useCallback, useEffect, useState } from "react";
import DiaryContext from "./diary-context";

const DiaryProvider = (props) => {
  const [diaryList, setDiaryList] = useState([]);
  const [error, setError] = useState(null);

  const handleDiary = useCallback(async ({ url, type, newDiary }) => {
    setError(null);
    try {
      const response = await fetch(url, {
        method: type,
        body: JSON.stringify(newDiary),
        headers: {
          "content-type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      if (type === "GET") {
        const diary = [];
        for (const key in data) {
          diary.push({
            id: key,
            date: data[key].date,
            price: data[key].price,
            content: data[key].content,
            type: data[key].type,
            note: data[key].note,
          });
        }
        setDiaryList(diary);
      }
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    handleDiary({
      type: "GET",
      url: "https://account-book-d2459-default-rtdb.firebaseio.com/diaries.json",
    });
  }, [handleDiary]);

  const contextProp = {
    handleDiary,
    diaryList,
    error,
  };
  return (
    <DiaryContext.Provider value={contextProp}>
      {props.children}
    </DiaryContext.Provider>
  );
};

export default DiaryProvider;
