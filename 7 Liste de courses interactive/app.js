const form = document.querySelector("#itemForm")
const input = document.querySelector("#itemInput")
const submit = document.querySelector("#itemSubmit")
const list = document.querySelector("#list")

submit.addEventListener("submit" , function(event){
    
    const p = document.createElement("P")
    p.textContent = input.value 
    const div = document.createElement("div")
    const supbutton = document.createElement("button")
    const ajouterbutton = document.createElement("button")
    ajouterbutton.style.color = "gre"
    list.appendChild(p)
    div.appendChild(supbutton)
    div.appendChild(ajouterbutton)
    list.appendChild(div)
    
    

    

});