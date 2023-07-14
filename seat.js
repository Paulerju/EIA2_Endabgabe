var IcecreamShop;
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
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = this.occupied ? "#ff0000" : "#4696c2";
            IcecreamShop.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
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
//# sourceMappingURL=seat.js.map