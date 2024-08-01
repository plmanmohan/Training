import NestedChild from "./NestedChild";
import { useState } from 'react';

function Child(props) {
    const { userName } = props;

    const [childUserName, setChildUserName] = useState(userName);
    const changeUserName= () => {
        setChildUserName("Ram");
    }
    return (
        <>
            welcome <b>{childUserName}</b> Inside Child 1
            <NestedChild userName={childUserName} 
            changeUserName = {changeUserName}/>
        </>
    );

}

export default Child;