document.documentElement.style.fontSize = window.innerWidth / 375 * 50 + "px";
var body = document.getElementsByTagName("body")[0]
body.addEventListener('touchstart', function (e) {
    var input = document.getElementsByTagName("input");
    var textarea = document.getElementsByTagName("textarea");
    if (e.target.nodeName != "INPUT" && e.target.nodeName != "TEXTAREA") {

        for (var i = 0; i < input.length; i++) {
            input[i].blur();
        }
        for (var i = 0; i < textarea.length; i++) {
            textarea[i].blur();
        }

    };
});