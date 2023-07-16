var IcecreamShop;
(function (IcecreamShop) {
    let edit = document.createElement("button");
    edit.setAttribute("id", "edit");
    edit.innerHTML = "Edit";
    let newdiv = document.createElement("div");
    newdiv.setAttribute("id", "newtask");
    let newP = document.createElement("p");
    newdiv.setAttribute("id", "newp");
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
            selectedNumber,
        ];
        console.log("customerData: ", customerData);
        return customerData;
    }
    IcecreamShop.getData = getData;
    console.log(getData);
    IcecreamShop.json = {};
    IcecreamShop.submit = (document.querySelector("#but2"));
    let newDocumentId;
    async function sendTask(_event) {
        let formData = new FormData();
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
        ("ID: " + url); //got the id here, but its not getting it in response? 
        let response = await fetch(url);
        ("response : " + response);
        let totalPrice = IcecreamShop.newOffer.calculatePrice(); // total price will save in customer now 
        IcecreamShop.newC.updateTotalPrice(totalPrice);
        if (response.ok) {
            let data = await response.json();
            if (data.id) {
                newDocumentId = data.id;
                console.log;
                console.log("Newly inserted document ID:", newDocumentId);
            }
        }
    }
    IcecreamShop.sendTask = sendTask;
    async function communicate(_url) {
        let response = await fetch(_url);
        let offer = await response.text();
        let gotdata = JSON.parse(offer);
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
        newP.innerHTML =
            "flavor : " +
                customerData[0] +
                ", <br> sauce: " +
                customerData[1] +
                ", <br> toppings: " +
                customerData[2] +
                ", <br> amount: " +
                customerData[3];
        e.preventDefault();
        newP.appendChild(edit);
        let wrapper = document.querySelector("#wrapper");
        wrapper.classList.add("hidden");
    }
    IcecreamShop.addbtn = addbtn;
    async function editbtn() {
        divcontainer.classList.remove("hidden");
        document.getElementById("list").removeChild(newdiv);
        document.querySelector("#list").removeChild(newP);
        let query = new URLSearchParams();
        query.set("command", "delete"); //Delete from Database not working because ID undefined
        query.set("collection", "IceOrders");
        query.set("id", newDocumentId);
        let response = await fetch("https://webuser.hs-furtwangen.de/~paulerju/Database/" + "?" + query.toString());
        if (response.ok) {
            alert("Task deleted!");
        }
    }
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=Data.js.map