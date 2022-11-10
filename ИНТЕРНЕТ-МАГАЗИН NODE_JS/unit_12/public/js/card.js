let cart = {};
document.querySelectorAll('.add-to-cart').forEach(element => element.onclick = addToCart);

function addToCart() {
    let goodsId = this.dataset.goods_id;
    if (cart[goodsId]) cart[goodsId]++;
    else cart[goodsId] = 1;
    console.log(cart);
    ajaxGetGoodsInfo();
}

function ajaxGetGoodsInfo() {
    // updateLocalStorageCart();
    fetch('/get-goods-info', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key: Object.keys(cart) })
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (body) {
            console.log(body);
            // showCart(JSON.parse(body));
        })
}