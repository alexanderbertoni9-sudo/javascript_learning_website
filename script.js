const themes = ["", "blue", "yellow", "green"];
var currentTheme = 0;
var isDark = false;

function getLogoSrc(){
    if(isDark) return "assets/img/SVG/Logo_White.svg"

    const logoMap = {
        "": "assets/img/SVG/Logo_Red.svg",
        "blue": "assets/img/SVG/Logo_Blue.svg",
        "yellow": "assets/img/SVG/Logo_Yellow.svg",
        "green": "assets/img/SVG/Logo_Green.svg",
    };

    return logoMap[themes[currentTheme]] ?? "assets/img/SVG/logo_Red.svg";
}

function themeCycle() {
    document.documentElement.classList.remove(...themes.filter(t => t));
    currentTheme = (currentTheme + 1) % themes.length;

    if (themes[currentTheme]) {
        document.documentElement.classList.add(themes[currentTheme]);
    }

    const nextTheme = themes[(currentTheme + 1) % themes.length] || "Red";
    document.getElementById("themeCycleBtn").innerText =
        `Cycle Theme (Next: ${nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1)})`;
    document.getElementById("logo").src = getLogoSrc();
}

function darkToggle() {
    isDark = !isDark;
    document.documentElement.classList.toggle("dark", isDark);
    document.getElementById("darkMode").innerText =
        isDark ? "Toggle Dark Mode (toggled)" : "Toggle Dark Mode";

    document.getElementById("logo").src = getLogoSrc();
}