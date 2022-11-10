import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';

import { selectCart, decrement, cancel } from '../store/cartSlice';
import Cart from '../components/Cart'

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    // переиндексирую массив товара
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});
    console.log(goods);
    console.log('arr переиндексация');
    console.log(goodsObj);

    let clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if (t.classList.contains('minus')) dispatch(decrement(t.getAttribute('data-key')));
        else if (t.classList.contains('cancel')) dispatch(cancel(t.getAttribute('data-key')));
        else return false;
    }
    const total = () => {
        let out = '';
        let count = Object.keys(cart).reduce((accum, item) => {
            accum += cart[item] * goodsObj[item]['cost'];
            console.log(item);
            return accum;
        }, 0)

        if (count !== 0) {
            out = <h3>Total amount: {count}</h3>;
        }
        return out;
    }


    return (
        <div onClick={clickHandler}>
            {total()}
            {Object.keys(cart).map(item => <Cart key={item + goodsObj[item]['title']} title={goodsObj[item]['title']} count={cart[item]} price={goodsObj[item]['cost']} image={goodsObj[item]['image']} articul={item} />)}
        </div>
    );
}

export default CartList;