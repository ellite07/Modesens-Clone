var items = JSON.parse(localStorage.getItem("men"))

var cart = JSON.parse(localStorage.getItem("CartItems")) || [];
items.map(creation)
function creation(elem)
{   
    var image = document.createElement("img");
    var div = document.createElement("div");
    
    var x = document.createElement("i"); 
    var y = document.createElement("i");
    var div1 = document.createElement("div")
    var div2 = document.createElement("div")
    div1.setAttribute("class", "heart");
    div2.setAttribute("class", "bell");
    x.setAttribute("class", "far fa-heart")
    y.setAttribute("class", "far fa-bell");
    image.setAttribute("src", elem.imgURL)
    image.setAttribute("width", "70%");
    image.setAttribute("height", "58%");
    var body = document.querySelector("body")
    var con = document.querySelector("#container");
    var name = document.createElement("h3")
    var price = document.createElement("h4")
    var store = document.createElement("p")
    var myList = document.querySelector("#myList")
    div1.addEventListener("click", function ()
    {
        div1.style.color = "red"; 
        myList.style.display = "grid";
        addToCart(elem)
    })
    var cross = document.querySelector("#cross")
    cross.addEventListener("click", function ()
    {
        myList.style.display = "none";
    })
    store.setAttribute("class","stores")
    name.textContent = elem.name;
    price.textContent = elem.price;
    store.textContent = elem.store;
    var p = document.createElement("p")
    p.textContent = elem.itemDes
    con.append(div)
    div1.append(x)
    div2.append(y)
    div.append(image,div1,div2,name,p,price,store);
    
}
function addToCart(data)
{   
    cart.push(data);
     console.log(cart);
    localStorage.setItem("CartItems", JSON.stringify(cart));
}