const heroImages = document.querySelectorAll(".hero-image");
const heroDots = document.querySelectorAll(".travel-dots button");

function showHeroSlide(index) {
  currentSlide = Number(index);
  heroImages.forEach((image) => {
    image.classList.toggle("active", image.dataset.slide === String(index));
  });
  heroDots.forEach((dot) => {
    dot.classList.toggle("active", dot.dataset.target === String(index));
  });
}

heroDots.forEach((dot) => {
  dot.addEventListener("click", () => showHeroSlide(dot.dataset.target));
});

let currentSlide = 0;
setInterval(() => {
  currentSlide = (currentSlide + 1) % heroImages.length;
  showHeroSlide(currentSlide);
}, 5600);

const mapPins = document.querySelectorAll(".map-pin");
const mapNote = document.querySelector("#mapNote");

mapPins.forEach((pin) => {
  pin.addEventListener("click", () => {
    mapPins.forEach((item) => item.classList.remove("active"));
    pin.classList.add("active");
    mapNote.textContent = pin.dataset.note;
  });
});

const filterButtons = document.querySelectorAll(".filter-tabs button");
const diaryCards = document.querySelectorAll(".diary-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    diaryCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle("hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("p");
const lightboxClose = document.querySelector(".lightbox-close");
const polaroids = document.querySelectorAll(".polaroid");

polaroids.forEach((photo) => {
  photo.addEventListener("click", () => {
    lightboxImage.src = photo.dataset.full;
    lightboxImage.alt = photo.querySelector("img").alt;
    lightboxCaption.textContent = photo.dataset.caption;

    if (typeof lightbox.showModal === "function") {
      lightbox.showModal();
      return;
    }

    lightbox.setAttribute("open", "");
  });
});

lightboxClose.addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", (event) => {
  const clickedBackdrop = event.target === lightbox;
  if (clickedBackdrop) {
    lightbox.close();
  }
});

const roundNext = document.querySelector(".round-next");
const photoRail = document.querySelector(".photo-rail");

roundNext.addEventListener("click", () => {
  photoRail.scrollBy({
    left: Math.min(260, photoRail.clientWidth * 0.8),
    behavior: "smooth",
  });
});
