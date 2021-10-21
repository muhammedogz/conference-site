
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("ul li");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(temp => {
            temp.classList.remove("active-link");
        });
        link.classList.add("active-link");
    });
});

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 285;
    const sectionId = current.getAttribute("id");
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("nav a[href*=" + sectionId + "]").classList.add("active-link");
      links.forEach(temp => {
        temp.classList.remove("active-link");
    });
    } else {
      document.querySelector("nav a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
