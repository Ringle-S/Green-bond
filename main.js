/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// nav btn
const navBtn = document.querySelector("#navbtn");
const navMenu = document.querySelector(".mobile-nav");

navBtn.addEventListener("click", () => {
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
    navMenu.style.right = "-100%";
  } else {
    navMenu.style.display = "block";
    navMenu.style.right = "0px";
  }
});

const plantSpecies = [
  [
    "Cactus Plants",
    "Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere .Cras tincidunt lobortis feugiat vivamus at morbi le",
    3652,
    51814,
    "cactus.png",
  ],
  [
    "Climber Plants",
    "Peace Lilies are not only aesthetically pleasing but also have air-purifying qualities. They thrive in low light conditions, making them a great choice for home or office environments",
    8521,
    84188,
    "climber.png",
  ],
  [
    "Herbs Plants",
    "Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere .Cras tincidunt lobortis feugiat vivamus at morbi le",
    93654,
    75567,
    "herb.png",
  ],
  [
    "Flower Plants",
    "Peace Lilies are not only aesthetically pleasing but also have air-purifying qualities. They thrive in low light conditions, making them a great choice for home or office environments",
    48186,
    5265,
    "flower.png",
  ],
  [
    "Pot Decor Plants",
    "Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere .Cras tincidunt lobortis feugiat vivamus at morbi le",
    5486,
    65487,
    "pot.png",
  ],
];

const bannerBtn = document.querySelectorAll("#btnAcc");

let speciesName = document.getElementById("speciesName");
let speciesDesc = document.getElementById("speciesDesc");
let speciesCount = document.getElementById("speciesCount");
let buyerCount = document.getElementById("buyerCount");
let imgDiv = document.getElementById("bannerImg");

bannerBtn.forEach((plantbtn, index) => {
  plantbtn.addEventListener("click", function () {
    speciesName.innerHTML = plantSpecies[index][0];
    speciesDesc.innerHTML = plantSpecies[index][1];
    speciesCount.innerHTML = plantSpecies[index][2];
    buyerCount.innerHTML = plantSpecies[index][3];
    imgDiv.setAttribute("src", `./asset/${plantSpecies[index][4]}`);
    imgDiv.classList.add("animate");
  });
});

// modal

const modalBtn = document.querySelectorAll("#modal");
const modalBox = document.querySelectorAll(".modal-dialog");
const closeBtn = document.querySelectorAll("#closeBtn");
const over = document.getElementsByClassName("overlay");
const increQuantity = document.querySelectorAll("#increment");
const decreQuantity = document.querySelectorAll("#decrement");
const priceValue = document.querySelectorAll(".price-value");
const countValue = document.querySelectorAll("#countValue");
const buyBtn = document.querySelectorAll(".buy-btn");
const sucBtn = document.querySelector(".success-modal");
const sucCloseBtn = document.querySelector("#suc-close");
let count = 0;

modalBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modalBox[index].classList.remove("hidden");
    closeBtn[index].addEventListener("click", () => {
      modalBox[index].classList.add("hidden");
      count = 0;
      countValue[index].value = count;
    });
    increQuantity[index].addEventListener("click", () => {
      count += 1;
      countValue[index].value = count;
    });
    decreQuantity[index].addEventListener("click", () => {
      count -= 1;
      countValue[index].value = count;
    });
    buyBtn[index].addEventListener("click", () => {
      modalBox[index].classList.add("hidden");
      sucBtn.classList.remove("hidden");
    });
    sucCloseBtn.addEventListener("click", () => {
      sucBtn.classList.add("hidden");
    });
    // over.classList.remove("hidden");
  });
});

// form validation
function validation(event) {
  event.preventDefault();
  let inputName = document.getElementById("userName").value.trim();
  let inputmail = document.getElementById("userMail").value.trim();
  let inputdescp = document.getElementById("textContent").value.trim();
  let showMsg = document.querySelector(".message");
  let message = "";

  function validName(checkFname) {
    let pattern = /^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/;
    return pattern.test(checkFname);
  }

  function validEmail(checkemail) {
    const emailRegex =
      /^(?![!]?\d)[a-zA-Z0-9]+[a-zA-Z0-9._-]*@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    return emailRegex.test(checkemail);
  }

  function validSentence(checkTextArea) {
    let s = checkTextArea;
    s = s.replace(/<[^>]*>/g, "");
    s = s.replace(/(^\s*)|(\s*$)/gi, "");
    s = s.replace(/[ ]{2,}/gi, " ");
    s = s.replace(/\n /, "\n").split(" ").length;
    return s === 5;
  }
  console.log(validSentence(inputdescp));
  // console.log(inputmail);

  switch (true) {
    case inputName === "":
      message += "Please enter your name";
      break;
    case !validName(inputName):
      message += "Please enter your name properly";
      break;
    case inputmail === "":
      message += "please enter your mail id";
      break;
    case !validEmail(inputmail):
      message += "Please provide valid mail Id";
      break;
    case inputdescp === "":
      message += "Please enter something";
      break;
    case !validSentence(inputdescp):
      message += "Please type atleast 5 Words";
      break;
    default:
      break;
  }

  if (message !== "") {
    showMsg.textContent = message;
    showMsg.classList.remove("msgRemove");
    showMsg.classList.add("danger");
    // console.log(message);
  } else {
    showMsg.classList.add("success");
    showMsg.classList.remove("msgRemove");
    showMsg.innerHTML = "Form Successfully Submitted";
    setTimeout(() => {
      showMsg.style.visiblity = "hidden";
      document.getElementById("myForm").submit();
    }, 3000);
  }
}

// Accordian

const accordianItem = document.querySelectorAll(".accordian-item");
let accBtn = document.querySelectorAll(".accordian-btn");

accordianItem.forEach((accItem, index) => {
  accItem.addEventListener("click", () => {
    accordianItem.forEach((otherItem, index) => {
      otherItem.classList.remove("active");
      accBtn[index].innerHTML = `<i class="bi bi-plus-lg"></i>`;
    });

    accItem.classList.toggle("active");
    accBtn[index].style.transform = `rotate(45deg)`;
  });
});

// intersecting
const animateElement = document.querySelectorAll(
  " .animate-on-scroll, .animate-down-up , .animate-on-scroll-right"
);

console.log(animateElement);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        //   entry.target.classList.remove("animate");
      }
    });
  },
  {
    threshold: 0.4,
  }
);

for (let i = 0; i < animateElement.length; i++) {
  const element = animateElement[i];

  observer.observe(element);
}

function navScroll() {
  //   nav animation

  const navElement = document.querySelector(".navbar");

  const navObserver = new IntersectionObserver(
    (entrys) => {
      if (entrys.isIntersecting) {
        entrys.target.classList.remove("navbar");
        entrys.target.classList.add("nav-animate");
        alert();
      }
    },
    {
      threshold: 0.9,
    }
  );

  navObserver.observe(navElement);
}

navScroll();
