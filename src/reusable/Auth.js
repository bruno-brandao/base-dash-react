import React, { useContext, createContext, useState } from "react";
/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

const useAuth = () => {
    return useContext(authContext);
}

const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    const signin = cb => {
        return fakeAuth.signin(() => {
            setUser("user");
            cb();
        });
    };

    const signout = cb => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signin,
        signout
    };
}

export { useAuth, ProvideAuth }