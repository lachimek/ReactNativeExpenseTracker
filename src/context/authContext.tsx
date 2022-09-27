import React, { createContext, useState } from "react";

type User = {
    email: string;
    token: string;
};

type AuthContext = {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    register: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
};

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const AuthContext = createContext<AuthContext>(null!);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AuthContext["user"]>(null);
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
        console.log("LOGOUT");
        setUser(null);
    };

    const register = async (email: string, password: string) => {
        console.log("REGISTER: ", email, password);
        setLoading(true);
        await sleep(2000);
        setLoading(false);
        return true;
    };
    return (
        <AuthContext.Provider value={{ user: user, loading, login, register, logout }}>{children}</AuthContext.Provider>
    );
};
