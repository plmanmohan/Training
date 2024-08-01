import {useState} from 'react';
function Luv ({updateBook}) {
    const [book, setBook] = useState('Science');
    return (
        <div>Luv
            <h1>My book name is {book}</h1>
            <button className="increment" 
            onClick={() => updateBook(book)}>Pass Book To Kush</button>
        </div>
    )
}
export default Luv;