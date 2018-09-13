var modal = document.getElementById("modal-close");
var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var image3 = document.getElementById("img3");
var image4 = document.getElementById("img4");
var span = document.getElementsByClassName("close")[0];
var modalImage = document.getElementsByClassName("modal-image")[0];


image1.onclick = function() {
    modal.style.display = "block";
    modalImage.src = "big/1.jpg";
}

image2.onclick = function() {
    modal.style.display = "block";
    modalImage.src = "big/2.jpg";
}

image3.onclick = function() {
    modal.style.display = "block";
    modalImage.src = "big/3.jpg";
}

span.onclick = function() {
    modal.style.display = "none";
}
