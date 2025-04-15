import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import { getDataQuiz } from "../../services/apiService";
import _ from 'lodash';
import './DetailQuiz.scss'
import Question from "./Question";
import { set } from "nprogress";
const DetailQuiz = () => {
    const params = useParams();
    const location = useLocation();
    const quizId = params.id;
    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        fecthQuestion();
    }, [quizId])
    const fecthQuestion = async () => {
        let res = await getDataQuiz(quizId);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let questionDescprition, image = null
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescprition = item.description;
                            image = item.image;
                        }
                        item.answers.isSelected = false;
                        answers.push(item.answers);

                    })
                    return { questionId: key, answers, questionDescprition, image }
                }
                )
                .value()
            setDataQuiz(data);
        }
    }
    const handelPrev = () => {
        if (index - 1 < 0) return;
        setIndex(index - 1)
    }
    const handelNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1)
            setIndex(index + 1)
    }
    const handleCheckBox = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find(item => +item.questionId === +questionId)
        if (question && question.answers) {
            question.answers = question.answers.map(item => {
                if (item.id === +answerId) {
                    item.isSelected = !item.isSelected;
                }
                return item
            })
            // console.log(b);
        }
        let index = dataQuizClone.findIndex(item => +item.questionId === +questionId)
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone);
        }
    }
    const handelFinishQuiz = () => {
        console.log(">>> check data before submit: ", dataQuiz)
        // {
        //     "quizId": 1,
        //     "answers": [
        //         { 
        //             "questionId": 1,
        //             "userAnswerId": [3]
        //         },
        //         { 
        //             "questionId": 2,
        //             "userAnswerId": [6]
        //         }
        //     ]
        // }
        let payload = {
            quizId: +quizId,
            answers: []
        };
        let answers = [];

        if (dataQuiz.length > 0) {
            dataQuiz.forEach(question => {
                let questionId = question.questionId;
                let userAnswerId = [];

                //to do
                question.answers.forEach(answer => {
                    if (answer.isSelected) {
                        userAnswerId.push(answer.id)
                    }
                })
                answers.push({
                    questionId: +questionId,
                    userAnswerId: userAnswerId
                })
            })
            payload.answers = answers;
            console.log("final payload", payload);
        }
    }
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <Question
                        handleCheckBox={handleCheckBox}
                        data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
                        index={index}
                    />
                </div>
                <div className="footer">
                    <button className="btn btn-secondary" onClick={() => handelPrev()}>Prev</button>
                    <button className="btn btn-primary" onClick={() => handelNext()}>Next</button>
                    <button className="btn btn-warning" onClick={() => handelFinishQuiz()}>Finish</button>
                </div>
            </div>
            <div className="right-content">

            </div>

        </div >
    )
}
export default DetailQuiz