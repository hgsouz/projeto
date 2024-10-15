function toggleMode() {
  const html = document.documentElement

  // Essa linha condicional pode ser trocada por apenas uma linha utilizando o Toggle
  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //  html.classList.add("light")
  // }

  html.classList.toggle("light")

  // pegar a tag img

  //se tiver light mode adicionar a imagem light
  // substituir a imagem
  // se estiver sem o light mode manter a imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
