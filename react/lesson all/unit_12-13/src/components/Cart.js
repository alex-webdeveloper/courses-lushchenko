
function Cart(props) {
    return (
        <div className="goods-block">
            <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>{props.title}</td>
                        <td>{props.price}</td>
                        <td>{props.count}</td>
                        <td>{props.count * props.price}</td>
                        <td><button className='minus' data-key={props.articul}>-</button></td>
                        <td><button className='cancel' data-key={props.articul}>Х</button></td>
                        <td><img src={props.image} alt="fruit" width='30px' /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Cart;