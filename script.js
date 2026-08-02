const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const popup = document.getElementById("popup");

// Yes Button
yesBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

// Close Popup
function closePopup() {
    popup.style.display = "none";
}

// Button ke onclick ke liye global
window.closePopup = closePopup;

// No Button Bhaagega
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}