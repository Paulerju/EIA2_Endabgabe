namespace IcecreamShop {
    window.addEventListener("load", handleload);
    console.log("handleLoad working");

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement = document.querySelector("#shop")!;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    let player: Serveri;
    let newC: customer = new customer();
    let newOffer: offer = new offer();

    function handleload(_event: Event): void {
        drawBackground();
        player = new Serveri();
        player.drawServeri();

        newC.drawCustomer();
        // newOffer.drawOffer();
        // newOffer.flavorchange();

        // Add event listeners for keydown and keyup events
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
    }

    function drawBackground(): void {
        drawOutside();
        drawRestaurant();
        drawTable();
    }

    function drawOutside(): void {
        crc2.fillStyle = "#145c2c";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        crc2.fillStyle = "#cfcfcf";
        crc2.fillRect(110, 110, 180, 130);
        crc2.fillRect(110, 110, 640, 70);
        crc2.fillRect(660, 0, 90, 120);
    }

    function drawRestaurant(): void {
        crc2.fillStyle = "#878787";
        crc2.fillRect(0, 250, 900, 550);
        crc2.fillRect(850, 0, 700, 800);

        crc2.fillStyle = "#404040";
        crc2.fillRect(100, 250, 200, 10);
        crc2.fillRect(1390, 320, 10, 200);

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

    function drawTable(): void {
        crc2.fillStyle = "#4696c2";
        crc2.fillRect(10, 580, 500, 80);

        crc2.beginPath(); //Table top right
        crc2.arc(1120, 80, 50, 0, 2 * Math.PI);
        crc2.arc(1010, 80, 32, 0, 2 * Math.PI);
        crc2.arc(1230, 80, 32, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(1120, 180, 32, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath(); //Table bottom right
        crc2.arc(1170, 600, 50, 0, 2 * Math.PI);
        crc2.arc(1060, 600, 32, 0, 2 * Math.PI);
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
        crc2.arc(770, 700, 32, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath(); //Table top left
        crc2.arc(670, 320, 50, 0, 2 * Math.PI);
        crc2.arc(770, 320, 32, 0, 2 * Math.PI);
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

    function handleKeyDown(event: KeyboardEvent): void {
        switch (event.key) {
            case "w":
                player.velocity.y = -5;
                break;
            case "a":
                player.velocity.x = -5;
                break;
            case "s":
                player.velocity.y = 5;
                break;
            case "d":
                player.velocity.x = 5;
                break;
        }
        console.log(player.velocity);
    }

    function handleKeyUp(event: KeyboardEvent): void {
        switch (event.key) {
            case "w":
            case "s":
                player.velocity.y = 0;
                break;
            case "a":
            case "d":
                player.velocity.x = 0;
                break;
        }
        console.log(player.velocity);
    }
}
