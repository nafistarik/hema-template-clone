


// js code for the category slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("categorySlider");
  const nextBtn = document.getElementById("sliderNextBtn");
  const prevBtn = document.getElementById("sliderPrevBtn");
  let scrollAmount = 0;

  nextBtn.addEventListener("click", function () {
    scrollAmount += slider.offsetWidth;
    if (scrollAmount > slider.scrollWidth - slider.offsetWidth) {
      scrollAmount = slider.scrollWidth - slider.offsetWidth;
    }
    slider.scroll({
      left: scrollAmount,
      behavior: "smooth",
    });
    updateButtonVisibility();
  });

  prevBtn.addEventListener("click", function () {
    scrollAmount -= slider.offsetWidth;
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    slider.scroll({
      left: scrollAmount,
      behavior: "smooth",
    });
    updateButtonVisibility();
  });

  slider.addEventListener("scroll", updateButtonVisibility);

  function updateButtonVisibility() {
    if (slider.scrollLeft <= 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "flex";
    }

    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "flex";
    }
  }

  // Initial button visibility check
  updateButtonVisibility();
});

// js code for the feature slider

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("featureCategorySlider");
  const nextBtn = document.getElementById("featureSliderNextBtn");
  const prevBtn = document.getElementById("featureSliderPrevBtn");
  let scrollAmount = 0;

  nextBtn.addEventListener("click", function () {
    scrollAmount += slider.offsetWidth;
    if (scrollAmount > slider.scrollWidth - slider.offsetWidth) {
      scrollAmount = slider.scrollWidth - slider.offsetWidth;
    }
    slider.scroll({
      left: scrollAmount,
      behavior: "smooth",
    });
    updateButtonVisibility();
  });

  prevBtn.addEventListener("click", function () {
    scrollAmount -= slider.offsetWidth;
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    slider.scroll({
      left: scrollAmount,
      behavior: "smooth",
    });
    updateButtonVisibility();
  });

  slider.addEventListener("scroll", updateButtonVisibility);

  function updateButtonVisibility() {
    if (slider.scrollLeft <= 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "flex";
    }

    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "flex";
    }
  }

  // Initial button visibility check
  updateButtonVisibility();
});


// js code for the offer slider

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("offerCategorySlider");
  const nextBtn = document.getElementById("offerSliderNextBtn");
  const prevBtn = document.getElementById("offerSliderPrevBtn");
  let scrollAmount = 0;

  nextBtn.addEventListener("click", function () {
    scrollAmount += slider.offsetWidth;
    if (scrollAmount > slider.scrollWidth - slider.offsetWidth) {
      scrollAmount = slider.scrollWidth - slider.offsetWidth;
    }
    slider.scroll({
      left: scrollAmount,
      behavior: "smooth",
    });
    updateButtonVisibility();
  });

  prevBtn.addEventListener("click", function () {
    scrollAmount -= slider.offsetWidth;
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    slider.scroll({
      left: scrollAmount,
      behavior: "smooth",
    });
    updateButtonVisibility();
  });

  slider.addEventListener("scroll", updateButtonVisibility);

  function updateButtonVisibility() {
    if (slider.scrollLeft <= 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "flex";
    }

    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "flex";
    }
  }

  // Initial button visibility check
  updateButtonVisibility();
});

// js code for the product slider

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("productCategorySlider");
  const nextBtn = document.getElementById("productSliderNextBtn");
  const prevBtn = document.getElementById("productSliderPrevBtn");
  let scrollAmount = 0;

  nextBtn.addEventListener("click", function () {
    scrollAmount += slider.offsetWidth;
    if (scrollAmount > slider.scrollWidth - slider.offsetWidth) {
      scrollAmount = slider.scrollWidth - slider.offsetWidth;
    }
    slider.scroll({
      left: scrollAmount,
      behavior: "smooth",
    });
    updateButtonVisibility();
  });

  prevBtn.addEventListener("click", function () {
    scrollAmount -= slider.offsetWidth;
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    slider.scroll({
      left: scrollAmount,
      behavior: "smooth",
    });
    updateButtonVisibility();
  });

  slider.addEventListener("scroll", updateButtonVisibility);

  function updateButtonVisibility() {
    if (slider.scrollLeft <= 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "flex";
    }

    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "flex";
    }
  }

  // Initial button visibility check
  updateButtonVisibility();
});
