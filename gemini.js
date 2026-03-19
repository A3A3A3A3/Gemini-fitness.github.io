function joinNow(){

alert("Thank you for joining Gemini Fitness!");

}
function joinNow(){

alert("Welcome to Gemini Fitness!");

}

function sendMessage(){

alert("Message sent successfully!");

}
function scrollDown() {
  window.scrollBy({
    top: 1000,
    behavior: "smooth"
  });
}

document.querySelectorAll(".studio-slider").forEach(slider => {

let images = slider.querySelectorAll("img");
let prev = slider.querySelector(".prev");
let next = slider.querySelector(".next");

let index = 0;

function showImage(i){
images.forEach(img => img.classList.remove("active"));
images[i].classList.add("active");
}

next.onclick = ()=>{
index++;
if(index >= images.length) index = 0;
showImage(index);
};

prev.onclick = ()=>{
index--;
if(index < 0) index = images.length - 1;
showImage(index);
};

});

let boxes = document.querySelectorAll(".exp-box");
let bg = document.getElementById("bg");

boxes.forEach(box => {

  box.addEventListener("mouseenter", ()=>{

    // background change (same tera wala)
    bg.style.backgroundImage = `url(${box.dataset.img})`;

    // sabka active hata
    boxes.forEach(b => b.classList.remove("active"));

    // current ko active bana (lock ho jayega)
    box.classList.add("active");

  });

});

