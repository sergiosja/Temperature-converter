function convert() {
  const tempStr = ["Celsius", "Fahrenheit", "Kelvin", "Rømer", "Réaumur", "Newton", "Delisle", "Rankine"];
  const answers = ["#answer1", "#answer2", "#answer3", "#answer4", "#answer5", "#answer6", "#answer7", "#answer8"]
  const base = [0, 32, 273.15, 7.5, 0, 0, 0, 459.67];
  const layer = [1, 1.8, 1, (21/40), (4/5), (33/100), (3/2), 1.8];
  const forD = [1, 1, 1, 1, 1, 1, -1, 1]; //due to Delisle breaking the established pattern
  const forD2 = [0, 0, 0, 0, 0, 0, 100, 0];

  let unit;
  if ($("#from option:selected").val() === "celsius") { unit = 0;}
  if ($("#from option:selected").val() === "fahrenheit") { unit = 1;}
  if ($("#from option:selected").val() === "kelvin") { unit = 2;}
  if ($("#from option:selected").val() === "romer") { unit = 3;}
  if ($("#from option:selected").val() === "reaumur") { unit = 4;}
  if ($("#from option:selected").val() === "newton") { unit = 5;}
  if ($("#from option:selected").val() === "delisle") { unit = 6;}
  if ($("#from option:selected").val() === "rankine") { unit = 7;}

  let value = document.querySelector("#inputFromUser").value;
  let tmp = forD2[unit] + (forD[unit] * value - base[unit]) / layer[unit];

  if (value < 0.01 && value > -0.99) { //For esthetic purposes only, the conversion will still be accurate no matter what the input is
    document.querySelector("#answer").innerHTML = "0 degrees " + tempStr[unit] + " equal ";
  } else {
  document.querySelector("#answer").innerHTML = value + " degrees " + tempStr[unit] + " equal ";
  }

  for (i = 0; i < tempStr.length; i++) { //Makes sure we only get output of the converted values, not the value the user wants to convert
    document.querySelector(answers[unit]).classList.remove("answerClass");
    document.querySelector(answers[unit]).innerHTML = null;
    
    if (i != unit) {
      temperature = Math.floor(((forD2[i] + forD[i] * tmp) * layer[i] + base[i]) * 1000) / 1000; //Rounds the answer down to 3 decimals
      document.querySelector(answers[i]).classList.add("answerClass");
      document.querySelector(answers[i]).innerHTML = (temperature + " °" + tempStr[i]);
    }
  }
}
