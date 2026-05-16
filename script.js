// Theme Switching + Dark Mode toggle

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

// Custom Cursor

const cursor = document.getElementById("cursor-follower");

const pointer = "assets/cursor/cursor_pointer.png";
const linkSelect = "assets/cursor/cursor_linkSelect.png";
const textSelect = "assets/cursor/cursor_textSelect.png";
const helpSelect = "assets/cursor/cursor_helpSelect.png";

// Make cursor move 

document.addEventListener("mousemove",function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

//Change cursor on hover of specific objects

const buttons = document.querySelectorAll(".button_cursor");
const text = document.querySelectorAll(".text_cursor");
const help = document.querySelectorAll(".help_cursor");


buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        cursor.src = linkSelect;
    });

    button.addEventListener("mouseleave", () => {
        cursor.src = pointer;
    });
});

text.forEach(text => {
    text.addEventListener("mouseenter", () => {
        cursor.src = textSelect;
    });

    text.addEventListener("mouseleave", () => {
        cursor.src = pointer;
    });
});

help.forEach(help => {
    help.addEventListener("mouseenter", () => {
        cursor.src = helpSelect;
    });

    help.addEventListener("mouseleave", () => {
        cursor.src = pointer;
    });
});

// Overlay and stuff in the making stuff in the gallery work

const overlay = document.getElementById('overlay');

document.getElementById('open_customCursor').onclick = () => {
  overlay.classList.add('active');
};

document.getElementById('close_customCursor').onclick = () => {
  overlay.classList.remove('active');
};