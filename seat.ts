namespace IcecreamShop{

    export class Seat {
         x: number;
         y: number;
         radius: number;
         occupied: boolean;
    
        constructor(x: number, y: number, radius: number) {
          this.x = x;
          this.y = y;
          this.radius = radius;
          this.occupied = false;
        }
    
       
    drawSeats(): void {
      crc2.beginPath();
      crc2.fillStyle = "#4696c2";
      crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();
    }

    isOccupied(): boolean {
      return this.occupied;
    }
  

    }


}