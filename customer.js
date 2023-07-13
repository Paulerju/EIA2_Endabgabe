var IcecreamShop;
(function (IcecreamShop) {
    class customer {
        x;
        y;
        radius;
        color;
        destination;
        path;
        constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.destination = null;
            this.path = null;
        }
        drawCustomer() {
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = this.color;
            IcecreamShop.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.arc(this.x, this.y + 5, this.radius - 15, 0, 1 * Math.PI);
            IcecreamShop.crc2.stroke();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "black";
            IcecreamShop.crc2.arc(this.x - 10, this.y - 5, 7, 0, 2 * Math.PI);
            IcecreamShop.crc2.arc(this.x + 10, this.y - 5, 7, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
        }
        move() {
            if (this.destination) {
                if (!this.path) {
                    // Calculate path from current position to destination
                    this.path = this.calculatePath(this.x, this.y, this.destination.x, this.destination.y);
                }
                // Follow the path by moving to the next point
                const nextPoint = this.path.getCurrentPoint();
                if (nextPoint) {
                    this.x = nextPoint.x;
                    this.y = nextPoint.y;
                }
                // Check if the destination has been reached
                if (this.x === this.destination.x && this.y === this.destination.y) {
                    this.destination = null;
                    this.path = null;
                }
            }
        }
        setDestination(destination) {
            this.destination = destination;
        }
        calculatePath(x1, y1, x2, y2) {
            // Use any pathfinding algorithm to calculate the path from (x1, y1) to (x2, y2)
            // For simplicity, let's assume a straight line path
            const path = new Path2D();
            path.moveTo(x1, y1);
            path.lineTo(x2, y2);
            return path;
        }
        nutral() {
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#9854ba";
            IcecreamShop.crc2.arc(200, 300, 35, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "black";
            IcecreamShop.crc2.fillRect(188, 313, 25, 5);
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "black";
            IcecreamShop.crc2.arc(190, 295, 7, 0, 2 * Math.PI);
            IcecreamShop.crc2.arc(210, 295, 7, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
        }
        unhappy() {
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#9854ba";
            IcecreamShop.crc2.arc(200, 300, 35, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "black";
            IcecreamShop.crc2.arc(200, 320, 15, 1 * Math.PI, 2 * Math.PI);
            IcecreamShop.crc2.stroke();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "black";
            IcecreamShop.crc2.arc(190, 295, 7, 0, 2 * Math.PI);
            IcecreamShop.crc2.arc(210, 295, 7, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
        }
    }
    IcecreamShop.customer = customer;
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=customer.js.map