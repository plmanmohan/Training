import { Navigate  } from 'react-router-dom';

const WithAuth = (WrappedComponent) => {
    return (props) => {
        const authenticated = true;

        if(!authenticated) {
            return <Navigate to="/login" />
        } else {
            return <WrappedComponent {...props} profileName="Satya"/>
        }
    } 
   
}

export default WithAuth;