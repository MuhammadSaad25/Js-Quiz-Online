

function start() {
   
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
    
    let Result2Element = document.querySelector(`#sum_input1`)

    for (let i=0; i<first_input; i++){
        for(let j=0; j< second_input; j++){
    Result2Element.innerHTML += `<div>${result2[i][j]}</div>`

    

          // result2.innerHTML += `<div>${result2[i][j]}</div>`
        }
       
    }
    Result2Element.innerHTML += `<br>`;
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



