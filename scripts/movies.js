// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id 
let x = JSON.parse(localStorage.getItem("amount"))
// console.log(x)
document.getElementById("wallet").innerText = x


async function main(){
    let data = await searchMovies();

    if(data == undefined){
        return false
    }
    
     appendMovies(data)
}


function debounce(func,delay){

    if (id){
        clearTimeout(id);
    }
     id =setTimeout(function(){
        func()
    },delay);
}

async function searchMovies(){
    try {
        const query = document.getElementById("search").value;

        const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f0ab8ab7&s=${query}`);

        let data = await res.json()
        
        let movies = data.Search

         //console.log(movies)

         return movies
        // console.log(data)
    } 
        catch (error) {
        console.log(error)
    }
}


function appendMovies(data){
    document.getElementById("movies").value=""
    data.map(function(el){

        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = el.Poster ;

        let name = document.createElement("p")
        name.innerText = el.Title ;

        let btn = document.createElement("button")
        btn.innerText = "Book Now"
        btn.addEventListener("click",function(){
            gotoAdd(el)
        })
        btn.setAttribute("class","book_now")


        div.append(image,name,btn)
        document.getElementById("movies").append(div)
        
    })
}


function gotoAdd(el){
    localStorage.setItem("movie", JSON.stringify(el))
    window.location.href="checkout.html"
}

