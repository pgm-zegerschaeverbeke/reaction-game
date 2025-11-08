const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (!isMobile) {
  document.addEventListener("mousemove", (event) => {
    const $customCursor = document.getElementById("custom-cursor");
    if ($customCursor) {
      $customCursor.style.left = `${event.clientX}px`;
      $customCursor.style.top = `${event.clientY}px`;
    }
  });

  const $links = document.querySelectorAll("a");
  const $customCursor = document.getElementById("custom-cursor");

  if ($customCursor) {
    $links.forEach(($link) => {
      $link.addEventListener("mouseenter", () => {
        $customCursor.style.backgroundColor = "red";
      });

      $link.addEventListener("mouseleave", () => {
        $customCursor.style.backgroundColor = "var(--cursor-color)";
      });
    });
  }
}

const $navbarToggle = document.getElementById("navbar-toggle");
const $navbarList = document.getElementById("navbar-list");

if ($navbarToggle && $navbarList) {
  $navbarToggle.addEventListener("click", () => {
    $navbarToggle.classList.toggle("active");
    $navbarList.classList.toggle("active");
  });

  const $navbarLinks = $navbarList.querySelectorAll("a");
  $navbarLinks.forEach(($link) => {
    $link.addEventListener("click", () => {
      $navbarToggle.classList.remove("active");
      $navbarList.classList.remove("active");
    });
  });

  document.addEventListener("click", (event) => {
    const isClickInsideNav = $navbarList.contains(event.target) || $navbarToggle.contains(event.target);
    if (!isClickInsideNav && $navbarList.classList.contains("active")) {
      $navbarToggle.classList.remove("active");
      $navbarList.classList.remove("active");
    }
  });
}