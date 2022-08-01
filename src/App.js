import "./App.scss";
import Header from "./components/Header";
import Inner from "./components/Inner";
import DiaryProvider from "./store/DiaryProvider";

const App = () => {
  return (
    <Inner>
      <Header />
    </Inner>
  );
};

export default App;
