namespace IcecreamShop {

    export class Serveri{

        position: Vector;
        velocity: Vector; 


    drawServeri(_position:Vector, _velocity:Vector):void{
        console.log("Workinggg Server");
        crc2.beginPath();
        crc2.fillStyle = "#f6b6f4"; 
        crc2.arc(_position.x, _position.y, 45, 0, 2 * Math.PI);       //head pink  
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "#000000"; 
        crc2.fillRect(_position.x - 48, _position.y - 40,95,20); //head black1
        crc2.fillRect(_position.x - 30, _position.y - 80,60,50); //head black2
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "#000000"; 
        crc2.fillRect(_position.x - 15,_position.y +20,30,5); //mouth
        crc2.fillRect(_position.x -20,_position.y + 15,5,5); //mouth
        crc2.fillRect(_position.x + 15,_position.y + 15,5,5); //mouth
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "black"; 
        crc2.arc(_position.x - 17, _position.y -8, 10, 0, 1 * Math.PI);    //eye left 
        crc2.arc(_position.x + 15, _position.y -8, 10, 0, 1 * Math.PI);    //eye right
        crc2.fill();
    }

    update():void {

        this.drawServeri({ //wtff?
            x: 10, y: 10,
            set: function (_x: number, _y: number): void {
                throw new Error("Function not implemented.");
            }
        },{
            x: 10, y: 10,
            set: function (_x: number, _y: number): void {
                throw new Error("Function not implemented.");
            }
        });
        this.position.x += this.velocity.x; 
        this.position.y += this.velocity.y; 


    }
    
 }



}