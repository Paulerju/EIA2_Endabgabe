var IcecreamShop;
(function (IcecreamShop) {
    class customer {
        x;
        y;
        color;
        radius;
        position;
        targetSeat;
        speed;
        constructor(x, y, color, speed, radius) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.position = new IcecreamShop.Vector(x, y);
            this.targetSeat = null;
            this.speed = speed;
            this.radius = radius;
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
            //Eventlistener for customer
            const circleRadius = this.radius;
            const circleCenterX = this.x;
            const circleCenterY = this.y;
            IcecreamShop.crc2.canvas.addEventListener("click", (event) => {
                const canvasRect = IcecreamShop.crc2.canvas.getBoundingClientRect();
                const clickX = event.clientX - canvasRect.left;
                const clickY = event.clientY - canvasRect.top;
                const distanceToCenter = Math.sqrt((clickX - circleCenterX) ** 2 + (clickY - circleCenterY) ** 2);
                if (distanceToCenter <= circleRadius) {
                    IcecreamShop.newOffer.drawOffer();
                }
            });
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
        followPath() {
            const path = [
                new IcecreamShop.Vector(this.x, this.y),
                new IcecreamShop.Vector(1230, 80),
                new IcecreamShop.Vector(800, 100)
            ];
            let currentPathIndex = 0;
            const animateStep = () => {
                if (currentPathIndex >= path.length) {
                    console.log("Destination reached");
                    return;
                }
                const targetPosition = path[currentPathIndex];
                const distanceX = targetPosition.x - this.position.x;
                const distanceY = targetPosition.y - this.position.y;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                if (distance > this.speed) {
                    const directionX = distanceX / distance;
                    const directionY = distanceY / distance;
                    const velocityX = directionX * this.speed;
                    const velocityY = directionY * this.speed;
                    this.position.x += velocityX;
                    this.position.y += velocityY;
                }
                else {
                    // Move to the next point in the path
                    currentPathIndex++;
                }
                // Update the customer's position
                this.x = this.position.x;
                this.y = this.position.y;
                // Redraw the customer at the new position
                this.drawCustomer();
                // Request the next frame of animation
                requestAnimationFrame(animateStep);
            };
            // Start the animation
            requestAnimationFrame(animateStep);
        }
        followPath2() {
            const path = [
                new IcecreamShop.Vector(this.x, this.y),
                new IcecreamShop.Vector(100, 100),
            ];
            let currentPathIndex = 0;
            const animateStep = () => {
                if (currentPathIndex >= path.length - 1) {
                    // Customer has reached the final destination
                    return;
                }
                const currentPosition = path[currentPathIndex];
                const nextPosition = path[currentPathIndex + 1];
                const distance = nextPosition.subtract(currentPosition);
                if (distance.magnitude() > this.speed) {
                    const direction = distance.normalize();
                    const velocity = direction.scale(this.speed);
                    this.position = currentPosition.add(velocity);
                }
                else {
                    // Move to the next point in the path
                    currentPathIndex++;
                }
                // Update the customer's position
                this.x = this.position.x;
                this.y = this.position.y;
                // Redraw the background
                IcecreamShop.drawBackground();
                // Redraw the customer at the new position
                this.drawCustomer();
                // Request the next frame of animation
                requestAnimationFrame(animateStep);
            };
            // Start the animation
            requestAnimationFrame(animateStep);
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