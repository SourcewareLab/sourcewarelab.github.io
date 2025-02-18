if (window.innerWidth < 700) {
  const activeDiv = document.getElementById("project-active")
  const leftDiv = document.getElementById("project-left")

  leftDiv.appendChild(activeDiv.firstElementChild)
}

addEventListener("resize", () => {
  const activeDiv = document.getElementById("project-active")
  const leftDiv = document.getElementById("project-left")
  if (window.innerWidth <= 700 && activeDiv.children.length == 2) {
    leftDiv.appendChild(activeDiv.firstElementChild)
    return
  } else if (window.innerWidth > 700 && activeDiv.children.length == 1) {
    activeDiv.appendChild(leftDiv.lastElementChild)
  }
})

function leftButton() {
  if (window.innerWidth > 700) {
    shiftLeft();
    return
  }

  shiftLeftMobile()
}

function rightButton() {
  if (window.innerWidth > 700) {
    shiftRight();
    return
  }

  shiftRightMobile()
}
