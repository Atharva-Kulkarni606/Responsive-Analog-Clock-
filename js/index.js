
//Setting the intervalL

setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let sec = date.getSeconds() + (date.getMilliseconds() / 1000);
    let hRotation = (30 * h) + (m / 2);
    let mRotation = (6 * m);
    let sRotation = (6 * sec);

    //Use Transform Property to rotate the hands
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    seconds.style.transform = `rotate(${sRotation}deg)`;
}, 1);