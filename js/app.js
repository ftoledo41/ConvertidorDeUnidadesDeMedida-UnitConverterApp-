// CONVERTIDOR DE UNIDADES
// 219. Programar Tabs (pestañas)

// tabs o pestañas
const temperatureBtn = document.querySelector("#temperaturaBtn");
const distanceBtn = document.querySelector("#distanciaBtn");
const temperatureContent = document.querySelector("#temperatura");
const distanceContent = document.querySelector("#distancia");

// Función para mostrar el contenido de la pestaña "Temperatura" al pulsar sobre la misma
temperatureBtn.addEventListener("click", () => {
  temperatureContent.style.display = "block";
  temperatureBtn.classList.add("active");

  // Ocultar el contenido de la pestaña "Distancia y longitud" y eliminar el color de fondo verde
  distanceContent.style.display = "none";
  distanceBtn.classList.remove("active");
});

// Función para mostrar el contenido de la pestaña "Distancia y longitud" al pulsar sobre la misma
distanceBtn.addEventListener("click", () => {
  distanceContent.style.display = "block";
  distanceBtn.classList.add("active");

  // Ocultar el contenido de la pestaña "Temperatura" y eliminar el color de fondo verde
  temperatureContent.style.display = "none";
  temperatureBtn.classList.remove("active");
});

temperatureBtn.click(); // Al cargar la página, mostrar el contenido de la pestaña "Temperatura"

// 220. Convertidor de unidades de temperatura

// Convertidor de unidades de temperatura
const inputField = document.querySelector("#temperatureInput");
const select = document.querySelector("#conversionType");
const resultsDiv = document.querySelector(".results");

// function para convertir de celsius a fahrenheit
function celsiusToFharenheit(celsius) {
  return ((celsius * 9) / 5 + 32).toFixed(0);
}

// funcion para convertir de fahrenheit a celsius
function fahrenheitToCelsius(fahrenheit) {
  return (((fahrenheit - 32) * 5) / 9).toFixed(0);
}

// function para mostrar el resultado
function showResult(result) {
  resultsDiv.innerHTML = "<p>Es resultado es: </p>" + result;
}

// funcion que se actuva al ingresar un valor en el campo de entrada o al seleccionar una opcion de la lista desplegable
inputField.addEventListener("input", () => {
  const inputValue = inputField.value; //obtener el valor ingresado en el campo de la lista desplegable
  const conversionType = select.value; //Obtenemos el tipo de conversion seleccionado en el deslegable

  // verificar si el valor en campo de entrada no es numerico
  if (!/^(-)?\d*\.?\d*$/.test(inputValue)) {
    resultsDiv.innerHTML = "<p>Solamente se permiten valores númericos</p>";
    resultsDiv.style.color = "#ff0000";
    return;
  }

  const numericValue = parseFloat(inputValue); //convertir l valor ingresado a tipo numerico

  // 221. Convertidor de unidades de temperatura (II)
  // Verificar si el tipo de conversión seleccionado es celsius
  if (conversionType === "celsius") {
    const fahrenheit = celsiusToFharenheit(numericValue);
    showResult(fahrenheit + " °F");
  } else if (conversionType === "fahrenheit") {
    const celsius = fahrenheitToCelsius(numericValue);
    showResult(celsius + " °C");
  }
});

// Funcion que se activa cuando se selecciona una opcion en el desplegable
select.addEventListener("change", () => {
  const inputValue = inputField.value; //obtener el valor ingresado en el campo de la lista desplegable
  const conversionType = select.value; //Obtenemos el tipo de conversion seleccionado en el deslegable

  // comprobar campos vacios
  if (inputField.value === "") {
    resultsDiv.innerHTML = "";
    // 222. Convertidor de unidades de distancia y longitud
    // Retornamos para que no continue la ejecucion
    return;
  }

  // verificar si el valor en campo de entrada no es numerico
  if (!/^(-)?\d*\.?\d*$/.test(inputValue)) {
    resultsDiv.innerHTML = "<p>Solamente se permiten valores númericos</p>";
    resultsDiv.style.color = "#ff0000";
    return;
  }

  const numericValue = parseFloat(inputValue); //convertir l valor ingresado a tipo numerico

  // 221. Convertidor de unidades de temperatura (II)
  // Verificar si el tipo de conversión seleccionado es celsius
  if (conversionType === "celsius") {
    const fahrenheit = celsiusToFharenheit(numericValue);
    showResult(fahrenheit + " °F");
  } else if (conversionType === "fahrenheit") {
    const celsius = fahrenheitToCelsius(numericValue);
    showResult(celsius + " °C");
  }
});

// BORRAR EL VALOR EN EL CAMPO DE ENTRADA DE DATOS
inputField.addEventListener("input", () => {
  if (inputField.value === "") {
    resultsDiv.innerHTML = "";
  }
});

// funcion que se activa cuando se presionar la tecla enter en el campo de entrada
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});

// 222. Convertidor de unidades de distancia y longitud
// de kilometro a milla y viceversa
const inputField2 = document.querySelector("#lengthInput");
const select2 = document.querySelector("#conversionType2");
const resultDiv2 = document.querySelector("#distancia .results");

// kilometro a milla
function kilometerToMile(kilometer) {
  return (kilometer * 0.621371).toFixed(2);
}

// milla a kilometro
function MileToKilometer(mile) {
  return (mile / 0.621371).toFixed(2);
}

// function para mostrar el resultado
function showResult2(result) {
  resultDiv2.innerHTML = "<p>El resultado es: </p>" + result;
}

// funcion que se actuva al ingresar un valor en el campo de entrada o al seleccionar una opcion de la lista desplegable
inputField2.addEventListener("input", () => {
  const inputValue2 = inputField2.value; //obtener el valor ingresado en el campo de la lista desplegable
  const conversionType2 = select2.value; //Obtenemos el tipo de conversion seleccionado en el deslegable

  // verificar si el valor en campo de entrada no es numerico
  // Solo positivos
  if (!/^\d*\.?\d*$/.test(inputValue2)) {
    resultDiv2.innerHTML =
      "<p>Solamente se permiten valores númericos positivos</p>";
    resultDiv2.style.color = "#ff0000";
    return;
  }

  const numericValue2 = parseFloat(inputValue2); //convertir l valor ingresado a tipo numerico

  if (conversionType2 === "kilometro") {
    const mile = kilometerToMile(numericValue2);
    showResult2(mile + " mi");
  } else if (conversionType2 === "milla") {
    const kilo = MileToKilometer(numericValue2);
    showResult2(kilo + " km");
  }
});

// Funcion que se activa cuando se selecciona una opcion en el desplegable
select2.addEventListener("change", () => {
  const inputValue2 = inputField2.value; //obtener el valor ingresado en el campo de la lista desplegable
  const conversionType2 = select2.value; //Obtenemos el tipo de conversion seleccionado en el deslegable

  // comprobar campos vacios
  if (inputField2.value === "") {
    resultDiv2.innerHTML = "";
    // 222. Convertidor de unidades de distancia y longitud
    // Retornamos para que no continue la ejecucion
    return;
  }

  // verificar si el valor en campo de entrada no es numerico
  // Solo positivos
  if (!/^\d*\.?\d*$/.test(inputValue2)) {
    resultDiv2.innerHTML =
      "<p>Solamente se permiten valores númericos positivos</p>";
    resultDiv2.style.color = "#ff0000";
    return;
  }

  const numericValue2 = parseFloat(inputValue2); //convertir l valor ingresado a tipo numerico

  if (conversionType2 === "kilometro") {
    const mile = kilometerToMile(numericValue2);
    showResult2(mile + " mi");
  } else if (conversionType2 === "milla") {
    const kilo = MileToKilometer(numericValue2);
    showResult2(kilo + " km");
  }
});

// BORRAR EL VALOR EN EL CAMPO DE ENTRADA DE DATOS
inputField2.addEventListener("input", () => {
  if (inputField2.value === "") {
    resultDiv2.innerHTML = "";
  }
});

// funcion que se activa cuando se presionar la tecla enter en el campo de entrada
inputField2.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});
