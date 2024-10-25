'use strict'



// Hamburger Menu start

let openMenu = document.querySelector('#open');
let closeMenu = document.querySelector('#close');
let linksEl = document.querySelector('#linkCon');

closeMenu.addEventListener('click',()=>{
    linksEl.style.right = '-100%'
    
    // linksEl.style.display = 'none'

})

openMenu.addEventListener('click',()=>{
    linksEl.style.right = '0'
    
    // linksEl.style.display = 'inline-block'
    
})


// Hamburger Menu end

// Slider Starts
let allSlidesEl = document.querySelectorAll('.general-div');
let rightBtnEl = document.querySelector('#rightBtn');
let leftBtnEl = document.querySelector('#leftBtn');
let activeIndex = 0;

const foreward = ()=>{
    activeIndex++
    for(let i = 0; i< allSlidesEl.length ;i++){
        allSlidesEl[i].classList.remove('show')
        if(activeIndex >= allSlidesEl.length){
            activeIndex = 0
        }
        allSlidesEl[activeIndex].classList.add('show')
    }
    
}

rightBtnEl.addEventListener('click',()=>{
    foreward()
})

leftBtnEl.addEventListener('click',()=>{
    

    if(activeIndex == 0){
        activeIndex = allSlidesEl.length -1
        
    }
    activeIndex--;

    for(let i = 0; i < allSlidesEl.length; i++){
        allSlidesEl[i].classList.remove('show')
        
        allSlidesEl[activeIndex].classList.add('show')
        
    }
    // console.log('worked')
})

setInterval(()=>{
    foreward()
},5000)



// Slider Ends



// BMI calculater Starts
let hieghtEl = document.querySelector('#hieght');
let wieghtEl = document.querySelector('#wieght');
let subBtnEl = document.querySelector('#subBtn');
let formEL = document.querySelector('#formEl');
let bmiScoreEL = document.querySelector('#bmiScore');
let resetBtn = document.querySelector('#resetBtn');

let underW = document.querySelectorAll('#underw');
let normalW = document.querySelectorAll('#normal');
let overW = document.querySelectorAll('#overw');
let obeseW = document.querySelectorAll('#obese');



formEL.addEventListener('submit',(e)=>{
    e.preventDefault()
    let userHieght = (hieghtEl.value) * (hieghtEl.value)
    let bmi = wieghtEl.value / userHieght.toFixed(2);
    let pEl = document.createElement('p')
    pEl.textContent =  `Your BMI: ${bmi.toFixed(2)}`
    pEl.setAttribute('id', 'bmiScore')   
    formEL.appendChild(pEl)
    
    resetBtn.style.display = 'block'
    if(bmi < 18.5){
        for(let i of underW){
            i.classList.add('bmi')
            
        }
        
    }else if(bmi >= 18.5 && bmi < 24.9){
        for(let i of normalW){
            i.classList.add('bmi')
        }
        
    }else if(bmi >= 25 && bmi < 29.9){
        for(let i of overW){
            i.classList.add('bmi')
        }
        subBtnEl.innerHTML = 'Reset'
    }else if(bmi > 30){
        for(let i of obeseW){
            i.classList.add('bmi')
        
        }
        
    }
    resetBtn.classList.add('resShown');
    
    
    
})




resetBtn.addEventListener('click',()=>{
    for(let i of underW){
        i.classList.remove('bmi');
        
    }
    for(let i of normalW){
        i.classList.remove('bmi')
    }
    for(let i of overW){
        i.classList.remove('bmi')
    }
    for(let i of obeseW){
        i.classList.remove('bmi')
    
    }
    
    
    
    let pTag = formEL.getElementsByTagName('p')
    pTag[0].remove();
    formEL.reset();
    hieghtEl.value = '';
    wieghtEl.value = '';
    resetBtn.style.display = 'none'
    
    
    
})


// BMI calculater Ends

//Gallery starts
let allBtEl = document.querySelectorAll('#gal-btns > button');
let allPicBtnEl = document.querySelector('.allpics');
let calithenicsPicBtnEl = document.querySelector('.calpics');
let motivationPicBtnEl = document.querySelector('.motpics');
let galleryImages = document.querySelector('.gallery-pic');

allPicBtnEl.addEventListener('click',()=>{
    for(let i= 0; i< allBtEl.length ; i++){
        allBtEl[i].classList.remove('selectedBtn')
    }
    allPicBtnEl.classList.add('selectedBtn')
    galleryImages.innerHTML = ''
    galleryImages.innerHTML =
    `<div id="img1">
            <a href="https://wallpapercave.com/download/dark-gym-wallpapers-wp12031320">
              <img  src="./assets/images/wp12031320-dark-gym-wallpapers.jpg" alt="exercise">
            </a>
          </div>

          <div id="img2">
            <a href="https://wallpapercave.com/download/dark-gym-wallpapers-wp12031424">
              <img  src="./assets/images/gym.jpg" alt="exercise">
            </a>
          </div>

          <div id="img3">
            <a href="https://wallpapercave.com/download/dark-gym-wallpapers-wp12031317">
              <img  src="./assets/images/dark-gym-2.jpg" alt="exercise">
            </a>
          </div>

          <div id="img4">
            <a href="https://wallpapercave.com/download/dark-gym-wallpapers-wp12031431">
              <img  src="./assets/images/gym-3.jpg" alt="exercise">
            </a>
          </div>
    
    `
    
})

calithenicsPicBtnEl.addEventListener('click',()=>{
    for(let i= 0; i< allBtEl.length ; i++){
        allBtEl[i].classList.remove('selectedBtn')
    }
    calithenicsPicBtnEl.classList.add('selectedBtn')
    galleryImages.innerHTML = ''
    galleryImages.innerHTML =
    `
        <div id="img1">
            <a href="https://wallpapercave.com/download/calisthenics-wallpapers-wp2346539">
              <img  src="./assets/images/cal-1.jpg" alt="Calithenics">
            </a>
          </div>

          <div id="img2">
            <a href="https://wallpapercave.com/download/calisthenics-wallpapers-wp2346555">
              <img  src="./assets/images/cal-2.jpg" alt="Calithenics">
            </a>
          </div>

          <div id="img3">
            <a href="https://wallpapercave.com/download/calisthenics-wallpapers-wp2346586">
              <img  src="./assets/images/cal-4.jpg" alt="Calithenics">
            </a>
          </div>

          <div id="img4">
            <a href="https://wallpapercave.com/download/calisthenics-wallpapers-wp2346562">
              <img  src="./assets/images/cal-3.jpg" alt="Calithenics">
            </a>
          </div>
    
    `
    
})

motivationPicBtnEl.addEventListener('click',()=>{
    for(let i= 0; i< allBtEl.length ; i++){
        allBtEl[i].classList.remove('selectedBtn')
    }
    motivationPicBtnEl.classList.add('selectedBtn')
    galleryImages.innerHTML = ''
    galleryImages.innerHTML =
    `
        <div id="img1">
            <a href="https://wallpapercave.com/download/gym-motivation-wallpapers-wp5503761">
              <img  src="./assets/images/mot-4.jpg" alt="Calithenics">
            </a>
          </div>

          <div id="img2">
            <a href="https://wallpapercave.com/download/gym-motivation-wallpapers-wp5503733">
              <img  src="./assets/images/mot-3.jpg" alt="Calithenics">
            </a>
          </div>

          <div id="img3">
            <a href="https://wallpapercave.com/download/wallpaper-motivation-wp3375673">
              <img  src="./assets/images/mot-1.jpg" alt="Calithenics">
            </a>
          </div>

          <div id="img4">
            <a href="https://wallpapercave.com/download/wallpapers-de-gimnasio-wp3586860">
              <img  src="./assets/images/mot-2.jpg" alt="Calithenics">
            </a>
          </div>
    
    `
    
})
//Gallery ends 

// Exercise Search Starts
let selectBodyPartEl = document.querySelector('#bodyPart');
let searchExerciseBtn = document.querySelector('#searchE');
let cardsSecEl = document.querySelector('.cards');

let firstFetch = async()=>{
  let selectValEl = selectBodyPartEl.value;
  const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a48f62db1emsh44f6e568eda5f26p1f4b3fjsnf31d9803a669',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    
    data.map(e=>{
      cardsSecEl.innerHTML += 
      ` <div>
            <img src="${e.gifUrl}" alt="Image of Exercise">
            <h2>Name:${e.name} </h2>
            <p><strong>Target:</strong> ${e.target}</p>
            <p>Equipment: ${e.equipment}</p>
            <p>Description: ${e.instructions.slice(0,2).join(' ')} </p>
          </div>
      
      `
      
    })
    
  } catch (error) {
    console.error(error);
  }
}

firstFetch()

searchExerciseBtn.addEventListener('click',async()=>{
  let selectValEl = selectBodyPartEl.value;
  const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectValEl}?limit=10&offset=0`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a48f62db1emsh44f6e568eda5f26p1f4b3fjsnf31d9803a669',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    cardsSecEl.innerHTML = ''
    data.map(e=>{
      cardsSecEl.innerHTML += 
      ` <div>
            <img src="${e.gifUrl}" alt="Image of Exercise">
            <h2>Name:${e.name} </h2>
            <p><strong>Target:</strong> ${e.target}</p>
            <p>Equipment: ${e.equipment}</p>
            <p>Description: ${e.instructions.slice(0,2).join(' ')} </p>
          </div>
      
      `
      
    })
    
  } catch (error) {
    console.error(error);
    alert('Please check your Internet or connect to your vpn ⚠')
  }
  
})
// Exercise Search Ends


// Faqs starts Here
let toggleBtn = document.querySelectorAll('#togBtn');
let answerEl = document.querySelectorAll('#answer');
for(let i =0 ; i< toggleBtn.length; i++){
  toggleBtn[i].addEventListener('click' , ()=>{
    answerEl[i].classList.toggle('showAnswer');
    toggleBtn[i].classList.toggle('rotateBtn');
    
  })
}
// Faqs Ends Here





