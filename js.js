let question;
let form;
let score;
let qno;
let selectedQuestions = [];

const questions = [
    {
        title : 'what is html',
        options : ['Hypertext Markup Language', 'Hypertext Transfer Protocol', 'Hypertext Preprocessor', 'Hypertext Markup Language and Preprocessor'],
        answer : '0',
        score : 1
    },
    {
        title : 'what is css',
        options : ['Cascading Style Sheets', 'Creative Style Sheets', 'Hypertext Markup Language', 'Cascading Style Sheets and Hypertext Markup Language'],
        answer : '0',
        score : 1
    },
    {
        title : 'what is javascript',
        options : ['Hypertext Markup Language', 'Cascading Style Sheets', 'JavaScript Object Notation', 'Hypertext Markup Language and JavaScript'],
        answer : '2',
        score : 1
    },
    {
        title : 'what is dom',
        options : ['Document Object Model', 'Hypertext Markup Language', 'Cascading Style Sheets', 'Document Object Model and Hypertext Markup Language'],
        answer : '0',
        score : 1
    },
    {
        title : 'what is json',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'JavaScript Object Notation and Hypertext Markup Language'],
        answer : '0',
        score : 1
    },
    {
        title : 'what is react',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'React is a JavaScript library for building user interfaces'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is redux',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Redux is a JavaScript library for managing application state'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is axios',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Axios is a JavaScript library for making HTTP requests'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is vue',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Vue is a JavaScript library for building user interfaces'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is vue-router',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Vue Router is a JavaScript library for building single-page applications'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is vuex',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Vuex is a JavaScript library for managing application state'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is webpack',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Webpack is a JavaScript library for building module systems'],
        answer : '3',
        score : 1
    },//12
    {
        title : 'what is jest',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Jest is a JavaScript testing framework'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is cypress',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Cypress is a JavaScript testing framework'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is mocha',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Mocha is a JavaScript testing framework'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is puppeteer',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Puppeteer is a JavaScript library for automating browser interactions'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is graphql',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'GraphQL is a query language for APIs'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is aws',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'AWS is a cloud computing service'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is aws s3',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'AWS S3 is a cloud storage service'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is aws dynamodb',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'AWS DynamoDB is a NoSQL database service'],
        answer : '3',
        score : 1
    },//20
    {
        title : 'what is html',
        options : ['Hypertext Markup Language', 'Hypertext Transfer Protocol', 'Hypertext Preprocessor', 'Hypertext Markup Language and Preprocessor'],
        answer : '0',
        score : 1
    },
    {
        title : 'what is css',
        options : ['Cascading Style Sheets', 'Creative Style Sheets', 'Hypertext Markup Language', 'Cascading Style Sheets and Hypertext Markup Language'],
        answer : '0',
        score : 1
    },
    {
        title : 'what is javascript',
        options : ['Hypertext Markup Language', 'Cascading Style Sheets', 'JavaScript Object Notation', 'Hypertext Markup Language and JavaScript'],
        answer : '2',
        score : 1
    },
    {
        title : 'what is dom',
        options : ['Document Object Model', 'Hypertext Markup Language', 'Cascading Style Sheets', 'Document Object Model and Hypertext Markup Language'],
        answer : '0',
        score : 1
    },
    {
        title : 'what is json',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'JavaScript Object Notation and Hypertext Markup Language'],
        answer : '0',
        score : 1
    },
    {
        title : 'what is react',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'React is a JavaScript library for building user interfaces'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is redux',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Redux is a JavaScript library for managing application state'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is axios',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Axios is a JavaScript library for making HTTP requests'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is vue',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Vue is a JavaScript library for building user interfaces'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is vue-router',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Vue Router is a JavaScript library for building single-page applications'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is vuex',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Vuex is a JavaScript library for managing application state'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is webpack',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Webpack is a JavaScript library for building module systems'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is jest',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Jest is a JavaScript testing framework'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is cypress',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Cypress is a JavaScript testing framework'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is mocha',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Mocha is a JavaScript testing framework'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is puppeteer',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'Puppeteer is a JavaScript library for automating browser interactions'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is graphql',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'GraphQL is a query language for APIs'],
        answer : '3',
        score : 1
    },//17
    {
        title : 'what is aws',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'AWS is a cloud computing service'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is aws s3',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'AWS S3 is a cloud storage service'],
        answer : '3',
        score : 1
    },
    {
        title : 'what is aws dynamodb',
        options : ['JavaScript Object Notation', 'Hypertext Markup Language', 'JavaScript Object Model', 'AWS DynamoDB is a NoSQL database service'],
        answer : '3',
        score : 1
    }

        
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const selectQuestions = () => {
    shuffleArray(questions);
    selectedQuestions = questions.slice(0, 20);
};

const getQuestions = () => {
    const questionCard = document.querySelector('.question-card');
    selectedQuestions.forEach((ques, index) => {
        const questionHtml = `
        <div class="question-block">
            <h2> ${index + 1}: ${ques.title}</h2>
            <input type="radio" id="q${index}_op1" name="q${index}" value="0">
            <label for="q${index}_op1">${ques.options[0]}</label><br>

            <input type="radio" id="q${index}_op2" name="q${index}" value="1">
            <label for="q${index}_op2">${ques.options[1]}</label><br>

            <input type="radio" id="q${index}_op3" name="q${index}" value="2">
            <label for="q${index}_op3">${ques.options[2]}</label><br>

            <input type="radio" id="q${index}_op4" name="q${index}" value="3">
            <label for="q${index}_op4">${ques.options[3]}</label><br>
        </div>`;
        questionCard.innerHTML += questionHtml;  
    });

    const submitButtonHtml = `<input type="submit" class="submit" value="Submit">`;
    questionCard.innerHTML += submitButtonHtml;
};

const handleSubmit = (e) => {
    e.preventDefault();
    let totalScore = 0;

    selectedQuestions.forEach((ques, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === ques.answer) {
            totalScore += ques.score;
        }
    });
    localStorage.setItem('quizScore', totalScore);

    window.location.href = 'results.html';
};

function init() {
    selectQuestions();  
    getQuestions(); 

    form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
}

init();
