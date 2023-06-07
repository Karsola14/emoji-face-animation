// Creating variables for closed and open face
const closedLaughingFace = document.querySelector('.closed')
const openLaughingFace = document.querySelector('.open')

// Add event listener - animation

// Template - variable.addEventListener('type of event ('which is an action'), function')
// Arrow function
// Closed laughing face logic
closedLaughingFace.addEventListener('click', () => {
  if(openLaughingFace.classList.contains('open')) {
    openLaughingFace.classList.add('active');
    closedLaughingFace.classList.remove('active');
  }
})

// Open laughing face logic
openLaughingFace.addEventListener('click', () => {
  if(closedLaughingFace.classList.contains('closed')) {
    closedLaughingFace.classList.add('active');
    openLaughingFace.classList.remove('active');
  }
})