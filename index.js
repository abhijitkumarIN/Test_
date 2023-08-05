var price_ = 0;
function bundleSelection(price, bundle, id) {
  price_ = price;
  document.getElementById("price_id").innerHTML = price;
}

(function () {
  document.getElementById("default").click();
})();

const AddToCart = () => {

    price_ && alert(`Total : ${price_}`);
};
