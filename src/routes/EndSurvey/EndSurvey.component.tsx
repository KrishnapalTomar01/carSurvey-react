import { UserRespondentType } from "../../Models/models";
import { Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './EndSurvey.styles.css';

const EndSurveyPage = () => {
    const location = useLocation();

    const conditionalMessage = () => {
        if(location && location.state) {
            switch (location.state.userType) {
                case UserRespondentType.Adolescents:
                    return <div className="survey-message">Thank you for taking the time to submit your response.</div>;
                case UserRespondentType.FirstTimers:
                    return <div className="survey-message">We are targeting more experienced clients, thank you for your interest.</div>;
                case UserRespondentType.Unlicensed:
                    return <div className="survey-message">Thank you for showing interest in this survey.</div>;
                case UserRespondentType.Targetables:
                    return <div className="survey-message">Your response is submitted. Thank you for your time.</div>;
                default:
                    return <></>;
            }
        }
    };
    return (
        <Container className='survey-container'>
            <Row>
                <Col>
                    {conditionalMessage()}
                </Col>
            </Row>
            <div className="mt-3 fs-5">Go to <Link to="/">Home</Link> page </div>
        </Container>
    )
}

export default EndSurveyPage;