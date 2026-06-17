const yearNodes = document.querySelectorAll("[data-year]");
for (const node of yearNodes) {
  node.textContent = new Date().getFullYear();
}

const header = document.querySelector("[data-header]");
if (header) {
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}
