import React, { useCallback, useState } from "react";

const useFetch = (isStartPending = false) => {
  const [diaryList, setDiaryList] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(isStartPending ? "Pending" : "");

  const handleDiary = useCallback(async ({ url, type, newDiary }) => {
    setError(null);
    setStatus("Pending");
    try {
      const response = await fetch(url, {
        method: type,
        body: JSON.stringify(newDiary),
        headers: {
          "content-type": "application/json",
        },
      });
      setStatus("Completed!");
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
      setStatus("Somethins went wrong");
    }
  }, []);

  const getDiary = useCallback(async () => {
    handleDiary({
      type: "GET",
      url: "https://account-book-97485-default-rtdb.firebaseio.com/diaries.json",
    });
  }, [handleDiary]);

  const deleteDiary = async (id) => {
    handleDiary({
      type: "DELETE",
      url: `https://account-book-97485-default-rtdb.firebaseio.com/diaries/${id}.json`,
    });
  };

  const postDiary = async (newDiary) => {
    handleDiary({
      url: "https://account-book-97485-default-rtdb.firebaseio.com/diaries.json",
      type: "POST",
      newDiary: newDiary,
    });
  };

  const putDiary = async (id, thisDiary) => {
    handleDiary({
      url: `https://account-book-97485-default-rtdb.firebaseio.com/diaries/${id}.json`,
      type: "PUT",
      newDiary: thisDiary,
    });
  };

  return {
    diaryList,
    error,
    status,
    getDiary,
    deleteDiary,
    postDiary,
    putDiary,
  };
};

export default useFetch;
