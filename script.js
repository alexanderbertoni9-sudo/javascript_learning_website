var darkMode = false;

function toggleDark(){
    if(darkMode){
        document.getElementById("themeChanger").innerText = "Light Mode";
        document.documentElement.classList.add('dark');
        darkMode = false
    }else{
        document.getElementById("themeChanger").innerText = "Dark Mode";
        document.documentElement.classList.remove('dark');
        darkMode = true
    }
    
}

window.onload = function(){
    toggleDark();
}