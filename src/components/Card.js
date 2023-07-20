import React from 'react'
import { useAppContext } from '../context/QuizContext'

export const Card = () => {
    const { Questions } = useAppContext()
    const [questionIndex, setQuestionIndex] = React.useState(0)
  


    const handleCheckAnswer=(e)=>{
     if (e.target.value===Questions[questionIndex].correctAnswer) {
        setQuestionIndex(questionIndex+1)
     }
    }

    return (
        <div className='row'>
            <div className='col-lg-6'>
                <h2>{Questions[questionIndex].question}</h2>
                <div className='answers'>
                    {
                        Questions[questionIndex].asnwers.map((question) => {
                            return (
                                <button value={question} onClick={handleCheckAnswer}>{question}</button>
                            )
                        })

                    }

                </div>

            </div>
        </div>
    )
}
