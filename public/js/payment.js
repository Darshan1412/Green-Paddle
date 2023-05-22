const paymentform=document.querySelector('.paymentform');
let name=document.getElementById('uname');
let email=document.getElementById('email');
let phone=document.getElementById('address');
let city=document.getElementById('city');
let state=document.getElementById('state');
let zip=document.getElementById('zip');
let ccname=document.getElementById('ccname');
let ccnum=document.getElementById('ccnum');



paymentform.addEventListener('check',(e)=>{
    e.preventDefault();

    let Data={
        uname: uname.value,
        email: email.value,
        address: address.value,
        city: city.value,
        state: state.value,
        zip: zip.value,
        ccname: ccname.value,
        ccnum: ccnum.value 

    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST','/pay');
    xhr.setRequestHeader('content-type' , 'application/json');
     xhr.onload=function(){
        alert('Thank You ')
    //  
            uname.value = '';
            email.value = '';
            address.value = '';
            city.value = '';
            state.value = '';
            zip.value = '';
            ccname.value = '';
            ccnum.value = '';
          
     }

    xhr.send(JSON.stringify(Data))
})

