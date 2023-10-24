const earthlandActualDate = new Date();
const earthlandDateOfActualEra = new Date("1 Feb, 2014 16:25");

const totalMilliseconds = Math.abs(earthlandActualDate - earthlandDateOfActualEra);
const totalHours = totalMilliseconds / 36e5;
const totalMinutes = totalMilliseconds / 60000 - 25;

const earthlandSecond = earthlandActualDate.getSeconds();

const yunranolandTimeContainer = document.getElementsByClassName("yunranolandTime")[0];

function yunranolandTime() {
    const earthlandActualDate = new Date();
    const earthlandDateOfActualEra = new Date("1 Feb, 2014 16:25");

    const totalMilliseconds = Math.abs(earthlandActualDate - earthlandDateOfActualEra);
    const totalMinutes = totalMilliseconds / 60000;

    const dayLengthMinutes = (38 * 60) + 30;
    const adjustedMinutes = totalMinutes % dayLengthMinutes;
    const yunranolandHours = Math.floor(adjustedMinutes / 60);
    const yunranolandMinutes = String(adjustedMinutes % 60).split(".")[0];

    const earthlandSeconds = earthlandActualDate.getSeconds();
    const earthlandMilliSeconds = earthlandActualDate.getMilliseconds();

    yunranolandTimeContainer.innerText = yunranolandHours + "h : " + yunranolandMinutes + "m ; " + earthlandSeconds + "s ";

    const timeoutLimit = 1000 - earthlandMilliSeconds;

    setTimeout(yunranolandTime, timeoutLimit);
}

yunranolandTime();