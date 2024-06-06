var currentvalue=1;
document.getElementById('qua').innerHTML=currentvalue;

function decrement(){
    if(currentvalue > 1)
        {
            (currentvalue=currentvalue - 1);
        document.getElementById('qua').innerHTML=currentvalue;
}
}


var currentvalue1=1;
document.getElementById('qua1').innerHTML=currentvalue;

function decrement1(){
    if(currentvalue1 > 1)
        {
            (currentvalue1=currentvalue1 - 1);
        document.getElementById('qua1').innerHTML=currentvalue1;
}
}

var currentvalue3=1;
document.getElementById('qua3').innerHTML=currentvalue3;

function decrement3(){
    if(currentvalue3 > 1)
        {
            (currentvalue3=currentvalue3 - 1);
        document.getElementById('qua3').innerHTML=currentvalue3;
}
}

var cart =0;

var cartButton = document.querySelector('.cart');
var nwDiv = document.querySelector('.produ');

cartButton.addEventListener("click", function() {
    nwDiv.classList.toggle('pro');
})

function addtoCart(){
    
 var nwDi = document.getElementById('proj');
 var mainClass = document.getElementById('anii');


 var div2 = document.createElement('div');
 div2.innerHTML= mainClass.innerHTML;
 div2.className="raj";



 nwDi.appendChild(div2);
 document.getElementById("proj").appendChild(div2);
}
// var mainDiV = document.getElementById('.anii')


// var appendDiv = document.querySelector('.anii');
// var clone = appendDiv.cloneNode(true); // deep clone
// nwDi.appendChild(clone);


function removee() {
    cart = cart-1;
    const removeItems = document.querySelectorAll('.raj');
    removeItems.forEach(item => item.remove());
    
  }




function subta(){
if(cart > 0){
    (cart=cart-1);
    document.getElementById('ca').innerHTML=cart;
}
}




function addtoCart1(){
    
    var nwDi1 = document.getElementById('proj');
    var mainClass1 = document.getElementById('main1');
   
   
    var div3 = document.createElement('div');
    div3.innerHTML= mainClass1.innerHTML;
    div3.className="raju";
   
   
   
    nwDi1.appendChild(div3);
    document.getElementById("proj").appendChild(div3);
   }

   function removee1() {
    const removeItems1 = document.querySelectorAll('.raju');
    removeItems1.forEach(item => item.remove());
  }








  function addtoCart2(){
    
    var nwDi3 = document.getElementById('proj');
    var mainClass3 = document.getElementById('main3');
   
   
    var div4 = document.createElement('div');
    div4.innerHTML= mainClass3.innerHTML;
    div4.className="raje";
   
   
   
    nwDi3.appendChild(div4);
    document.getElementById("proj").appendChild(div4);
   }

   function removee2() {
    const removeItems2 = document.querySelectorAll('.raje');
    removeItems2.forEach(item => item.remove());
  }

