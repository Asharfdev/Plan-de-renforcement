let products = [
    {
        id: "P1",
        nom: "Laptop",
        prix: 7500,
        categorie: "Electronique"
    },
    {
        id: "P2",
        nom: "Smartphone",
        prix: 4500,
        categorie: "Electronique"
    },
    {
        id: "P3",
        nom: "T-shirt",
        prix: 150,
        categorie: "Vetement"
    },
    {
        id: "P4",
        nom: "Chaussures",
        prix: 600,
        categorie: "Vetement"
    },
    {
        id: "P5",
        nom: "Casque Bluetooth",
        prix: 350,
        categorie: "Accessoire"
    },
    {
        id: "P6",
        nom: "Sac a dos",
        prix: 135,
        categorie: "Accessoire"
    }
];

//Collect products under 200 DH

//  CollectedPodcute()
function CollectedPodcute() {
    let CollectedPodcut = products.filter(product => {
       return product.prix < 200
})
console.log(CollectedPodcut)
}
// Search for a product by its ID

// searshProductByID("P6")
function searshProductByID(id) {
    let result = products.find(product => {
       return product.id === id
});
   console.log(result)
}


// Generate an array containing only the names.
// Mapping() 
function Mapping() {
    let result = products.map(product => {
    return product.nom
}) 
console.log(result)
}

// Calculate the sum of the prices of all the products.
reducetotal();
function reducetotal() {
    const result = products.reduce((total , product)=>{
        return total + product.prix 
    },0);
    console.log(result)
}
 
