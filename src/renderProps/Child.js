const Child = (props) => {
    const {x, y, input} = props;
    return (
        <>
        <p>Position is:  {x}, {y} </p>
            {parseInt(input) >= 18 ? <div>SHow Content</div> : <div>Not iligibl;e</div>}
        </>
        
    );
}

export default Child;