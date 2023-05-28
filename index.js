const birthdayInput = document.getElementById("birthday");
const calculateButton = document.getElementById("calculate");
const resultElement = document.getElementById("result");

calculateButton.addEventListener("click", calculateAge);


function calculateAge() {
  const birthday = birthdayInput.value;

  if (birthday === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthday);

    resultElement.innerHTML = `Your age is ${age} ${
      age > 1 ? "years" : "year" 
    } old`;
  }
}

function getAge(birthDay) {
  const currentDate = new Date();

  const birthdayDate = new Date(birthDay);

  const age = currentDate.getFullYear() - birthdayDate.getFullYear();

  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}
