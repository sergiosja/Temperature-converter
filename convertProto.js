function convert() {

  let input = parseInt(document.querySelector("#inputFromUser").value);
  document.querySelector("#message").innerHTML = "and for the particularly interested..."

  let answer = document.querySelector("#answer");
  let answer2 = document.querySelector("#answer2");
  let answer3 = document.querySelector("#answer3");
  let answer4 = document.querySelector("#answer4");
  let answer5 = document.querySelector("#answer5");
  let answer6 = document.querySelector("#answer6");
  let answer7 = document.querySelector("#answer7");
  let answer8 = document.querySelector("#answer8");

  // Converting from Celsius, down to 3 decimals
  const celsiusToFahren = Math.floor(((input * (9/5)) + 32) * 1000) / 1000;
  const celsiusToKelvin = Math.floor((input + 273.15) * 1000) / 1000;
  const celsiusToRomer = Math.floor(((input * (21/40)) + 7.5) * 1000) / 1000;
  const celsiusToReaumur = Math.floor((input * (4/5)) * 1000) / 1000;
  const celsiusToNewton = Math.floor((input * (33/100)) * 1000) / 1000;
  const celsiusToDelisle = Math.floor(((100 - input) * (3/2)) * 1000) / 1000;
  const celsiusToRankine = Math.floor(((input + 273.15) * (9/5)) * 1000) / 1000;

  //Converting from Fahrenheit, down to 3 decimals
  const fahrenToCelsius = Math.floor(((input - 32) * (5/9)) * 1000) / 1000;
  const fahrenToKelvin = Math.floor(((input + 459.67) * (5/9)) * 1000) / 1000;
  const fahrenToRomer = Math.floor((((input - 32) * (7/24)) + 7.5) * 1000) / 1000;
  const fahrenToReaumur = Math.floor(((input - 32) / (4/9)) * 1000) / 1000;
  const fahrenToNewton = Math.floor(((input - 32) * (11/60)) * 1000) / 1000;
  const fahrenToDelisle = Math.floor(((212 - input) * (5/6)) * 1000) / 1000;
  const fahrenToRankine = Math.floor((input + 459.67) * 1000) / 1000;

  //Converting from Kelvin, down to 3 decimals
  const kelvinToCelsius = Math.floor((input - 273.15) * 1000) / 1000;
  const kelvinToFahren = Math.floor(((input * (9/5)) - 459.67) * 1000) / 1000;
  const kelvinToRomer = Math.floor((((input - 273.15) * (21/40)) + 7.5) * 1000) / 1000;
  const kelvinToReaumur = Math.floor(((input - 273.15) * (4/5)) * 1000) / 1000;
  const kelvinToNewton = Math.floor(((input - 273.15) * (33/100)) * 1000) / 1000;
  const kelvinToDelisle = Math.floor(((373.15 - input) * (3/2)) * 1000) / 1000;
  const kelvinToRankine = Math.floor((input * 1.8) * 1000) / 1000;

  //Converting from Romer, down to 3 decimals
  const romerToCelsius = Math.floor(((input - 7.5) * (40/21)) * 1000) / 1000;
  const romerToFahren = Math.floor((((input - 7.5) * 24/7) + 32) * 1000) / 1000;
  const romerToKelvin = Math.floor((((input - 7.5) * (40/21)) + 273.15) * 1000) / 1000;
  const romerToReaumur = Math.floor(((input - 7.5) * (32/21)) * 1000) / 1000;
  const romerToNewton = Math.floor(((input - 7.5) * (22/35)) * 1000) / 1000;
  const romerToDelisle = Math.floor(((60 - input) * (20/7)) * 1000) / 1000;
  const romerToRankine = Math.floor((((input - 7.5) * (24/7)) + 491.67) * 1000) / 1000;

  //Converting from Reaumur, down to 3 decimals
  const reaumurToCelsius = Math.floor((input * (5/4)) * 1000) / 1000;
  const reaumurToFahren = Math.floor(((input * (9/4)) + 32) * 1000) / 1000;
  const reaumurToKelvin = Math.floor(((input * (5/4)) + 273.15) * 1000) / 1000;
  const reaumurToRomer = Math.floor(((input * (21/32)) + 7.5) * 1000) / 1000;
  const reaumurToNewton = Math.floor((input * (33/80)) * 1000) / 1000;
  const reaumurToDelisle = Math.floor(((80 - input) * (15/8)) * 1000) / 1000;
  const reaumurToRankine = Math.floor(((input * (9/4)) + 491.67) * 1000) / 1000;

  //Converting from Newton, down to 3 decimals
  const newtonToCelsius = Math.floor((input * (100/33)) * 1000) / 1000;
  const newtonToFahren = Math.floor(((input * (60/11)) + 32) * 1000) / 1000;
  const newtonToKelvin = Math.floor(((input * (100/33)) + 273.15) * 1000) / 1000;
  const newtonToRomer = Math.floor(((input * (35/22)) + 7.5) * 1000) / 1000;
  const newtonToReaumur = Math.floor(((input * (80/33))) * 1000) / 1000;
  const newtonToDelisle = Math.floor(((33 - input) * (50/11)) * 1000) / 1000;
  const newtonToRankine = Math.floor(((input * 60/11) + 491.67) * 1000) / 1000;

  //Converting from Delisle, down to 3 decimals
  const delisleToCelsius = Math.floor((100 - (input * (2/3))) * 1000) / 1000;
  const delisleToFahren = Math.floor((212 - (input * (6/5))) * 1000) / 1000;
  const delisleToKelvin = Math.floor((373.15 - (input * (2/3))) * 1000) / 1000;
  const delisleToRomer = Math.floor((60 - (input * (7/20))) * 1000) / 1000;
  const delisleToReaumur = Math.floor((80 - (input * (8/15))) * 1000) / 1000;
  const delisleToNewton = Math.floor((33 - (input * (11/50))) * 1000) / 1000;
  const delisleToRankine = Math.floor((671.67 - (input * (6/5))) * 1000) / 1000;

  //Converting from Rankine, down to 3 decimals
  const rankineToCelsius = Math.floor(((input - 491.67) * (5/9)) * 1000) / 1000;
  const rankineToFahren = Math.floor((input - 459.67) * 1000) / 1000;
  const rankineToKelvin = Math.floor((input * (5/9)) * 1000) / 1000;
  const rankineToRomer = Math.floor((((input - 491.67) * (7/24)) + 7.5) * 1000) / 1000;
  const rankineToReaumur = Math.floor(((input - 491.67) * (4/9)) * 1000) / 1000;
  const rankineToNewton = Math.floor(((input - 491.67) * (11/60)) * 1000) / 1000;
  const rankineToDelisle = Math.floor(((671.67 - input) * (5/6)) * 1000) / 1000;


  //Output
  if ($("#from option:selected").val() === "celsius") { //Using jQuery
      answer.innerHTML = input + "°C is equivalent of...";

      answer2.innerHTML = celsiusToFahren + " °Fahrenheit";
      answer3.innerHTML = celsiusToKelvin + " Kelvin";
      answer4.innerHTML = celsiusToRomer + " °Rømer";
      answer5.innerHTML = celsiusToReaumur + " °Réaumur";
      answer6.innerHTML = celsiusToNewton + " °Newton";
      answer7.innerHTML = celsiusToDelisle + " °Delisle";
      answer8.innerHTML = celsiusToRankine + " °Rankine";
  }

  else if ($("#from option:selected").val() === "fahrenheit") { //Using jQuery
      answer.innerHTML = input + "°F is equivalent of... ";

      answer2.innerHTML = fahrenToCelsius + " °Celsius";
      answer3.innerHTML = fahrenToKelvin + " Kelvin";
      answer4.innerHTML = fahrenToRomer + " °Rømer";
      answer5.innerHTML = fahrenToReaumur + " °Réaumur";
      answer6.innerHTML = fahrenToNewton + " °Newton";
      answer7.innerHTML = fahrenToDelisle + " °Delisle";
      answer8.innerHTML = fahrenToRankine + " °Rankine";
  }

  else if ($("#from option:selected").val() === "kelvin") { //Using jQuery
      answer.innerHTML = input + "K is equivalent of... ";

      answer2.innerHTML = kelvinToCelsius + " °Celsius";
      answer3.innerHTML = kelvinToFahren + " °Fahrenheit";
      answer4.innerHTML = kelvinToRomer + " °Rømer";
      answer5.innerHTML = kelvinToReaumur + " °Réaumur";
      answer6.innerHTML = kelvinToNewton + " °Newton";
      answer7.innerHTML = kelvinToDelisle + " °Delisle";
      answer8.innerHTML = kelvinToRankine + " °Rankine";
  }

  else if ($("#from option:selected").val() === "romer") { //Using jQuery
      answer.innerHTML = input + "°Rø is equivalent of... ";

      answer2.innerHTML = romerToCelsius + " °Celsius";
      answer3.innerHTML = romerToFahren + " °Fahrenheit";
      answer4.innerHTML = romerToKelvin + " Kelvin";
      answer5.innerHTML = romerToReaumur + " °Réaumur";
      answer6.innerHTML = romerToNewton + " °Newton";
      answer7.innerHTML = romerToDelisle + " °Delisle";
      answer8.innerHTML = romerToRankine + " °Rankine";
  }

  else if ($("#from option:selected").val() === "reaumur") { //Using jQuery
      answer.innerHTML = input + "°Ré is equivalent of... ";

      answer2.innerHTML = reaumurToCelsius + " °Celsius";
      answer3.innerHTML = reaumurToFahren + " °Fahrenheit";
      answer4.innerHTML = reaumurToKelvin + " Kelvin";
      answer5.innerHTML = reaumurToRomer + " °Rømer";
      answer6.innerHTML = reaumurToNewton + " °Newton";
      answer7.innerHTML = reaumurToDelisle + " °Delisle";
      answer8.innerHTML = reaumurToRankine + " °Rankine";
  }

  else if ($("#from option:selected").val() === "newton") { //Using jQuery
      answer.innerHTML = input + "°N is equivalent of... ";

      answer2.innerHTML = newtonToCelsius + " °Celsius";
      answer3.innerHTML = newtonToFahren + " °Fahrenheit";
      answer4.innerHTML = newtonToKelvin + " Kelvin";
      answer5.innerHTML = newtonToRomer + " °Rømer";
      answer6.innerHTML = newtonToReaumur + " °Réaumur";
      answer7.innerHTML = newtonToDelisle + " °Delisle";
      answer8.innerHTML = newtonToRankine + " °Rankine";
  }

  else if ($("#from option:selected").val() === "delisle") { //Using jQuery
      answer.innerHTML = input + "°De is equivalent of... ";

      answer2.innerHTML = delisleToCelsius + " °Celsius";
      answer3.innerHTML = delisleToFahren + " °Fahrenheit";
      answer4.innerHTML = delisleToKelvin + " Kelvin";
      answer5.innerHTML = delisleToRomer + " °Rømer";
      answer6.innerHTML = delisleToReaumur + " °Réaumur";
      answer7.innerHTML = delisleToNewton + " °Newton";
      answer8.innerHTML = delisleToRankine + " °Rankine";
  }

  else if ($("#from option:selected").val() === "rankine") { //Using jQuery
      answer.innerHTML = input + "°Ra is equivalent of... ";

      answer2.innerHTML = rankineToCelsius + " °Celsius";
      answer3.innerHTML = rankineToFahren + " °Fahrenheit";
      answer4.innerHTML = rankineToKelvin + " Kelvin";
      answer5.innerHTML = rankineToRomer + " °Rømer";
      answer6.innerHTML = rankineToReaumur + " °Réaumur";
      answer7.innerHTML = rankineToNewton + " °Newton";
      answer8.innerHTML = rankineToDelisle + " °Delisle";
  }
}
