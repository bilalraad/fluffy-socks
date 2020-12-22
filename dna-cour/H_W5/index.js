// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const studentName = document.querySelector("#studentName");
const uniCol = document.querySelector("#uniCol");
const engScore = document.querySelector("#engScore");
const phyScore = document.querySelector("#phyScore");
const geoScore = document.querySelector("#geoScore");
msg = document.querySelector(".msg");
const resultContainer = document.querySelector("#resultContainer");

function onClick() {
  console.log(
    `${engScore.value} ${phyScore.value} ${geoScore.value} ${uniCol.value} ${studentName.value} `
  );
  if (
    engScore.value == "" ||
    phyScore.value == "" ||
    geoScore.value == "" ||
    studentName.value == "" ||
    uniCol.value == ""
  ) {
    msg.classList.add("error"); //to make the msg take the style of .error class(defined in css)
    msg.innerHTML = "Please enter all the feilds";
    // Remove error after 3 seconds
    setTimeout(function(){
      msg.classList=null
      msg.innerHTML=null;
    }, 3000);
  } else {
    let avg =
      (parseInt(engScore.value) +
        parseInt(phyScore.value) +
        parseInt(geoScore.value)) /
      3;

    resultContainer.innerHTML = `your avarage: ${avg}`;
  }
}
