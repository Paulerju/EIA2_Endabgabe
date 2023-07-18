var IcecreamShop;
(function (IcecreamShop) {
    window.addEventListener("load", handleload);
    console.log("handleLoad working");
    IcecreamShop.canvas = document.querySelector("#shop");
    let moneyCount = document.querySelector("#money");
    IcecreamShop.crc2 = IcecreamShop.canvas.getContext("2d");
    IcecreamShop.player = new IcecreamShop.Serveri();
    IcecreamShop.customers = [];
    IcecreamShop.newC = new IcecreamShop.customer(200, 300, "#b56cd4", 5, 40);
    IcecreamShop.newOffer = new IcecreamShop.offer();
    IcecreamShop.Seat1 = new IcecreamShop.Seat(1230, 80, 32); //Top right
    IcecreamShop.Seat2 = new IcecreamShop.Seat(1060, 600, 32); //right bottom
    IcecreamShop.Seat3 = new IcecreamShop.Seat(770, 700, 32); // bottom left 
    IcecreamShop.Seat4 = new IcecreamShop.Seat(770, 320, 32); // top left
    IcecreamShop.counter = 0;
    let intervalId;
    let clicked = false;
    let clickedCust = false;
    let foodhold = false;
    let giveFood = false;
    let finished = false;
    function handleload() {
        drawBackground();
        IcecreamShop.player.drawServeri();
        IcecreamShop.newC.drawCustomer();
        customerClicked();
        intervalId = setInterval(() => {
            IcecreamShop.player.update();
            drawBackground();
            IcecreamShop.player.drawServeri();
            IcecreamShop.newC.drawCustomer();
            if (clickedCust) { //give customer Offer
                IcecreamShop.newOffer.drawOffer();
            }
            if (foodhold) { //server takes Icecream
                IcecreamShop.player.drawIce();
                IcecreamShop.player.carrying = true;
            }
            if (finished) { //customer payed
                IcecreamShop.newC.finished = false;
                IcecreamShop.newC.followPath2();
            }
            if (IcecreamShop.newC.finished) { //customer finished eating
                giveFood = false;
                IcecreamShop.newC.receipt();
            }
            if (giveFood) { //customer gets Icecream
                foodhold = false;
                clicked = false;
                IcecreamShop.newC.eat();
                drawTableIce();
            }
            if (clicked) { //Ordered
                clickedCust = false;
                let wrapper = document.querySelector("#wrapper");
                wrapper.classList.add("hidden");
                IcecreamShop.newC.drawBubble();
            }
        }, 1000 / 25);
        handleOffer();
        IcecreamShop.newOffer.addEventListeners();
        // Add event listeners walking player
        window.addEventListener("keydown", IcecreamShop.player.handleKeyDown.bind(IcecreamShop.player));
        window.addEventListener("keyup", IcecreamShop.player.handleKeyUp.bind(IcecreamShop.player));
    }
    IcecreamShop.handleload = handleload;
    function addNewCustomer(x, y) {
        let newCustomer = new IcecreamShop.customer(x, y, "#b56cd4", 5, 40);
        IcecreamShop.customers.push(newCustomer);
        drawCustomers();
    }
    function drawCustomers() {
        IcecreamShop.customers.forEach((customer) => {
            customer.drawCustomer();
        });
    }
    function drawBackground() {
        drawOutside();
        drawRestaurant();
        drawTable();
        IcecreamShop.Seat1.drawSeats();
        IcecreamShop.Seat2.drawSeats();
        IcecreamShop.Seat3.drawSeats();
        IcecreamShop.Seat4.drawSeats();
    }
    IcecreamShop.drawBackground = drawBackground;
    function drawOutside() {
        IcecreamShop.crc2.fillStyle = "#145c2c";
        IcecreamShop.crc2.fillRect(0, 0, IcecreamShop.canvas.width, IcecreamShop.canvas.height);
        IcecreamShop.crc2.fillStyle = "#cfcfcf";
        IcecreamShop.crc2.fillRect(110, 110, 180, 130);
        IcecreamShop.crc2.fillRect(110, 110, 640, 70);
        IcecreamShop.crc2.fillRect(660, 0, 90, 120);
    }
    IcecreamShop.drawOutside = drawOutside;
    function drawRestaurant() {
        IcecreamShop.crc2.fillStyle = "#878787";
        IcecreamShop.crc2.fillRect(0, 250, 900, 550);
        IcecreamShop.crc2.fillRect(850, 0, 700, 800);
        IcecreamShop.crc2.fillStyle = "#404040";
        IcecreamShop.crc2.fillRect(100, 250, 200, 10);
        IcecreamShop.crc2.fillRect(1390, 320, 10, 200);
        IcecreamShop.crc2.closePath();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.fillStyle = "black";
        IcecreamShop.crc2.arc(80, 230, 7, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(320, 230, 7, 0, 2 * Math.PI);
        IcecreamShop.crc2.fillRect(77, 90, 6, 140);
        IcecreamShop.crc2.fillRect(77, 87, 400, 6);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.arc(80, 90, 7, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(480, 90, 7, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.arc(320, 200, 7, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(480, 200, 7, 0, 2 * Math.PI);
        IcecreamShop.crc2.fillRect(317, 200, 6, 30);
        IcecreamShop.crc2.fillRect(317, 197, 160, 6);
        IcecreamShop.crc2.fill();
    }
    IcecreamShop.drawRestaurant = drawRestaurant;
    function drawTable() {
        IcecreamShop.crc2.fillStyle = "#4696c2";
        IcecreamShop.crc2.fillRect(10, 580, 500, 80);
        IcecreamShop.crc2.beginPath(); //Table top right
        IcecreamShop.crc2.arc(1120, 80, 50, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(1010, 80, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.closePath();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.arc(1120, 180, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.beginPath(); //Table bottom right
        IcecreamShop.crc2.arc(1170, 600, 50, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(1280, 600, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.closePath();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.arc(1170, 700, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.beginPath(); //Table bottom left
        IcecreamShop.crc2.arc(770, 600, 50, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(880, 600, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.closePath();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.beginPath(); //Table top left
        IcecreamShop.crc2.arc(670, 320, 50, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(570, 320, 32, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.closePath();
        //Icecream flavors
        IcecreamShop.crc2.fillStyle = "#4180a3";
        IcecreamShop.crc2.fillRect(80, 590, 275, 60);
        IcecreamShop.crc2.fillStyle = "#d16d93";
        IcecreamShop.crc2.fillRect(90, 595, 60, 50);
        IcecreamShop.crc2.fillStyle = "#c4bbbe";
        IcecreamShop.crc2.fillRect(155, 595, 60, 50);
        IcecreamShop.crc2.fillStyle = "#963e4f";
        IcecreamShop.crc2.fillRect(220, 595, 60, 50);
        IcecreamShop.crc2.fillStyle = "#331707";
        IcecreamShop.crc2.fillRect(285, 595, 60, 50);
        IcecreamShop.crc2.closePath();
        //Welcome mat
        IcecreamShop.crc2.fillStyle = "#4696c2";
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.fillRect(140, 270, 120, 50);
        IcecreamShop.crc2.fillStyle = "#377699";
        IcecreamShop.crc2.rect(140, 270, 120, 50);
        IcecreamShop.crc2.fillStyle = "#1b394a";
        IcecreamShop.crc2.font = "bold 15px arial";
        IcecreamShop.crc2.fillText("WELCOME", 160, 300);
        IcecreamShop.crc2.stroke();
        IcecreamShop.crc2.closePath();
    }
    IcecreamShop.drawTable = drawTable;
    function drawTableIce() {
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.fillStyle = "#80112a";
        IcecreamShop.crc2.arc(1135, 44, 8, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.closePath();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.fillStyle = "#991433";
        IcecreamShop.crc2.arc(1135 - 7, 52, 8, 0, 2 * Math.PI);
        IcecreamShop.crc2.arc(1135 + 7, 52, 8, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.closePath();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.fillStyle = "#b0edff";
        IcecreamShop.crc2.arc(1135, 81, 6, 1 * Math.PI, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.closePath();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.arc(1135, 55, 15, 0, 1 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.closePath();
        IcecreamShop.crc2.beginPath();
        IcecreamShop.crc2.arc(1135, 72, 4, 0, 2 * Math.PI);
        IcecreamShop.crc2.fill();
        IcecreamShop.crc2.closePath();
    }
    function saveData() {
        let flavorSelect = document.querySelector("#flavor");
        let selectedFlavor = flavorSelect.value;
        let sauceSelect = document.querySelector("#sauce");
        let selectedSauce = sauceSelect.value;
        let toppingSelect = document.querySelector("#toppings");
        let selectedTopping = toppingSelect.value;
        let numberSelect = document.querySelector("#number");
        let selectedNumber = numberSelect.value;
        let customerData = {
            flavor: selectedFlavor,
            sauce: selectedSauce,
            toppings: selectedTopping,
            number: selectedNumber
        };
        console.log("customerData: " + customerData);
        this.sendTask(customerData);
    }
    IcecreamShop.saveData = saveData;
    function handleOffer() {
        IcecreamShop.hndlformular();
        let button1 = document.querySelector("#but2");
        button1.addEventListener("click", () => {
            clicked = true;
            handleload();
            console.log("clear Offer");
            saveData();
            IcecreamShop.crc2.clearRect(0, 0, IcecreamShop.canvas.width, IcecreamShop.canvas.height);
        });
    }
    IcecreamShop.handleOffer = handleOffer;
    function customerClicked() {
        let circleRadius = IcecreamShop.newC.radius;
        let circleCenterX = IcecreamShop.newC.x;
        let circleCenterY = IcecreamShop.newC.y;
        IcecreamShop.crc2.canvas.addEventListener("click", (event) => {
            let canvasRect = IcecreamShop.crc2.canvas.getBoundingClientRect();
            let clickX = event.clientX - canvasRect.left;
            let clickY = event.clientY - canvasRect.top;
            let distanceToCenter = Math.sqrt((clickX - circleCenterX) ** 2 + (clickY - circleCenterY) ** 2);
            if (distanceToCenter <= circleRadius) {
                clickedCust = true;
                return clickedCust;
            }
        });
        IcecreamShop.crc2.canvas.addEventListener("click", (event) => {
            let rect = IcecreamShop.canvas.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            if (x >= 80 && x <= 355 && y >= 590 && y <= 650) {
                foodhold = true;
                IcecreamShop.player.drawIce();
            }
        });
    }
    IcecreamShop.crc2.canvas.addEventListener("click", (event) => {
        let rect = IcecreamShop.canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        if (x >= IcecreamShop.newC.position.x + 40 && x <= IcecreamShop.newC.position.x + 100 &&
            y >= IcecreamShop.newC.position.y - 70 && y <= IcecreamShop.newC.position.y - 10 && IcecreamShop.player.carrying == true) {
            if (clicked) {
                giveFood = true;
                IcecreamShop.newC.eat();
            }
            else {
                finished = true;
                IcecreamShop.counter = IcecreamShop.counter + IcecreamShop.newC.total;
                console.log(IcecreamShop.counter);
                moneyCount.innerHTML = IcecreamShop.counter.toString() + "$";
            }
        }
    });
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=iceCreamShop.js.map