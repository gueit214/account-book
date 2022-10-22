import React, { useCallback, useState } from "react";
import useFetch from "../../hooks/useFetch";

const DiaryAddItem = (props) => {
  const { postDiary, getDiary } = useFetch();

  // Input 세팅
  const [inputState, setInputState] = useState({
    date: props.fullTodayDate,
    price: "3",
    content: "3",
    type: "데이트",
    note: "3",
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
  const handleSubmitDiary = async (e) => {
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
      await postDiary(newDiary);
      setInputState({
        date: props.fullTodayDate,
        price: "3",
        content: "3",
        type: "데이트",
        note: "3",
      });
    }
    await getDiary();
  };
  return (
    <div className="rows row--add">
      <div className="error-msg">{ErrorMessage}</div>
      <div className="column col--num">추가</div>
      <input
        className="column col--date"
        type="date"
        name="date"
        value={inputState.date || ""}
        onChange={handleInputState}
      />
      <input
        className="column col--price"
        type="text"
        name="price"
        value={inputState.price || ""}
        onChange={handleInputState}
      />
      <input
        className="column col--content"
        type="text"
        name="content"
        value={inputState.content || ""}
        onChange={handleInputState}
      />
      <select
        className="column col--type"
        name="type"
        value={inputState.type || ""}
        onChange={handleInputState}
      >
        <option></option>
        <option>데이트</option>
        <option>친구</option>
        <option>자기계발</option>
      </select>
      <input
        className="column col--note"
        type="text"
        name="note"
        value={inputState.note || ""}
        onChange={handleInputState}
      />
      <button
        onClick={handleSubmitDiary}
        className="btn btn-primary btn--submit"
      >
        제출
      </button>
    </div>
  );
};

export default React.memo(DiaryAddItem);
