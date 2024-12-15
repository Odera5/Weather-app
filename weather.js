/*const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kano%2C%20nigeria?unitGroup=us&key=X9LXFCATKQHBHUNZ7YEFW3EAW&contentType=json";

function getLocation() {
  fetch(url, { mode: "cors" })
    .then((resolve) => {
      return resolve.json();
    })
    .then((resolve) => {
      console.log(resolve.currentConditions.humidity);
    });
}
getLocation();

function processJson(result) {
  return result.json();
}*/

//user input
const body = document.querySelector("body");
const label = document.createElement("label");
label.textContent = "input your location";
const input = document.createElement("input");
body.appendChild(label);
body.appendChild(input);
const btn = document.createElement("button");
btn.textContent = "submit";
body.appendChild(btn);

//fuction that takes location and print result
function printResult(location) {
  location = input.value;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}%2C%20nigeria?unitGroup=us&key=X9LXFCATKQHBHUNZ7YEFW3EAW&contentType=json`;
  fetch(url, { mode: "cors" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const para = document.createElement("p");
      body.appendChild(para);
      result = data.currentConditions.humidity;
      para.textContent = `${location} has humidity of ${result}`;
    });
}
btn.addEventListener("click", printResult);
