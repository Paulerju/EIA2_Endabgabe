namespace IcecreamShop {

  export class customer {

           x: number;
           y: number; 
           color: string;
           private position: Vector;
           private targetSeat: Seat | null;
           private speed: number;

      
          constructor(x: number, y: number, color: string, speed: number) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.position = new Vector(x, y);
            this.targetSeat = null;
            this.speed = speed;
           
          }
      
          drawCustomer(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x, this.y + 5, 40 - 15, 0, 1 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x - 10, this.y - 5, 7, 0, 2 * Math.PI);
            crc2.arc(this.x + 10, this.y - 5, 7, 0, 2 * Math.PI);
            crc2.fill();
          }
      
          move(): void {
            if (this.targetSeat) {
              const targetPosition = new Vector(this.targetSeat.getX(), this.targetSeat.getY());
              const distance = new Vector(targetPosition.x - this.position.x, targetPosition.y - this.position.y);
          
              if (distance.magnitude() > this.speed) {
                const direction = distance.normalize();
                const velocity = new Vector(direction.x * this.speed, direction.y * this.speed);
                this.position.x += velocity.x;
                this.position.y += velocity.y;
              } else {
                // Customer has reached the target seat
                this.targetSeat.assignCustomer(this);
                this.targetSeat = null;
              }
            }
          }     
      
          setDestination(seat: Seat): void {
            this.targetSeat = seat;
            const path = this.calculatePath(this.x, this.y, seat.getX(), seat.getY());
            // Call a function to animate the customer along the path
            this.followPath(path);
          }

          calculatePath(x1: number, y1: number, x2: number, y2: number): Path2D {
            // Use any pathfinding algorithm to calculate the path from (x1, y1) to (x2, y2)
            // For simplicity, let's assume a straight line path
            const path = new Path2D();
            path.moveTo(x1, y1);
            path.lineTo(x2, y2);
            return path;
          }



         followPath(path: Path2D): void {
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

getPathLength(path: Path2D): number {
  const tempCanvas = document.createElement("canvas");
  const tempContext = tempCanvas.getContext("2d");

  if (tempContext) {
    tempContext.lineWidth = 1;
    tempContext.stroke(path);
    return tempContext.measure().width;
  }

  return 0;
}

getPointOnPath(path: Path2D, distance: number): Vector {
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

    return new Vector(point?.x ?? 0, point?.y ?? 0);
  }

  return new Vector(0, 0);
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

    }


}