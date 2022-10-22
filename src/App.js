import "./App.scss";
import useFetch from "./hooks/useFetch";
import DiaryCalendar from "./pages/DiaryCalendar";
import DiaryList from "./pages/DiaryList";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/UI/Layout";

const App = () => {
  const { diaryList, getDiary, status } = useFetch();
  useEffect(() => {
    getDiary();
  }, [getDiary]);

  return (
    <Layout status={status}>
      <Routes>
        <Route path="/" element={<Navigate to="/diarylist" />} />
        <Route path="diarylist" element={<DiaryList diaryList={diaryList} />} />
        <Route
          path="/diarycalendar"
          element={<DiaryCalendar diaryList={diaryList} />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
