var IcecreamShop;
(function (IcecreamShop_1) {
    window.addEventListener("load", handleload);
    console.log("handleLoad working");
    IcecreamShop_1.canvas = document.querySelector("#shop");
    IcecreamShop_1.crc2 = IcecreamShop_1.canvas.getContext("2d");
    let newC = new IcecreamShop_1.customer();
    let newOffer = new IcecreamShop_1.offer();
    function handleload() {
        drawBackground();
        IcecreamShop_1.player = new IcecreamShop_1.Serveri();
        IcecreamShop_1.player.drawServeri();
        newC.drawCustomer();
        // newOffer.drawOffer();
        // newOffer.flavorchange();
        newOffer.addEventListeners();
        // Add event listeners for keydown and keyup events
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
    }
    IcecreamShop_1.handleload = handleload;
    function drawBackground() {
        drawOutside();
        drawRestaurant();
        drawTable();
    }
    IcecreamShop_1.drawBackground = drawBackground;
    function drawOutside() {
        IcecreamShop_1.crc2.fillStyle = "#145c2c";
        IcecreamShop_1.crc2.fillRect(0, 0, IcecreamShop_1.canvas.width, IcecreamShop_1.canvas.height);
        IcecreamShop_1.crc2.fillStyle = "#cfcfcf";
        IcecreamShop_1.crc2.fillRect(110, 110, 180, 130);
        IcecreamShop_1.crc2.fillRect(110, 110, 640, 70);
        IcecreamShop_1.crc2.fillRect(660, 0, 90, 120);
    }
    IcecreamShop_1.drawOutside = drawOutside;
    function drawRestaurant() {
        IcecreamShop_1.crc2.fillStyle = "#878787";
        IcecreamShop_1.crc2.fillRect(0, 250, 900, 550);
        IcecreamShop_1.crc2.fillRect(850, 0, 700, 800);
        IcecreamShop_1.crc2.fillStyle = "#404040";
        IcecreamShop_1.crc2.fillRect(100, 250, 200, 10);
        IcecreamShop_1.crc2.fillRect(1390, 320, 10, 200);
        IcecreamShop_1.crc2.fillStyle = "black";
        IcecreamShop_1.crc2.arc(80, 230, 7, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.arc(320, 230, 7, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.fillRect(77, 90, 6, 140);
        IcecreamShop_1.crc2.fillRect(77, 87, 400, 6);
        IcecreamShop_1.crc2.fill();
        IcecreamShop_1.crc2.beginPath();
        IcecreamShop_1.crc2.arc(80, 90, 7, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.arc(480, 90, 7, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.fill();
        IcecreamShop_1.crc2.beginPath();
        IcecreamShop_1.crc2.arc(320, 200, 7, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.arc(480, 200, 7, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.fillRect(317, 200, 6, 30);
        IcecreamShop_1.crc2.fillRect(317, 197, 160, 6);
        IcecreamShop_1.crc2.fill();
    }
    IcecreamShop_1.drawRestaurant = drawRestaurant;
    function drawTable() {
        IcecreamShop_1.crc2.fillStyle = "#4696c2";
        IcecreamShop_1.crc2.fillRect(10, 580, 500, 80);
        IcecreamShop_1.crc2.beginPath(); //Table top right
        IcecreamShop_1.crc2.arc(1120, 80, 50, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.arc(1010, 80, 32, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.arc(1230, 80, 32, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.fill();
        IcecreamShop_1.crc2.closePath();
        IcecreamShop_1.crc2.beginPath();
        IcecreamShop_1.crc2.arc(1120, 180, 32, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.fill();
        IcecreamShop_1.crc2.beginPath(); //Table bottom right
        IcecreamShop_1.crc2.arc(1170, 600, 50, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.arc(1060, 600, 32, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.arc(1280, 600, 32, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.fill();
        IcecreamShop_1.crc2.closePath();
        IcecreamShop_1.crc2.beginPath();
        IcecreamShop_1.crc2.arc(1170, 700, 32, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.fill();
        IcecreamShop_1.crc2.beginPath(); //Table bottom left
        IcecreamShop_1.crc2.arc(770, 600, 50, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.arc(880, 600, 32, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.fill();
        IcecreamShop_1.crc2.closePath();
        IcecreamShop_1.crc2.beginPath();
        IcecreamShop_1.crc2.arc(770, 700, 32, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.fill();
        IcecreamShop_1.crc2.beginPath(); //Table top left
        IcecreamShop_1.crc2.arc(670, 320, 50, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.arc(770, 320, 32, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.arc(570, 320, 32, 0, 2 * Math.PI);
        IcecreamShop_1.crc2.fill();
        IcecreamShop_1.crc2.closePath();
        //Icecream flavors
        IcecreamShop_1.crc2.fillStyle = "#4180a3";
        IcecreamShop_1.crc2.fillRect(80, 590, 275, 60);
        IcecreamShop_1.crc2.fillStyle = "#d16d93";
        IcecreamShop_1.crc2.fillRect(90, 595, 60, 50);
        IcecreamShop_1.crc2.fillStyle = "#c4bbbe";
        IcecreamShop_1.crc2.fillRect(155, 595, 60, 50);
        IcecreamShop_1.crc2.fillStyle = "#963e4f";
        IcecreamShop_1.crc2.fillRect(220, 595, 60, 50);
        IcecreamShop_1.crc2.fillStyle = "#331707";
        IcecreamShop_1.crc2.fillRect(285, 595, 60, 50);
        IcecreamShop_1.crc2.closePath();
        //Welcome mat
        IcecreamShop_1.crc2.fillStyle = "#4696c2";
        IcecreamShop_1.crc2.beginPath();
        IcecreamShop_1.crc2.fillRect(140, 270, 120, 50);
        IcecreamShop_1.crc2.fillStyle = "#377699";
        IcecreamShop_1.crc2.rect(140, 270, 120, 50);
        IcecreamShop_1.crc2.fillStyle = "#1b394a";
        IcecreamShop_1.crc2.font = "bold 15px arial";
        IcecreamShop_1.crc2.fillText("WELCOME", 160, 300);
        IcecreamShop_1.crc2.stroke();
        IcecreamShop_1.crc2.closePath();
    }
    IcecreamShop_1.drawTable = drawTable;
    let IcecreamShop;
    (function (IcecreamShop) {
        class Seat {
            x;
            y;
            radius;
            occupied;
            customer;
            constructor(x, y, radius) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.occupied = false;
                this.customer = null;
            }
            drawSeat() {
                IcecreamShop_1.crc2.beginPath();
                IcecreamShop_1.crc2.fillStyle = this.occupied ? "#ff0000" : "#4696c2";
                IcecreamShop_1.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                IcecreamShop_1.crc2.fill();
                IcecreamShop_1.crc2.closePath();
            }
            isOccupied() {
                return this.occupied;
            }
            assignCustomer(customer) {
                this.customer = customer;
                this.occupied = true;
            }
            removeCustomer() {
                this.customer = null;
                this.occupied = false;
            }
            getX() {
                return this.x;
            }
            getY() {
                return this.y;
            }
        }
        IcecreamShop.Seat = Seat;
    })(IcecreamShop || (IcecreamShop = {}));
    function handleKeyDown(event) {
        switch (event.key) {
            case "w":
                IcecreamShop_1.player.velocity.y = -5;
                break;
            case "a":
                IcecreamShop_1.player.velocity.x = -5;
                break;
            case "s":
                IcecreamShop_1.player.velocity.y = 5;
                break;
            case "d":
                IcecreamShop_1.player.velocity.x = 5;
                break;
        }
        console.log(IcecreamShop_1.player.velocity);
    }
    function handleKeyUp(event) {
        switch (event.key) {
            case "w":
            case "s":
                IcecreamShop_1.player.velocity.y = 0;
                break;
            case "a":
            case "d":
                IcecreamShop_1.player.velocity.x = 0;
                break;
        }
        console.log(IcecreamShop_1.player.velocity);
    }
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=iceCreamShop.js.map