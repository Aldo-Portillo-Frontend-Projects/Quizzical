const data = {
    "response_code": 0,
    "results": [{
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "While Apple was formed in California, in which western state was Microsoft founded?",
        "correct_answer": "New Mexico",
        "incorrect_answers": ["Washington", "Colorado", "Arizona"]
    }, {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Generally, which component of a computer draws the most power?",
        "correct_answer": "Video Card",
        "incorrect_answers": ["Hard Drive", "Processor", "Power Supply"]
    }, {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In the server hosting industry IaaS stands for...",
        "correct_answer": "Infrastructure as a Service",
        "incorrect_answers": ["Internet as a Service", "Internet and a Server", "Infrastructure as a Server"]
    }, {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the main CPU is the Sega Mega Drive \/ Sega Genesis?",
        "correct_answer": "Motorola 68000",
        "incorrect_answers": ["Zilog Z80", "Yamaha YM2612", "Intel 8088"]
    }, {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In programming, what do you call functions with the same name but different implementations?",
        "correct_answer": "Overloading",
        "incorrect_answers": ["Overriding", "Abstracting", "Inheriting"]
    }]
}

//https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple

export const questions = [
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
        questionText: data.results[0].question,
        answerOptions: [
            {answerText: data.results[2].incorrect_answers[0], isCorrect: false,},
            {answerText: data.results[2].incorrect_answers[1], isCorrect: false,},
            {answerText: data.results[2].incorrect_answers[2], isCorrect: false,},
            {answerText: data.results[2].correct_answer, isCorrect: true,}
        ]
    },
    {
        questionText: data.results[0].question,
        answerOptions: [
            {answerText: data.results[3].incorrect_answers[0], isCorrect: false,},
            {answerText: data.results[3].incorrect_answers[1], isCorrect: false,},
            {answerText: data.results[3].incorrect_answers[2], isCorrect: false,},
            {answerText: data.results[4].correct_answer, isCorrect: true,}
        ]
    },

]
console.log(questions)