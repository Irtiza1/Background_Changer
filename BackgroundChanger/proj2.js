const colorId = function () {
    let color = '#';
    const hex = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  // console.log(colorId);
  let intervalId;
  const startChangeColor = function () {
    if (!intervalId) intervalId = setInterval(changeColorId, 1000);
  
    function changeColorId() {
      document.body.style.backgroundColor = colorId();
    }
  };
  
  const stopChangeColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  document.querySelector('#start').addEventListener('click', startChangeColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangeColor);
  