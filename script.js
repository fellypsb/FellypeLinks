function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Fellype Brito de óculos e casaco preto")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Fellype Brito de óculos e camisa social rosa")
  }
}
