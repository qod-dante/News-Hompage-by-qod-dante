const mobileWrapper = document.getElementById("mobile-nav-wrapper");

const backDrop = document.getElementById("darkShadow");

function openHamburger() {
    mobileWrapper.style.display = "grid";
    backDrop.style.display = "block"
}

function closeHamburger() {
    mobileWrapper.style.display = "none";
    backDrop.style.display = "none";
}