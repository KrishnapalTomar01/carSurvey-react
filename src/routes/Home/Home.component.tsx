import './Home.styles.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const surveyClickHandler = () => {
        navigate('survey');
    }
    const statisticsClickHandler = () => {
        navigate('statistics');
    }
    return (
        <div className="home-container">
            <div className="home-container-item card" onClick={surveyClickHandler}>
                Take survey
            </div>
            <div className="home-container-item card" onClick={statisticsClickHandler}>Show statistics</div>
        </div>
    )
}

export default Home;