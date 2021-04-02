function glazeOptions() {
    document.getElementById("choose-glazing").classList.toggle("show");
}

function quantityOptions() {
    document.getElementById("choose-quantity").classList.toggle("show");
}

function changeDetails(image, title, price) {
    document.getElementById("details-image").src=image;
    document.getElementById("details-title").innerHTML=title;
    document.getElementById("details-price").innerHTML=price;
}
  
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}