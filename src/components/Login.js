import React, { useState } from 'react'
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('https://60c1be154f7e880017dc02df.mockapi.io/api/v1/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Login = ({ setToken }) => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="modal-body">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setUserName(e.target.value)} className="form-control mb-2" placeholder="Tên đăng nhập" required />
                <input type="password" onChange={e => setPassword(e.target.value)} className="form-control mb-2" placeholder="Mật khẩu" required />
                <button type="submit" id="btnSubmit" className="btn btn-primary">Đăng nhập</button>
            </form>
        </div>
    );
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;