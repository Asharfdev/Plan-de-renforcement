const profileCard = document.querySelector(".profileCard");
const blueBtn = document.querySelector("#blueBtn");
const greenBtn = document.querySelector("#greenBtn");
const purpleBtn = document.querySelector("#purpleBtn");
const hideinfo = document.querySelector("#toggleBtn");

blueBtn.addEventListener("click", function(){
     profileCard.classList.remove( "bg-white", "bg-green-500", "bg-purple-500"
    );
    profileCard.classList.add("bg-blue-500");

});
greenBtn.addEventListener("click", function(){
      profileCard.classList.remove( "bg-white", "bg-blue-500", "bg-purple-500"
    );
    profileCard.classList.add("bg-green-500");
});

purpleBtn.addEventListener("click", function(){
     profileCard.classList.remove(
        "bg-white", "bg-green-500", "bg-blue-500"
    );
    profileCard.classList.add("bg-purple-500");
});

hideinfo.addEventListener("click" , function (){
     hideinfo.textContent = "Show info" 
     profileInfo.classList.toggle("hidden");
});

