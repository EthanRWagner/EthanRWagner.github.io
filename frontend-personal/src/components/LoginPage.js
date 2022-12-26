import React, {useState} from 'react';
import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
import axios from 'axios'; 
import "../css/Login.css";
import {useNavigate} from "react-router-dom";

const port = 3400;

// Login Function Component
function Login() {
    const navigate = useNavigate();

    const [creds, setCreds] = useState({key: ""});

    const [loginState, setState] = useState(false);

    // handles changes in the Login form
    function handleChange(event) {
        const {name, value} = event.target;
        if (name === "creds") {
            setCreds({key: value}); 
        }
        else {
            setCreds({key: creds['key']});
        }
    }

    // manages the attempt to login
    function initiateLogin(admin) { 
        attemptLogin(admin).then( result => {
            if (result && result.status !== 202) {
                setState(true);
            }
            else {
                window.sessionStorage.setItem("id", result.data);
                navigate('../');
            }
        });
    }
    // trys to login to by posting to the backend
    async function attemptLogin(admin){
        try {
            const response = await axios.post(`http://localhost:${port}/login`, admin);
            return response;
        }
        catch (error) {
            return error;
        }
    }

    function LoginForm() {
        initiateLogin(creds);
        setCreds({key: ""});
    }

    async function LogOut() {
        window.sessionStorage.setItem("id", null);
        window.location.reload(false);
    }

    return (
        <div className='content-container'>
            <div className="col-md-12">
                <div className="card card-container">
                    <h2>
                        Admin Login
                    </h2>
                    <p>
                        This is for me. Sorry ヽ&#40;ヅ&#41;ノ
                    </p>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="Admin Credential">Admin Credential</label>
                            <input 
                                type="text"
                                name="creds"
                                id="creds"
                                value={creds.key}
                                onChange={handleChange}/>
                            
                        </div>
                        {(window.sessionStorage.getItem("id") === "null") &&
                            <input type="button" value="Submit" 
                            onClick={LoginForm} />}
                        {(window.sessionStorage.getItem("id") !== "null") &&
                                <input type="button" value="Log Out" 
                                onClick={LogOut} />}
                    </Form>
                    {loginState && <small>Login failed, please try again.</small>}
                </div>
            </div>
        </div>
    );
}

export default Login