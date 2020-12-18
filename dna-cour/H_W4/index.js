// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const numberInput = document.querySelector("#number");
const msg = document.querySelector(".msg");
const numbersList = document.querySelector("#numbersList");


function isNegative(number) {
  if (number < 0) return `${number} is Negative 🙁`;
  else if (number > 0) return `${number} is Positive 🦾😼`;
  else return `${number} is Zero 😒`;
}

// Listen for form submit
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (numberInput.value === "") {
    msg.classList.add("error"); //to make the msg take the style of .error class(defined in css)
    msg.innerHTML = "Please enter something";
    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item
    const li = document.createElement("li");

    // Add text node with input values
    li.appendChild(document.createTextNode(isNegative(numberInput.value)));
    // Append to ul
    numbersList.appendChild(li);

    // Clear fields
    numberInput.value = "";
  }
}
