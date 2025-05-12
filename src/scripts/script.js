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

  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Carregar o tema salvo no localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
      body.classList.add("light-theme");
      themeToggle.classList.replace("fa-moon", "fa-sun");
  }

  // Alternar tema ao clicar no botão
  themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-theme");

      // Alterar ícone do botão e salvar preferência no localStorage
      if (body.classList.contains("light-theme")) {
          themeToggle.classList.replace("fa-moon", "fa-sun");
          localStorage.setItem("theme", "light");
      } else {
          themeToggle.classList.replace("fa-sun", "fa-moon");
          localStorage.setItem("theme", "dark");
      }
  });
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
