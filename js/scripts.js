// select all the buttons
const buttons = document.querySelectorAll("button");
// select the <input type="text" class="display" disabled> element
const display = document.querySelector(".display");
// Show the history value
const showValue = document.querySelector(".enter-value");

let arrRecords = [];

// calculate function
const calculate = (event) => {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === "=") {
    // check if the display is not empty then only do the calculation
    if (display.value !== "") {
      //replace comma with space
      if (display.value.indexOf(",") > -1) {
        display.value = display.value.replace(/,/g, "");
      }
      // calculate and show the answer to display
      display.value = eval(display.value);
      showHistory();
    }
  } else if (clickedButtonValue === "C") {
    // clear everything on display
    display.value = "";
    showValue.value = "";
    arrRecords = [];
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
    arrRecords.push(clickedButtonValue + "");
  }
};

// This function show your calculation history
const showHistory = () => {
  let disVal = "";
  for (let i = 0; i <= arrRecords.length; i++) {
    if (arrRecords[i]) {
      disVal += arrRecords[i];
    }
  }
  showValue.value = disVal;
};

// add eventListener to each button
buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});
