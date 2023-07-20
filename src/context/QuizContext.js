import React from 'react'


 const QuizContext=React.createContext([]);

 const QuizProvider = ({children}) => {
    const Questions = [
        {
            question:"Sual 1   (cavab C)",
            answers:["A","B","C","D","E"],
            correctAnswer: "C"
        },
        {
            question:"Sual 2   (cavab A)",
            answers:["A","B","C","D","E"],
            correctAnswer: "A"
        },
        {
            question:"Sual 3   (cavab E)",
            answers:["A","B","C","D","E"],
            correctAnswer: "E"
        }
    ]

  return (
    <QuizContext.Provider value={{Questions}}>
        {children}
    </QuizContext.Provider>
  )
}
 const useAppContext = ()=>{
    const quizContext = React.useContext(QuizContext)
    return quizContext;
}

export {useAppContext,QuizProvider}
