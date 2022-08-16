import React from "react";
const DiaryItem = (props) => {
  const diary = props.diary;
  return (
    <div className="rows row--item">
      <div className="column col--num">{props.num + 1}</div>
      <div className="column col--date">{diary.date}</div>
      <div className="column col--price">{diary.price}</div>
      <div className="column col--content">{diary.content}</div>
      <div className="column col--type">{diary.type}</div>
      <div className="column col--note">{diary.note}</div>
      <div className="btn-delete">
        <button
          className="btn btn-outline-danger"
          onClick={props.handleDeleteButton}
          id={diary.id}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default DiaryItem;
