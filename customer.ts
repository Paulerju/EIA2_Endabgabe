namespace IcecreamShop {

  export class customer {
    
          private x: number;
          private y: number;
          private radius: number;
          private color: string;
          private destination: Seat | null;
          private path: Path2D | null;
      
          constructor(x: number, y: number, radius: number, color: string) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.destination = null;
            this.path = null;
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
          }
      
          move(): void {
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
      
          setDestination(destination: Seat): void {
            this.destination = destination;
          }
      
          calculatePath(x1: number, y1: number, x2: number, y2: number): Path2D {
            // Use any pathfinding algorithm to calculate the path from (x1, y1) to (x2, y2)
            // For simplicity, let's assume a straight line path
            const path = new Path2D();
            path.moveTo(x1, y1);
            path.lineTo(x2, y2);
            return path;
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