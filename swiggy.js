/// cart open and close function//////////////////////////////////////////////////

const btncart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnclose=document.querySelector('#close');

//cart open functon
btncart.addEventListener('click',()=>{
    cart.classList.add('cart-active')
})

//cart close function
btnclose.addEventListener('click',()=>{
    cart.classList.remove('cart-active')
})




// document loadagi mudichatgum nadakura function///////////////////////////////////////////
document.addEventListener('DOMContentLoaded',loadfood);
function loadfood(){
    loadcontent()
}
function loadcontent(){
    //remove food item in  cart
    let btnremove=document.querySelectorAll('#cart-remove')
    //foreach na ella button iumm eduthu athula ulla buttonaa ellam thani thaiya edukum
    btnremove.forEach((btn)=>{
        btn.addEventListener('click',removeitems)
    })


    //pruduct qty change
    let btnqty=document.querySelectorAll('.cart-qty')
        btnqty.forEach((input)=>{
            input.addEventListener('change',changeqtyy)
        })

        updatetotal()

}
// change qty

function changeqtyy(){
    if(isNaN(this.value)|| this.value<1){
        this.value=1; 
    }
    loadcontent()
}

//remove items

function removeitems(){
    if(confirm('Are you sure to remove item ')){
        let title=this.parentElement.querySelector('.cart-food-tittle').innerHTML;
       
        itemList=itemList.filter(el=>el.tittle!=title)  
        this.parentElement.remove(); 
        loadcontent();
}
}



// cart button click to add to items card//////////////////////////////////////

//product add cart

let cartbtns=document.querySelectorAll('#add-cart')
cartbtns.forEach((btn)=>{
    btn.addEventListener('click',addcartitem)
})
 
    let itemList=[];

function addcartitem(){
    //antha motha cart parent slected
    let food=this.parentElement;
    // console.log(food);
    let tittle=(food.querySelector('.food-tittle').innerHTML);
    let price=(food.querySelector('.food-price').innerHTML);
    let imgsrc=food.querySelector('.food-img').src;
    // console.log(tittle,price,imgsrc);
    let newproduct=createcartproduct(tittle,price,imgsrc);

    let newobj={tittle,price,imgsrc}
    //check alredy irukura cart

    if(itemList.find((el)=>el.tittle==newobj.tittle))
    {
        alert("This product already added in cart")
        return;
    }
    else{
        itemList.push(newobj)
    }

    let element=document.createElement('div')
    element.innerHTML=newproduct
    let cartbacket=document.querySelector('.cart-conent')
    cartbacket.append(element);
    loadcontent();
}
function createcartproduct(tittle,price,imgsrc){
    return`
                    <div class="cart-box">
                        <img src="${imgsrc}" class="cart-img"/>
                        <div class="detail-box">
                            <div class="cart-food-tittle">${tittle}</div>
                            <div class="price-box">
                                <div class="cart-price">${price}</div>
                                <div class="cart-amt">${price}</div>
                            </div>
                            <input type="number" value="1" class="cart-qty">
                        </div>
                        <i class="fa-solid fa-trash" id="cart-remove"></i>
                    </div> 
    `
}

// find update cart total

function updatetotal(){
    const cartitem=document.querySelectorAll('.cart-box')
    const totalvalue=document.querySelector('.total-price')

    let totalamount=0;
    cartitem.forEach(product=>{
      let  pr=product.querySelector('.cart-price')
      let price=parseFloat(pr.innerHTML.replace("Rs.",""))
      let qty=product.querySelector('.cart-qty').value
      totalamount+=(price*qty)
      product.querySelector('.cart-amt').innerText="Rs."+(price*qty)
    });
    totalvalue.innerHTML='Rs.'+totalamount


    // add count in cart//

    const count=document.querySelector('.cart-count')
    let totalprodect=itemList.length;
    count.innerHTML=totalprodect;

    if(totalprodect==0){
        count.style.display='none'
    }
    else{
        count.style.display='block'
    }
}


//popup
order=document.querySelector('.btn-order')

order.addEventListener('click',function(){
    let item = itemList.length
    if(item==0){
      alert('please any order in the product')  
    }
    else{
    document.querySelector('.popup').style.display='flex'
    cart.classList.remove('cart-active')
}

})

orde=document.querySelector('.pop-btn')

orde.addEventListener('click',function(){
    document.querySelector('.popup').style.display='none'
    //cart close function

    

})


