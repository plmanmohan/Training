import { useContext } from "react";
import MyContext from "./MyContext";

const DisplayDuplicate = () => {
    const value = useContext(MyContext);
    return (
        <div>{value}</div>
    );
}

export default DisplayDuplicate;