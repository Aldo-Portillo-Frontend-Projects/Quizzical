export function formatAPI (data) {
    const questions = [
        {
            questionText: data.results[0].question,
            answerOptions: [
                {answerText: data.results[0].incorrect_answers[0], isCorrect: false,},
                {answerText: data.results[0].incorrect_answers[1], isCorrect: false,},
                {answerText: data.results[0].incorrect_answers[2], isCorrect: false,},
                {answerText: data.results[0].correct_answer, isCorrect: true,}
            ]
        },
        {
            questionText: data.results[1].question,
            answerOptions: [
                {answerText: data.results[1].incorrect_answers[0], isCorrect: false,},
                {answerText: data.results[1].incorrect_answers[1], isCorrect: false,},
                {answerText: data.results[1].incorrect_answers[2], isCorrect: false,},
                {answerText: data.results[1].correct_answer, isCorrect: true,}
            ]
        },
        {
            questionText: data.results[2].question,
            answerOptions: [
                {answerText: data.results[2].incorrect_answers[0], isCorrect: false,},
                {answerText: data.results[2].incorrect_answers[1], isCorrect: false,},
                {answerText: data.results[2].incorrect_answers[2], isCorrect: false,},
                {answerText: data.results[2].correct_answer, isCorrect: true,}
            ]
        },
        {
            questionText: data.results[3].question,
            answerOptions: [
                {answerText: data.results[3].incorrect_answers[0], isCorrect: false,},
                {answerText: data.results[3].incorrect_answers[1], isCorrect: false,},
                {answerText: data.results[3].incorrect_answers[2], isCorrect: false,},
                {answerText: data.results[3].correct_answer, isCorrect: true,}
            ]
        },
        {
            questionText: data.results[4].question,
            answerOptions: [
                {answerText: data.results[4].incorrect_answers[0], isCorrect: false,},
                {answerText: data.results[4].incorrect_answers[1], isCorrect: false,},
                {answerText: data.results[4].incorrect_answers[2], isCorrect: false,},
                {answerText: data.results[4].correct_answer, isCorrect: true,}
            ]
        },
    
    ]

    return questions
}