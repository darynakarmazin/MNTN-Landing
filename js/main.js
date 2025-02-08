const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu__list--open");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeId = entry.target.id;

        document.querySelectorAll(".site-list__item").forEach((item) => {
          item.classList.remove("site-list__item--active");
        });

        const activeLink = document.querySelector(
          `.site-list__link[href="#${activeId}`
        );

        if (activeLink) {
          activeLink
            .closest(".site-list__item")
            .classList.add("site-list__item--active");
        }
      }
    });
  },
  { threshold: 0.5 }
);

document
  .querySelectorAll("#slide-0, #slide-1, #slide-2, #slide-3")
  .forEach((element) => {
    observer.observe(element);
  });
