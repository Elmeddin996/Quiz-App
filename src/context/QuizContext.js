import React from 'react'


 const QuizContext=React.createContext([]);

 const QuizProvider = ({children}) => {
    const Questions = [
        {
            question:"Sual 1",
            asnwers:["A","B","C","D","E"],
            correctAnswer: "C"
        },
        {
            question:"Sual 2",
            asnwers:["A","B","C","D","E"],
            correctAnswer: "A"
        },
        {
            question:"Sual 3",
            asnwers:["A","B","C","D","E"],
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
