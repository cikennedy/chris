const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
  // button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      // this is referring to the pageTransitions function
      this.className += " active-btn";
    });
  }

  // active sections class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other buttons
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  // const themeButton = document.querySelector(".theme-button");
  // themeButton.addEventListener("click", () => {
  //   let element = document.body;
  //   element.classList.toggle("light-mode");
  // });

  const themeButton = document.querySelector(".theme-button-test");
  themeButton.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

function handleSubmit(e) {
  e.preventDefault();
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", name, email, subject, message }),
  })
    .then(() => alert("Message sent!"))
    .catch((error) => alert(error));
}

pageTransitions();
