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
        return Math.round(sum(PrevNum, parseFloat(numStr)) * 1000) / 1000;
    }else if (selectedOperator.includes ("−")) {
        return Math.round(substract(PrevNum, parseFloat(numStr)) * 1000) / 1000;
    }else if  (selectedOperator.includes ("×")) {
        return Math.round(multiply(PrevNum, parseFloat(numStr)) * 1000) / 1000;
    }else if(selectedOperator.includes ("÷")) {
        if (numStr === "0" || numStr === ""){
          return "error. cannot divide by 0";
        }
        return Math.round(multiply(PrevNum, parseFloat(numStr)) * 1000) / 1000;
    }
  }

  function onCalculatorfunctionBtnClick() {
    let result = null;
    let char = this.innerText;
  
    if (/[0-9.]/.test(char)) {
      if (char === "." && numStr.includes(".")) {
        return;
      }
  
      numStr += char;
      bottomScreenText.innerText = numStr;
      if (prevNum !== null) {
        topScreenText.innerText = `${prevNum} ${selectedOperator}`;
      }
    }

    if (/[\+\-\x\÷]/.test(char)) {
        // CASE ONE: if both operands not defined
        if (prevNum === null && numStr !== "") {
          selectedOperator = char;
          prevNum = parseFloat(numStr);
          numStr = "";
          topScreenText.innerText = `${prevNum} ${selectedOperator}`;
          bottomScreenText.innerText = prevNum;
        }
        // CASE TWO: if both operands defined
        else if (prevNum !== null && numStr !== "") {
            result = operate();
      prevNum = result;
      numStr = "";
      selectedOperator = char;
      topScreenText.innerText = `${result} ${selectedOperator}`;
      bottomScreenText.innerText = result;
    }
 // CASE THREE: if click on different operators in a row
 else if (prevNum !== null && numStr === "") {
    selectedOperator = char;
    topScreenText.innerText = `${prevNum} ${selectedOperator}`;
    bottomScreenText.innerText = prevNum;
  }