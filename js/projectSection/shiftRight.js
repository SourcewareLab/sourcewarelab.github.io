async function shiftRight() {
  const leftDiv = document.getElementById("project-left")
  const rightDiv = document.getElementById("project-right")
  const activeDiv = document.getElementById("project-active")

  await Promise.all([fadeRight(activeDiv.lastElementChild), fadeInRight(leftDiv.firstElementChild), slideRight(activeDiv.firstElementChild)]).then((values) => {
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

function fadeRight(node) {
  let leftMargin = 0;
  let opacity = 1;

  node.style.marginLeft = `${leftMargin}vw`;
  node.style.opacity = opacity;

  let mainloop = function() {
    leftMargin += 1.3;
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

function fadeInRight(node) {
  let leftMargin = 0;
  let opacity = 0;

  node.style.visibility = "visible";
  node.style.marginLeft = `${leftMargin}vw`;
  node.style.opacity = opacity;

  let mainloop = function() {
    leftMargin += 1.5;
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

function slideRight(node) {
  let leftMargin = 0;

  node.style.marginLeft = `${leftMargin}vw`;

  let mainloop = function() {
    leftMargin += 1.3;
    node.style.marginLeft = `${leftMargin}vw`;
  }

  const main = setInterval(mainloop, 10);

  const delay = (ms) => new Promise(resolve => setTimeout(() => {
    clearInterval(main);
    resolve();
  }, ms));

  return delay(300);
}
