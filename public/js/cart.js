
let carts = document.querySelectorAll('.add-cart');


let products = [
    {
        name: "BTwin My Bike",
        tag: "BTwin My Bike",
        price: 60,
        inCart: 0,
    },
    {
        name: "Xtal Muse",
        tag: "Xtal Muse",
        price: 60,
        inCart: 0,
    },
    {
        name: "Hero Sprint Kyoto",
        tag: "Hero Sprint Kyoto",
        price: 70,
        inCart: 0,
    },
    {
        name: "Hero Sprint Rapid",
        tag: "Hero Sprint Rapid",
        price: 90,
        inCart: 0,
    },
    {
        name: "Btwin Rockrider 300",
        tag: "Btwin Rockrider 300",
        price: 100,
        inCart: 0,
    },
    {
        name: "Hercules Torrent VX",
        tag: "Hercules Torrent VX",
        price: 100,
        inCart: 0,
    },
    {
        name: "Powertrons Crampo",
        tag: "Powertrons Crampo",
        price: 180,
        inCart: 0,
    },
    {
        name: "Kionic",
        tag: "Kionic",
        price: 200,
        inCart: 0,
    },
    {
        name: "Giordano Viaggio",
        tag: "Giordano Viaggio",
        price: 250,
        inCart: 0,
    },
    {
        name: "Schwinn Twinn",
        tag: "Schwinn Twinn",
        price: 300,
        inCart: 0,
    },
    {
        name: "Ola S1",
        tag: "Ola S1",
        price: 750,
        inCart: 0,
    },
    {
        name: "Aether 450x",
        tag: "Aether 450x",
        price: 700,
        inCart: 0,
    },
    {
        name: "Bajaj Chetak ",
        tag: "Bajaj Chetak ",
        price: 650,
        inCart: 0,
    },
    {
        name: "Ampere Magnus Ex",
        tag: "Ampere Magnus Ex",
        price: 600,
        inCart: 0,
    },
    {
        name: "Tvs Iqube",
        tag: "Tvs Iqube",
        price: 650,
        inCart: 0,
    },
    {
        name: "Odysse Evoqis",
        tag: "Odysse Evoqis",
        price: 900,
        inCart: 0,
    },
    {
        name: "Ultraviolette F77",
        tag: "Ultraviolette F77",
        price: 950,
        inCart: 0,
    },
    {
        name: "Matter Aera",
        tag: "Matter Aera",
        price: 800,
        inCart: 0,
    },
    {
        name: "Revolt Rv400",
        tag: "Revolt Rv400",
        price: 800,
        inCart: 0,
    },
    {
        name: "Kabira Km 3000",
        tag: "Kabira Km 3000",
        price: 850,
        inCart: 0,
    },
    {
        name: "Hyundai Ioniq6",
        tag: "Hyundai Ioniq6",
        price: 3000,
        inCart: 0,
    },
    {
        name: "MG ZS",
        tag: "MG ZS",
        price: 2800,
        inCart: 0,
    },
    {
        name: "Mahindra XUV 400",
        tag: "Mahindra XUV 400",
        price: 2800,
        inCart: 0,
    },
    {
        name: "Kia EV6",
        tag: "Kia EV6",
        price: 2400,
        inCart: 0,
    },
    {
        name: "Tata Tigor.Ev",
        tag: "Tata Tigor.Ev",
        price: 2000,
        inCart: 0,
    },
]

for(let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers ) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


//this function changes the total items number shown in top right nav
function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
        console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
        console.log("action running in prod");
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        let currentProduct = product.tag;
    
        if( cartItems[currentProduct] == undefined ) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        } 
        cartItems[currentProduct].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = { 
            [product.tag]: product
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost( product, action ) {
    let cart = localStorage.getItem("totalCost");

    if( action) {
        cart = parseInt(cart);

        localStorage.setItem("totalCost", cart - product.price);
    } else if(cart != null) {
        
        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart + product.price);
    
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);

    let productContainer = document.querySelector('.products');
    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item, index) => {
            productContainer.innerHTML += 
            `<div class="product"><ion-icon name="close-circle"></ion-icon><img src="./image/${item.tag}.png" />
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">Rs.${item.price}.00</div>
            <div class="quantity">
            <ion-icon class="decrease" name="caret-back-circle"></ion-icon>
                    <span>${item.inCart}</span>
                    <ion-icon class ="increase "name="caret-forward-circle"></ion-icon>
            </div>
            <div class="total">Rs.${item.inCart * item.price}.00</div>`;
        });
    
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">Rs.${cart}.00</h4>
                <div class="proceed place-order-btn " >
                <a  href="#">Place Order</a> 
                 </div>
            </div>`
          
        deleteButtons();
        manageQuantity();
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    // let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            let currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent;
            console.log(currentProduct + "new");

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            let currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent;
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.querySelector('span').textContent;
           console.log(productName)
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
}

onLoadCartNumbers();
displayCart();


// const placeOrderBtn = document.querySelector('.place-order-btn');

// placeOrderBtn.addEventListener('click',() => {
    
//     fetch('/stripe-checkout',{
//         method:'post',
//         body:JSON.stringify({
//             items:JSON.parse(localStorage.getItem('productsInCart')),
//         })
//     })
//     .then(res => res.json())
//     .then(url => {
//         location.href = url
//     })
//     .catch(err => console.log(err))
// })




const placeOrderBtn = document.querySelector('.place-order-btn');

placeOrderBtn.addEventListener('click',(e) => {
console.log(localStorage.getItem('totalCost'))
    var options = {
    "key": "rzp_test_qCbga03jedC1C5", // Enter the Key ID generated from the Dashboard
    "amount": JSON.parse(localStorage.getItem('totalCost'))*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Green Paddle",
    "description": "", 
    "image": "/image/Green Paddle.jpeg",
    "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)

        var settings = {
            "url": "/api/payment/verify",
            "method": "POST",
            "timeout": 0,
            "headers": {
            "Content-Type": "application/json"
  },
  "data": JSON.stringify({response}),
}

    },
    "theme": {
        "color": "#99cc33"
    }
    };

 
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
rzp1.open();
    e.preventDefault();
});
   
var orderId ;
$(document).ready(function(){
    var settings = {
  "url": "/create/orderId",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "amount": JSON.parse(localStorage.getItem('totalCost'))*100
  }),
};

//creates new orderId everytime
$.ajax(settings).done(function (response) {

  orderId=response.orderId;
  console.log(orderId);
  $("button").show();
});
});

