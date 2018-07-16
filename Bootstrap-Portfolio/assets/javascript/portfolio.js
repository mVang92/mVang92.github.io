var projectModal = document.getElementById("projectModal");
var modal = document.getElementById("modal");

modal.onclick = function () {
    projectModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == projectModal) {
        projectModal.style.display = "none";
    }
}


$("#close").on("click", function () {
    console.log("close")
    projectModal.style.display = "none";
})