function onClick() {
  console.log("onClick");
}

function calculate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("calculate");
      return resolve();
    }, 2000);
  });
}

function animate() {
  console.log("animate");
}

//syncing the function
(async () => {
  onClick();
  await calculate();
  animate();
})();
