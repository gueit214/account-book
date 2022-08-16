import React, { useCallback, useState } from "react";

const useFetch = () => {
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

  const getDiary = useCallback(() => {
    handleDiary({
      type: "GET",
      url: "https://account-book-d2459-default-rtdb.firebaseio.com/diaries.json",
    });
    console.log("getDiary 렌더링");
  }, [handleDiary]);

  const deleteDiary = (id) => {
    handleDiary({
      type: "DELETE",
      url: `https://account-book-d2459-default-rtdb.firebaseio.com/diaries/${id}.json`,
    });
  };

  const postDiary = (newDiary) => {
    handleDiary({
      url: "https://account-book-d2459-default-rtdb.firebaseio.com/diaries.json",
      type: "POST",
      newDiary: newDiary,
    });
  };

  const putDiary = (id, thisDiary) => {
    handleDiary({
      url: `https://account-book-d2459-default-rtdb.firebaseio.com/diaries/${id}.json`,
      type: "PUT",
      newDiary: thisDiary,
    });
  };

  return {
    diaryList,
    error,
    getDiary,
    deleteDiary,
    postDiary,
    putDiary,
  };
};

export default useFetch;
