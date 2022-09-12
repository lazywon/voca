import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create-word" element={<CreateWord />} />
          <Route path="/create-day" element={<CreateDay />} />
          <Route path="/*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
