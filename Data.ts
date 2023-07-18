namespace IcecreamShop {
  export interface data {
    [key: string]: string | string[];
  }

  let edit = document.createElement("button");
  edit.setAttribute("id", "edit");
  edit.innerHTML = "Edit";
  let newdiv = document.createElement("div");
  newdiv.setAttribute("id", "newtask");
  let newP = document.createElement("p");
  newdiv.setAttribute("id", "newp");

  let divcontainer = <HTMLElement>document.querySelector("#wrapper");
  export let taskArray: String[] = [];

  export function hndlformular() {
    edit.addEventListener("click", editbtn);
    submit.addEventListener("click", addbtn);
    submit.addEventListener("click", sendTask);
  }

  export function getData(): string[] {
    let flavorSelect = document.querySelector("#flavor") as HTMLSelectElement;
    let selectedFlavor = flavorSelect.value;

    let sauceSelect = document.querySelector("#sauce") as HTMLSelectElement;
    let selectedSauce = sauceSelect.value;

    let toppingSelect = document.querySelector("#toppings") as HTMLSelectElement;
    let selectedTopping = toppingSelect.value;

    let numberSelect = document.querySelector("#number") as HTMLSelectElement;
    let selectedNumber = numberSelect.value;

    let customerData: string[] = [
      selectedFlavor,
      selectedSauce,
      selectedTopping,
      selectedNumber,
    ];

    console.log("customerData: ", customerData);

    return customerData;
  }

  console.log(getData);

  export interface FormDataJSON {
    [key: string]: string | string[];
  }

  export let json: FormDataJSON = {};

  export let submit: HTMLButtonElement = <HTMLButtonElement>(
    document.querySelector("#but2")
  );

  let newDocumentId: string;

  export async function sendTask(_event: Event): Promise<void> {
    let formData: FormData = new FormData();
    let customerData = getData();
    formData.set("flavor", customerData[0]);
    formData.set("sauce", customerData[1]);
    formData.set("toppings", customerData[2]);
    formData.set("number", customerData[3]);

    let query: URLSearchParams = new URLSearchParams();  
    query.set("command", "insert");
    query.set("collection", "IceOrders");
    query.set("data", JSON.stringify(Object.fromEntries(formData.entries()))); 

    let urlParams = query.toString();
    let url = `https://webuser.hs-furtwangen.de/~paulerju/Database/?${urlParams}`;("ID: "+url); //got the id here, but its not getting it in response? 
    let response = await fetch(url); ("response : "+response);
    
    // total price save in customer
      newC.updateTotalPrice();

    if (response.ok) {
      let data = await response.json();
      if (data.id) {
        newDocumentId = data.id;console.log
        console.log("Newly inserted document ID:", newDocumentId);
      }

    }
  }

  export async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    let offer: string = await response.text();
    let gotdata: data = JSON.parse(offer);
    console.log("this" + gotdata);
    console.log("Response", response);
    console.log("before" + offer);
  }

  communicate("data.json");

  export function addbtn(e: any): any {
    let customerData = getData();

    document.getElementById("list")!.appendChild(newdiv);
    document.querySelector("#list")!.appendChild(newP);

    newP.innerHTML = "flavor : " + customerData[0] + ", <br> sauce: " + customerData[1] + ", <br> toppings: " + customerData[2] + ", <br> amount: " + customerData[3];
    e.preventDefault();
    newP.appendChild(edit);
    let wrapper = document.querySelector("#wrapper");
    wrapper.classList.add("hidden");
    newC.followPath(); 
  }

  async function editbtn() {
    divcontainer.classList.remove("hidden");
    document.getElementById("list")!.removeChild(newdiv);
    document.querySelector("#list")!.removeChild(newP);
  let query: URLSearchParams = new URLSearchParams();

    query.set("command", "delete"); //Delete from Database not working because ID undefined
    query.set("collection", "IceOrders");
    query.set("id", newDocumentId);
    let response = await fetch(
      "https://webuser.hs-furtwangen.de/~paulerju/Database/" + "?" + query.toString()
    );}

}
