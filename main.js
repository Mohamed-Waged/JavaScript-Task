var allProducts =document.querySelectorAll(".store .product .item");
var content = document.querySelector(".content .img");
var price = document.querySelectorAll(".price");
var order = document.querySelector(".order"); 
var showPrice = document.querySelector("#show-price");
var showTotalPrice = document.querySelector("#show-total-price");
var totalPrice = 0;
var count= document.querySelector(".count") 
var num =1

allProducts.forEach(function(elements){
    elements.querySelector(".btn").onclick =function(){
        content.innerHTML += elements.querySelector(".image").innerHTML                 ///  لو عايز اعرض الصورة
        //content.innerHTML += elements.querySelector(".name").innerHTML + "  "          ///  لو عايز اعرض الاسم
        totalPrice += +( elements.querySelector(".price").innerHTML)
        if(content.innerHTML != ""){
            order.style.display = "block"
            showPrice.style.display = "block"
            content.style.border = "1px solid #9491914f"
            content.style.borderRadius = "4px"
            count.innerHTML = num++
        }
}
});
function show(){
    showTotalPrice.style.display = "block"
    showTotalPrice.innerHTML =`Total Price = ${totalPrice} EGP`
}
showPrice.addEventListener("click",show) 