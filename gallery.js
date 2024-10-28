
  document.getElementById("showMoreBtN").addEventListener("click", function () {
    // Find all hidden images with the 'more-images' class
    const moreImages = document.querySelectorAll(".more-images.d-none");

    // Loop through each hidden image and remove the 'd-none' class to show it
    moreImages.forEach((img) => {
      img.classList.remove("d-none");
    });

    // Optionally hide the Show More button after displaying all images
    this.style.display = "none";
  });
