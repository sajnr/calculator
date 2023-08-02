// DECLARE VARS
let numStr = ""; //operand a
let prevNum = null; //operand b
let selectedOperator = null;

// SELECTED ELEMENTS
const functionBtns = document.querySelectorAll(
    ".calculator__btns > .calculator__btn"
  );

  const clearBtn = document.getElementById("clear-btn");
const deleteBtn = document.getElementById("delete-btn");
const topScreenText = document.getElementById("calculator-screen-top");
const bottomScreenText = document.getElementById("calculator-screen-bottom");

// DEFINE FNS
function sum(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  
  Function ongotpointercapture() {
    if (selectedOperator. includes ("+")) {
        return Math.round(sum(PrevNum, parseFloat(numStr)) * 1000) / 1000
    }else if (selectedOperator.includes ("−")) {
        return Math.round(substract(PrevNum, parseFloat(numStr)) * 1000) / 1000
    }else if  (selectedOperator.includes ("×")) {
        return Math.round(multiply(PrevNum, parseFloat(numStr)) * 1000) / 1000
    }else if(selectedOperator.includes ("÷")) {
        return Math.
    }
  }