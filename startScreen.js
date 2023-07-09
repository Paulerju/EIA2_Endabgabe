var StartScreen;
(function (StartScreen) {
    window.addEventListener("load", (handleLoad));
    function handleLoad(_event) {
        let newButton = document.createElement("button");
        newButton.setAttribute("width", "100 px");
        newButton.setAttribute("height", "100 px");
        newButton.innerHTML = "START!";
    }
    function start() {
        //clearDatabase
    }
})(StartScreen || (StartScreen = {}));
//# sourceMappingURL=startScreen.js.map