namespace IcecreamShop{

    export class Seat {
        private x: number;
        private y: number;
        private radius: number;
        private occupied: boolean;
        private customer: customer | null;
    
        constructor(x: number, y: number, radius: number) {
          this.x = x;
          this.y = y;
          this.radius = radius;
          this.occupied = false;
          this.customer = null;
        }
    
          drawSeat(): void {
          crc2.beginPath();
          crc2.fillStyle = this.occupied ? "#ff0000" : "#4696c2";
          crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
          crc2.fill();
          crc2.closePath();
        }
    
        isOccupied(): boolean {
          return this.occupied;
        }
    
        assignCustomer(customer: customer): void {
          this.customer = customer;
          this.occupied = true;
        }
    
        removeCustomer(): void {
          this.customer = null;
          this.occupied = false;
        }
    
        getX(): number {
          return this.x;
        }
    
        getY(): number {
          return this.y;
        }
    }


}