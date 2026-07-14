import React from "react";
import Header from "../Header";

export default function RegisterPage() {
    return (
        <div>
            <main>
                <form className="register">
                    <h1>Register</h1>
                    <input type="text" placeholder="username"></input>
                    <input type="password" placeholder="password"></input>
                    <button>Register</button>
                </form>
            </main>
        </div>
    );
};