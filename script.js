window.addEventListener("load", function() {
  // Get Elements
  const accordionItems = document.querySelectorAll(".accordion-item");

  // Functions
  toggleDropdown = (item, currentIndex) => {
    if (item.children[1].classList.contains("hide-dropdown")) {
      // ACTIVE
      item.children[1].classList.remove("hide-dropdown");
      item.classList.add("active-dropdown");
    } else {
      // NOT ACTIVE
      item.children[1].classList.add("hide-dropdown");
      item.classList.remove("active-dropdown");
    }
  };

  // Attach Event Handlers
  accordionItems.forEach((item, index) => {
    item.children[0].addEventListener("click", () => {
      toggleDropdown(item, index);
    });
  });
});
