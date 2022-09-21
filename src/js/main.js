

//------- image-------//
var slide = document.getElementById('img');
var image=["src/img/testimonial-1.jpg","src/img/testimonial-2.jpg","src/img/testimonial-3.jpg"]
var len = image.length;
var index =0;

function back(){
    if(index==0){
        index=len-1;
        img.src=image[index];
    }else{
        index--;
        img.src=image[index];
    }
}
function next(){
    if(index==len-1){
        index=0;
        img.src=image[index];
    }else{
        index++;
        img.src=image[index];
    }
}
// -=--------------- auto-------------//

var t=null;
var flag = 0;
function play() {
    if (flag == 0) {
        t = setInterval( function next() {
           
                if(index==len-1){
                    index=0;
                    img.src=image[index];
                }else{
                    index++;
                    img.src=image[index];
                }
            
        }, 5000);
        flag = 1;
    }
}
play();



//----------text-----------//
// var slide = document.getElementById('text');
// var text=[" Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless."," It looks perfect on all major browsers, tablets, and mobile devices. All files are organized we believe it will be easy to use and edit them. This template is well organized and very easy to customize. "," All your client websites if you are an agency or freelancer. It got all the tools needs to create super fast responsive websites with amazing user experience. We have added a Dark version with RTL supported. "]
// var len = arr.length;
// var index =0;
// function pre(){
//     if(index==0){
//         index=len-1;
//         text.src=text[index];
//     }else{
//         index--;
//         text.src=text[index];
//     }
// }



// ----------validate-contact----------//


function validate(){
    var Username = document.getElementById("username");
    var Email =document.getElementById('email');
    var Phone = document.getElementById("phone");
    var status = true;


    if(Username.value==""){
        document.getElementById("errol-name").innerText="Pleease enter your name"
        document.getElementById("username").style="border:1px solid red"
        status = false;
    }else{
        status = true;
    }

    if(Email.value==""){
        document.getElementById('errol-email').innerText="Pleease enter your Email"
        document.getElementById("email").style="border:1px solid red"
        status = false;
    } else{
        status = true;
    }
     if(Phone.value==""){
        document.getElementById("errol-phone").innerText="Pleease enter your Phone"
        document.getElementById('phone').style="border:1px solid red"
     }else{
        status = true;
    }

    return status;
}




///--------- menu-mobiole-------//

    var mobile = document.querySelector('#mobile');
    var menuMobile = document.querySelector('.menu-mobile');
    mobile.addEventListener('click',()=>{
        menuMobile.classList.toggle("acctive")
    })
 