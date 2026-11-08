const input = document.querySelector("#inputItem")
const btnAjouter = document.querySelector("#submitbtn")
const shoppingList = document.querySelector("#shoppingList")


btnAjouter.addEventListener("click", function(){
    const inputValue = input.value.trim()
    if (inputValue === "") {
        return      
    }
    const li = document.createElement("li")
    li.textContent = inputValue
    shoppingList.appendChild(li)
    input.value = "";
     
     const btnDelete = document.createElement("button")
     btnDelete.textContent = "Delete"
     li.appendChild(btnDelete)
     btnDelete.addEventListener("click" , function(){
        li.remove();
        btnDelete.remove();
     });

     const isSold = document.createElement("button")
     isSold.textContent = "Mark as sold"
    li.appendChild(isSold)
     isSold.addEventListener("click" , function(){
        li.classList.toggle("bought");
     });

})




