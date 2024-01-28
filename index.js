const contM = document.querySelector("h3");
let counter = 0;
const pop = () => {
  const bubble = document.createElement("span");
  document.body.appendChild(bubble);
  bubble.classList.add("bubble");
  const size = Math.random() * 200 + 100 + "px";
  const minusplus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.width = size;
  bubble.style.height = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("---left", +minusplus + Math.random() * 100 + "%");

  bubble.addEventListener("click", () => {
    counter++;
    console.log(counter);
    contM.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};
setInterval(pop, 800);
