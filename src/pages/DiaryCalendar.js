import React, { useContext, useState } from "react";
import Calendar from "../components/Calendar/Calendar";
import "./DiaryCalendar.scss";

const DiaryCalendar = (props) => {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());

  //이전 달, 다음 달 이동
  const handlePrevMonth = () => {
    setMonth((state) => state - 1);
  };
  const handleNextMonth = () => {
    setMonth((state) => state + 1);
  };

  // 오늘 날짜 구하기
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

  // 달력 만들기
  const makeCalendar = () => {
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

  const thisMonthDiary = props.diaryList.filter((diary) => {
    return new Date(diary.date).getMonth() === month;
  });
  let diaryArr = new Array(lastDateOfThisMonth.getDate() + 1);
  for (let i = 0; i < diaryArr.length; i++) {
    diaryArr[i] = new Array(0);
  }
  thisMonthDiary.map((diary) => {
    diaryArr[Number(new Date(diary.date).getDate())].push(diary);
    return null;
  });

  return (
    <div className="DiaryCalendar">
      <div className="month">
        <div className="prevMonth" onClick={handlePrevMonth}>
          &lt;
        </div>
        <div className="thisMonth">{month + 1}월 달력</div>
        <div className="nextMonth" onClick={handleNextMonth}>
          &gt;
        </div>
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
      <Calendar
        makeCalendar={makeCalendar}
        diaryArr={diaryArr}
        thisMonthDiary={thisMonthDiary}
      />
    </div>
  );
};

export default DiaryCalendar;
