// JavaScript code to populste data
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeekElement = document.getElementById("dayOfWeek");
const utcTimeElement = document.getElementById("utcTime");

// Function to get the current day of the week and UTC time
function updateDateTime() {
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    const utcTime = now.getTime();

    dayOfWeekElement.textContent = dayOfWeek;
    utcTimeElement.textContent = utcTime;
}

// Update the date and time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);