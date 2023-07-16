namespace IcecreamShop {

  export class customer {

           x: number;
           y: number; 
           color: string;
           radius: number; 
           private position: Vector;
           private speed: number;
      
          constructor(x: number, y: number, color: string, speed: number, radius: number) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.position = new Vector(x, y);
            this.speed = speed;
            this.radius = radius; 
           
          } 

      
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

            
          
            //Eventlistener for customer
          /*  let circleRadius = this.radius;
            let circleCenterX = this.x;
            let circleCenterY = this.y;
          
            crc2.canvas.addEventListener("click", (event) => {
              let canvasRect = crc2.canvas.getBoundingClientRect();
              let clickX = event.clientX - canvasRect.left;
              let clickY = event.clientY - canvasRect.top;
          
              let distanceToCenter = Math.sqrt(
                (clickX - circleCenterX) ** 2 + (clickY - circleCenterY) ** 2
              );
          
              if (distanceToCenter <= circleRadius) {
                newOffer.drawOffer();}
            });*/
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
              new Vector(100, 100),
            ];
          
            let currentPathIndex = 0;
          
            let animateStep = () => {
        
              let currentPosition = path[currentPathIndex];
              let nextPosition = path[currentPathIndex + 1];
              let distance = nextPosition.subtract(currentPosition);
              if (currentPathIndex >= path.length - 1) {
                
              }


              if (distance.magnitude() > this.speed) {
                let direction = distance.normalize();
                let velocity = direction.scale(this.speed);
                this.position = currentPosition.add(velocity);
              } else {
                // Move to the next point in the path
                currentPathIndex++;
              }
          
              // Update the customer's position
              this.x = this.position.x;
              this.y = this.position.y;
          
              // Redraw the background
              drawBackground();
          
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
    total: number = 0; 
    updateTotalPrice(newTotal: number): void{
      this.total = newTotal; 
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

    }

}