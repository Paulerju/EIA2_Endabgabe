namespace IcecreamShop {
  window.addEventListener("load", handleload);
  console.log("handleLoad working");
  export let crc2: CanvasRenderingContext2D;
  export let canvas: HTMLCanvasElement = document.querySelector("#shop")!;
  let moneyCount = document.querySelector("#money");
  crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
  export let player: Serveri = new Serveri();
  export let customers: Customer[] = []; 
  export let newC: Customer = new Customer(200, 300, "#b56cd4", 5, 40);
  export let newOffer: Offer = new Offer();
  export let Seat1: Seat = new Seat(1230, 80, 32); //Top right
  export let Seat2: Seat = new Seat(1060, 600, 32); //right bottom
  export let Seat3: Seat = new Seat(770, 700, 32); // bottom left 
  export let Seat4: Seat = new Seat(770, 320, 32); // top left
  export let counter: number = 0 ; 


  let intervalId: number;
  let clicked: boolean = false;
  let clickedCust: boolean = false;
  let foodhold: boolean = false;
  let giveFood: boolean = false; 
  let finished: boolean = false; 

  export function handleload(): void {
    drawBackground();
    player.drawServeri();
    newC.drawCustomer();
    customerClicked();

    intervalId = setInterval(() => {
      player.update();
      drawBackground();
      player.drawServeri();
      newC.drawCustomer();

      if (clickedCust) { //give customer Offer
        newOffer.drawOffer();
      }

      if (foodhold) { //server takes Icecream
        player.drawIce();
        player.carrying = true; 
      }

      if (finished) { //customer payed
        newC.finished  = false;
        newC.followPath2(); 
      }

      if (newC.finished) { //customer finished eating
        giveFood = false; 
        newC.receipt();
      }

      if (giveFood) { //customer gets Icecream
        foodhold = false; 
        clicked = false; 
        newC.eat();
        drawTableIce();
      }

      if (clicked) { //Ordered
        clickedCust = false;
        let wrapper = document.querySelector("#wrapper");
        wrapper.classList.add("hidden");
        newC.drawBubble();
      }
    }, 1000 / 25);

    handleOffer();
    newOffer.addEventListeners();
    window.addEventListener("keydown", player.handleKeyDown.bind(player));
    window.addEventListener("keyup", player.handleKeyUp.bind(player));
  }

  function addNewCustomer(x: number, y: number): void {
    let newCustomer: Customer = new Customer(x, y, "#b56cd4", 5, 40);
    customers.push(newCustomer);
    drawCustomers();
  }
  function drawCustomers(): void {
    customers.forEach((customer) => {
      customer.drawCustomer();
    });
  }

  export function drawBackground(): void {
    drawOutside();
    drawRestaurant();
    drawTable();
    Seat1.drawSeats();
    Seat2.drawSeats();
    Seat3.drawSeats();
    Seat4.drawSeats();
  }

  export function drawOutside(): void {
    crc2.fillStyle = "#145c2c";
    crc2.fillRect(0, 0, canvas.width, canvas.height);

    crc2.fillStyle = "#cfcfcf";
    crc2.fillRect(110, 110, 180, 130);
    crc2.fillRect(110, 110, 640, 70);
    crc2.fillRect(660, 0, 90, 120);
  }

  export function drawRestaurant(): void {
    crc2.fillStyle = "#878787";
    crc2.fillRect(0, 250, 900, 550);
    crc2.fillRect(850, 0, 700, 800);

    crc2.fillStyle = "#404040";
    crc2.fillRect(100, 250, 200, 10);
    crc2.fillRect(1390, 320, 10, 200);
    crc2.closePath();

    crc2.beginPath();
    crc2.fillStyle = "black";
    crc2.arc(80, 230, 7, 0, 2 * Math.PI);
    crc2.arc(320, 230, 7, 0, 2 * Math.PI);
    crc2.fillRect(77, 90, 6, 140);
    crc2.fillRect(77, 87, 400, 6);
    crc2.fill();
    crc2.beginPath();
    crc2.arc(80, 90, 7, 0, 2 * Math.PI);
    crc2.arc(480, 90, 7, 0, 2 * Math.PI);
    crc2.fill();
    crc2.beginPath();
    crc2.arc(320, 200, 7, 0, 2 * Math.PI);
    crc2.arc(480, 200, 7, 0, 2 * Math.PI);
    crc2.fillRect(317, 200, 6, 30);
    crc2.fillRect(317, 197, 160, 6);
    crc2.fill();
  }

  export function drawTable(): void {
    crc2.fillStyle = "#4696c2";
    crc2.fillRect(10, 580, 500, 80);

    crc2.beginPath(); //Table top right
    crc2.arc(1120, 80, 50, 0, 2 * Math.PI);
    crc2.arc(1010, 80, 32, 0, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();
    crc2.beginPath();
    crc2.arc(1120, 180, 32, 0, 2 * Math.PI);
    crc2.fill();

    crc2.beginPath(); //Table bottom right
    crc2.arc(1170, 600, 50, 0, 2 * Math.PI);
    crc2.arc(1280, 600, 32, 0, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();
    crc2.beginPath();
    crc2.arc(1170, 700, 32, 0, 2 * Math.PI);
    crc2.fill();

    crc2.beginPath(); //Table bottom left
    crc2.arc(770, 600, 50, 0, 2 * Math.PI);
    crc2.arc(880, 600, 32, 0, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();
    crc2.beginPath();
    crc2.fill();

    crc2.beginPath(); //Table top left
    crc2.arc(670, 320, 50, 0, 2 * Math.PI);
    crc2.arc(570, 320, 32, 0, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();

    //Icecream flavors
    crc2.fillStyle = "#4180a3";
    crc2.fillRect(80, 590, 275, 60);

    crc2.fillStyle = "#d16d93";
    crc2.fillRect(90, 595, 60, 50);

    crc2.fillStyle = "#c4bbbe";
    crc2.fillRect(155, 595, 60, 50);

    crc2.fillStyle = "#963e4f";
    crc2.fillRect(220, 595, 60, 50);

    crc2.fillStyle = "#331707";
    crc2.fillRect(285, 595, 60, 50);

    crc2.closePath();

    //Welcome mat
    crc2.fillStyle = "#4696c2";
    crc2.beginPath();
    crc2.fillRect(140, 270, 120, 50);
    crc2.fillStyle = "#377699";
    crc2.rect(140, 270, 120, 50);
    crc2.fillStyle = "#1b394a";
    crc2.font = "bold 15px arial";
    crc2.fillText("WELCOME", 160, 300);
    crc2.stroke();
    crc2.closePath();
  }

  function drawTableIce(){

    crc2.beginPath();
    crc2.fillStyle = "#80112a";
    crc2.arc(1135 , 44, 8, 0, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();
    crc2.beginPath();
    crc2.fillStyle = "#991433";
    crc2.arc(1135 -7,52, 8, 0, 2 * Math.PI);
    crc2.arc(1135 +7, 52, 8, 0, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();

    crc2.beginPath();
    crc2.fillStyle = "#b0edff";
    crc2.arc(1135 , 81, 6, 1 * Math.PI, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();
    crc2.beginPath();
    crc2.arc(1135 , 55, 15, 0, 1 * Math.PI);
    crc2.fill();
    crc2.closePath();
    crc2.beginPath();
    crc2.arc(1135 ,72, 4, 0, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();

  }


  export function saveData(): void {

    let flavorSelect = document.querySelector("#flavor") as HTMLSelectElement;
    let selectedFlavor = flavorSelect.value;

    let sauceSelect = document.querySelector("#sauce") as HTMLSelectElement;
    let selectedSauce = sauceSelect.value;

    let toppingSelect = document.querySelector("#toppings") as HTMLSelectElement;
    let selectedTopping = toppingSelect.value;

    let numberSelect = document.querySelector("#number") as HTMLSelectElement;
    let selectedNumber = numberSelect.value;

    let customerData = {
      flavor: selectedFlavor,
      sauce: selectedSauce,
      toppings: selectedTopping,
      number: selectedNumber

    }; console.log("customerData: " + customerData);

    this.sendTask(customerData);

  }

  export function handleOffer() {
    hndlformular();
    let button1 = document.querySelector("#but2");
    button1.addEventListener("click", () => {
      clicked = true;
      handleload(); console.log("clear Offer");
      saveData();
      crc2.clearRect(0, 0, canvas.width, canvas.height);

    });
  }

  function customerClicked() {
    let circleRadius = newC.radius;
    let circleCenterX = newC.x;
    let circleCenterY = newC.y;

    crc2.canvas.addEventListener("click", (event) => { //Event listener customer
      let canvasRect = crc2.canvas.getBoundingClientRect();
      let clickX = event.clientX - canvasRect.left;
      let clickY = event.clientY - canvasRect.top;

      let distanceToCenter = Math.sqrt(
        (clickX - circleCenterX) ** 2 + (clickY - circleCenterY) ** 2
      );
      if (distanceToCenter <= circleRadius) {
        clickedCust = true;
        return clickedCust;
      }
    });

    crc2.canvas.addEventListener("click", (event) => { //server got Icecream
      let rect = canvas.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;

      if (x >= 80 && x <= 355 && y >= 590 && y <= 650) {
        foodhold = true;
        player.drawIce();
      }
    });
  }

  crc2.canvas.addEventListener("click", (event) => { //turn into event listener of the bubble
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
  
    if (x >= newC.position.x + 40 && x <= newC.position.x + 100 &&
        y >= newC.position.y - 70 && y <= newC.position.y - 10 && player.carrying == true) {
 
      if (clicked) {   
        giveFood = true;
        newC.eat();
      } else {
        finished = true; 
        counter = counter + newC.total; console.log(counter);
        moneyCount.innerHTML = counter.toString()+ "$";
      }
    }
  });



}
