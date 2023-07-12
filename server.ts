namespace IcecreamShop {

    export class Serveri{

        name: string; 

        constructor(_name: string) {
            this.name = _name;
          }
    
    drawServeri():void{
        console.log("Workinggg Server");
        crc2.beginPath();
        crc2.fillStyle = "#f6b6f4"; 
        crc2.arc(430, 720, 45, 0, 2 * Math.PI);       
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "#000000"; 
        crc2.fillRect(382, 680,95,20);
        crc2.fillRect(400, 640,60,50);
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "#000000"; 
        crc2.fillRect(415,740,30,5);
        crc2.fillRect(410,735,5,5);
        crc2.fillRect(445,735,5,5);
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "black"; 
        crc2.arc(413, 712, 10, 0, 1 * Math.PI);    
        crc2.arc(445, 712, 10, 0, 1 * Math.PI);    
        crc2.fill();
    }
    
 }



}