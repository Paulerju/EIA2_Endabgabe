namespace IcecreamShop{

    export interface data  {
        
            [key: string]: string | string[];
          } 
          let edit = document.createElement("button");   // edit button erstellen
          edit.setAttribute("id", "edit");
          edit.innerHTML = "Edit";
          let newdiv = document.createElement("div");    // div element für to do erstellen
          newdiv.setAttribute("id", "newtask");
          let newP = document.createElement("p");    // p element für to do erstellen
          newP.setAttribute("id", "newp");
        
          let divcontainer = <HTMLElement>document.querySelector("#wrapper");
          export let taskArray: String[] = [];
        
          export function hndlformular() {
            edit.addEventListener("click", editbtn);
            document.querySelector("#but2")!.addEventListener("click", addbtn);
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
              selectedNumber
            ];
        
            console.log("customerData: ", customerData);
        
            return customerData;
          }
        
          console.log(getData)
        
          export interface FormDataJSON {
            [key: string]: string | string[];
          }
        
          export let json: FormDataJSON = {};
        
          export let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#but2");
        
          export async function sendTask(_event: Event): Promise<void> {
            let formData: FormData = new FormData(); // No need to use 'form' anymore
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
            let url = `https://webuser.hs-furtwangen.de/~paulerju/Database/?${urlParams}`;
            await fetch(url);
            //  alert("Task Submitted!");
          }

   export async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    let offer: string = await response.text();
    let gotdata: data = JSON.parse(offer);
    // gotdata is empty, offer is a string, cant read the stuff out
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
  }

  function editbtn(): void { 
    divcontainer.classList.remove("hidden");
    document.getElementById("list")!.removeChild(newdiv);
    document.querySelector("#list")!.removeChild(newP);
  }
  
            
}