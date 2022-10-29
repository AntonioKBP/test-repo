const millisecondsInSecond = 1000;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;

const timer = targetDate => {
  setInterval(() => {
    const delta = new Date(targetDate) - new Date();

    const seconds = Math.floor(
      (delta / millisecondsInSecond) % secondsInMinute
    );
    const minutes = Math.floor(
      (delta / (millisecondsInSecond * secondsInMinute)) % minutesInHour
    );
    const hours = Math.floor(
      (delta / (millisecondsInSecond * secondsInMinute * minutesInHour)) %
        hoursInDay
    );

    const days = Math.floor(
      delta /
        (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay)
    );

    const timerFormat = `${days}days ${hours}:${minutes}:${seconds}`;
    renderTimer(timerFormat);
  }, 1000);
};

const renderTimer = string => {
  document.querySelector('span').innerText = string;
};

timer(new Date('2023/01/01'));
