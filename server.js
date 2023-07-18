var IcecreamShop;
(function (IcecreamShop) {
    class Serveri {
        position;
        velocity;
        carrying = false;
        constructor() {
            this.position = new IcecreamShop.Vector(430, 710);
            this.velocity = new IcecreamShop.Vector(0, 0);
            document.addEventListener("keydown", this.handleKeyDown.bind(this));
            document.addEventListener("keyup", this.handleKeyUp.bind(this));
        }
        drawServeri() {
            console.log("Workinggg Server");
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#f6b6f4";
            IcecreamShop.crc2.arc(this.position.x, this.position.y, 45, 0, 2 * Math.PI); //head pink  
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#000000";
            IcecreamShop.crc2.fillRect(this.position.x - 48, this.position.y - 40, 95, 20); //head black1
            IcecreamShop.crc2.fillRect(this.position.x - 30, this.position.y - 80, 60, 50); //head black2
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#000000";
            IcecreamShop.crc2.fillRect(this.position.x - 15, this.position.y + 20, 30, 5); //mouth
            IcecreamShop.crc2.fillRect(this.position.x - 20, this.position.y + 15, 5, 5); //mouth
            IcecreamShop.crc2.fillRect(this.position.x + 15, this.position.y + 15, 5, 5); //mouth
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "black";
            IcecreamShop.crc2.arc(this.position.x - 17, this.position.y - 8, 10, 0, 1 * Math.PI); //eye left 
            IcecreamShop.crc2.arc(this.position.x + 15, this.position.y - 8, 10, 0, 1 * Math.PI); //eye right
            IcecreamShop.crc2.fill();
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        }
        update() {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.drawServeri();
        }
        handleKeyDown(event) {
            switch (event.key) {
                case "w":
                    this.velocity.y = -5; // Move up
                    break;
                case "a":
                    this.velocity.x = -5; // Move left
                    break;
                case "s":
                    this.velocity.y = 5; // Move down
                    break;
                case "d":
                    this.velocity.x = 5; // Move right
                    break;
            }
            console.log(this.velocity);
        }
        handleKeyUp(event) {
            switch (event.key) {
                case "w":
                case "s":
                    this.velocity.y = 0; // Stop vertical movement
                    break;
                case "a":
                case "d":
                    this.velocity.x = 0; // Stop horizontal movement
                    break;
            }
            console.log(this.velocity);
        }
        drawIce() {
            IcecreamShop.crc2.fillStyle = "#d4d4d4";
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.arc(this.position.x + 85, this.position.y - 3 + 5, 35, Math.PI, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
            IcecreamShop.crc2.beginPath();
            IcecreamShop.crc2.fillStyle = "#c2c1c0";
            IcecreamShop.crc2.arc(this.position.x + 85, this.position.y - 40 + 5, 5, 0, 2 * Math.PI);
            IcecreamShop.crc2.fill();
            IcecreamShop.crc2.closePath();
        }
    }
    IcecreamShop.Serveri = Serveri;
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=server.js.map