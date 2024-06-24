
var navLinks = document.getElementById("navLinks");
function shoMenu(){
    navLinks.style.right = "0";
}
function hidMenu(){
    navLinks.style.right = "-200px";
}

var navSub = document.getElementById("navSub");
function showMenu(){
    navSub.style.right = "0";
}
function hideMenu(){
    navSub.style.right = "-200px";
}

function explodeConfetti() {
    confetti();
    alert('Thank You For Your Donation!');
}

