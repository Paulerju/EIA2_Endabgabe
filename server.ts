namespace IcecreamShop {

    export class Serveri{

        position: Vector;
        velocity: Vector; 

        constructor() {
            // Set initial position and velocity
            this.position = new Vector(430, 710);
            this.velocity = new Vector(0, 0);

            // Add event listeners for key presses
            document.addEventListener("keydown", this.handleKeyDown.bind(this));
            document.addEventListener("keyup", this.handleKeyUp.bind(this));
        }


    drawServeri():void{

        console.log("Workinggg Server");
            crc2.beginPath();
            crc2.fillStyle = "#f6b6f4";
            crc2.arc(this.position.x, this.position.y, 45, 0, 2 * Math.PI);       //head pink  
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.fillRect(this.position.x - 48, this.position.y - 40, 95, 20); //head black1
            crc2.fillRect(this.position.x - 30, this.position.y - 80, 60, 50); //head black2
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.fillRect(this.position.x - 15, this.position.y + 20, 30, 5); //mouth
            crc2.fillRect(this.position.x - 20, this.position.y + 15, 5, 5); //mouth
            crc2.fillRect(this.position.x + 15, this.position.y + 15, 5, 5); //mouth
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.position.x - 17, this.position.y - 8, 10, 0, 1 * Math.PI);    //eye left 
            crc2.arc(this.position.x + 15, this.position.y - 8, 10, 0, 1 * Math.PI);    //eye right
            crc2.fill();

        this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
    }

    update(): void {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.drawServeri();
    }

    handleKeyDown(event: KeyboardEvent): void {
        // Update the velocity based on the key pressed
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

    handleKeyUp(event: KeyboardEvent): void {
        // Reset the velocity when the key is released
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
    
 }



}