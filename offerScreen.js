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
            console.log("draw offer");
        }
        flavorchange() {
            console.log("flavor change");
            /*  if(flavorValue == "strawberry" ){
                  crc2.fillStyle ="white";
                  crc2.fillRect(390,20, 850,800);
             
              }            */
        }
    }
    IcecreamShop.offer = offer;
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=offerScreen.js.map