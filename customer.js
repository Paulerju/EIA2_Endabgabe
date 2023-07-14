var IcecreamShop;
(function (IcecreamShop) {
    class customer {
        x;
        y;
        color;
        position;
        targetSeat;
        speed;
        constructor(x, y, color, speed) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.position = new IcecreamShop.Vector(x, y);
            this.targetSeat = null;
            this.speed = speed;
        }
        drawCustomer() {
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = this.color;
            IcecreamShop.crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.arc(this.x, this.y + 5, 40 - 15, 0, 1 * Math.PI);
            IcecreamShop.crc2.stroke();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "black";
            IcecreamShop.crc2.arc(this.x - 10, this.y - 5, 7, 0, 2 * Math.PI);
            IcecreamShop.crc2.arc(this.x + 10, this.y - 5, 7, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
        }
        move() {
            if (this.targetSeat) {
                const targetPosition = new IcecreamShop.Vector(this.targetSeat.getX(), this.targetSeat.getY());
                const distance = new IcecreamShop.Vector(targetPosition.x - this.position.x, targetPosition.y - this.position.y);
                if (distance.magnitude() > this.speed) {
                    const direction = distance.normalize();
                    const velocity = new IcecreamShop.Vector(direction.x * this.speed, direction.y * this.speed);
                    this.position.x += velocity.x;
                    this.position.y += velocity.y;
                }
                else {
                    // Customer has reached the target seat
                    this.targetSeat.assignCustomer(this);
                    this.targetSeat = null;
                }
            }
        }
        setDestination(seat) {
            this.targetSeat = seat;
            const path = this.calculatePath(this.x, this.y, seat.getX(), seat.getY());
            // Call a function to animate the customer along the path
            this.followPath(path);
        }
        calculatePath(x1, y1, x2, y2) {
            // Use any pathfinding algorithm to calculate the path from (x1, y1) to (x2, y2)
            // For simplicity, let's assume a straight line path
            const path = new Path2D();
            path.moveTo(x1, y1);
            path.lineTo(x2, y2);
            return path;
        }
        followPath(path) {
            const pathLength = this.getPathLength(path);
            const stepSize = this.speed;
            let currentDistance = 0;
            const animateStep = () => {
                if (currentDistance >= pathLength) {
                    // Customer has reached the destination
                    this.targetSeat?.assignCustomer(this);
                    this.targetSeat = null;
                    return;
                }
                currentDistance += stepSize;
                const point = this.getPointOnPath(path, currentDistance);
                this.position.x = point.x;
                this.position.y = point.y;
                // Redraw the customer at the new position
                this.drawCustomer();
                // Request the next frame of animation
                requestAnimationFrame(animateStep);
            };
            // Start the animation
            requestAnimationFrame(animateStep);
        }
        getPathLength(path) {
            const tempCanvas = document.createElement("canvas");
            const tempContext = tempCanvas.getContext("2d");
            if (tempContext) {
                tempContext.lineWidth = 1;
                tempContext.stroke(path);
                return tempContext.measure().width;
            }
            return 0;
        }
        getPointOnPath(path, distance) {
            const tempCanvas = document.createElement("canvas");
            const tempContext = tempCanvas.getContext("2d");
            if (tempContext) {
                const stepSize = 1;
                const pathLength = this.getPathLength(path);
                const steps = Math.floor(distance / stepSize);
                const progress = steps * stepSize / pathLength;
                let point = null;
                tempContext.beginPath();
                tempContext.lineWidth = 1;
                tempContext.strokeStyle = "#000000";
                tempContext.stroke(path);
                for (let i = 0; i <= steps; i++) {
                    point = tempContext.currentPath?.getCurrentPoint();
                    tempContext.lineTo(point.x, point.y);
                    tempContext.stroke();
                }
                return new IcecreamShop.Vector(point?.x ?? 0, point?.y ?? 0);
            }
            return new IcecreamShop.Vector(0, 0);
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