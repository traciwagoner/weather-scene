let now = new Date();

let daysWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let currentDay = daysWeek[now.getDay()];
let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let currentMinutes = now.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}

let currentDayWeek = document.querySelector(".current-date");

currentDayWeek.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;

function search(cityName) {
  let apiKey = "f9eba0eb14f7171a9cae64bd8c033632";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showConditions);
}

function showConditions(response) {
  document.querySelector("h4").innerHTML = response.data.name;
  document.querySelector(".current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#cityName");
  search(searchInput.value);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", handleSubmit);
