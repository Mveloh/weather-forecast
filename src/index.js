function setDate(timestamp) {
  let now = new Date(timestamp);
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  return `${day} ${hour}:${minute}`;
}
function showTemperature(response) {
  console.log(response.data.condition.icon);
  let temperaturePart = document.querySelector("#temp");
  temperaturePart.innerHTML = Math.round(response.data.temperature.current);
  let cityPart = document.querySelector("#city");
  cityPart.innerHTML = response.data.city;
  let conditionPart = document.querySelector("#condition");
  conditionPart.innerHTML = response.data.condition.description;
  let humidityPart = document.querySelector("#humii");
  humidityPart.innerHTML = response.data.temperature.humidity;
  let windPart = document.querySelector("#speed");
  windPart.innerHTML = Math.round(response.data.wind.speed);
  let datePart = document.querySelector("#date");
  datePart.innerHTML = setDate(response.data.time * 1000);
  let iconPart = document.querySelector("#icon");
  iconPart.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
}
let apiKey = "864c93f2e4tcc8176afdd913f0a2b0o2";
let city = "Durban";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
