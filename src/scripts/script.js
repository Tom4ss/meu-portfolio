document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("visible");
              } else {
                  entry.target.classList.remove("visible");
              }
          });
      },
      {
          root: null, 
          threshold: 0.5,
      }
  );

  cards.forEach((card) => observer.observe(card));
});

let tablinks = document.getElementsByClassName("tab__links");
let tabcontents = document.getElementsByClassName("tab__contents");

function opentab(tabname) {
  for(tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ------sidemenu-----

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}
