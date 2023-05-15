const form = document.querySelector("form");
const darkMode = document.querySelector(".dark-mode");

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkMode.textContent = darkMode.textContent === "🌚" ? "🌞" : "🌚";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
});
