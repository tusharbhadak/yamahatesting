const whatsNewImages = [
  {
    img: "/theme/v4/images/home/whats_new/whats_new (1).jpg",
    details: "Persistence Pays Off In Portugal For Monster Energy Yamaha Moto GP"
  },
  {
    img: "/theme/v4/images/home/whats_new/motoGP-qatar-pc.jpg",
    details: "Solid Catch Up Effort By Quartararo In Cota Race"
  },
  {
    img: "/theme/v4/images/home/whats_new/MotoGP_Thailand-pc.jpg",
    details: "Quartararo And Rins Make Up Ground In Qatar GP Race"
  }
];

let whatsNewCurrentIndex = 0;

function whatsNewUpdateImages() {
  const whatsNewNextIndex = (whatsNewCurrentIndex + 1) % whatsNewImages.length;

  const mainImageContainer = document.querySelector(
    ".whats_new_card .main-img"
  );
  const previousImageContainer = document.querySelector(
    ".whats_new_card .previous-img"
  );
  const detailsContainer = document.querySelector(
    ".whats_new_card .details"
  )


  mainImageContainer.innerHTML = `<img src="${whatsNewImages[whatsNewCurrentIndex].img}" alt="Main Image">`;

  previousImageContainer.innerHTML = `<img src="${whatsNewImages[whatsNewNextIndex].img}" alt="Previous Image" style="opacity: 0.6; transform: translateX(-100%);">`;

  detailsContainer.innerHTML = whatsNewImages[whatsNewCurrentIndex].details;

  requestAnimationFrame(() => {
    previousImageContainer.style.height = "70%"
    const img = previousImageContainer.querySelector("img");
    img.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-out";
    img.style.transform = "translateX(0)";
  });
}

function whatsNewMoveImages() {
  const mainImage = document.querySelector(".whats_new_card .main-img img");
  const previousImageContainer = document.querySelector(
    ".whats_new_card .previous-img"
  );
  const previousImage = document.querySelector(
    ".whats_new_card .previous-img img"
  );

  mainImage.style.opacity = "0";
  mainImage.style.transform = "translateX(50%)";
  setTimeout(() => {
    previousImage.style.transform = "translateX(100%)";
    previousImage.style.opacity = "1";
    previousImageContainer.style.height = "90%"
  }, 100);

  whatsNewCurrentIndex = (whatsNewCurrentIndex + 1) % whatsNewImages.length;

  setTimeout(whatsNewUpdateImages, 500);
}
function autoChangeWhatsNew() {
  setInterval(() => {
    whatsNewMoveImages()
  }, 8000)
}
document.getElementById("whats_new_next").addEventListener("click", whatsNewMoveImages);

// Initialize the image setup
window.onload = whatsNewUpdateImages;
autoChangeWhatsNew();
