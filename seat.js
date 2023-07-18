var IcecreamShop;
(function (IcecreamShop) {
    class Seat {
        x;
        y;
        radius;
        occupied;
        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.occupied = false;
        }
        drawSeats() {
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#4696c2";
            IcecreamShop.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
        }
        isOccupied() {
            return this.occupied;
        }
    }
    IcecreamShop.Seat = Seat;
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=seat.js.map