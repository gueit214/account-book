import React, { useCallback, useEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";

const EditForm = (props) => {
  const { diaryList, getDiary, deleteDiary, putDiary } = useFetch();

  // input 세팅
  const [inputState, setInputState] = useState({
    date: props.thisDiary.date,
    price: props.thisDiary.price,
    content: props.thisDiary.content,
    type: props.thisDiary.type,
    note: props.thisDiary.note,
  });
  const handleInputState = (e) => {
    setInputState((state) => {
      const newState = {
        ...state,
        [e.target.name]: e.target.value,
      };
      return newState;
    });
  };

  console.log(props.thisDiary.id);
  // 제출 버튼 = putDiary 실행
  const handleSubmit = async (e) => {
    e.preventDefault();

    putDiary(props.thisDiary.id, {
      date: inputState.date,
      price: inputState.price,
      content: inputState.content,
      type: inputState.type,
      note: inputState.note,
    });
    getDiary();
    props.setShowForm(false);
  };

  const handleDelete = () => {
    deleteDiary(props.id);
    props.setShowForm(false);
  };

  const handleX = () => {
    props.setShowForm(false);
  };

  return (
    <form className="EditForm" onSubmit={handleSubmit}>
      <div className="inputBox ">
        <label htmlFor="date">날짜</label>
        <input
          id="date"
          type="date"
          name="date"
          value={inputState.date || ""}
          onChange={handleInputState}
        />
      </div>
      <div className="inputBox">
        <label htmlFor="price">금액</label>
        <input
          id="price"
          type="text"
          name="price"
          value={inputState.price || ""}
          onChange={handleInputState}
        />
      </div>
      <div className="inputBox">
        <label htmlFor="content">내역</label>
        <input
          id="content"
          type="text"
          name="content"
          value={inputState.content || ""}
          onChange={handleInputState}
        />
      </div>
      <div className="inputBox">
        <label htmlFor="type">내역</label>
        <select
          id="type"
          name="type"
          value={inputState.type || ""}
          onChange={handleInputState}
        >
          <option></option>
          <option>데이트</option>
          <option>친구</option>
          <option>자기계발</option>
        </select>
      </div>
      <div className="inputBox">
        <label htmlFor="note">비고</label>
        <input
          id="note"
          type="text"
          name="note"
          value={inputState.note || ""}
          onChange={handleInputState}
        />
      </div>
      <button type="submit" className="btn btn-outline-success">
        제출
      </button>
      <button
        type="button"
        onClick={handleDelete}
        className="btn btn-outline-danger"
      >
        삭제
      </button>
      <button onClick={handleX}>X</button>
    </form>
  );
};

export default React.memo(EditForm);
