// const title = document.querySelector(".hello h1:nth-child(2)");
const title = document.querySelector(".hello h1:first-child");

function handleTitleClick() {
    title.style.color = "yellow";
    title.textContent = "Title was clicked!";
}

function handleMouseEnter() {
    console.log("mouseenter");
}

function handleMouseLeave() {
    console.log("mouseleave");
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("Stop Copy");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("WIFI CONNECTED");
}

title.onclick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);