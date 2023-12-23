let label = document.getElementById("label");
let note = document.getElementById("note");
let button = document.getElementById("Click");
let DisplayQuestion = document.getElementById("question");
let AnswerInputed = document.getElementById("AnswerInputed");
let A = document.getElementById("A");
let B = document.getElementById("B");
let C = document.getElementById("C");
let D = document.getElementById("D");

let currentQuiz = 0;
let score = 0;

const quizData = [
  {
    question: "1 + 1 = ?",
    a: "2",
    b: "4",
    c: "3",
    d: "6",
    correct: "a",
  },
  {
    question: "Sino pumatay kay Magelan?",
    a: "Ewan",
    b: "Ikaw",
    c: "Jose Rizal",
    d: "Lapu-Lapu",
    correct: "d",
  },
  {
    question: "Pogi ba si Marc?",
    a: "Omsim",
    b: "Hindi",
    c: "Ewan",
    d: "Diko alam e",
    correct: "a",
  },
  {
    question: "Sino ang unang pangulo ng Pilipinas?",
    a: "Ewan",
    b: "Ikaw",
    c: "Jose Rizal",
    d: "Emilio Aguinaldo",
    correct: "d",
  },
  {
    question: "Palamunin kaba sa bahay nyo?",
    a: "Oo",
    b: "No",
    c: "Hinde",
    d: "Magelan",
    correct: "a",
  },
];

const loadQuiz = () => {
  const currentQuizData = quizData[currentQuiz];

  DisplayQuestion.innerText = currentQuizData.question;
  A.innerText = "A. " + currentQuizData.a;
  B.innerText = "B. " + currentQuizData.b;
  C.innerText = "C. " + currentQuizData.c;
  D.innerText = "D. " + currentQuizData.d;
};

loadQuiz();

button.addEventListener("click", () => {
  const answer = AnswerInputed.value;

  if (AnswerInputed.value === "") {
    alert("Please input answer");
  }
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
      AnswerInputed.value = "";
    } else {
      DisplayQuestion.innerHTML = `
     <h2>Angas mo naman boss naka ${score}/${quizData.length}</h2>
     <button onclick="location.reload()">Reload</button> `;
     button.style.display = "none";
     note.style.display = "none";
     label.style.display = "none";
     AnswerInputed.style.display = "none";
     A.style.display = "none";
     B.style.display = "none";
     C.style.display = "none";
     D.style.display = "none";
    }
  }
});