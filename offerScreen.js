var IcecreamShop;
(function (IcecreamShop) {
    class offer {
        drawOffer() {
            IcecreamShop.crc2.fillStyle = "rgba(210, 210, 210, 0.5)";
            IcecreamShop.crc2.fillRect(0, 0, IcecreamShop.canvas.width, IcecreamShop.canvas.height);
            IcecreamShop.crc2.fillStyle = "#4696c2";
            IcecreamShop.crc2.fillRect(390, 20, 550, 700);
            let wrapper = document.querySelector("#wrapper");
            wrapper.classList.remove("hidden");
            this.flavorchange();
            console.log("draw offer");
        }
        flavorchange() {
            console.log("flavor change");
            /*  if(flavorValue == "strawberry" ){
              this.drawIcecream("#871326","#800f22");
              this.bowl();
              }
  
              if(flavorValue == "lemon" ){
              this.drawIcecream("#e8e7d5","#e3e2cc");
              this.bowl();
              }
              
               if(flavorValue == "raspberry" ){
              this.drawIcecream("#d13d71","#d94176");
              this.bowl();
              }      */
            //strawberry: 
            this.drawIcecream("#d13d71", "#d94176");
            this.bowl();
            this.drawsmarties();
        }
        bowl() {
            let crc2;
            let canvas = document.querySelector("#canvas2");
            crc2 = canvas.getContext("2d");
            crc2.beginPath();
            crc2.fillStyle = "#ebf2ff";
            crc2.arc(220, 320, 45, 1 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(220, 160, 100, 0, 1 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(220, 265, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
        }
        drawIcecream(_color, _color2) {
            let crc2;
            let canvas = document.querySelector("#canvas2");
            crc2 = canvas.getContext("2d");
            crc2.beginPath();
            crc2.fillStyle = _color;
            crc2.arc(220, 100, 50, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = _color2;
            crc2.arc(170, 155, 50, 0, 2 * Math.PI);
            crc2.arc(270, 155, 50, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
        }
        drawsprinkles() {
            let crc2;
            let canvas = document.querySelector("#canvas2");
            crc2 = canvas.getContext("2d");
            crc2.beginPath();
            crc2.rotate((45 * Math.PI) / 180);
            crc2.fillStyle = "#223b8c";
            crc2.fillRect(200, 0, 8, 2);
            crc2.fillRect(250, -80, 8, 2);
            crc2.fillRect(280, -95, 8, 2);
            crc2.fillRect(180, -90, 8, 2);
            crc2.fillRect(190, -70, 8, 2);
            crc2.fillRect(280, -75, 8, 2);
            crc2.fillRect(210, -80, 8, 2);
            crc2.fillRect(190, -60, 8, 2);
            crc2.rotate((44 * Math.PI) / 180);
            crc2.fillStyle = "#166e2a";
            crc2.fillRect(150, -250, 8, 2);
            crc2.fillRect(130, -300, 8, 2);
            crc2.fillRect(130, -200, 8, 2);
            crc2.fillRect(130, -150, 8, 2);
            crc2.fillRect(80, -230, 8, 2);
            crc2.fillRect(90, -220, 8, 2);
            crc2.fillRect(150, -230, 8, 2);
            crc2.fillRect(130, -270, 8, 2);
            crc2.fillRect(130, -190, 8, 2);
            crc2.rotate((46 * Math.PI) / 180);
            crc2.fillStyle = "#8a032b";
            crc2.fillRect(-40, -200, 8, 2);
            crc2.fillRect(-80, -230, 8, 2);
            crc2.fillRect(-40, -230, 8, 2);
            crc2.fillRect(-100, -310, 8, 2);
            crc2.fillRect(-120, -210, 8, 2);
            crc2.fillRect(-105, -245, 8, 2);
            crc2.fillRect(-30, -240, 8, 2);
            crc2.fillRect(-120, -320, 8, 2);
            crc2.fillRect(-130, -220, 8, 2);
            crc2.stroke();
        }
        drawsmarties() {
            let crc2;
            let canvas = document.querySelector("#canvas2");
            crc2 = canvas.getContext("2d");
            crc2.ellipse(-40, -200, 8, 2, 3, 0, 4);
            crc2.ellipse(-80, -230, 8, 2, 3, 0, 4);
            crc2.ellipse(-40, -230, 8, 2, 3, 0, 4);
            crc2.ellipse(-100, -310, 8, 2, 3, 0, 4);
            crc2.ellipse(-120, -210, 8, 2, 3, 0, 4);
            crc2.ellipse(-105, -245, 8, 2, 3, 0, 4);
            crc2.ellipse(-30, -240, 8, 2, 3, 0, 4);
            crc2.ellipse(-120, -320, 8, 2, 3, 0, 4);
            crc2.ellipse(-130, -220, 8, 2, 3, 0, 4);
        }
    }
    IcecreamShop.offer = offer;
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=offerScreen.js.map