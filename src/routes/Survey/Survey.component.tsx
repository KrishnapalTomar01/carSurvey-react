import './Survey.styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect } from 'react';
import FirstStep from '../../components/FirstStep/FirstStep.component';
import SecondStep from '../../components/SecondStep/SecondStep.component';
import ThirdStep from '../../components/ThirdStep/ThirdStep.component';
import FourthStep from '../../components/FourthStep/FourthStep.component';
import { DefaultFormState, SurveyContext, surveyContextType } from '../../contexts/surveyForm.context';

const SurveyPage = () => {
    const {pageNum, setPageNum, setFormData} = useContext(SurveyContext) as surveyContextType;
    useEffect(() => {
        setFormData(DefaultFormState);
        setPageNum(0);
    }, [setFormData, setPageNum]);

    const conditionalComponent = () => {
        switch (pageNum) {
            case 0:
                return <FirstStep />;
            case 1:
                return <SecondStep />;
            case 2:
                return <ThirdStep />;
            case 3:
                return <FourthStep />;
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