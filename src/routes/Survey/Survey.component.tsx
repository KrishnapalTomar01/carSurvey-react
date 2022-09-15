import './Survey.styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const SurveyPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="survey-container">Survey page</div>
                </Col>
            </Row>           
        </Container>
    )
}