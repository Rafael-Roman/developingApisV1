const questions = [
    {
        question: "Which are core capabilities of the Apigee API Management Platform?",
        answers: [
            { text: "Container and cluster management", correct: false},
            { text: "Mediation and analytics", correct: true},
            { text: "Database and file storage", correct: false},
            { text: " Application management and catalog", correct: false},
        ],
    },

    {
        question: "Which of the following entities is sometimes used to represent a phase of API development, such as staging or production?",
        answers: [
            { text: "API Product", correct: false},
            { text: "Application", correct: false},
            { text: "Environment", correct: true},
            { text: "Flow hook", correct: false},
        ],
    },

    {
        question: "When a customer uses the Google Cloud–managed deployment model, which part of the deployment infrastructure is managed by Google?",
        answers: [
            { text: "Only the management plane", correct: false},
            { text: "Only the runtime plane", correct: false},
            { text: "Both the management plane and the runtime plane", correct: true},
            { text: "Neither the management plane nor the runtime plane", correct: false},
        ],
    },
    {
        question: "When a customer uses the hybrid deployment model, which part of the deployment infrastructure is managed by Google?",
        answers: [
            { text: "Only the management plane", correct: true},
            { text: "Only the runtime plane", correct: false},
            { text: "Both the management plane and the runtime plane", correct: false},
            { text: "Neither the management plane nor the runtime plane", correct: false},
        ],
    },
    {
        question: "For a REST API, which API request would best represent updating an existing student?",
        answers: [
            { text: "POST /UpdateStudent?id=15", correct: false},
            { text: "PUT /student?id=15", correct: false},
            { text: ". POST /students/15", correct: false},
            { text: "PUT /students/15", correct: true},
            { text: "PUT /student/15", correct: false},
        ],
    },
    {
        question: "True or false:",
        answers: [
            { text: "True -> OpenAPI specifications are XML-based documents that describe the interface of a RESTful API", correct: false},
            { text: "False -> OpenAPI specifications are XML-based documents that describe the interface of a RESTful API", correct: true},
        ],
    },
    {
        question: "True or false:",
        answers: [
            { text: "True -> OpenAPI specifications may be used to provide interactive API documentation in a developer portal.", correct: true},
            { text: "False -> OpenAPI specifications may be used to provide interactive API documentation in a developer portal.", correct: false},

        ],
    },
    {
        question: "Which of the following is not configured for an environment group?",
        answers: [
            { text: "Name", correct: false},
            { text: "Environments", correct: false},
            { text: "Hostnames", correct: false},
            { text: "Base path", correct: true},
        ],
    },
    {
        question: "True or false:",
        answers: [
            { text: "True -> It is possible to deploy a proxy to an environment that already has a deployed proxy using the same base path.", correct: false},
            { text: "False -> It is possible to deploy a proxy to an environment that already has a deployed proxy using the same base path.", correct: true},
            
        ],
    },
    {
        question: "Which of the following combinations of proxy and target endpoints is not legal for an API proxy?",
        answers: [
            { text: "One proxy endpoint and more than one target endpoint", correct: false},
            { text: "More than one proxy endpoint and one target endpoint", correct: false},
            { text: "Zero proxy endpoints and one target endpoint", correct: true},
            { text: "One proxy endpoint and zero target endpoints", correct: false},
        ],
    },
    {
        question: "Which parts of a REST API request typically correspond to the operation being performed?",
        answers: [
            { text: "The HTTP verb & The base path", correct: false},
            { text: "The message body & The path suffix", correct: false},
            { text: "The HTTP verb & The path suffix", correct: true},
            
        ],
    },
    {
        question: "Which part of a proxy determines the target endpoint that will be used?",
        answers: [
            { text: "Post flow", correct: false},
            { text: "Route rule", correct: true},
            { text: "Target server", correct: false},
            { text: "HTTPTargetConnection", correct: false},
        ],
    },
    {
        question: "Which type of developer is configured in the Publish section of the Apigee console?",
        answers: [
            { text: "Portal developer", correct: false},
            { text: "API developer", correct: false},
            { text: "App developer", correct: true},
            { text: "Backend developer", correct: false},
            { text: "None of the above", correct: false},
        ],
    },
    {
        question: "Which statement about API products is true?",
        answers: [
            { text: "API products are APIs that are sold on the open market", correct: false},
            { text: "API products may be used to control access or service levels for APIs", correct: true},
            { text: "APIs bundled in one API product cannot be bundled in another API product", correct: false},
            
        ],
    },
    {
        question: "Which statement about API products is true?",
        answers: [
            { text: "API products should be designed based on the needs of app developers", correct: true},
            { text: "API products are APIs that are sold on the open market", correct: false},
            { text: "APIs bundled in one API product cannot be bundled in another API product", correct: false},
           
        ],
    },
    {
        question: "Which status code range indicates an error caused by an issue with the client's request?",
        answers: [
            { text: "1XX", correct: false},
            { text: "2XX", correct: false},
            { text: "3XX", correct: false},
            { text: "4XX", correct: true},
            { text: "5XX", correct: false},
        ],
    },
    {
        question: "What is one of the benefits of using VerifyAPIKey policy in an API proxy??",
        answers: [
            { text: "Any custom attributes associated with the developer, app, and API products will be populated as variables and can be used to control the behavior of the API", correct: true},
            { text: "The caller is forced to present the consumer key and consumer secret to gain access to the API", correct: false},
           
        ],
    },
    {
        question: "What is one of the benefits of using VerifyAPIKey policy in an API proxy?",
        answers: [
            { text: "API requests for a specific app will be automatically rate-limited", correct: false},
            { text: "Only apps that have been registered to use the API will be allowed access", correct: true},
          
        ],
    },
    {
        question: "Which OAuth grant type should be used for untrusted apps that needaccess to user data?",
        answers: [
            { text: "Client credentials grant type", correct: false},
            { text: "Password grant type", correct: false},
            { text: "Authorization code grant type", correct: true},
            { text: "Implicit grant type", correct: false},
        ],
    },
    {
        question: "Why does the client credentials grant type not use refresh tokens?",
        answers: [
            { text: "The client credentials grant type flow cannot secure refresh tokens", correct: false},
            { text: "The authorization code grant type with PKCE should now be used instead of the client credentials grant type", correct: false},
            { text: "An app's credentials do not change, so a refresh token is unnecessary", correct: false},
            { text: "Refresh tokens are only used when user credentials are necessary", correct: true},
        ],
    },
    {
        question: "Which of the following are reasons that the authorization code flow uses a user agent?",
        answers: [
            { text: "The user does not need to expose their password to the app", correct: true},
            { text: "User authentication should not be done in a mobile app, so the app provides a web interface for validating the user credentials", correct: false},
            { text: "One part of the authorization code flow uses cookies, so a web request is necessary", correct: false},
        ],
    },
    {
        question: "Which of the following are reasons that the authorization code flow uses a user agent?",
        answers: [
            { text: "User authentication should not be done in a mobile app, so the app provides a web interface for validating the user credentials", correct: false},
            { text: "One part of the authorization code flow uses cookies, so a web request is necessary", correct: false},
            { text: "The user is given the chance to consent to the level of access being requested by the app.", correct: true},
        ],
    },
    {
        question: "Which statement about the Proof Key for Code Exchange (PKCE) extension is true?",
        answers: [
            { text: "PKCE adds an extra call to the authorization code flow that is used to validate the code verifier.", correct: false},
            { text: "PKCE is necessary because an authorization code may be intercepted by a bad actor", correct: true},
            { text: "PKCE can be used to secure OAuth when TLS is not being used", correct: false},
        ],
    },
    {
        question: "Which statement about the Proof Key for Code Exchange (PKCE) extension is true?",
        answers: [
            { text: "The authorization code grant type with PKCE should be used instead of the implicit grant type", correct: true},
            { text: "PKCE adds an extra call to the authorization code flow that is used to validate the code verifier", correct: false},
            { text: "PKCE can be used to secure OAuth when TLS is not being used", correct: false},
        ],
    },
    {
        question: "Which statement about the Proof Key for Code Exchange (PKCE) extension is true?",
        answers: [
            { text: "PKCE can be used to secure OAuth when TLS is not being used", correct: false},
            { text: "PKCE uses a one-way hash to prove the identity of the app", correct: true},
            { text: "PKCE adds an extra call to the authorization code flow that is used to validate the code verifier", correct: false},
         
        ],
    },
    {
        question: "True or false:",
        answers: [
            { text: "False -> It is best to generate a new refresh token every time a refresh token is used", correct: false},
            { text: "True -> It is best to generate a new refresh token every time a refresh token is used", correct: true},
        ],
    },
    {
        question: "Which statement about JWTs is true?",
        answers: [
            { text: "JWTs are encrypted, so TLS is not required", correct: false},
            { text: "SAML uses JWTs for passing authentication and authorization information between IdPs and service providers", correct: false},
            { text: "JWTs can be validated without sending them to a token server", correct: true},
            { text: "The JWT payload is used to guarantee the integrity of the token", correct: false},
        ],
    },
    {
        question: "Which statement about JWTs is true?",
        answers: [
            { text: "The JWT payload is used to guarantee the integrity of the token", correct: false},
            { text: "Apigee provides policies for generating and verifying JWTs", correct: true},
            { text: "JWTs are encrypted, so TLS is not required", correct: false},
            { text: "SAML uses JWTs for passing authentication and authorization information between IdPs and service providers", correct: false},
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    
        
    });
}




function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Yoy score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();












