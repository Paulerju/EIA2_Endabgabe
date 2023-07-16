namespace IcecreamShop {

  enum CustomerState {
    Walking,
    Ordering,
    Eating,
    FinishedEating,
  }

  export class customer {

           x: number;
           y: number; 
           color: string;
           radius: number; 
           position: Vector;
           private speed: number;
           total: number = 0; 
      
          constructor(x: number, y: number, color: string, speed: number, radius: number) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.position = new Vector(x, y);
            this.speed = speed;
            this.radius = radius; 
           
          } 

          currentState: CustomerState = CustomerState.Walking;
      
          drawCustomer(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x, this.y + 5, this.radius - 15, 0, 1 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x - 10, this.y - 5, 7, 0, 2 * Math.PI);
            crc2.arc(this.x + 10, this.y - 5, 7, 0, 2 * Math.PI);
            crc2.fill();
          }

          followPath(): void {
            let path: Vector[] = [
              new Vector(this.x, this.y),
              new Vector(1230, 80)
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
              } else {
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
          
          followPath2(): void {
            let path: Vector[] = [
              new Vector(this.x, this.y),
              new Vector(1500, 500)
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
              } else {
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
          
          
      
       
    nutral(){

        crc2.beginPath();
        crc2.fillStyle = "#9854ba"; 
        crc2.arc(200, 300, 35, 0, 2 * Math.PI);       
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(188,313,25,5)    
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "black"; 
        crc2.arc(190, 295, 7, 0, 2 * Math.PI);    
        crc2.arc(210, 295, 7, 0, 2 * Math.PI);      
        crc2.fill();

    }

    unhappy(){

        crc2.beginPath();
        crc2.fillStyle = "#9854ba"; 
        crc2.arc(200, 300, 35, 0, 2 * Math.PI);       
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(200, 320, 15, 1* Math.PI, 2 * Math.PI);      
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "black"; 
        crc2.arc(190, 295, 7, 0, 2 * Math.PI);    
        crc2.arc(210, 295, 7, 0, 2 * Math.PI);      
        crc2.fill();

    }
    
    updateTotalPrice(): void{
      this.total = newOffer.total; 
    }

    drawBubble(){
      crc2.beginPath();
      crc2.fillStyle = "#f5f5f5"; 
      crc2.arc(this.position.x + 70, this.position.y - 40, 30, 0, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();

      crc2.beginPath();
      crc2.fillStyle = "#80112a";
      crc2.arc(this.position.x + 70, this.position.y - 56, 8, 0, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();
      crc2.beginPath();
      crc2.fillStyle = "#991433";
      crc2.arc(this.position.x + 63, this.position.y -48, 8, 0, 2 * Math.PI);
      crc2.arc(this.position.x +77, this.position.y -48, 8, 0, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();

      crc2.beginPath();
      crc2.fillStyle = "#b0edff";
      crc2.arc(this.position.x + 70, this.position.y -19, 6, 1 * Math.PI, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();
      crc2.beginPath();
      crc2.arc(this.position.x + 70, this.position.y - 45, 15, 0, 1 * Math.PI);
      crc2.fill();
      crc2.closePath();
      crc2.beginPath();
      crc2.arc(this.position.x + 70, this.position.y -28, 4, 0, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();

    }

    finished: boolean = false; 

    eat(){
      crc2.beginPath();
      crc2.fillStyle= "#9146a3";
      crc2.arc(this.x, this.y + 5, this.radius - 16, 0, 1 * Math.PI);
      crc2.fill();
      crc2.closePath();

      setTimeout(() => {
        this.finished = true; 

      }, 5000); 
    }

    receipt(){

      crc2.beginPath();
      crc2.fillStyle = "#f5f5f5"; 
      crc2.arc(this.position.x + 70, this.position.y - 40, 30, 0, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();

      crc2.beginPath();
      crc2.fillStyle = "black"; 
      crc2.rect(this.position.x + 58, this.position.y - 56,25,35);
      crc2.fillRect(this.position.x + 60, this.position.y - 54,20,1);
      crc2.fillRect(this.position.x + 60, this.position.y - 52,20,1);
      crc2.fillRect(this.position.x + 60, this.position.y - 50,20,1);
      crc2.fillRect(this.position.x + 60, this.position.y - 48,20,1);
      crc2.fillRect(this.position.x + 60, this.position.y - 46,20,1);
      crc2.stroke();
      crc2.closePath();
      crc2.beginPath();
      crc2.fillStyle = "#dbb04b"; 
      crc2.arc(this.position.x + 76, this.position.y - 25,6,0, 2*Math.PI);
      crc2.arc(this.position.x + 83, this.position.y - 27,6,0, 2*Math.PI);
      crc2.fill();
      crc2.closePath();

    }

}
}