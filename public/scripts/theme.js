export default function toggleTheme() {
    let themeToggle = document.getElementById("themeToggle");
    let themeToggleMobile = document.getElementById("navContentButton");

    themeToggle.addEventListener("click", () => {
        var body = document.getElementById("body");
        body.classList.toggle("light");
    
        if(themeToggle.innerHTML === "Dark") {
            themeToggle.innerHTML = "Light";
        } else {
            themeToggle.innerHTML = "Dark";
        }
    
        if(themeToggleMobile.innerHTML === "Dark") {
            themeToggleMobile.innerHTML = "Light";
        } else {
            themeToggleMobile.innerHTML = "Dark";
        }
    })

    themeToggleMobile.addEventListener("click", () => {
        var body = document.getElementById("body");
        body.classList.toggle("light");
    
        if(themeToggle.innerHTML === "Dark") {
            themeToggle.innerHTML = "Light";
        } else {
            themeToggle.innerHTML = "Dark";
        }
    
        if(themeToggleMobile.innerHTML === "Dark") {
            themeToggleMobile.innerHTML = "Light";
        } else {
            themeToggleMobile.innerHTML = "Dark";
        }
    })
}