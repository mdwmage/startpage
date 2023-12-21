// display time as hh:mm
const options = {
  timeZone: "America/Toronto",
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
};
let today = new Date();
let time = today.toLocaleTimeString("en-US", options);

document.getElementById("time").textContent = time;

// display weather
const city = "Ottawa";
const language = "en";
const format = "%c+%C+(%f)";
const url = `https://wttr.in/${city}?format=${format}&lang=${language}`;

fetch(url)
  .then((response) => response.text())
  .then((data) => {
    const weatherInfo = data.trim();
    const weatherElement = document.getElementById("weather");
    weatherElement.textContent = weatherInfo;
  })
  .catch((error) => {
    const weatherElement = document.getElementById("weather");
    weatherElement.textContent = "It's probably nice outside :)";
  });

function externalLinks() {
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
    var b = c[a];
    b.getAttribute("href") &&
      b.hostname !== location.hostname &&
      (b.target = "_blank");
  }
}
externalLinks();
