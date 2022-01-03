import {isAuthenticated} from "../pages/api/auth";
import SignupPage from "../pages";

const withAuth = Component => {
    const Auth = (props) => {

        // If user is not logged in, return login component
        if (!isAuthenticated) {
            return (
                <SignupPage />
            );
        }

        // If user is logged in, return original component
        return (
            <Component {...props} />
        );
    };

    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Auth;
};

export default withAuth;
