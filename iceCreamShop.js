var IcecreamShop;
(function (IcecreamShop) {
    window.addEventListener("load", handleload);
    console.log("handleLoad working");
    IcecreamShop.canvas = document.querySelector("#shop");
    IcecreamShop.crc2 = IcecreamShop.canvas.getContext("2d");
    IcecreamShop.player = new IcecreamShop.Serveri();
    let newC = new IcecreamShop.customer(200, 180, "#b56cd4", 5);
    let newOffer = new IcecreamShop.offer();
    let Seat1 = new IcecreamShop.Seat(1230, 80, 32); //Top right
    let Seat2 = new IcecreamShop.Seat(1060, 600, 32); //right bottom
    let Seat3 = new IcecreamShop.Seat(770, 700, 32); // bottom left 
    let Seat4 = new IcecreamShop.Seat(770, 320, 32); // top left
    function handleload() {
        drawBackground();
        IcecreamShop.player.drawServeri();
        newC.drawCustomer();
        // newOffer.drawOffer();
        // newOffer.flavorchange();
        setInterval(() => {
            IcecreamShop.player.update();
            // Add any other update calls for animations here
            drawBackground();
            IcecreamShop.player.drawServeri();
            newC.drawCustomer();
        }, 1000 / 25);
        newOffer.addEventListeners();
        // Add event listeners walking player
        window.addEventListener("keydown", IcecreamShop.player.handleKeyDown.bind(IcecreamShop.player));
        window.addEventListener("keyup", IcecreamShop.player.handleKeyUp.bind(IcecreamShop.player));
    }
    IcecreamShop.handleload = handleload;
    function drawBackground() {
        drawOutside();
        drawRestaurant();
        drawTable();
        Seat1.drawSeat();
        Seat2.drawSeat();
        Seat3.drawSeat();
        Seat4.drawSeat();
    }
    IcecreamShop.drawBackground = drawBackground;
    function drawOutside() {
        IcecreamShop.crc2.fillStyle = "#145c2c";
        IcecreamShop.crc2.fillRect(0, 0, IcecreamShop.canvas.width, IcecreamShop.canvas.height);
        IcecreamShop.crc2.fillStyle = "#cfcfcf";
        IcecreamShop.crc2.fillRect(110, 110, 180, 130);
        IcecreamShop.crc2.fillRect(110, 110, 640, 70);
        IcecreamShop.crc2.fillRect(660, 0, 90, 120);
    }
    IcecreamShop.drawOutside = drawOutside;
    function drawRestaurant() {
        IcecreamShop.crc2.fillStyle = "#878787";
        IcecreamShop.crc2.fillRect(0, 250, 900, 550);
        IcecreamShop.crc2.fillRect(850, 0, 700, 800);
        IcecreamShop.crc2.fillStyle = "#404040";
        IcecreamShop.crc2.fillRect(100, 250, 200, 10);
        IcecreamShop.crc2.fillRect(1390, 320, 10, 200);
        IcecreamShop.crc2.closePath();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.fillStyle = "black";
        IcecreamShop.crc2.arc(80, 230, 7, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(320, 230, 7, 0, 2 * Math.PI);
        IcecreamShop.crc2.fillRect(77, 90, 6, 140);
        IcecreamShop.crc2.fillRect(77, 87, 400, 6);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.arc(80, 90, 7, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(480, 90, 7, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.arc(320, 200, 7, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(480, 200, 7, 0, 2 * Math.PI);
        IcecreamShop.crc2.fillRect(317, 200, 6, 30);
        IcecreamShop.crc2.fillRect(317, 197, 160, 6);
        IcecreamShop.crc2.fill();
    }
    IcecreamShop.drawRestaurant = drawRestaurant;
    function drawTable() {
        IcecreamShop.crc2.fillStyle = "#4696c2";
        IcecreamShop.crc2.fillRect(10, 580, 500, 80);
        IcecreamShop.crc2.beginPath(); //Table top right
        IcecreamShop.crc2.arc(1120, 80, 50, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(1010, 80, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.closePath();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.arc(1120, 180, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.beginPath(); //Table bottom right
        IcecreamShop.crc2.arc(1170, 600, 50, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(1280, 600, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.closePath();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.arc(1170, 700, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.beginPath(); //Table bottom left
        IcecreamShop.crc2.arc(770, 600, 50, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(880, 600, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.closePath();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.beginPath(); //Table top left
        IcecreamShop.crc2.arc(670, 320, 50, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(570, 320, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.closePath();
        //Icecream flavors
        IcecreamShop.crc2.fillStyle = "#4180a3";
        IcecreamShop.crc2.fillRect(80, 590, 275, 60);
        IcecreamShop.crc2.fillStyle = "#d16d93";
        IcecreamShop.crc2.fillRect(90, 595, 60, 50);
        IcecreamShop.crc2.fillStyle = "#c4bbbe";
        IcecreamShop.crc2.fillRect(155, 595, 60, 50);
        IcecreamShop.crc2.fillStyle = "#963e4f";
        IcecreamShop.crc2.fillRect(220, 595, 60, 50);
        IcecreamShop.crc2.fillStyle = "#331707";
        IcecreamShop.crc2.fillRect(285, 595, 60, 50);
        IcecreamShop.crc2.closePath();
        //Welcome mat
        IcecreamShop.crc2.fillStyle = "#4696c2";
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.fillRect(140, 270, 120, 50);
        IcecreamShop.crc2.fillStyle = "#377699";
        IcecreamShop.crc2.rect(140, 270, 120, 50);
        IcecreamShop.crc2.fillStyle = "#1b394a";
        IcecreamShop.crc2.font = "bold 15px arial";
        IcecreamShop.crc2.fillText("WELCOME", 160, 300);
        IcecreamShop.crc2.stroke();
        IcecreamShop.crc2.closePath();
    }
    IcecreamShop.drawTable = drawTable;
    function handleKeyDown(event) {
        switch (event.key) {
            case "w":
                IcecreamShop.player.velocity.y = -5;
                break;
            case "a":
                IcecreamShop.player.velocity.x = -5;
                break;
            case "s":
                IcecreamShop.player.velocity.y = 5;
                break;
            case "d":
                IcecreamShop.player.velocity.x = 5;
                break;
        }
        console.log(IcecreamShop.player.velocity);
    }
    function handleKeyUp(event) {
        switch (event.key) {
            case "w":
            case "s":
                IcecreamShop.player.velocity.y = 0;
                break;
            case "a":
            case "d":
                IcecreamShop.player.velocity.x = 0;
                break;
        }
        console.log(IcecreamShop.player.velocity);
    }
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=iceCreamShop.js.map