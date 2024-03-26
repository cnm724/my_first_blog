//light and dark mode
const toggleButton = document.querySelector("#toggle")

toggleButton.addEventListener("click", function(event){
    event.preventDefault();

    //
    const body = document.body
    const currentTheme = body.getAttribute("dataTheme")
    //ternary operator, switches back from light and dark
    const newTheme = currentTheme === "light" ? "dark" : "light"
    body.setAttribute("dataTheme", newTheme)
    localStorage.setItem("theme", newTheme)
})

function setTheme(theme) {
    document.body.setAttribute("dataTheme", theme);
    localStorage.setItem("theme", theme);
}

function getTheme(){
    return localStorage.getItem("theme") || "light";
}

window.onload = () => {
    const savedTheme = getTheme()
    setTheme(savedTheme)
}