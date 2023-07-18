namespace IcecreamShop {

  enum CustomerState {
    WALKING,
    WAITING,
    EATING
  }

  export class Customer {

           static currentId: number = 1;
           customerId: number;
           x: number;
           y: number; 
           color: string;
           radius: number; 
           position: Vector;
           private speed: number; 
           total: number = 0; 

            clicked: boolean = false;
            clickedCust: boolean = false;
            foodhold: boolean = false;
            giveFood: boolean = false; 
            finished: boolean = false; 
           
      
          constructor(x: number, y: number, color: string, speed: number, radius: number) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.position = new Vector(x, y);
            this.speed = speed;
            this.radius = radius; 
            this.customerId = Customer.currentId;
            Customer.currentId++;
           
          } 

          currentState: CustomerState = CustomerState.WALKING;
      
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

           addNewCustomer(): void {
            let newCustomer: Customer = new Customer(200, 300, "#b56cd4", 5, 40);
            customers.push(newCustomer);
            newCustomer.drawCustomer();
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
          
              this.x = this.position.x;
              this.y = this.position.y;

              this.drawCustomer();
              requestAnimationFrame(animateStep);
            };

            requestAnimationFrame(animateStep); 
          }
          
          followPath2(): void {
            let path: Vector[] = [
              new Vector(this.x, this.y),
              new Vector(1500, 500)
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
              }else {
      
                currentPathIndex++;
              }       
              this.x = this.position.x;
              this.y = this.position.y;
              this.drawCustomer();
              requestAnimationFrame(animateStep);
            };
            requestAnimationFrame(animateStep); 
          }

          followPathSeat(_x:number, _y:number): void {
            let path: Vector[] = [
              new Vector(this.x, this.y),
              new Vector(_x, _y)
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
              this.x = this.position.x;
              this.y = this.position.y;

              this.drawCustomer();
              requestAnimationFrame(animateStep);
            };
            requestAnimationFrame(animateStep); 
          }

          moveToSeat(): void {
      
              if (Seat1.isOccupied()) {
                this.followPathSeat(Seat1.x, Seat1.y); 
                Seat1.occupied = true; 
                this.drawBubble(); 
                return; 
              }

              if (Seat2.isOccupied()) {
                this.followPathSeat(Seat2.x, Seat2.y); 
                Seat2.occupied = true; 
                this.drawBubble(); 
                return; 
              }

              if (Seat3.isOccupied()) {
                this.followPathSeat(Seat3.x, Seat3.y); 
                Seat3.occupied = true; 
                this.drawBubble(); 
                return; 
              }

              if (Seat4.isOccupied()) {
                this.followPathSeat(Seat4.x, Seat4.y); 
                Seat4.occupied = true; 
                this.drawBubble(); 
                return; 
              }
      
            // If all seats are occupied, return without taking a seat
            return;
          }
          
          
      
       
    nutral(){

        crc2.beginPath(); this.updateTotalPrice
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

    moodUpdate(){
      if (this.currentState !== CustomerState.WAITING) {
        return;
      }
  
      let waitingTimer = setInterval(() => {

      }, 1000 * 15);
  
      let clickTimer1 = setTimeout(() => {
        clearInterval(waitingTimer);
        this.nutral(); // Draw nutral if not clicked within 15 seconds
  
        let clickTimer2 = setTimeout(() => {
          this.unhappy(); // Draw angry if not clicked within 10 seconds
          this.followPath2(); 
        }, 1000 * 10);
  
        canvas.addEventListener('click', () => {
          clearTimeout(clickTimer2);
          this.clicked = true;
          this.drawCustomer(); 
        });
      }, 1000 * 15);


    }

}
}