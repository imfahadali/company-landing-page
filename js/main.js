const sectionAll = document.querySelectorAll(".section");

document.addEventListener("scroll", findElementInView);

function findElementInView() {
  scrollDetection();

  const scrollY = window.pageYOffset;

  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 220;
    const sectionId = current.getAttribute("id");
    const btnsToHighlight = document.getElementsByClassName(sectionId);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      btnsToHighlight[0].classList.add("active");
      btnsToHighlight[1].classList.add("active");
      document.getElementById("choosen-item").innerHTML = sectionId
    } else {
      btnsToHighlight[0].classList.remove("active");
      btnsToHighlight[1].classList.remove("active");
    }
  });
}

function scrollDetection() {
  const scrollY = window.scrollY;
  const htmlElement = document.querySelector("html");

  if (scrollY > 0) {
    htmlElement.setAttribute("data-scroll", "1");
  } else {
    htmlElement.setAttribute("data-scroll", "0");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // You can use 'auto' for immediate scrolling without smooth animation
  });
}

function scrollInView(button, section) {
  // Scroll into view the selected item
  document.getElementsByClassName(section)[0].scrollIntoView();
}

function mobileScrollInView(button, text) {
  scrollInView(button, text);
  closeNav();
}

function submitHandler(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.querySelector("input[type='email']").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    window.alert(
      "Please fill out all the required fields (Name, Email, and Message)."
    );
    return;
  }

  window.alert("Your response have been recorded");
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
