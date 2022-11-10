function List(goods) {
    console.log(goods.goods);

    return (
        <ul>
            {goods.goods.map((item, index) => <li key={item.id}>{item.title}<img src={item.image} className="image" /></li>)}
        </ul>
    );
}


export default List;
