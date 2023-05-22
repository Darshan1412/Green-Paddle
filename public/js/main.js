var data = [];
  
  var onClickFunc = function (item) {
    console.log(item);
    sessionStorage.setItem("products-1", JSON.stringify(item));
    var getUserMail = sessionStorage.getItem("mail");
      location.href = "products.html";
    
  };
  
  window.onload = function () {
    var getDataFromStorage = localStorage.getItem("DATA");
    if (!getDataFromStorage) {
      localStorage.setItem("DATA", JSON.stringify(data));
    }
   
      console.log("called onload inside index.html")
    if (localStorage.getItem("isloggedin") == "true") {
      document.getElementById("profile-nav").style.display = "flex"
      document.getElementById("login-nav").style.display = "none"
      // $("#logout-link").show();
    } else {
      // $("login-link").show();
      document.getElementById("profile-nav").style.display = "none"
      document.getElementById("login-nav").style.display = "flex"
      // $("#register-link").show();
    }


    var getData = localStorage.getItem("DATA");
    var Arrangedata = JSON.parse(getData);
  
    var row = null;
    Arrangedata.forEach(function (item, index) {
      if (index % 4 === 0) {
        row = document.createElement("div");
        row.className = "row mt-1";
      }
      var itemContainer = document.createElement("div");
      itemContainer.className =
        "card mt-3 col col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3";
      itemContainer.onclick = function () {
        onClickFunc(item);
      };
      // itemContainer.onclick = onClickFunc(item);
      var datahtml = `<div class="card-div">
                   <img src="${item.image1}" class="cardimg car" alt="...">
                 </div>
                 <div id='cardbo' class="card-body">
                   <p class="card-text">${item.product}</p><br>
                   <h5 class="card-title">Rs ${item.price}</h5><br>
                   <p class="card-text"><small class="text-muted">${item.postTime}</small></p>
                 </div>
               `;
      itemContainer.innerHTML = datahtml;
      row?.appendChild(itemContainer);
      document.getElementById("product-container")?.appendChild(row);
  
      // console.log(getData);
    });
  
    // console.log(data);
    // var logout = (document.getElementById("log").innerText = "Login");
    // var logvalue = sessionStorage.setItem("log", "logout");
  };
  
  function post() {
    var sellerName = document.getElementById("sellername").value;
    var sellerNum = document.getElementById("sellernum").value;
    var productTitle = document.getElementById("productName").value;
    var price = document.getElementById("price").value;
    var Location = document.getElementById("Location").value;
    var productDetail = document.getElementById("productDetail").value;
    var Image1 = document.getElementById("img1").value;
    var Image2 = document.getElementById("img2").value;
    var Image3 = document.getElementById("img3").value;
    var obj = {
      sellername: sellerName,
      sellernum: sellerNum,
      product: productTitle,
      price: price,
      image1: Image1,
      image2: Image2,
      image3: Image3,
      description: productDetail,
      postTime: Location,
    };
  
    var getData = localStorage.getItem("DATA");
    var Arrangedata = JSON.parse(getData);
    Arrangedata.push(obj);
    localStorage.setItem("DATA", JSON.stringify(Arrangedata));
    // console.log(Arrangedata);
    location.href = "ev.html";
    // match = false;
    // sessionStorage.setItem("SetData", JSON.stringify(data));
    // console.log(setdata);
  }
  
  function loggedinfalse(){
    localStorage.setItem("isloggedin", "false")
  }
  function forsell(){
  if(localStorage.getItem("isloggedin")=="true"){
    location.href='/sell.html';
  } else{
    alert("SignIn Required to post your product ");
  }
  }