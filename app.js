const tabs = [...document.querySelectorAll(".tab")];
const tabContents = [...document.querySelectorAll(".tab-content")];

const tabsAnimation = (e) => {
  const indexToRemove = tabs.findIndex((tab) =>
    tab.classList.contains("active-tab")
  );
  const indexToShow = tabs.indexOf(e.target);

  tabs[indexToRemove].setAttribute("aria-selected", "false");
  tabs[indexToRemove].setAttribute("tabindex", "-1");
  tabs[indexToRemove].classList.remove("active-tab");
  tabContents[indexToRemove].classList.remove("active-tab-content");

  tabs[indexToShow].setAttribute("aria-selected", "true");
  tabs[indexToShow].setAttribute("tabindex", "0");
  tabs[indexToShow].classList.add("active-tab");
  tabContents[indexToShow].classList.add("active-tab-content");
};

let tabFocus = 0;

const arrowNavigation = (e) => {
  if (e.keyCode === 39 || e.keyCode === 37) {
    tabs[tabFocus].setAttribute("tabindex", "-1");
    if (e.keyCode === 39) {
      tabFocus++;
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
    } else if (e.keyCode === 37) {
      tabFocus--;
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }
    tabs[tabFocus].setAttribute("tabindex", "0");
    tabs[tabFocus].focus();
  }
};

tabs.forEach((tab) => tab.addEventListener("click", tabsAnimation));
tabs.forEach((tab) => tab.addEventListener("keydown", arrowNavigation));
