// Toggles descriptions for each drop down box in the project section
function toggleDescription(id) {
    var desc = document.getElementById(id);
    if (desc.style.display === "none") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}