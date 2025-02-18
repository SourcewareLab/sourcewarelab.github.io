async function shiftRightMobile() {
  const leftDiv = document.getElementById("project-left")
  const rightDiv = document.getElementById("project-right")
  const activeDiv = document.getElementById("project-active")

  await Promise.all([fadeRightMobile(activeDiv.lastElementChild), fadeInRightMobile(leftDiv.lastElementChild)]).then(() => {
  });

  const lastChild = activeDiv.lastElementChild
  const leftLastChild = leftDiv.lastElementChild
  const rightLastChild = rightDiv.lastElementChild

  //counteracting the animation css changes
  leftLastChild.style.marginLeft = '0vw';
  activeDiv.firstElementChild.style.marginLeft = '0vw';

  // There is no insert at index 0 so this is a workaround
  leftDiv.insertBefore(rightLastChild, leftDiv.firstChild)
  rightDiv.insertBefore(lastChild, rightDiv.firstChild)
  activeDiv.insertBefore(leftLastChild, activeDiv.firstChild)
}

function fadeRightMobile(node) {
  let leftMargin = 0;
  let opacity = 1;

  node.style.marginLeft = `${leftMargin}vw`;
  node.style.opacity = opacity;

  let mainloop = function() {
    leftMargin += 2.43;
    opacity = (opacity * 100 - 4) / 100;

    node.style.marginLeft = `${leftMargin}vw`;
    node.style.opacity = opacity;
  }


  const main = setInterval(mainloop, 10);

  const delay = (ms) => new Promise(resolve => setTimeout(() => {
    clearInterval(main);
    resolve();
  }, ms));

  return delay(300);
}

function fadeInRightMobile(node) {
  let leftMargin = 0;
  let opacity = 0;

  node.style.visibility = "visible";
  node.style.marginLeft = `${leftMargin}vw`;
  node.style.opacity = opacity;

  let mainloop = function() {
    leftMargin += 1.7;
    leftMargin = Math.ceil(leftMargin)
    opacity = (opacity * 100 + 4) / 100;

    node.style.marginLeft = `${leftMargin}vw`;
    node.style.opacity = opacity;
  }

  const main = setInterval(mainloop, 10);

  const delay = (ms) => new Promise(resolve => setTimeout(() => {
    clearInterval(main);
    resolve();
  }, ms));

  return delay(300);
}
