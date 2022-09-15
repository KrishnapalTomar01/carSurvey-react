import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './Home/Home.component';
import { SurveyPage } from './Survey/Survey.component';
import { StatisticsPage } from './Statistics/Statistics.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='survey' element={<SurveyPage />}></Route>
      <Route path='statistics' element={<StatisticsPage />}></Route>
    </Routes>
  );
}

export default App;
