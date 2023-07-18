var IcecreamShop;
(function (IcecreamShop) {
    let CustomerState;
    (function (CustomerState) {
        CustomerState[CustomerState["Walking"] = 0] = "Walking";
        CustomerState[CustomerState["Ordering"] = 1] = "Ordering";
        CustomerState[CustomerState["Eating"] = 2] = "Eating";
        CustomerState[CustomerState["FinishedEating"] = 3] = "FinishedEating";
    })(CustomerState || (CustomerState = {}));
    class customer {
        static currentId = 1;
        customerId;
        x;
        y;
        color;
        radius;
        position;
        speed;
        total = 0;
        clicked = false;
        clickedCust = false;
        foodhold = false;
        giveFood = false;
        finished = false;
        constructor(x, y, color, speed, radius) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.position = new IcecreamShop.Vector(x, y);
            this.speed = speed;
            this.radius = radius;
            this.customerId = customer.currentId;
            customer.currentId++;
        }
        currentState = CustomerState.Walking;
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
        addNewCustomer() {
            let newCustomer = new customer(200, 300, "#b56cd4", 5, 40);
            IcecreamShop.customers.push(newCustomer);
            newCustomer.drawCustomer();
        }
        followPath() {
            let path = [
                new IcecreamShop.Vector(this.x, this.y),
                new IcecreamShop.Vector(1230, 80)
            ];
            let currentPathIndex = 0;
            let animateStep = () => {
                if (currentPathIndex >= path.length) {
                    this.drawBubble();
                }
                let targetPosition = path[currentPathIndex];
                let distanceX = targetPosition.x - this.position.x;
                let distanceY = targetPosition.y - this.position.y;
                let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                if (distance > this.speed) {
                    let directionX = distanceX / distance;
                    let directionY = distanceY / distance;
                    let velocityX = directionX * this.speed;
                    let velocityY = directionY * this.speed;
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
            let path = [
                new IcecreamShop.Vector(this.x, this.y),
                new IcecreamShop.Vector(1500, 500)
            ];
            let currentPathIndex = 0;
            let animateStep = () => {
                let targetPosition = path[currentPathIndex];
                let distanceX = targetPosition.x - this.position.x;
                let distanceY = targetPosition.y - this.position.y;
                let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                if (distance > this.speed) {
                    let directionX = distanceX / distance;
                    let directionY = distanceY / distance;
                    let velocityX = directionX * this.speed;
                    let velocityY = directionY * this.speed;
                    this.position.x += velocityX;
                    this.position.y += velocityY;
                }
                else {
                    currentPathIndex++;
                }
                // Update the customer's position
                this.x = this.position.x;
                this.y = this.position.y;
                this.drawCustomer();
                requestAnimationFrame(animateStep);
            };
            requestAnimationFrame(animateStep);
        }
        followPathSeat(_x, _y) {
            let path = [
                new IcecreamShop.Vector(this.x, this.y),
                new IcecreamShop.Vector(_x, _y)
            ];
            let currentPathIndex = 0;
            let animateStep = () => {
                if (this.x > 1400) {
                    let index = IcecreamShop.customers.indexOf(this);
                    if (index !== -1) {
                        IcecreamShop.customers.splice(index, 1); // throw customer out of Array
                    }
                }
                let targetPosition = path[currentPathIndex];
                let distanceX = targetPosition.x - this.position.x;
                let distanceY = targetPosition.y - this.position.y;
                let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                if (distance > this.speed) {
                    let directionX = distanceX / distance;
                    let directionY = distanceY / distance;
                    let velocityX = directionX * this.speed;
                    let velocityY = directionY * this.speed;
                    this.position.x += velocityX;
                    this.position.y += velocityY;
                }
                // Update the customer's position
                this.x = this.position.x;
                this.y = this.position.y;
                this.drawCustomer();
                requestAnimationFrame(animateStep);
            };
            requestAnimationFrame(animateStep);
        }
        // moveToSeat(): void {
        //     if (Seat1.isOccupied()) {
        //       this.followPathSeat(Seat1.x, Seat1.y); 
        //       Seat1.occupied = true; 
        //       this.drawBubble(); 
        //       return; 
        //     }
        //     if (Seat2.isOccupied()) {
        //       this.followPathSeat(Seat2.x, Seat2.y); 
        //       Seat2.occupied = true; 
        //       this.drawBubble(); 
        //       return; 
        //     }
        //     if (Seat3.isOccupied()) {
        //       this.followPathSeat(Seat3.x, Seat3.y); 
        //       Seat3.occupied = true; 
        //       this.drawBubble(); 
        //       return; 
        //     }
        //     if (Seat4.isOccupied()) {
        //       this.followPathSeat(Seat4.x, Seat4.y); 
        //       Seat4.occupied = true; 
        //       this.drawBubble(); 
        //       return; 
        //     }
        //   // If all seats are occupied, return without taking a seat
        //   return;
        // }
        nutral() {
            IcecreamShop.crc2.beginPath();
            this.updateTotalPrice;
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
        updateTotalPrice() {
            this.total = IcecreamShop.newOffer.total;
        }
        drawBubble() {
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#f5f5f5";
            IcecreamShop.crc2.arc(this.position.x + 70, this.position.y - 40, 30, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#80112a";
            IcecreamShop.crc2.arc(this.position.x + 70, this.position.y - 56, 8, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#991433";
            IcecreamShop.crc2.arc(this.position.x + 63, this.position.y - 48, 8, 0, 2 * Math.PI);
            IcecreamShop.crc2.arc(this.position.x + 77, this.position.y - 48, 8, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#b0edff";
            IcecreamShop.crc2.arc(this.position.x + 70, this.position.y - 19, 6, 1 * Math.PI, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.arc(this.position.x + 70, this.position.y - 45, 15, 0, 1 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.arc(this.position.x + 70, this.position.y - 28, 4, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
        }
        eat() {
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#9146a3";
            IcecreamShop.crc2.arc(this.x, this.y + 5, this.radius - 16, 0, 1 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            setTimeout(() => {
                this.finished = true;
            }, 5000);
        }
        receipt() {
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#f5f5f5";
            IcecreamShop.crc2.arc(this.position.x + 70, this.position.y - 40, 30, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "black";
            IcecreamShop.crc2.rect(this.position.x + 58, this.position.y - 56, 25, 35);
            IcecreamShop.crc2.fillRect(this.position.x + 60, this.position.y - 54, 20, 1);
            IcecreamShop.crc2.fillRect(this.position.x + 60, this.position.y - 52, 20, 1);
            IcecreamShop.crc2.fillRect(this.position.x + 60, this.position.y - 50, 20, 1);
            IcecreamShop.crc2.fillRect(this.position.x + 60, this.position.y - 48, 20, 1);
            IcecreamShop.crc2.fillRect(this.position.x + 60, this.position.y - 46, 20, 1);
            IcecreamShop.crc2.stroke();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#dbb04b";
            IcecreamShop.crc2.arc(this.position.x + 76, this.position.y - 25, 6, 0, 2 * Math.PI);
            IcecreamShop.crc2.arc(this.position.x + 83, this.position.y - 27, 6, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
        }
    }
    IcecreamShop.customer = customer;
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=customer.js.map