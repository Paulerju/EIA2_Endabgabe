var IcecreamShop;
(function (IcecreamShop) {
    class Serveri {
        name;
        constructor(_name) {
            this.name = _name;
        }
        drawServeri() {
            console.log("Workinggg Server");
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#f6b6f4";
            IcecreamShop.crc2.arc(430, 720, 45, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#000000";
            IcecreamShop.crc2.fillRect(382, 680, 95, 20);
            IcecreamShop.crc2.fillRect(400, 640, 60, 50);
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#000000";
            IcecreamShop.crc2.fillRect(415, 740, 30, 5);
            IcecreamShop.crc2.fillRect(410, 735, 5, 5);
            IcecreamShop.crc2.fillRect(445, 735, 5, 5);
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "black";
            IcecreamShop.crc2.arc(413, 712, 10, 0, 1 * Math.PI);
            IcecreamShop.crc2.arc(445, 712, 10, 0, 1 * Math.PI);
            IcecreamShop.crc2.fill();
        }
    }
    IcecreamShop.Serveri = Serveri;
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=server.js.map