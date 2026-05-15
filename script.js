const themes = ["", "blue", "yellow", "green"];
var currentTheme = 0;
var isDark = false;

function themeCycle() {
    document.documentElement.classList.remove(...themes.filter(t => t));
    currentTheme++;
    if (currentTheme > themes.length - 1) {
        currentTheme = 0;
    }
    if (themes[currentTheme]) { // only adds a class if its not empty string.
        document.documentElement.classList.add(themes[currentTheme]);
    }
    if(themes[currentTheme]==""){
        document.getElementById("themeCycle").innerText = "Cycle Theme (Next: Blue)";
    }else if(themes[currentTheme]=="blue"){
        document.getElementById("themeCycle").innerText = "Cycle Theme (Next: Yellow)";
    }else if(themes[currentTheme]=="yellow"){
        document.getElementById("themeCycle").innerText = "Cycle Theme (Next: Green)";
    }else if(themes[currentTheme]=="green"){
        document.getElementById("themeCycle").innerText = "Cycle Theme (Next: Red)";
    }
}

function darkToggle(){
    isDark = !isDark;
    if(isDark){
        document.documentElement.classList.add("dark");
        document.getElementById("darkMode").innerText = "Toggle Dark Mode (toggled)";
        document.getElementById("logo").src = "assets/img/SVG/logo_dark.svg";
    }else{
        document.documentElement.classList.remove("dark");
        document.getElementById("darkMode").innerText = "Toggle Dark Mode";
        document.getElementById("logo").src = "assets/img/SVG/logo_light.svg";
    }
}