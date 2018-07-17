var project1ModalContent = document.getElementById("project1ModalContent");
var project2ModalContent = document.getElementById("project2ModalContent");
var project1Modal = document.getElementById("project1Modal");
var project2Modal = document.getElementById("project2Modal");

project1Modal.onclick = function () {
    project1ModalContent.style.display = "block";
}

project2Modal.onclick = function () {
    project2ModalContent.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == project1ModalContent) {
        project1ModalContent.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == project2ModalContent) {
        project2ModalContent.style.display = "none";
    }
}

$("#project1Close").on("click", function (evt) {
    evt.stopImmediatePropagation();
    project1ModalContent.style.display = "none";
})

$("#project2Close").on("click", function (evt) {
    evt.stopImmediatePropagation();
    project2ModalContent.style.display = "none";
})