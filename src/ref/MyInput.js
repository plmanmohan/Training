import { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = (props, ref) => {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => {
        return{
            myFocus() {
                inputRef.current.focus();
            }
        }
    })
    return(
        <div>MyInput
            <input
                ref={inputRef}
                type='text'
                placeholder='Text'

            />
        </div>
    );
}
export default forwardRef(MyInput);