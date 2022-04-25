// Store the wallet amount to your local storage with key "amount"
var total_wallet = Number(0)

function book(){
    window.location.href="movies.html"
}




function addTowallet(){

   let money = document.getElementById("amount").value
    
    total_wallet = Number(money) + Number(total_wallet) ;

    // console.log(total_wallet)

    document.getElementById("wallet").innerText= total_wallet;

    localStorage.setItem("amount",JSON.stringify(total_wallet));
}