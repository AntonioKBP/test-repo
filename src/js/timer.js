// const date1 = Date.now();

// setTimeout(() => {
//   const date2 = Date.now();
//   console.log(date1);
//   console.log(date2);
//   console.log(date2 - date1);
// }, 3000);

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockFace: document.querySelector('.js-clockface'),
};

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;

    this.init();
  }

  init() {
    const time = this.convertMs(0);
    this.onTick(time);
  }
  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.convertMs(deltaTime);
      this.onTick(time);
      //   updateClockFace(time);
      //   console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.convertMs(0);
    this.onTick(time);
  }
  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = this.addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = this.addLeadingZero(
      Math.floor(((ms % day) % hour) / minute)
    );
    // Remaining seconds
    const seconds = this.addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  }

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}
// console.log(refs.startBtn);
// console.log(refs.stopBtn);
// console.log(refs.clockFace);

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.clockFace.textContent = `${hours}:${minutes}:${seconds}`;
}

const timer = new Timer({
  onTick: updateClockFace,
});
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = convertMs(deltaTime);
//       updateClockFace(time);
//       //   console.log(`${hours}:${minutes}:${seconds}`);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };

refs.startBtn.addEventListener('click', timer.start.bind(timer));

refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
