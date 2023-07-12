var IcecreamShop;
(function (IcecreamShop) {
    window.addEventListener("load", handleload);
    console.log("handleLoad working");
    IcecreamShop.canvas = document.querySelector("#shop");
    IcecreamShop.crc2 = IcecreamShop.canvas.getContext("2d");
    let newS = new IcecreamShop.Serveri("anna");
    let newC = new IcecreamShop.customer;
    function handleload(_event) {
        drawBackground();
        // drawOffer();
        newS.drawServeri();
        newC.unhappy();
    }
    ;
    function drawBackground() {
        drawOutside();
        drawRestaurant();
        drawTable();
    }
    ;
    function drawOutside() {
        IcecreamShop.crc2.fillStyle = "#145c2c";
        IcecreamShop.crc2.fillRect(0, 0, IcecreamShop.canvas.width, IcecreamShop.canvas.height);
        IcecreamShop.crc2.fillStyle = "#cfcfcf";
        IcecreamShop.crc2.fillRect(110, 110, 180, 130);
        IcecreamShop.crc2.fillRect(110, 110, 640, 70);
        IcecreamShop.crc2.fillRect(660, 0, 90, 120);
    }
    ;
    function drawRestaurant() {
        IcecreamShop.crc2.fillStyle = "#878787";
        IcecreamShop.crc2.fillRect(0, 250, 900, 550);
        IcecreamShop.crc2.fillRect(850, 0, 700, 800);
        IcecreamShop.crc2.fillStyle = "#404040";
        IcecreamShop.crc2.fillRect(100, 250, 200, 10);
        IcecreamShop.crc2.fillRect(1390, 320, 10, 200);
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
    function drawTable() {
        IcecreamShop.crc2.fillStyle = "#4696c2";
        IcecreamShop.crc2.fillRect(10, 580, 500, 80);
        IcecreamShop.crc2.beginPath(); //Table top right
        IcecreamShop.crc2.arc(1120, 80, 50, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(1010, 80, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(1230, 80, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.closePath();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.arc(1120, 180, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.beginPath(); //Table bottom right
        IcecreamShop.crc2.arc(1170, 600, 50, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(1060, 600, 32, 0, 2 * Math.PI);
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
        IcecreamShop.crc2.arc(770, 700, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.beginPath(); //Table top left
        IcecreamShop.crc2.arc(670, 320, 50, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(770, 320, 32, 0, 2 * Math.PI);
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
    function drawOffer() {
        IcecreamShop.crc2.fillStyle = "rgba(210, 210, 210, 0.5)";
        IcecreamShop.crc2.fillRect(0, 0, IcecreamShop.canvas.width, IcecreamShop.canvas.height);
        IcecreamShop.crc2.fillStyle = "#4696c2";
        IcecreamShop.crc2.fillRect(390, 20, 550, 700);
        let wrapper = document.querySelector("#wrapper");
        wrapper.classList.remove("hidden");
        console.log("draw offer");
    }
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=iceCreamShop.js.map