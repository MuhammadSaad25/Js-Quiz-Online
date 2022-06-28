let quizdiv = document.querySelector(`.container2`);
function start() {
  quizdiv.style.display = "block";
}

const questions = [
  // Q 1
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  // Q 2
  {
    que: 'What is the correct JavaScript syntax to change the content of the HTML element below?  <p id="demo">This is a demonstration.<p>',
    a: '#demo.innerHTML = "Hello World!";',
    b: 'document.getElementByName("p").innerHTML = "Hello World!";',
    c: 'document.getElement("p").innerHTML = "Hello World!";',
    d: 'document.getElementById("demo").innerHTML = "Hello World!";',
    correct: "d",
  },
  // Q 3
  {
    que: "Where is the correct place to insert a JavaScript?",
    a: "The <head> section",
    b: "Both the <head> section and the <body> section are correct",
    c: "The <body> section",
    d: "None Of Above",
    correct: "b",
  },
  // Q 4
  {
    que: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    a: '<script src="xxx.js">',
    b: '<script name="xxx.js">',
    c: '<script href="xxx.js">',
    d: "a and c both",
    correct: "a",
  },
  // Q 5
  {
    que: "The external JavaScript file must contain the <script> tag.",
    a: "True",
    b: "False",
    // 'c': '<scripting>',
    // 'd': '<js>',
    correct: "b",
  },
  // Q 6
  {
    que: 'How do you write "Hello World" in an alert box?',
    a: 'alertBox("Hello World");',
    b: 'msgBox("Hello World");',
    c: 'msg("Hello World");',
    d: 'alert("Hello World");',
    correct: "d",
  },
  // Q 7
  {
    que: "How do you create a function in JavaScript?",
    a: "function myFunction()",
    b: "function = myFunction()",
    c: "function:myFunction()",
    // 'd': '<js>',
    correct: "a",
  },
  // Q 8
  {
    que: 'How do you call a function named "myFunction"?',
    a: "myFunction()",
    b: "call function myFunction()",
    c: "call myFunction()",
    // 'd': '<js>',
    correct: "a",
  },
  {
    que: "How to write an IF statement in JavaScript?",
    a: "if i = 5 then",
    b: "if (i == 5)",
    c: "if i = 5",
    d: "if i == 5 then",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    que: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
];
//
let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;

let queBox = document.getElementById("queBox");
let optionInputs = document.querySelectorAll(`.options`);

let loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  let data = questions[index];
  queBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

let submitQuiz = () => {
  let data = questions[index];
  let ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

let getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

let reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

let endQuiz = () => {
  document.getElementById("container2").innerHTML = `
  <h3>Thank you for Attempt Quiz</h3>
  <h2> ${right} / ${total} are correct
  `;
};

loadQuestion();
