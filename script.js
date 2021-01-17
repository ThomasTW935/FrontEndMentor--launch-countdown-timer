function CountdownUpdate(date) {
  let labelDays = document.querySelector('#days')
  let labelHours = document.querySelector('#hours')
  let labelMinutes = document.querySelector('#minutes')
  let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = date - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / (1000))



    // Display time in Countdown Timer

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
  let cardMidSpan = cardMid.childNodes[0]
  let cardTopSpan = cardTop.childNodes[0]
  let cardBotSpan = cardBot.childNodes[0]

  // Style change

  StyleChange([cardTop, cardBot])

  // Count change
  // await timer(500)
  // RemoveAllChildNodes(card)
  // await timer(700)
  // CreateElements(card, seconds)
  CountChange([cardMidSpan, cardTopSpan, cardBotSpan], seconds)
  // await timer(200)
  // RemoveClass([cardTop, cardBot])

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
// function CreateElements(parent, count) {
//   let mid = document.createElement('span')
//   let top = document.createElement('div')
//   let bot = document.createElement('div')

//   mid.classList.add('countdown__Card--Middle')
//   top.classList.add('countdown__Card--Top')
//   bot.classList.add('countdown__Card--Bottom')

//   let topSpan = document.createElement('span')
//   let botSpan = document.createElement('span')

//   let midText = document.createTextNode(count)
//   let topSpanText = document.createTextNode(count)
//   let botSpanText = document.createTextNode(count)

//   mid.appendChild(midText)

//   topSpan.appendChild(topSpanText)
//   botSpan.appendChild(botSpanText)

//   top.appendChild(topSpan)
//   bot.appendChild(botSpan)

//   parent.appendChild(mid)
//   parent.appendChild(top)
//   parent.appendChild(bot)
// }
// function RemoveAllChildNodes(parent) {
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild)
//   }
// }
function CountChange(elements, count) {
  elements.forEach(element => {
    element.innerHTML = (count < 10) ? `0${count}` : count;
  })
}
function timer(ms) {
  return new Promise(res => setTimeout(res, ms))
}