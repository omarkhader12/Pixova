
let c1=0;
let c2=0;
let c3=0;
let c4=0;
    
const intervalId = setInterval(() => {
    if (c1 < 71) {
        c1 += 1;
        document.querySelector(".number").innerHTML = c1 + "%";
    } else {
       
        clearInterval(intervalId);
    }
},29);
setInterval(()=>{
    if(c2<=88){
    c2+=1;
    document.querySelector(".number1").innerHTML=c2+"%";
    }
    else{
        console=0;
        return;
    }
},22)
setInterval(()=>{
    if(c3<=87){
    c3+=1;
    document.querySelector(".number2").innerHTML=c3+"%";
    }
    else{
        console=0;
        return;
    }
},20)
setInterval(()=>{
    if(c4<62){
    c4+=1;
    document.querySelector(".number3").innerHTML=c4+"%";
    }
    else{
        console=0;
        return;
    }
},25)

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  });

  function loadingDone() {
    const element = document.querySelector(".loading");
    element.classList.add("done");
    
   
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 500);

    setTimeout(() => {
        element.remove(); // Removes the loading div entirely
        document.body.style.overflow = "auto"; // Enable scrolling
      }, 5000);
  }

  window.onload = loadingDone;


  const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

// Update slider position
function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Next button functionality
nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 2) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the start
  }
  updateSlider();
});

// Previous button functionality
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 2; // Loop back to the end
  }
  updateSlider();
});

// Adjust slider on window resize
window.addEventListener("resize", updateSlider);

// Select all elements with the class "reveal"
const reveals = document.querySelectorAll('.reveal');

// Function to check if an element is in the viewport
function revealOnScroll() {
    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const revealPoint = 10; // When to trigger (adjust as needed)

        if (elementTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

// Attach the function to the scroll event
window.addEventListener('scroll', revealOnScroll);

// Initial check
revealOnScroll();
