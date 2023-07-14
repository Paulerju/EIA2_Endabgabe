namespace IcecreamShop {
    export class Vector {
      x: number;
      y: number;
  
      constructor(_x: number, _y: number) {
        this.x = _x;
        this.y = _y;
      }
  
      subtract(vector: Vector): Vector {
        return new Vector(this.x - vector.x, this.y - vector.y);
      }
  
      add(vector: Vector): Vector {
        return new Vector(this.x + vector.x, this.y + vector.y);
      }
  
      magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
  
      normalize(): Vector {
        const magnitude = this.magnitude();
        return new Vector(this.x / magnitude, this.y / magnitude);
      }
  
      scale(value: number): Vector {
        return new Vector(this.x * value, this.y * value);
      }
    }
  }
  