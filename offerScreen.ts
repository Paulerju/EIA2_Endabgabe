namespace IcecreamShop {
  export class offer {

    private prices: { [key: string]: number } = {
      strawberry: 1.5,
      lemon: 1.5,
      raspberry: 1.5,
      chocolate: 1,
      white_chocolate: 1,
      nothing: 0,
      sprinkles: 0.50,
      smarties: 0.50,
    };

    total:number = 0; 

    drawOffer(): void {

      crc2.fillStyle = "rgba(210, 210, 210, 0.5)"; 
      crc2.fillRect(0, 0, canvas.width, canvas.height); 

      crc2.fillStyle = "#4696c2";
      crc2.fillRect(390, 20, 550, 700);

      let wrapper = document.querySelector("#wrapper");
      wrapper.classList.remove("hidden");
      this.flavorchange();
      this.saucechange();
      this.toppingchange();
      console.log("draw offer");

    }

    flavorchange(): void {
      let crc2: CanvasRenderingContext2D;
      let canvas: HTMLCanvasElement = document.querySelector("#canvas2")!;
      crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

      crc2.clearRect(0, 0, canvas.width, canvas.height);

      let flavorSelect = document.querySelector("#flavor") as HTMLSelectElement;
      let selectedFlavor = flavorSelect.value;

      switch (selectedFlavor) {
        case "strawberry":
          this.drawIcecream("#871326", "#800f22");
          this.bowl();
          break;
        case "lemon":
          this.drawIcecream("#e8e7d5", "#e3e2cc");
          this.bowl();
          break;
        case "raspberry":
          this.drawIcecream("#d13d71", "#d94176");
          this.bowl();
          break;
        default:
          break;
      }
    }

    saucechange(): void {
      let crc2: CanvasRenderingContext2D;
      let canvas: HTMLCanvasElement = document.querySelector("#canvas2")!;
      crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

      crc2.clearRect(0, 0, canvas.width, canvas.height);

      let sauceSelect = document.querySelector("#sauce") as HTMLSelectElement;
      let selectedSauce = sauceSelect.value;

      switch (selectedSauce) {
        case "chocolate":
          this.flavorchange();
          this.drawsauce("#1f0006"); // Draw the sauce
          this.bowl();
          break;
        case "strawberry":
          this.flavorchange();
          this.drawsauce("#701225"); // Draw the sauce
          this.bowl();
          break;
        case "white chocolate":
          this.flavorchange();
          this.drawsauce("#fff0d9"); // Draw the sauce
          this.bowl();
          break;
        default:
          break;
      }
    }

    toppingchange(): void {  // Hängt sich auf, wenn streusel ausgewählt werden??
      let crc2: CanvasRenderingContext2D;
      let canvas: HTMLCanvasElement = document.querySelector("#canvas2")!;
      crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

      let toppingSelect = document.querySelector("#toppings") as HTMLSelectElement;
      let selectedtoppping = toppingSelect.value;

      switch (selectedtoppping) {
        case "sprinkles":
          this.flavorchange();
          this.saucechange();
          this.drawsprinkles();
          this.bowl();
          break;
        case "smarties":
          this.flavorchange();
          this.saucechange();
          this.drawsmarties();
          this.bowl();

          break;
        case "nothing":
          this.flavorchange();
          this.saucechange();
          this.bowl();
          break;
        default:
          break;
      }
    }


    bowl(): void {
      let crc2: CanvasRenderingContext2D;
      let canvas: HTMLCanvasElement = document.querySelector("#canvas2")!;
      crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

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

    drawIcecream(_color: string, _color2: string): void {
      let crc2: CanvasRenderingContext2D;
      let canvas: HTMLCanvasElement = document.querySelector("#canvas2")!;
      crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

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

    drawsauce(_flavor: string) {
      let crc2: CanvasRenderingContext2D;
      let canvas: HTMLCanvasElement = document.querySelector("#canvas2")!;
      crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

      crc2.beginPath();
      crc2.fillStyle = _flavor;
      crc2.moveTo(370, 100);
      crc2.arc(220, 100, 50, 1 * Math.PI, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();
      crc2.beginPath();
      crc2.arc(186, 110, 20, 0 * Math.PI, 2 * Math.PI);
      crc2.arc(170, 120, 20, 0 * Math.PI, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();
      crc2.beginPath();
      crc2.arc(170, 140, 15, 0 * Math.PI, 2 * Math.PI);
      crc2.arc(170, 160, 10, 0 * Math.PI, 2 * Math.PI);
      crc2.fill();
      crc2.beginPath();
      crc2.arc(253, 110, 20, 0 * Math.PI, 2 * Math.PI);
      crc2.arc(270, 120, 20, 0 * Math.PI, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();
      crc2.beginPath();
      crc2.arc(290, 135, 16, 0 * Math.PI, 2 * Math.PI);
      crc2.arc(295, 150, 14, 0 * Math.PI, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();
      crc2.beginPath();
      crc2.arc(220, 110, 20, 0 * Math.PI, 2 * Math.PI);
      crc2.arc(225, 125, 16, 0 * Math.PI, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();
      crc2.beginPath();
      crc2.arc(250, 155, 12, 0 * Math.PI, 2 * Math.PI);
      crc2.arc(240, 140, 16, 0 * Math.PI, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();

    }

    drawsprinkles() {
      let crc2: CanvasRenderingContext2D;
      let canvas: HTMLCanvasElement = document.querySelector("#canvas2")!;
      crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

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
      crc2.rotate(0);
      crc2.closePath();

      crc2.beginPath();
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
      crc2.rotate(0);
      crc2.closePath();

      crc2.beginPath();
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
      crc2.closePath();
      crc2.rotate(0);
    }

    drawsmarties() {
      let crc2: CanvasRenderingContext2D;
      let canvas: HTMLCanvasElement = document.querySelector("#canvas2")!;
      crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

      crc2.beginPath();
      crc2.rotate(0);
      crc2.fillStyle = "#8a032b";
      crc2.ellipse(200, 80, 8, 2, 3, 0, 20);
      crc2.ellipse(240, 130, 8, 2, 3, 0, 20);
      crc2.fill();
      crc2.closePath();
      crc2.beginPath();
      crc2.ellipse(210, 110, 8, 2, 3, 0, 20);
      crc2.fill();
      crc2.closePath();
      crc2.beginPath();
      crc2.fillStyle = "#166e2a";
      crc2.ellipse(200, 110, 8, 2, 3, 0, 20);
      crc2.ellipse(220, 90, 8, 2, 3, 0, 20);
      crc2.fill();
      crc2.closePath();
      crc2.beginPath();
      crc2.ellipse(265, 145, 8, 2, 3, 0, 20);
      crc2.fill();
      crc2.closePath();
      crc2.beginPath();
      crc2.fillStyle = "#223b8c";
      crc2.ellipse(140, 140, 8, 2, 3, 0, 20);
      crc2.fill()
      crc2.closePath();
      crc2.beginPath();
      crc2.ellipse(280, 120, 8, 2, 3, 0, 20);
      crc2.ellipse(230, 120, 8, 2, 3, 0, 20);
      crc2.fill();


    }


    addEventListeners(): void {
      let flavorSelect = document.querySelector("#flavor") as HTMLSelectElement;
      flavorSelect.addEventListener("change", () => {
        this.flavorchange();
        this.calculatePrice();
      });

      let sauceSelect = document.querySelector("#sauce") as HTMLSelectElement;
      sauceSelect.addEventListener("change", () => {
        this.saucechange();
        this.toppingchange();
        this.calculatePrice();
      });

      let toppingSelect = document.querySelector("#toppings") as HTMLSelectElement;
      toppingSelect.addEventListener("change", () => {
        this.toppingchange();
        this.calculatePrice();
      });

      let numberSelect = document.querySelector("#number") as HTMLSelectElement;
      toppingSelect.addEventListener("change", () => {
        this.calculatePrice();
      });

      this.calculatePrice();

    };

    calculatePrice() { //get the price + price updates 
      let flavorSelect = document.querySelector("#flavor") as HTMLSelectElement;
      let selectedFlavor = flavorSelect.value;

      let sauceSelect = document.querySelector("#sauce") as HTMLSelectElement;
      let selectedSauce = sauceSelect.value;

      let toppingSelect = document.querySelector("#toppings") as HTMLSelectElement;
      let selectedTopping = toppingSelect.value;

      let numberSelect = document.querySelector("#number") as HTMLSelectElement;
      let selectedNumber = numberSelect.value;
      let selectedNumberI = parseInt(selectedNumber, 10); console.log(selectedNumberI);

      this.total = this.prices[selectedFlavor] * selectedNumberI + this.prices[selectedSauce] + this.prices[selectedTopping];

      let totalPriceElement = document.querySelector("#newp");
      totalPriceElement.textContent = "Price: " + this.total.toString()+ "$";
      return this.total; 
    }




  }
}

