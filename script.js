function CountdownUpdate(date) {
  let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = date - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / (1000))



    // Display time in Countdown Timer

    let labelDays = document.querySelector('#days')
    let labelHours = document.querySelector('#hours')
    let labelMinutes = document.querySelector('#minutes')
    let cardSeconds = document.querySelector('#seconds')

    CardAnimation(cardSeconds, seconds)

    if (distance < 0) {
      clearInterval(x)
    }

  }, 1000)
}
let countDownDelay = 1000 * 60 * 60 * 24 * 7
let countDownDate = new Date().getTime() + countDownDelay;
CountdownUpdate(countDownDate)

async function CardAnimation(card, seconds) {
  // let cardDays = document.querySelector('#days')
  let cardMid = card.childNodes[1]
  let cardTop = card.childNodes[3]
  let cardBot = card.childNodes[5]
  let cardTopSpan = cardTop.childNodes[0]
  let cardBotSpan = cardBot.childNodes[0]

  // Style change

  StyleChange([cardMid, cardTop, cardBot])

  // Count change
  await timer(500)
  RemoveClass([cardMid, cardTop, cardBot])
  await timer(500)
  CountChange([cardMid, cardTopSpan, cardBotSpan], seconds)

}
function StyleChange(elements) {
  elements.forEach(element => {
    // element.style.opacity = '0';
    // if (!element.classList.contains('countdown__Card--Middle')) {
    //   element.style.transform = 'rotateX(180deg)';
    // }
    element.classList.add('countdown__Card--Animation')
  })
}
function RemoveClass(elements) {
  elements.forEach(element => {
    element.classList.remove('countdown__Card--Animation')
  })
}
function CountChange(elements, count) {
  elements.forEach(element => {
    element.innerHTML = (count < 10) ? `0${count}` : count;
  })
}
function timer(ms) {
  return new Promise(res => setTimeout(res, ms))
}