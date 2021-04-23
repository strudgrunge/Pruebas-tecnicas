const products = document.querySelectorAll('div#products-gallery');
products.forEach((prod) => {
  let productsScroller = prod.querySelector('.products-scroller');
  const productItemSize = productsScroller.querySelector('div').clientWidth;
  prod.querySelector('.btn.next').addEventListener('click', scrollToNextPage);
  prod.querySelector('.btn.prev').addEventListener('click', scrollToPrevPage);

  // For paginated scrolling, simply scroll the gallery one item in the given
  // direction and let css scroll snaping handle the specific alignment.
  function scrollToNextPage() {
    productsScroller.scrollBy({
      top: 0,
      left: productItemSize * 2,
      behavior: 'smooth',
    });
  }
  function scrollToPrevPage() {
    productsScroller.scrollBy({
      top: 0,
      left: -productItemSize * 2,
      behavior: 'smooth',
    });
  }
});
