
let first_input = "";
let second_input = "";

let matrix1 = []
let matrix2 = []

function start() {
    let matrix_input1 = document.querySelector("#matrix_input1");
    let matrix_input2 = document.querySelector("#matrix_input2");
    let sum_input = document.querySelector("#sum_input");
    let sum_input1 = document.querySelector("#sum_input1");

    matrix_input1.innerHTML = "";
    matrix_input2.innerHTML = "";
    sum_input.innerHTML = "";
    sum_input1.innerHTML = "";

    first_input = document.querySelector("#first_input").value;
    second_input = document.querySelector("#second_input").value;

    if (first_input == "" || second_input == "") {
        alert("Please enter values");
        return;
    }

    if (isNaN(first_input) || isNaN(second_input)) {
        alert("Please enter numbers");
        return;
    }

    if (first_input != second_input) {
        alert("Please enter same number  of rows and columns");
        return;
    }

    if (first_input < 2 || first_input < 2) {
        alert("Please enter number greater than 1");
        return;
    }

   

    for(let i = 0; i < first_input; i++) {
        matrix1.push([]);
        matrix2.push([]);
        for(let j = 0; j < second_input; j++){
            matrix1[i].push(0)
            matrix2[i].push(0)
            
            matrix_input1.innerHTML += `<input type="number" class="matrix_input" id="matrix_input1_${i}_${j}" required value= "0" min = "0" max = "999">`;
            
            matrix_input2.innerHTML += `<input type="number" class="matrix_input" id="matrix_input2_${i}_${j}" required value= "0" min = "0" max = "999">` ;
        
            sum_input.innerHTML += `<input type="number" readonly class="matrix_input" id="sum_input_${i}_${j}" required placeholder ="0" >`;
            
            // sum_input1.innerHTML += `<input type="number" readonly class="matrix_input" id="sum_input1_${i}_${j}" required placeholder ="0" >`;
        }

        matrix_input1.innerHTML += `<br>`;
        matrix_input2.innerHTML += `<br>`;
        sum_input.innerHTML += `<br>`;
    }
    console.log (matrix1 , matrix2)    
    document.querySelector("#input_form").classList.remove("form_input");
}


function multiplyMatrix(){

    for (let i=0; i<first_input; i++){
        for(let j=0; j< second_input; j++){
            matrix1[i][j]=document.querySelector(`#matrix_input1_${i}_${j}`).value
            matrix2[i][j]=document.querySelector(`#matrix_input2_${i}_${j}`).value
        }
    }

    let result = multiply(matrix1,matrix2);
    let result2 = multiply2(matrix1,matrix2);
    let resultDiv = document.querySelector(`#sum_input`)
    
    for (let i=0; i<first_input; i++){
        for(let j=0; j< second_input; j++){
            document.querySelector(`#sum_input_${i}_${j}`).value=result[i][j]
        }
    }
    let Result2Element = document.querySelector('#sum_input1');

    Result2Element.innerText = result2;

}




function multiply(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0;             // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    return m;
  }
function multiply2(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = '';             // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += i == 0 ?  `${a[r][i]} x ${b[i][c]} ` :  ` + ${a[r][i]} x ${b[i][c]} `; 
          
        
        }
      }
    }
    return m;
    
  }


