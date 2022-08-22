// display
document.getElementsByClassName("add-cart")[0].addEventListener("click",function(){display(0)});
document.getElementsByClassName("add-cart")[1].addEventListener("click",function(){display(1)});
document.getElementsByClassName("add-cart")[2].addEventListener("click",function(){display(2)});
document.getElementsByClassName("add-cart")[3].addEventListener("click",function(){display(3)});
document.getElementsByClassName("add-cart")[4].addEventListener("click",function(){display(4)});
document.getElementsByClassName("add-cart")[5].addEventListener("click",function(){display(5)});
document.getElementsByClassName("add-cart")[6].addEventListener("click",function(){display(6)});
document.getElementsByClassName("add-cart")[7].addEventListener("click",function(){display(7)});
function display(val){
document.getElementsByClassName("cart")[val].style.cssText="display: flex;";
}
// buttons(+)
const num=[0,0,0,0,0,0,0,0]
document.getElementsByClassName("cart-btn-1")[0].addEventListener("click",function(){increment(0),value()});
document.getElementsByClassName("cart-btn-1")[1].addEventListener("click",function(){increment(1),value()});
document.getElementsByClassName("cart-btn-1")[2].addEventListener("click",function(){increment(2),value()});
document.getElementsByClassName("cart-btn-1")[3].addEventListener("click",function(){increment(3),value()});
document.getElementsByClassName("cart-btn-1")[4].addEventListener("click",function(){increment(4),value()});
document.getElementsByClassName("cart-btn-1")[5].addEventListener("click",function(){increment(5),value()});
document.getElementsByClassName("cart-btn-1")[6].addEventListener("click",function(){increment(6),value()});
document.getElementsByClassName("cart-btn-1")[7].addEventListener("click",function(){increment(7),value()});
function increment(i){
    num[i]=num[i]+1;
    document.getElementsByClassName("price")[i].innerHTML = num[i];
}
// button(-)
let temp=1
document.getElementsByClassName("cart-btn-2")[0].addEventListener("click",function(){decrement(0),value()});
document.getElementsByClassName("cart-btn-2")[1].addEventListener("click",function(){decrement(1),value()});
document.getElementsByClassName("cart-btn-2")[2].addEventListener("click",function(){decrement(2),value()});
document.getElementsByClassName("cart-btn-2")[3].addEventListener("click",function(){decrement(3),value()});
document.getElementsByClassName("cart-btn-2")[4].addEventListener("click",function(){decrement(4),value()});
document.getElementsByClassName("cart-btn-2")[5].addEventListener("click",function(){decrement(5),value()});
document.getElementsByClassName("cart-btn-2")[6].addEventListener("click",function(){decrement(6),value()});
document.getElementsByClassName("cart-btn-2")[7].addEventListener("click",function(){decrement(7),value()});
function decrement(i){
    num[i]> 0  ?   num[i]=num[i]-1  :  num[i]=0
    document.getElementsByClassName("price")[i].innerHTML = num[i];    
}

// Total
function  value(){
    let sum=0;
for (let i = 0; i < num.length; i += 1) {
    sum += num[i];
  }
sum=sum*40;
document.getElementsByClassName("value")[0].innerHTML=sum;
}