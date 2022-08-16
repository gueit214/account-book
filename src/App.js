import "./App.scss";
import Header from "./components/UI/Header";
import Inner from "./components/UI/Inner";
import useFetch from "./hooks/useFetch";
import DiaryCalendar from "./pages/DiaryCalendar";
import DiaryList from "./pages/DiaryList";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const { diaryList, getDiary, deleteDiary } = useFetch();

  useEffect(() => {
    getDiary();
  }, [getDiary]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/diarylist" />} />
      <Route path="diarylist" element={<DiaryList diaryList={diaryList} />} />
      <Route
        path="/diarycalendar"
        element={<DiaryCalendar diaryList={diaryList} />}
      />
    </Routes>
  );
};

export default App;
