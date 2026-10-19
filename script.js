'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });

}



// certificate modal variables
const certificateItems = document.querySelectorAll("[data-certificate-item]");
const certificateModalContainer = document.querySelector("[data-certificate-modal-container]");
const certificateModalOverlay = document.querySelector("[data-certificate-modal-overlay]");
const certificateModalClose = document.querySelector("[data-certificate-modal-close]");
const certificateModal = document.querySelector(".certificate-modal");
const certificateModalDocument = document.querySelector("[data-certificate-modal-document]");
const certificateModalCategory = document.querySelector("[data-certificate-modal-category]");
const certificateModalYear = document.querySelector("[data-certificate-modal-year]");
const certificateModalTitle = document.querySelector("[data-certificate-modal-title]");
const certificateModalText = document.querySelector("[data-certificate-modal-text]");

const closeCertificateModal = function () {
  certificateModalContainer.classList.remove("active");
  certificateModalOverlay.classList.remove("active");
  certificateModal.classList.remove("active");
  certificateModalDocument.removeAttribute("src");
};

for (let i = 0; i < certificateItems.length; i++) {
  certificateItems[i].addEventListener("click", function (event) {
    event.preventDefault();

    const certificateMeta = this.querySelector(".certificate-meta");
    const certificateCategory = certificateMeta.querySelector(".certificate-category");
    const certificateYear = certificateMeta.querySelector("time");

    certificateModalDocument.src = `${this.href}#toolbar=1&navpanes=0`;
    certificateModalCategory.textContent = certificateCategory.textContent;
    certificateModalYear.textContent = certificateYear.textContent;
    certificateModalYear.dateTime = certificateYear.dateTime;
    certificateModalTitle.textContent = this.querySelector(".certificate-item-title").textContent;
    certificateModalText.textContent = this.querySelector(".certificate-text").textContent;
    certificateModalContainer.classList.add("active");
    certificateModalOverlay.classList.add("active");
    certificateModal.classList.add("active");
  });
}

certificateModalClose.addEventListener("click", closeCertificateModal);
certificateModalOverlay.addEventListener("click", closeCertificateModal);

// project modal variables
const projectItems = document.querySelectorAll("[data-project-item]");
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectModalOverlay = document.querySelector("[data-project-modal-overlay]");
const projectModalClose = document.querySelector("[data-project-modal-close]");
const projectModal = document.querySelector(".project-modal");
const projectModalImage = document.querySelector("[data-project-modal-image]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalText = document.querySelector("[data-project-modal-text]");
const projectModalVideos = document.querySelector("[data-project-modal-videos]");

const closeProjectModal = function () {
  projectModalContainer.classList.remove("active");
  projectModalOverlay.classList.remove("active");
  projectModal.classList.remove("active");
  projectModalImage.removeAttribute("src");
  projectModalVideos.innerHTML = "";
};

for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", function (event) {
    event.preventDefault();

    const projectImage = this.querySelector("img");
    projectModalImage.src = projectImage.src;
    projectModalImage.alt = projectImage.alt;
    projectModalTitle.textContent = this.querySelector(".project-title").textContent;
    projectModalText.innerHTML = this.querySelector("[data-project-description]").innerHTML;
    const projectVideos = this.querySelector("[data-project-videos]");
    projectModalVideos.innerHTML = projectVideos ? projectVideos.innerHTML : "";
    projectModalContainer.classList.add("active");
    projectModalOverlay.classList.add("active");
    projectModal.classList.add("active");
  });
}

projectModalClose.addEventListener("click", closeProjectModal);
projectModalOverlay.addEventListener("click", closeProjectModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && certificateModalContainer.classList.contains("active")) {
    closeCertificateModal();
  }

  if (event.key === "Escape" && projectModalContainer.classList.contains("active")) {
    closeProjectModal();
  }
});