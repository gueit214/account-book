import React, { useCallback, useContext, useState } from "react";
import DiaryContext from "../../store/diary-context";
import EditForm from "./EditForm";

const CalendarDiary = (props) => {
  const diaryCtx = useContext(DiaryContext);
  const { handleDiary: PostOrDeleteDiary, diaryList, error } = diaryCtx;

  const [showForm, setShowForm] = useState(false);
  const [thisDiary, setThisDiary] = useState([]);
  const onDeleteDiary = async (id) => {
    PostOrDeleteDiary({
      url: `https://account-book-d2459-default-rtdb.firebaseio.com/diaries/${id}.json`,
      type: "DELETE",
    });
  };
  const onCreateDiary = (inputValueBox) => {
    const newDiary = {
      date: inputValueBox.date,
      price: inputValueBox.price,
      content: inputValueBox.content,
      type: inputValueBox.type,
      note: inputValueBox.note,
    };
    PostOrDeleteDiary({
      url: "https://account-book-d2459-default-rtdb.firebaseio.com/diaries.json",
      type: "POST",
      newDiary: newDiary,
    });
  };
  const handleSubmit = (inputValueBox) => {
    onDeleteDiary(inputValueBox.id);
    console.log(inputValueBox);
    onCreateDiary(inputValueBox);
  };

  const handleDiary = (e) => {
    setShowForm(true);
    setThisDiary(
      props.thisMonthDiary.find((diary) => e.target.id === diary.id)
    );
  };

  return (
    <div className="CalendarDiary">
      {props.makeCalendar().map((week) => (
        <div key={Math.random()}>
          <div className="rows row--date">
            <div className="column col--1">
              {<p className="date">{week[0]}</p>}
              {props.diaryArr[week[0]] &&
                props.diaryArr[week[0]].map((diary) => (
                  <p
                    className="content"
                    key={diary.id}
                    onClick={handleDiary}
                    id={diary.id}
                  >
                    {diary.content}
                  </p>
                ))}
            </div>
            <div className="column col--2">{week[1]}</div>
            <div className="column col--3">{week[2]}</div>
            <div className="column col--4">
              {<p className="date">{week[3]}</p>}
              {props.diaryArr[week[3]] &&
                props.diaryArr[week[3]].map((diary) => (
                  <p
                    className="content"
                    key={diary.id}
                    onClick={handleDiary}
                    id={diary.id}
                  >
                    {diary.content}
                  </p>
                ))}
            </div>
            <div className="column col--5">
              {<p className="date">{week[4]}</p>}
            </div>
            <div className="column col--6">{week[5]}</div>
            <div className="column col--7">{week[6]}</div>
          </div>
        </div>
      ))}
      {showForm && (
        <EditForm handleSubmit={handleSubmit} thisDiary={thisDiary} />
      )}
    </div>
  );
};

export default CalendarDiary;
