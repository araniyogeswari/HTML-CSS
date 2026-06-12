let greetings = ["Good Morning", "Good Afternoon", "Good Evening", "Good Night"];
let num = 0;
function greet_morning() {
    let text = document.getElementById("greet");
    text.innerText = greetings[num];
    num = (num + 1) % greetings.length;
}
function turn_on(){
    let light = document.getElementById("on");
    light.src = "Turn on .jpeg";
}
function turn_off(){
    let light = document.getElementById("on");
    light.src = "Turn off.jpeg";
}
function change_color() {
    document.getElementById("yogi").style.backgroundColor = "black";
    document.getElementById("Data").style.color = "white";
    document.getElementById("greet").style.color = "white";
}