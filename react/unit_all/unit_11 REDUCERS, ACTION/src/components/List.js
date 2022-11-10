
function List(data) {
    console.log(data.users);

    return (
        <ul>
            {data.users.map(item => <li key={item.passport}>{item.name} {item.age}</li>)}
        </ul>
    );
}


export default List;