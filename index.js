window.addEventListener("load", function(){
    setTimeout(function(){ $("span").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(300).fadeIn(300);}, 500)
   
})

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})



// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
// })

// document.addEventListener('click', () => {
//     cursor.classList.add("expand");

//     setTimeout(() => {
//         cursor.classList.remove("expand");
//     }, 500)
// })