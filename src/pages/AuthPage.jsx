import React, { useState } from 'react';
import Login, { Button } from '@react-login-page/page6';

export const AuthPage = () => {
    const [data, setData] = useState({});

    const print = () => {
        console.log('%csrc/pages/AuthPage.jsx:10 Data', 'color: #007acc;', data);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData);
        setData(formValues);
        print();
    };

    return (
        <div className="absolute inset-0 m-auto flex items-center justify-center">
            <form onSubmit={handleSubmit}>
                <Login  style={{ height: "100vh" }} >
                    <Login.Title>Dark Dev Auth</Login.Title>
                    <Login.Footer>
                        Not a member? <a href="#">Sign up now</a>
                    </Login.Footer>
                    <Login.Logo></Login.Logo>
                </Login>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </form>
        </div>
    );
};