

function Category(props) {
    return (
        <>
            <h1>Category</h1>
            <ul>
                {Object.keys(props.nav).map(item => <li key={item}><a href={item}>{props.nav[item]}</a></li>)}
            </ul>
        </>
    );
}

export default Category;