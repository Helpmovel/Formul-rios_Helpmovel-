const darkModeButton = document.getElementById("darkModeButton");
const body = document.body;

darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// Verifique o modo de exibição ao carregar a página
window.addEventListener("load", () => {
    if (localStorage.getItem("darkModeEnabled") === "true") {
        body.classList.add("dark-mode");
    }
});

// Salve o estado do modo de exibição no armazenamento local
window.addEventListener("beforeunload", () => {
    localStorage.setItem("darkModeEnabled", body.classList.contains("dark-mode"));
});
