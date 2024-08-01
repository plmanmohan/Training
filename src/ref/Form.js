import { forwardRef } from "react";
import MyInput from "./MyInput";


const Form = (props, ref) => {
    return (
        <>
            <div>Form</div>
            <MyInput lable="Enter Name" ref={ref} {...props}/>
        </>

    );
}
export default forwardRef(Form);