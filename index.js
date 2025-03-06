// Modal boxes functions to control descriptions
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// if user clicks out of the box then exit modal box
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

// Navbar toggling functions
function openNav(navId) {
    document.getElementById(navId).style.width = "10%";
}

function closeNav(navId) {
    var nav = document.getElementById(navId);
    nav.style.width = "0%";
}
