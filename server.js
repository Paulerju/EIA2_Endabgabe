var IcecreamShop;
(function (IcecreamShop) {
    class Serveri {
        position;
        velocity;
        drawServeri(_position, _velocity) {
            console.log("Workinggg Server");
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#f6b6f4";
            IcecreamShop.crc2.arc(_position.x, _position.y, 45, 0, 2 * Math.PI); //head pink  
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#000000";
            IcecreamShop.crc2.fillRect(_position.x - 48, _position.y - 40, 95, 20); //head black1
            IcecreamShop.crc2.fillRect(_position.x - 30, _position.y - 80, 60, 50); //head black2
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#000000";
            IcecreamShop.crc2.fillRect(_position.x - 15, _position.y + 20, 30, 5); //mouth
            IcecreamShop.crc2.fillRect(_position.x - 20, _position.y + 15, 5, 5); //mouth
            IcecreamShop.crc2.fillRect(_position.x + 15, _position.y + 15, 5, 5); //mouth
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "black";
            IcecreamShop.crc2.arc(_position.x - 17, _position.y - 8, 10, 0, 1 * Math.PI); //eye left 
            IcecreamShop.crc2.arc(_position.x + 15, _position.y - 8, 10, 0, 1 * Math.PI); //eye right
            IcecreamShop.crc2.fill();
        }
        update() {
            this.drawServeri({
                x: 10, y: 10,
                set: function (_x, _y) {
                    throw new Error("Function not implemented.");
                }
            }, {
                x: 10, y: 10,
                set: function (_x, _y) {
                    throw new Error("Function not implemented.");
                }
            });
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        }
    }
    IcecreamShop.Serveri = Serveri;
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=server.js.map