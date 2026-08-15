const menuButton = document.getElementById("menuButton");
const menuClose = document.getElementById("menuClose");
const sideMenu = document.getElementById("sideMenu");

menuButton.addEventListener("click", () =>
{
    sideMenu.classList.add("open");
});

menuClose.addEventListener("click", () =>
{
    sideMenu.classList.remove("open");
});

const menuLinks =
    document.querySelectorAll(".side-menu-links a");

menuLinks.forEach(link =>
{
    link.addEventListener("click", () =>
    {
        sideMenu.classList.remove("open");
    });
});