document.getElementById("dark_theme").addEventListener("click", functionClick);
    function darktheme() {
        document.getElementById("theme").style.background="black";
        document.getElementById("theme").style.color="white";
        document.getElementById("theme_slash").style.color="white";
}


document.getElementById("light_theme").addEventListener("click", functionClick);
    function lighttheme() {
        document.getElementById("theme").style.background="white";
        document.getElementById("theme").style.color="black";
        document.getElementById("theme_slash").style.color="black";
}