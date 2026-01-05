
const slider = document.querySelector('.slider') 
const slides = document.querySelectorAll('.slide')

let current = 0 

const prevButton = document.querySelector('.prev') 
const nextButton = document.querySelector('.next')

const dots = document.querySelectorAll('.dot')

function updateCurrent(index) {
  slides.forEach(slide => {
    slide.classList.remove('active') 
  })

    dots.forEach(dot => {
    dot.classList.remove('active-dot')
  })
  
  slides[index].classList.add('active') 
  dots[index].classList.add('active-dot')
}

function nextSlide() {
  current++
    
  if(current === slides.length-1) {
    current = slides.length-1
    nextButton.style.visibility = "hidden"
  } else if (current > 0 && current < slides.length) {
    prevButton.style.visibility = "visible"
  }
  
  updateCurrent(current)
}

function prevSlide() {
  current--
  
  if(current === 0) {
    current = 0
    prevButton.style.visibility = "hidden"
  } else if (current > 0 && current < slides.length) {
    nextButton.style.visibility = "visible"
  }
  
  updateCurrent(current) 
  }

  function init() {
    updateCurrent(0)
  }
  init()

  nextButton.addEventListener('click', () => {
    nextSlide()
  })

  prevButton.addEventListener('click', () => {
    prevSlide()
  })

  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
      
      updateCurrent(index) 
      switch (index) {
      case 0:
        prevButton.style.visibility = "hidden"
        nextButton.style.visibility = "visible"
        break; 
      case dots.length-1:
        nextButton.style.visibility = "hidden"
        prevButton.style.visibility = "visible"
        break;
      default:
        nextButton.style.visibility = "visible"
        prevButton.style.visibility = "visible"
        }
    })
  })


