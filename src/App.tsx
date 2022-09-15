import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home/Home.component';
import SurveyPage from './routes/Survey/Survey.component';
import StatisticsPage from './routes/Statistics/Statistics.component';
import EndSurveyPage from './routes/EndSurvey/EndSurvey.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='survey' element={<SurveyPage />}></Route>
      <Route path='statistics' element={<StatisticsPage />}></Route>
      <Route path='endsurvey' element={<EndSurveyPage />}></Route>
    </Routes>
  );
}

export default App;
