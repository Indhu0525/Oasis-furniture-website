document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function () {
      const productName = card.getAttribute('data-product-name');
      const productPrice = card.getAttribute('data-product-price');
      const productImage = card.getAttribute('data-product-image');
      const productDescription = card.getAttribute('data-product-description');
  
      // Populate modal fields
      document.querySelector('.modal-product-name').textContent = productName;
      document.querySelector('.modal-product-price').textContent = productPrice;
      document.querySelector('.modal-product-image').src = productImage;
      document.querySelector('.modal-product-image').alt = productName;
      document.querySelector('.modal-product-description').textContent = productDescription;
    });
  });
  