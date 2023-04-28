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