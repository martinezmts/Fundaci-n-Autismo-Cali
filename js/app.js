///NAVBAR SHRINK
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.querySelector(".navbar").classList.add("minimized");
  } else {
    document.querySelector(".navbar").classList.remove("minimized");
  }
}
