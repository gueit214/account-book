import React, { useState } from "react";
import EditForm from "./EditForm";
// import useFetch from "../../hooks/useFetch";

const Calendar = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [thisDiary, setThisDiary] = useState([]);

  // const { diaryList, getDiary, deleteDiary, postDiary } = useFetch();

  // 일정을 눌렀을 경우
  const handleDiary = (e) => {
    setShowForm(true);
    setThisDiary(
      props.thisMonthDiary.find((diary) => e.target.id === diary.id)
    );
  };
  const numArr = [0, 1, 2, 3, 4, 5, 6];

  const calender = props.makeCalendar().map((week) => (
    <div key={Math.random()}>
      <div className="rows row--date">
        {numArr.map((num) => (
          <div className={`column col--${num}`} key={Math.random()}>
            {<p className="date">{week[num]}</p>}
            {props.diaryArr[week[num]] &&
              props.diaryArr[week[num]].map((diary) => (
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
        ))}
      </div>
    </div>
  ));

  return (
    <div className="Calendar">
      {calender}
      {showForm && (
        <EditForm
          // id={thisDiary.id}
          setShowForm={setShowForm}
          thisDiary={thisDiary}
        />
      )}
    </div>
  );
};

export default React.memo(Calendar);
