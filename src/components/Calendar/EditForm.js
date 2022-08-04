import React, { useCallback, useEffect, useRef, useState } from "react";

const EditForm = (props) => {
  const [inputState, setInputState] = useState({
    date: props.thisDiary.date,
    price: props.thisDiary.price,
    content: props.thisDiary.content,
    type: props.thisDiary.type,
    note: props.thisDiary.note,
  });
  useEffect(() => {
    setInputState({
      date: props.thisDiary.date,
      price: props.thisDiary.price,
      content: props.thisDiary.content,
      type: props.thisDiary.type,
      note: props.thisDiary.note,
    });
  }, [
    props.thisDiary.content,
    props.thisDiary.date,
    props.thisDiary.note,
    props.thisDiary.price,
    props.thisDiary.type,
  ]);

  const handleInputState = (e) => {
    setInputState((state) => {
      const newState = {
        ...state,
        [e.target.name]: e.target.value,
      };
      return newState;
    });
  };

  // input 세팅

  const handleSubmitEditForm = (e) => {
    e.preventDefault();
    const inputValueBox = {
      id: props.thisDiary.id,
      date: inputState.date,
      price: inputState.price,
      content: inputState.content,
      type: inputState.type,
      note: inputState.note,
    };
    props.handleSubmit(inputValueBox);
  };

  return (
    <form className="EditForm" onSubmit={handleSubmitEditForm}>
      <label htmlFor="date">날짜</label>
      <input
        id="date"
        type="date"
        name="date"
        value={inputState.date || ""}
        onChange={handleInputState}
      />
      <label htmlFor="price">금액</label>
      <input
        id="price"
        type="text"
        name="price"
        value={inputState.price || ""}
        onChange={handleInputState}
      />
      <label htmlFor="content">내역</label>
      <input
        id="content"
        type="text"
        name="content"
        value={inputState.content || ""}
        onChange={handleInputState}
      />
      <label htmlFor="type">내역</label>
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
      <label htmlFor="note">비고</label>
      <input
        id="note"
        type="text"
        name="note"
        value={inputState.note || ""}
        onChange={handleInputState}
      />
      <button type="submit">클릭</button>
    </form>
  );
};

export default EditForm;
