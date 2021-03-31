// console.log("afasfasfda")
const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"]

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
}
let timer = null

const startChangeColor = refs.startBtn.addEventListener("click", () => {
  timer = setInterval(
    () => (document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]),
    100
  )
  refs.startBtn.setAttribute("disabled", "disabled")
  console.log(refs.startBtn)
})

refs.stop.addEventListener("click", () => {
  clearInterval(timer)
  refs.startBtn.removeAttribute("disabled")
  console.log("stop")
})
