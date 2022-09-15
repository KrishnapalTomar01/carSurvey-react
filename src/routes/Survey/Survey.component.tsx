import './Survey.styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import FirstStep from '../../components/FirstStep/FirstStep.component';
import SecondStep from '../../components/SecondStep/SecondStep.component';
import ThirdStep from '../../components/ThirdStep/ThirdStep.component';
import FourthStep from '../../components/FourthStep/FourthStep.component';

const SurveyPage = () => {
    const [pageNum, setPageNum] = useState(0);

    const conditionalComponent = () => {
        switch (pageNum) {
            case 0:
                return <FirstStep pageNum={pageNum} setPageNum={setPageNum}/>;
            case 1:
                return <SecondStep pageNum={pageNum} setPageNum={setPageNum}/>;
            case 2:
                return <ThirdStep pageNum={pageNum} setPageNum={setPageNum}/>;
            case 3:
                return <FourthStep pageNum={pageNum} setPageNum={setPageNum}/>;
            default:
                return <></>;
        }
    };

    return (
        <Container className='survey-container'>
            <Row>
                <h2>Survey Form</h2>
            </Row>
            <Row>
                <Col>
                    {conditionalComponent()}
                </Col>
            </Row>
        </Container>
    )
}

export default SurveyPage;