let progressBar = document.querySelector("#progressBar");
const progressBarContainer = document.querySelector("#progressBarContainer");
let debounceResize;

let totalPageHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", () => {
    let progressHeightDecimal = window.pageYOffset / totalPageHeight;
    //it will be 100, but it work right jnly with 131
    let progressHeight = progressHeightDecimal * 131;
    console.log(progressHeight);
    progressBar.style.height = `${progressHeight}%`;
    //progressBar.style.opacity = `${progressHeightDecimal}`;
}, {
    capture: true,
    passive: true
  });

  window.addEventListener("resize", () => {
    clearTimeout(debounceResize);
    debounceResize = setTimeout(() => {
      totalPageHeight = document.body.scrollHeight - window.innerHeight;
    }, 250);
  });

progressBarContainer.addEventListener("click", (e) => {
  let newPageScroll = e.clientY / progressBarContainer.offsetHeight * totalPageHeight;
  window.scrollTo({
    top: newPageScroll,
    behavior: 'smooth'
  });
});