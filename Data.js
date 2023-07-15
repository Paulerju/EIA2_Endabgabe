var IcecreamShop;
(function (IcecreamShop) {
    let edit = document.createElement("button"); // edit button erstellen
    edit.setAttribute("id", "edit");
    edit.innerHTML = "Edit";
    let newdiv = document.createElement("div"); // div element für to do erstellen
    newdiv.setAttribute("id", "newtask");
    let newP = document.createElement("p"); // p element für to do erstellen
    newP.setAttribute("id", "newp");
    let divcontainer = document.querySelector("#wrapper");
    IcecreamShop.taskArray = [];
    function hndlformular() {
        edit.addEventListener("click", editbtn);
        document.querySelector("#but2").addEventListener("click", addbtn);
        IcecreamShop.submit.addEventListener("click", sendTask);
    }
    IcecreamShop.hndlformular = hndlformular;
    function getData() {
        let flavorSelect = document.querySelector("#flavor");
        let selectedFlavor = flavorSelect.value;
        let sauceSelect = document.querySelector("#sauce");
        let selectedSauce = sauceSelect.value;
        let toppingSelect = document.querySelector("#toppings");
        let selectedTopping = toppingSelect.value;
        let numberSelect = document.querySelector("#number");
        let selectedNumber = numberSelect.value;
        let customerData = [
            selectedFlavor,
            selectedSauce,
            selectedTopping,
            selectedNumber
        ];
        console.log("customerData: ", customerData);
        return customerData;
    }
    IcecreamShop.getData = getData;
    console.log(getData);
    IcecreamShop.json = {};
    IcecreamShop.submit = document.querySelector("#but2");
    async function sendTask(_event) {
        let formData = new FormData(); // No need to use 'form' anymore
        let customerData = getData();
        formData.set("flavor", customerData[0]);
        formData.set("sauce", customerData[1]);
        formData.set("toppings", customerData[2]);
        formData.set("number", customerData[3]);
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "IceOrders");
        query.set("data", JSON.stringify(Object.fromEntries(formData.entries())));
        let urlParams = query.toString();
        let url = `https://webuser.hs-furtwangen.de/~paulerju/Database/?${urlParams}`;
        await fetch(url);
        //  alert("Task Submitted!");
    }
    IcecreamShop.sendTask = sendTask;
    async function communicate(_url) {
        let response = await fetch(_url);
        let offer = await response.text();
        let gotdata = JSON.parse(offer);
        // gotdata is empty, offer is a string, cant read the stuff out
        console.log("this" + gotdata);
        console.log("Response", response);
        console.log("before" + offer);
    }
    IcecreamShop.communicate = communicate;
    communicate("data.json");
    function addbtn(e) {
        let customerData = getData();
        document.getElementById("list").appendChild(newdiv);
        document.querySelector("#list").appendChild(newP);
        newP.innerHTML = "flavor : " + customerData[0] + ", <br> sauce: " + customerData[1] + ", <br> toppings: " + customerData[2] + ", <br> amount: " + customerData[3];
        e.preventDefault();
        newP.appendChild(edit);
    }
    IcecreamShop.addbtn = addbtn;
    function editbtn() {
        divcontainer.classList.remove("hidden");
        document.getElementById("list").removeChild(newdiv);
        document.querySelector("#list").removeChild(newP);
    }
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=Data.js.map