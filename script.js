let slide = document.querySelectorAll(".slide"),
slideArr = Array.from(slide),
next = document.querySelector(".next"),
prev = document.querySelector(".prev");
function showSlide(){
    let active = document.querySelector(".active");
    let currentIndex = slideArr.indexOf(active)
    let prev,next;
    if(currentIndex == 0){
        // prev = slideArr[-1];
        prev = slideArr[slideArr.length-1];
    }
    else{
        prev = slideArr[currentIndex - 1]
    }
    if(currentIndex == slideArr.length-1){
        next = slideArr[0];
    }
    else{
        next = slideArr[currentIndex + 1]
    }
    return [next, prev]
}
function slidePosition(){
    let active = document.querySelector(".active");
    let currentIndex = slideArr.indexOf(active)
    let [next,prev] = showSlide()

    slideArr.map((slide, index)=>{
        if(currentIndex == index){
            slide.style.transform = "translateX(0)";
        }
        else if(slide == prev){
            slide.style.transform = "translateX(-100%)";
        }
        else if(slide == next){
            slide.style.transform = "translateX(100%)";
        }
        slide.addEventListener("transitionend", function(){
            slide.classList.remove("smooth");
        });
    });
}

next.addEventListener("click",()=>{
    let active = document.querySelector(".active");
    let [next] = showSlide();

    active.classList.add("smooth");
    next.classList.add("smooth");
    active.classList.remove("active");
    active.style.transform = "translateX(-100%)";
    next.classList.add("active");
    next.style.transform = "translateX(0)"
    slidePosition()

});
prev.addEventListener("click",()=>{
    let active = document.querySelector(".active");
    let [next, prev] = showSlide();

    active.classList.add("smooth");
    prev.classList.add("smooth");
    active.classList.remove("active");
    active.style.transform = "translateX(-100%)";
    prev.classList.add("active");
    prev.style.transform = "translateX(0)"
    slidePosition()

});