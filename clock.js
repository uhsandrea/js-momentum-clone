const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"),
    dateTitle = clockContainer.querySelector("h2");

function getTime() {
    const time = new Date();

    const year = time.getFullYear();
    const month = time.getMonth()+1;
    const day = time.getDate();
    dateTitle.innerText = `${year}/${month}/${day}`;
    
    const minutes = time.getMinutes();
    const hours = time.getHours();
    const seconds = time.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();