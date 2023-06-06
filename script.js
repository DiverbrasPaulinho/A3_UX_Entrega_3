// Código JavaScript para interações do site
const products = document.querySelectorAll('.product');

products.forEach((product) => {
  product.addEventListener('mouseover', () => {
    product.style.transform = 'translateY(-10px)';
  });

  product.addEventListener('mouseout', () => {
    product.style.transform = 'translateY(0)';
  });
});
