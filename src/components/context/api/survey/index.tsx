// React imports
import { useState, useContext, createContext } from 'react';

// App imports
import { useTopics } from "../../topics";
import { useSurvey } from "../../survey";

const SurveyApiContext: React.Context<any> = createContext(null)

export const useSurveyApi = () => {
    return (
        useContext(SurveyApiContext)
    )
}

export const SurveyApiProvider = ({children}: any) => {
    const { questions } = useTopics();
    const { race, gender, ability, age, locationName } = useSurvey();

    const saveSurvey = async () => {
        // Save the main survey details
        const response = await fetch(`${process.env.REACT_APP_API_URL}/survey_api/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                race: race,
                gender: gender,
                ability: ability,
                age: age,
                location: locationName
            }),
        });

        if (response.status === 200) {
            const surveyId = await response.json();
            await saveSurveyQuestions(surveyId, questions);
        }
    };
    const saveSurveyQuestions = async (surveyId: any, questions: any) => {
        for (const question of questions) {
            // Save the relationship between the survey and the question
            const response = await fetch(`${process.env.REACT_APP_API_URL}/survey_questions_api/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ survey_id: surveyId, question_id: question.id }),
            });

            if (response.status === 200) {
                const surveyQuestionId = await response.json();
                await savePins(surveyQuestionId, question.pins);
            }
        }
    };

    // Save pins for each question in the survey
    const savePins = async (surveyQuestionId: any, pins: any) => {
        for (const pin of pins) {
            await fetch(`${process.env.REACT_APP_API_URL}/pins_api/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    survey_question_id: surveyQuestionId,
                    color: pin.color,
                    latitude: pin.latitude,
                    longitude: pin.longitude
                }),
            });
        }
    };

    return (
        <SurveyApiContext.Provider value={{ saveSurvey }}>
            {children}
        </SurveyApiContext.Provider>
    )
}

SurveyApiContext.displayName = "SurveyApiContext";