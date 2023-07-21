var sliderImg=document.querySelector(".slider-img");
var images=["2.jpg",'3.jpg','4.jpg'];
var interval;
 var i=0;
 function    prev(){
    if( i <= 0) i=images.length;
        i--;
        return  setImg();
    }
function    next(){
    if(i>=images.length-1)i=-1;
    i++;
    return  setImg();
}
// function    play(){
// if(i < images.length -1){
//     i++;

// }else{
//     i=0;
// }
// sliderImg.setAttribute('src','images/'+images[i]);

// }
//  interval=setInterval(play,1000);
// function stop() {
//     clearInterval(interval);
//   }
  
function    setImg(){
    return  sliderImg.setAttribute('src','images/'+images[i]);
}
function    CatSection(){
    document.getElementById("cats-items").style.display = "block";
    document.getElementById("cats-items").style.display = "flex";
    document.getElementById("dog-items").style.display = "none";
    document.getElementById("bird-items").style.display = "none";
}
function    DogSection(){
    document.getElementById("dog-items").style.display = "block";
    document.getElementById("dog-items").style.display = "flex";
    document.getElementById("cats-items").style.display = "none";
    document.getElementById("bird-items").style.display = "none";
}
function    BirdSection(){
    document.getElementById("bird-items").style.display = "block";
    document.getElementById("bird-items").style.display = "flex";
    document.getElementById("cats-items").style.display = "none";
    document.getElementById("dog-items").style.display = "none";
}

var span=document.querySelector(".top");
window.onscroll=function(){
    if(window.scrollY>=300){
        span.classList.add("show");
        // console.log(scrollY);
    }else{
        span.classList.remove("show");
    }
}


span.onclick=  function(){
    window.scrollTo({
                 top:0,
                behavior:"smooth"
         })
}
//start counter  cart    
var counter=0;
function addCounter(){
counter+=1;
document.getElementById("cartCounter").innerHTML='Cart  Items=' + counter;
}
// end  counter cart

// start    form    validation
// var username=document.getElementById("username");
// var password=document.getElementById("password");
// var form=document.querySelector("form");
// var errorMessage=document.getElementById("errorMessage")

var username = document.getElementById("username");
var password = document.getElementById("password");
var email=document.getElementById("email");
var form = document.querySelector("form");
var errorMessage = document.getElementById("errorMessage");
var re = /\S+@\S+\.\S+/;

form.addEventListener("submit", (e) => {
    const errors = [];

    if(username.value.trim() === ""){
        errors.push("Username required")
    }
    if(username.value.length < 8){
        errors.push("username must be at least 8 charaters")
    }
    if(email.value!==re){
        errors.push("invalid mail")
    }
    if(password.value.length < 4){
        errors.push("Password must be at least 4 charaters")
    }

    if(password.value.length >10){
        errors.push("Password must be less than 10 charaters")
    }

    if(errors.length > 0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');
    }
})




// end      form    validation