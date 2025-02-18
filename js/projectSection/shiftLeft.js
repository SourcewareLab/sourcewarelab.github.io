async function shiftLeft() {
  const leftDiv = document.getElementById("project-left")
  const rightDiv = document.getElementById("project-right")
  const activeDiv = document.getElementById("project-active")

  await Promise.all([fadeLeft(activeDiv.children[0]), fadeInLeft(rightDiv.firstElementChild), slideLeft(activeDiv.children[1])]).then((values) => {
  });

  // Getting First Children
  const firstChild = activeDiv.firstElementChild
  const leftFirstChild = leftDiv.firstElementChild
  const rightFirstChild = rightDiv.firstElementChild

  //counteracting the animation css changes
  rightFirstChild.style.marginLeft = '0vw';

  leftDiv.appendChild(firstChild)
  rightDiv.appendChild(leftFirstChild)
  activeDiv.appendChild(rightFirstChild)

  activeDiv.firstElementChild.style.marginLeft = '0vw';
  leftDiv.firstElementChild.style.marginLeft = '0vw';
}

function fadeLeft(node) {
  let leftMargin = 0;
  let opacity = 1;

  node.style.marginLeft = `${leftMargin}vw`;
  node.style.opacity = opacity;

  let mainloop = function() {
    leftMargin -= 1.3;
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

function fadeInLeft(node) {
  let leftMargin = 0;
  let opacity = 0;

  node.style.visibility = "visible";
  node.style.marginLeft = `${leftMargin}vw`;
  node.style.opacity = opacity;

  let mainloop = function() {
    leftMargin -= 1.5;
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

function slideLeft(node) {
  let leftMargin = 0;

  node.style.marginLeft = `${leftMargin}vw`;

  let mainloop = function() {
    leftMargin -= 1.3;


    node.style.marginLeft = `${leftMargin}vw`;
  }

  const main = setInterval(mainloop, 10);

  const delay = (ms) => new Promise(resolve => setTimeout(() => {
    clearInterval(main);
    resolve();
  }, ms));

  return delay(300);
}
