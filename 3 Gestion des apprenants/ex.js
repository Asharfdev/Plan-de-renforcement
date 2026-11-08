let apprenants =[
    {
      id : "A1",
      nom : "Amina",
      age : 15,
      note : 16
    },
    {
      id : "A2",
      nom : "Maria",
      age : 17,
      note : 10
    },
    {
      id : "A3",
      nom : "charaf",
      age : 23,
      note : 19
    },
    {
      id : "A4",
      nom : "labobo",
      age : 19,
      note : 16
    },
    {
      id : "A5",
      nom : "tayeb",
      age : 23,
      note : 12
    }
] 


ajouterApprenant();
function ajouterApprenant() {
     let apprenant =
    {
      id : "A6",
      nom : "salim",
      age : 45,
      note : 17
    }

apprenants.push(apprenant);
// console.table(apprenants);   
}

modifier("A6", 16)
function modifier(id , newMark) {
    apprenants.forEach(apprenant => {
        if (apprenant.id === id ) {
            apprenant.note = newMark
        }
        
    });
    console.table(apprenants);   
}


// todelete("A2")
function todelete(id) {
    apprenants.forEach ((apprenant , index)  => {
     if (apprenant.id === id) {
        apprenants.splice(index , 1);

     }
      console.table(apprenants);
});
}
// searshbyname("salim")
function searshbyname(name) {
    apprenants.forEach(apprenant => {
        if (apprenant.nom === name) {
            console.log(apprenant)
        }      
    });
    
}




