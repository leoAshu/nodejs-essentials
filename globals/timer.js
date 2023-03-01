// delay with setTimeout
// comment out the code above for a proper output of this section
const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => {
    clearInterval(interval);
    console.log("done");

};
setTimeout(timerFinished, waitTime);

// set Interval
const waitInterval = 500;
let currentTime = 0;

const incrementTime = () => {
    currentTime += waitInterval;
    console.log(`waiting ${currentTime / 1000} seconds`);
}

const interval = setInterval(incrementTime, waitInterval);
