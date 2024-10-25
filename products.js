
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('showMoreBtn').addEventListener('click', function () {
    const hiddenProducts = document.querySelectorAll('#productGrid .d-none');
    const itemsToShow = Math.min(4, hiddenProducts.length); // Show 4 or fewer, if not enough items
    
    for (let i = 0; i < itemsToShow; i++) {
      hiddenProducts[i].classList.remove('d-none');
    }

    // Hide the button if no more items are hidden
    if (document.querySelectorAll('#productGrid .d-none').length === 0) {
      this.style.display = 'none';
    }
  });
});