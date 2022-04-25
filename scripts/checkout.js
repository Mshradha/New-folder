// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let arr=[]
let data11 = JSON.parse(localStorage.getItem("movie"))
arr.push(data11)
showDetails(arr)

function showDetails(arr){

    arr.map((el) => {

            let h21 = document.createElement("h2")
            h21.innerText = el.Title

            let image = document.createElement("img")
            image.src = el.Poster

            document.getElementById("movie").append(h21, image)
        })
}
















let x = JSON.parse(localStorage.getItem("amount"))
// console.log(x)
document.getElementById("wallet").innerText = x




function bookticket(){

    let seats = document.getElementById("number_of_seats").value
    // console.log(seats)

    let total = (Number(seats)*Number(100))

    if(total>x){
        alert("Insufficient Balance!")
    }
    else{
        alert("Booking successful!")
    
    
    x = Number(x)-Number(total);
    document.getElementById("wallet").innerText = x
    console.log(x)
    localStorage.setItem("amount",JSON.stringify(x))

    }

 }



   