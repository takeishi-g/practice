let imagesItems = [...document.querySelectorAll(".img-wrap")];
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");


let setItemActive = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      // entry.target.classList.add("remove");
    }
  });
};


let options = {
  rootMargin: "0px",
  threshold: 0.5,
};


let observer = new IntersectionObserver(setItemActive, options);

observer.observe(titleMessage);


imagesItems.map((item, index) => {
  item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
  index % 2 == 0 ? (item.style.left = "45%") : (item.style.left = "5%");
  observer.observe(item);
});

titles.map((titles, index) => {
  index % 2 == 0 ? (titles.style.left = "45%") : (titles.style.left = "35%")
  observer.observe(titles);
});