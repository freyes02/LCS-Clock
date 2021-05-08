setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" +
        min + ":" + sec + " " + am_pm;

    document.getElementById("clock")
        .innerHTML = currentTime;
}

function month_day() {
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = new Date();
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("month").innerHTML = week[day.getDay()] + " " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}
showTime();
month_day();