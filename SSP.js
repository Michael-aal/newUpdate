const Mainscreen = document.querySelector(".screen");
const Toggle = document.querySelector(".screenshot");

let isProtected = false;
let screenshotMode = false;

// Alerts
function applyAlert() {
    Mainscreen.classList.add("blind");
    alert("Error: Security threat!");
}

function removeAlert() {
    Mainscreen.classList.remove("blind");
    alert("You can use your screenshot now!");
}

// Enable protection
function EnablePolicy() {
    isProtected = true;
    screenshotMode = false;

    // Detect tab switch / window blur
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            screenshotMode = true;

        }
    });

    window.addEventListener("blur", () => {
        if (isProtected) {
            screenshotMode = true;
        
        }
    });

    // Detect PrintScreen
    document.addEventListener("keydown", (e) => {
        if (e.key === "PrintScreen" || (e.ctrlKey && ["c","x","s","p"].includes(e.key.toLowerCase()))) {
            screenshotMode = true;
            e.preventDefault();
        
        }
    });

    // Disable clicks during screenshot mode
    document.addEventListener("click", (e) => {
        if (screenshotMode) {
            e.preventDefault();
            alert("Left click disabled during screenshot mode!");
        }
    });

    document.addEventListener("contextmenu", (e) => {
        if (screenshotMode) {
            e.preventDefault();
            alert("Right click disabled during screenshot mode!");
        }
    });

    // Reset on focus
    window.addEventListener("focus", () => {
        screenshotMode = false;
     
    });

    function BLUR(){
MainScreen.classList.add("blind")
    }

    window.addEventListener("focus", applyAlert)
     window.addEventListener("blur", BLUR)
    
    

    alert("Screenshot Protection: ON");
}

// Disable protection
function NoPolicy() {
    isProtected = false;
    screenshotMode = false;
    removeAlert();
    alert("Screenshot Protection: OFF");
}

// Toggle button
Toggle.addEventListener("click", () => {
    if (!isProtected) {
        EnablePolicy();
    } else {
        NoPolicy();
    }

});
