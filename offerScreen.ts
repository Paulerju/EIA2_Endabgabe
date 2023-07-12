namespace IcecreamShop { 

    export class offer{
        
        drawOffer():void {

            crc2.fillStyle = "rgba(210, 210, 210, 0.5)";
            crc2.fillRect(0,0,canvas.width,canvas.height);
       
            crc2.fillStyle ="#4696c2";
            crc2.fillRect(390,20, 550,700);
       
           let wrapper = document.querySelector("#wrapper");
            wrapper.classList.remove("hidden");
       
               console.log("draw offer");
           
           }
           
           flavorchange():void { //get Value from option
            console.log("flavor change");
          /*  if(flavorValue == "strawberry" ){
                crc2.fillStyle ="white";
                crc2.fillRect(390,20, 850,800);
           
            }            */

           }
    }


}