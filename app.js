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
    que: "Where is the correct place to insert a JavaScript?",
    a: "The <head> section",
    b: "Both the <head> section and the <body> section are correct",
    c: "The <body> section",
    d: "None Of Above",
    correct: "b",
  },
   // Q 3
  {
    que: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    a: "<script src='xxx.js'>",
    b: "<script name='xxx.js'>",
    c: "<script href='xxx.js'>",
    d: "a and c both",
    correct: "a",
  },
  // Q  4
  {
    que: "Which of the following is a server-side Java Script object?",
    a: "Function",
    b: "File",
    c: "File Upload",
    d: "Date",
    correct: "b",
  },
  // Q 5
  {
    que: "How do you create a function in JavaScript?",
    a: "function myFunction()",
    b: "function = myFunction()",
    c: "function:myFunction()",
    d: "a and b both",
    correct: "a",
  },
  // Q 6
  {
    que: "How do you call a function named 'myFunction'?",
    a: "myFunction()",
    b: "call function myFunction()",
    c: "call myFunction()",
    d: "function Myfunction()",
    correct: "a",
  },
  // Q 7
  {
    que: "Which attribute needs to be changed to make elements invisible?",
    a: "visibilty",
    b: "visible",
    c: "invisibility",
    d: "invisible",
    correct: "a",
  },
  // Q 8
  {
    que: "Which of the following is correct to write â€œHello Worldâ€ on the web page?",
    a: "System.out.println(â€œHello Worldâ€)",
    b: "print(â€œHello Worldâ€)",
    c: "document.write(â€œHello Worldâ€)",
    d: "response.write(â€œHello Worldâ€)",
    correct: "c",
  },
  // Q 09
  {
    que: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    a: "if (i != 5)",
    b: "if (i <> 5)",
    c: "if i <> 5",
    d: "if i =! 5 then",
    correct: "a",
  },
  // Q 10
  {
    que: "How does a WHILE loop start?",
    a: "while i = 1 to 10",
    b: "while (i <= 10)",
    c: "while (i <= 10; i++)",
    d: "while (i = 0; i < 10; i++)",
    correct: "b",
  },
  // 11
  {
    que: "How does a FOR loop start?",
    a: "for (i = 0; i <= 5)",
    b: "for i = 1 to 5",
    c: "for (i = 0; i <= 5; i++)",
    d: "for (i <= 5; i++)",
    correct: "c",
  },
  // Q 12
  {
    que: "Which of the following is not a valid JavaScript variable name?",
    a: "2java",
    b: "_java_and_ java _names",
    c: "javaandjava",
    d: "None of the above",
    correct: "a",
  },
   // Q 13
  {
    que: ` ___________ JavaScript is also called client-side JavaScript.`,
    a: `Microsoft`,
    b: `Navigator`,
    c: `LiveWire`,
    d: `Native`,
    correct: `b`,
  },
   // Q 14
  {
    que: `What is the correct way to write a JavaScript array?`,
    a: `var colors = "red", "green", "blue"`,
    b: `var colors = ["red", "green", "blue"]`,
    c: `var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")`,
    d: `var colors = (1:"red", 2:"green", 3:"blue")`,
    correct: `b`,
  },
  // Q 15
  {
    que: `How do you round the number 7.25, to the nearest integer?`,
    a: `Math.round(7.25)`,
    b: `Math.rnd(7.25)`,
    c: `round(7.25)`,
    d: `rnd(7.25)`,
    correct: `a`,
  },
  // Q 16
  {
    que: `Which event occurs when the user clicks on an HTML element?`,
    a: `onmouseover`,
    b: `onchange`,
    c: `onclick`,
    d: `onmouseclick`,
    correct: `c`,
  },
  // Q 17
  {
    que: `Java Script entities start with ____________ and end with ______________`,
    a: `Semicolon colon`,
    b: `Ampersand semicolon`,
    c: `Semicolon Ampersand`,
    d: `Ampersand colon`,
    correct: `b`,
  },
  // Q 18
  {
    que: `Which is the correct way to write a JavaScript array?`,
    a: `var txt = new Array(1:"arr",2:"kim",3:"jim")`,
    b: `var txt = new Array:1=(" arr ")2=("kim")3=("jim")`,
    c: `var txt = new Array("arr ","kim","jim")`,
    d: `var txt = new Array=" arr ","kim","jim"`,
    correct: `c`,
  },
  // Q 19
  {
    que: `What will the following code return: Boolean(10 > 9)`,
    a: `true`,
    b: `NaN`,
    c: `false`,
    d: `b and c both`,
    correct: `a`,
  },
  {
    que: `Is JavaScript case sensitive?`,
    a: `true`,
    b: `false`,
    c: ` `,
    d: ` `,
    correct: `a`,
  }
];

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;

let queBox = document.getElementById("queBox");
let optionInputs = document.querySelectorAll(`.options`);

let loadQuestion = () => {
  if (index == total) {
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
  if (ans == data.correct) {
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
