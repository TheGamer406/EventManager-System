let darkmode = localStorage.getItem("darkmode")
const themeSwitcher = document.getElementById("themeSwitcher")

const enableDarkMode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
}
const disableDarkMode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
}
if(darkmode === "active") enableDarkMode()

themeSwitcher.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})
