// Toggles descriptions for each drop down box in the project section
function toggleDescription(id) {
    // get project id
    var desc = document.getElementById(id);
    // Select arrow icon so that it can be rotated when clicked
    var icon = desc.previousElementSibling.querySelector('.toggle-icon');
    
    desc.classList.toggle('active');
    icon.classList.toggle('active');
}