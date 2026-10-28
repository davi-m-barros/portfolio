'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



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

const showPage = function (pageName) {
  const page = Array.from(pages).find((item) => item.dataset.page === pageName);
  const pageToShow = page ? page.dataset.page : "portfolio";

  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.toggle("active", pages[i].dataset.page === pageToShow);
  }

  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].classList.toggle(
      "active",
      navigationLinks[i].textContent.trim().toLowerCase() === pageToShow
    );
  }

  window.scrollTo(0, 0);
};

// Keep the selected page in the URL so it survives refreshes and can be shared.
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const pageName = this.textContent.trim().toLowerCase();
    window.location.hash = pageName;
  });
}

window.addEventListener("hashchange", function () {
  showPage(window.location.hash.slice(1).toLowerCase());
});

showPage(window.location.hash.slice(1).toLowerCase());



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
const projectModalAppStoreBadge = document.querySelector("[data-project-modal-app-store-badge-link]");

const closeProjectModal = function () {
  projectModalContainer.classList.remove("active");
  projectModalOverlay.classList.remove("active");
  projectModal.classList.remove("active");
  projectModalImage.removeAttribute("src");
  projectModalText.innerHTML = "";
  projectModalAppStoreBadge.href = "";
  projectModalAppStoreBadge.setAttribute("aria-label", "Download this project on the App Store");
  projectModalAppStoreBadge.hidden = true;
};

for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", function (event) {
    event.preventDefault();

    const projectImage = this.querySelector("img");
    projectModalImage.src = projectImage.src;
    projectModalImage.alt = projectImage.alt;
    projectModalTitle.textContent = this.querySelector(".project-title").textContent;
    const projectModalDetails = this.querySelector("[data-project-modal]");
    const projectAppStoreBadge = projectModalDetails.querySelector("[data-project-app-store-badge]");
    if (projectAppStoreBadge) {
      projectModalAppStoreBadge.href = projectAppStoreBadge.getAttribute("data-app-store-url") || "";
      projectModalAppStoreBadge.setAttribute("aria-label", projectAppStoreBadge.getAttribute("aria-label") || "Download this project on the App Store");
      projectModalAppStoreBadge.hidden = false;
    } else {
      projectModalAppStoreBadge.href = "";
      projectModalAppStoreBadge.setAttribute("aria-label", "Download this project on the App Store");
      projectModalAppStoreBadge.hidden = true;
    }
    projectModalText.innerHTML = projectModalDetails.innerHTML;
    projectModalContainer.classList.add("active");
    projectModalOverlay.classList.add("active");
    projectModal.classList.add("active");
  });
}

projectModalClose.addEventListener("click", closeProjectModal);
projectModalOverlay.addEventListener("click", closeProjectModal);
projectModalAppStoreBadge.addEventListener("click", function (event) {
  if (!this.getAttribute("href")) {
    event.preventDefault();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && certificateModalContainer.classList.contains("active")) {
    closeCertificateModal();
  }

  if (event.key === "Escape" && projectModalContainer.classList.contains("active")) {
    closeProjectModal();
  }
});