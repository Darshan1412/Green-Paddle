window.onload = function () {
    var getdata = sessionStorage.getItem("products-1");
    var setdata = JSON.parse(getdata);
    //   console.log(setdata.name);
    var datadiv = `<div class="row mt-3">
    <div class="container mt-4" id="maindiv">
      <div class="row mt-3">
        <div class="fullimg col col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
          <div class="image ">
            <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false"
              data-bs-interval="false">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${setdata?.image1}" class="d-block proImg" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="${setdata?.image2}" class="d-block proImg" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="${setdata?.image3}" class="d-block proImg" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="des">
            <h3 class="deshead">Details</h3>
            <p class="despra">${setdata?.product}</p>
            <p class="despra">Price RS ${setdata?.price}</p>
            <hr class="line">
            <h3 class="deshead">Description</h3>
            <p class="desPra">${setdata?.description}</p>
          </div>
        </div>
        <div class="detail mt-1 col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div class="amount">
            <p class="Ahead price">Rs ${setdata?.price} </p>
            <p class="despra head">${setdata?.product}</p>
            <p class="card-text Location"><small class="text-muted">${setdata?.postTime}</small></p>
          </div>
          <div class="SP">
            <p class="Ahead sell">Seller Description</p>
            <p class="despra head">${setdata?.sellername}</p>
            <div id="chatUser" onclick="SellerNum()">
              <p>Chat With Owner</p>
            </div>
          </div>
         
        </div>
      </div>`;
    document.getElementById("maindiv").innerHTML = datadiv;

    
  };
  
  function SellerNum() {
    var getdata = sessionStorage.getItem("products-1");
    var setdata = JSON.parse(getdata);
    var num = `Seller Number\n${setdata.sellernum}`;
    alert(num);
  }
//    <div class="SP map">
//   <p class="Ahead sell">Post in</p>
//   <div class="mapouter">
//     <div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no"
//         marginheight="0" marginwidth="0"
//         src="https://maps.google.com/maps?width=300&amp;height=200&amp;hl=en&amp;q=korangi &amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a
//         href="https://piratebay-proxys.com/"></a></div>

//   </div>
// </div>