// GET DAY OF THE WEEK
const weekDay = document.querySelector("#weekday");

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayOfTheWeek = new Date();
let day = weekdays[dayOfTheWeek.getDay()];

weekDay.innerHTML = day;
weekDay.setAttribute("data-testid", day);

// GET MILLISECONDS TIME
const seconds = document.querySelector("#milliseconds");
let milliseconds = Date.now();
seconds.innerHTML = milliseconds;
seconds.setAttribute("data-testid", milliseconds);
