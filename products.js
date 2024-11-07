document.addEventListener('DOMContentLoaded', function() {
  const productModal = document.getElementById('productModal');
  
  productModal.addEventListener('show.bs.modal', function(event) {
    const button = event.relatedTarget;
    
    // Get product data from clicked element
    const productName = button.dataset.productName;
    const productPrice = button.dataset.productPrice;
    const productDescription = button.dataset.productDescription;
    const productReviews = button.dataset.productReviews;
    const productImage = button.src;
    
    // Update modal content
    document.getElementById('modalProductImage').src = productImage;
    document.getElementById('modalProductName').textContent = productName;
    document.getElementById('modalProductSubtitle').textContent = `${productName}, concrete, 90 cm`;
    document.getElementById('modalProductDescription').textContent = productDescription;
    document.getElementById('modalProductReviews').textContent = `(${productReviews} reviews) ★★★★☆`;
    document.getElementById('modalAddToCart').textContent = `Add to cart ($${productPrice})`;
  });
});