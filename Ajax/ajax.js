$(document).ready(function () {
    $('#button1').click(function () {
        move();
        $("#demo").empty();
        fetch('http://api.icndb.com/jokes/random')
            .then(response => response.json())
            .then(function (data) {
                setTimeout(function () {
                    document.getElementById('demo').innerHTML = data.value.joke;
                    $("#myBar").hide();
                }, 1500);
            })
    })
});

function move() {
    var elem = document.getElementById("myBar");
    $(elem).show();
    var width = 1;
    var id = setInterval(frame, 15);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}