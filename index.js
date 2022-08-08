let birthday = new Date("september 17, 2022 00:00:00").getTime()

function count() {
    let now = new Date().getTime()
    let timer = birthday - now
    var seconds = 1000;
    var minute = seconds * 60
    var hour = minute * 60 
    var days = hour * 24

    var d = Math.floor (timer / (days))
    var h = Math.floor( (timer % (days)) / (hour))
    var m = Math.floor((timer % (hour)) / (minute))
    var s = Math.floor((timer % (minute)) / (seconds))

    document.getElementById("days").innerText = d
    document.getElementById("hour").innerText = h
    document.getElementById("min").innerText = m
    document.getElementById("sec").innerText = s
}
setInterval (function(){
    count();
},1000)




 
























var days = document.getElementById("days")
var hours = document.getElementById("hour")
var min = document.getElementById("min")
var sec = document.getElementById("sec")
