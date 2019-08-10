var InputFlags = {
    // 32 is the space bar. 37 is left arrow. 39 is right arrow.
    "click": false,
    "mouseX": 0,
    "mouseY": 99999
};

window.onkeydown = function(e) {
    InputFlags[e.keyCode] = true;
};
window.onkeyup = function(e) {
    InputFlags[e.keyCode] = false;
};
document.onmouseup = function(e) {
    InputFlags["click"] = true;
};
document.onmousemove = function(e) {
    var x = e.clientX - window.innerWidth/2;

    var y = e.clientY - HALFHEIGHT - 8;
    InputFlags["mouseX"] = x;
    InputFlags["mouseY"] = y;
};

document.addEventListener("touchstart", function(e) {
    InputFlags["mouseX"] = e.touches[0].clientX;
    InputFlags["mouseY"] = e.touches[0].clientY;
    if (e.touches[0].clientX - window.innerWidth/2 > 0) {
        // Right arrow key
        InputFlags["37"] = false;
        InputFlags["39"] = true;
    } else {
        // Left arrow key
        InputFlags["37"] = true;
        InputFlags["39"] = false;
    }
}, false);
document.addEventListener("touchmove", function(e) {
    InputFlags["mouseX"] = e.touches[0].clientX;
    InputFlags["mouseY"] = e.touches[0].clientY;
    if (e.touches[0].clientX - window.innerWidth/2 > 0) {
        // Right arrow key
        InputFlags["37"] = false;
        InputFlags["39"] = true;
    } else {
        // Left arrow key
        InputFlags["37"] = true;
        InputFlags["39"] = false;
    }
}, false);
document.addEventListener("touchend", function(e) {
    InputFlags["37"] = false;
    InputFlags["39"] = false;
}, false);
