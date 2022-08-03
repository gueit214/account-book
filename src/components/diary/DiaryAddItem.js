import React from "react";

const DiaryAddItem = (props) => {
  const inputState = props.inputState;
  const handleInputState = props.handleInputState;
  return (
    <div className="rows row--add">
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
    </div>
  );
};

export default DiaryAddItem;
