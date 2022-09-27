import { useState } from "react";

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export type User = {
    email: string;
    token: string;
};

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    const login = async (email: string, password: string) => {
        console.log("LOGIN: ", email, password);
        setLoading(true);
        await sleep(2000);
        if (password === "test1234") {
            setUser({ email: email, token: "213123123123" });
            setLoading(false);
            return true;
        }
        setLoading(false);
        return false;
    };

    const logout = () => {
        setUser({ email: "", token: "" });
    };

    const register = async (email: string, password: string) => {
        console.log("REGISTER: ", email, password);
        setLoading(true);
        await sleep(2000);
        setLoading(false);
        return true;
    };

    return { user, loading, login, register, logout };
};
