import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DiaryCalendar from "./pages/DiaryCalendar";
import DiaryList from "./pages/DiaryList";
import DiaryProvider from "./store/DiaryProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <DiaryProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="diarylist" element={<DiaryList />} />
        <Route path="/diarycalendar" element={<DiaryCalendar />} />
      </Routes>
    </BrowserRouter>
  </DiaryProvider>
);
