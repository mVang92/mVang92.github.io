$(document).ready(function () {
    function getBgSeasons() {
        // var date = new Date();
        // var month = date.getMonth();
        var month = 5;
        // console.log(month)
        if (month >= 0 && month < 2) {
            document.body.style.backgroundImage = "url('assets/images/winter.jpg')";
        } else if (month >= 2 && month < 5) {
            document.body.style.backgroundImage = "url('assets/images/spring.jpg')";
        } else if (month >= 5 && month < 8) {
            document.body.style.backgroundImage = "url('assets/images/summer.jpg')";
        } else if (month >= 8 && month < 11) {
            document.body.style.backgroundImage = "url('assets/images/fall.jpg')";
        } else {
            document.body.style.backgroundImage = "url('assets/images/winter.jpg')";
        };
    };
    getBgSeasons();
});
