import React, { useContext, useState } from "react";
import DiaryContext from "../../store/diary-context";
import DiaryProvider from "../../store/DiaryProvider";

const Calendar = () => {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  // 오늘 날짜 구하기
  const makeCalendar = () => {
    const firstDateOfThisMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );
    const lastDateOfThisMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      -1
    );

    const firstDayOfThisMonth = firstDateOfThisMonth.getDay();

    let calenderArr = new Array(5);
    for (let i = 0; i < calenderArr.length; i++) {
      calenderArr[i] = new Array(7);
    }

    let first = 0;
    let second = firstDayOfThisMonth - 1;
    for (let i = 0; i < firstDayOfThisMonth - 1; i++) {
      calenderArr[0][i] = 0;
    }
    for (let i = 1; i <= lastDateOfThisMonth.getDate(); i++) {
      calenderArr[first][second] = i;
      if (second === 6) {
        first += 1;
        second = 0;
      } else {
        second += 1;
      }
    }
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 7; j++) {
        <div>{calenderArr[i][j]}</div>;
      }
    }
    return calenderArr;
  };

  const diaryCtx = useContext(DiaryContext);
  const diaryList = diaryCtx.diaryList;
  const thisMonthDiary = diaryList.filter((diary) => {
    return new Date(diary.date).getMonth() === month;
  });
  console.log(thisMonthDiary);

  const arr = [];
  for (let diary of thisMonthDiary) {
    let day = Number(new Date(diary.date).getDate());
    arr.push({ day: day, type: diary.type });
  }

  //1일은 index값 0, 2일은 index값 1 ..
  let diaryArr = new Array(32);
  for (let i = 0; i < diaryArr.length; i++) {
    diaryArr[i] = new Array(0);
  }
  /* console.log(diaryArr); */
  arr.map((diary) => {
    diaryArr[diary.day].push(diary.type);
  });
  return (
    <div className="Calendar">
      <div
        style={{ fontSize: "30px", marginBottom: "20px", textAlign: "center" }}
      >
        {month + 1}월 달력
      </div>
      <div className="rows row--day">
        <div className="column col--mon">월</div>
        <div className="column col--tue">화</div>
        <div className="column col--wed">수</div>
        <div className="column col--thu">목</div>
        <div className="column col--fri">금</div>
        <div className="column col--sat">목</div>
        <div className="column col--sun">일</div>
      </div>
      {makeCalendar().map((week, index) => (
        <div key={Math.random()}>
          <div className="rows row--date">
            <div className="column col--1">
              {week[0]}
              {diaryArr[index * 7 + 1]}
            </div>
            <div className="column col--2">
              {week[1]}
              {diaryArr[index * 7 + 2].map((diary) => (
                <p key={Math.random()}>{diary}</p>
              ))}
            </div>
            <div className="column col--3">
              {week[2]}
              {diaryArr[index * 7 + 3].map((diary) => (
                <p key={Math.random()}>{diary}</p>
              ))}
            </div>
            <div className="column col--4">{week[3]}</div>
            <div className="column col--5">{week[4]}</div>
            <div className="column col--6">{week[5]}</div>
            <div className="column col--7">{week[6]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
