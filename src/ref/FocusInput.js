import { useRef } from "react";
import MyInput from "./MyInput";
import Form from "./Form";

function FocusInput() {
    const inputRef = useRef(null);
    const handleClick = () => {
        console.log('Value of Input: ', inputRef.current.value);
        if(inputRef.current) {
            inputRef.current.myFocus();
        }
    }
    return(
        <div>
            <Form ref={inputRef}/>
            
            <button onClick={handleClick}>Focus the Input</button>
        </div>
    );
}

export default FocusInput;