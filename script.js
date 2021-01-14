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
    let labelSeconds = document.querySelector('#seconds')

    labelDays.innerHTML = days
    labelHours.innerHTML = hours
    labelMinutes.innerHTML = minutes
    labelSeconds.innerHTML = seconds


    // labelSeconds

    if (distance < 0) {
      clearInterval(x)
    }

  }, 1000)
}
let countDownDelay = 1000 * 60 * 60 * 24 * 7
let countDownDate = new Date().getTime() + countDownDelay;
CountdownUpdate(countDownDate)