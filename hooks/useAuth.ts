import { useState } from "react";

export const useAuth = () => {
    const [user, setUser] = useState({ email: "", token: "" });
    const [loading, setLoading] = useState(false);

    const login = (email: string, password: string) => {
        setLoading(true);
        if (password === "test") {
            setUser({ email: email, token: "213123123123" });
        }
        setLoading(false);
    };

    const logout = () => {
        setUser({ email: "", token: "" });
    };

    const register = (email: string, password: string) => {
        console.log("REGISTER: ", email, password);
    };

    return { user, loading, login, register, logout };
};
