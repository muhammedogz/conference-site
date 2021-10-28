const nav = document.querySelector("nav");
const button = document.querySelector(".close-nav-btn");

button.addEventListener('click', () => {
    if (nav.classList.contains("nav-mobile-closed"))
    {
        console.log("if section");
        nav.classList.remove("nav-mobile-closed");
        button.classList.remove("fixed");
    }
    else
    {
        console.log("else section");
        nav.classList.add("nav-mobile-closed");
        button.classList.add("fixed");
    }
});

document.addEventListener("click", (event) => {
    
    if (event.target != button)
    {
        console.log("window section");
        nav.classList.remove("nav-mobile-closed");
        button.classList.remove("fixed");
    }
});