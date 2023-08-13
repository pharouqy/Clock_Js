const deg = 6;
const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");

function setTime() {
  const h = new Date().getHours() * 30;
  const m = new Date().getMinutes() * deg;
  const s = new Date().getSeconds() * deg;

  hr.style.transform = `rotateZ(${h + m / 12}deg)`;
  mn.style.transform = `rotateZ(${m}deg)`;
  sc.style.transform = `rotateZ(${s}deg)`;
}

setInterval(() => {
  setTime();
}, 1000);
