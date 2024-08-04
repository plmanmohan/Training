import { useContext } from "react";
import MyContext from "./MyContext";
import DisplayDuplicate from "./DisplayDuplicate";

const DisplayValue = () => {
    const value = useContext(MyContext);
    return (
        <div>{value}
            Inside Display: <DisplayDuplicate />
        </div>
    );
}

export default DisplayValue;