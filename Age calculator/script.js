let userInput = document.getElementById("date");

let result = document.getElementById("result");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  let birthDate = new Date(userInput.value);
  let y1 = birthDate.getFullYear();
  let m1 = birthDate.getMonth();
  let d1 = birthDate.getDate();

  console.log(m1, d1, y1);

  let today = new Date();
  console.log(today);

  let y2 = today.getFullYear();
  let m2 = today.getMonth();
  let d2 = today.getDate();

  result.innerHTML = `You are ${y2 - y1} years, ${m2 - m1} months and ${
    d2 - d1
  } days old`;

  result.style.display = "block";
}
